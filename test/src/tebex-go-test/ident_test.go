package tebex_go_test

// Live tests for package idents (IDENT_* in requirements.go). Like TestEndpoints
// they drive the gen SDK against the production API and read raw bodies from the
// capturing transport, and are skipped under -short.
//
// Accepted constraint: IDENT_009 (external packages) needs a store with an
// external (e.g. INTRACT) package; it skips when the test store has none.

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"net/url"
	"regexp"
	"strconv"
	"strings"
	"sync"
	"testing"

	TebexHeadless "github.com/tebexio/TebexHeadless"
)

const (
	msgMalformed    = "package_id must be a package ID or ident."
	msgInvalidIdent = "The selected id is invalid."
)

var digitsRe = regexp.MustCompile(`^[0-9]+$`)

// rawPackage is decoded from raw bodies rather than the SDK model, so a numeric
// or synthetic `id` of either JSON type is kept verbatim.
type rawPackage struct {
	ID       json.RawMessage `json:"id"`
	Ident    *string         `json:"ident"`
	Name     string          `json:"name"`
	InBasket struct {
		Quantity int `json:"quantity"`
	} `json:"in_basket"`
	Category struct {
		ID json.RawMessage `json:"id"`
	} `json:"category"`
}

func (p rawPackage) id() string { return strings.Trim(string(p.ID), `"`) }

func (p rawPackage) ident() string {
	if p.Ident == nil {
		return ""
	}
	return *p.Ident
}

type rawCategory struct {
	ID       json.RawMessage `json:"id"`
	Dynamic  bool            `json:"dynamic"`
	Packages []rawPackage    `json:"packages"`
}

type rawBasket struct {
	Packages []rawPackage `json:"packages"`
}

type identEnv struct {
	cfg    *Config
	client *TebexHeadless.APIClient
	tr     *capturingTransport
	ctx    context.Context
}

func newIdentEnv(t *testing.T) *identEnv {
	t.Helper()
	if testing.Short() {
		t.Skip("skipping live ident test in -short mode")
	}
	cfg, err := loadConfig(envOr("E2E_CONFIG", "./tebex-go-test/e2e_config.json"))
	if err != nil {
		t.Fatalf("load config: %v", err)
	}
	client, tr, ctx := newClient(t, cfg)
	return &identEnv{cfg: cfg, client: client, tr: tr, ctx: ctx}
}

// call runs one SDK request and returns its captured round trip. Non-2xx statuses
// are returned for the caller to assert on; transport/decode errors are fatal.
func (e *identEnv) call(t *testing.T, do func() error) *capture {
	t.Helper()
	e.tr.last = nil
	err := do()
	c := e.tr.last
	if c == nil {
		t.Fatalf("request not sent: %v", err)
	}
	t.Logf("%s %s %s -> %d %s", c.method, c.url, c.reqBody, c.status, snippet(c.respBody))
	var apiErr *TebexHeadless.GenericOpenAPIError
	if err != nil && !errors.As(err, &apiErr) && c.status >= 200 && c.status < 300 {
		// A 2xx the SDK can't decode is still a valid API response for these
		// tests, which read the raw body; anything else is a real failure.
		t.Logf("SDK decode error on %s %s (raw body used instead): %v", c.method, c.url, err)
	} else if err != nil && !errors.As(err, &apiErr) {
		t.Fatalf("transport error on %s %s: %v", c.method, c.url, err)
	}
	return c
}

func decodeData[T any](t *testing.T, c *capture) T {
	t.Helper()
	var env struct {
		Data T `json:"data"`
	}
	if err := json.Unmarshal(c.respBody, &env); err != nil {
		t.Fatalf("decode %s %s: %v\nbody: %s", c.method, c.url, err, snippet(c.respBody))
	}
	return env.Data
}

func wantStatus(t *testing.T, c *capture, want int) {
	t.Helper()
	if c.status != want {
		t.Fatalf("%s %s: got status %d, want %d\nrequest: %s\nbody: %s",
			c.method, c.url, c.status, want, snippet(c.reqBody), snippet(c.respBody))
	}
}

func wantMessage(t *testing.T, c *capture, msg string) {
	t.Helper()
	if !strings.Contains(string(c.respBody), msg) {
		t.Errorf("%s %s: body does not contain %q\nbody: %s", c.method, c.url, msg, snippet(c.respBody))
	}
}

func (e *identEnv) allPackages(t *testing.T) []rawPackage {
	t.Helper()
	c := e.call(t, func() error { _, _, err := e.client.HeadlessAPI.GetAllPackages(e.ctx).Execute(); return err })
	wantStatus(t, c, http.StatusOK)
	return decodeData[[]rawPackage](t, c)
}

func (e *identEnv) categoriesWithPackages(t *testing.T) []rawCategory {
	t.Helper()
	c := e.call(t, func() error {
		_, _, err := e.client.HeadlessAPI.GetCategoriesIncludePackages(e.ctx).Execute()
		return err
	})
	wantStatus(t, c, http.StatusOK)
	return decodeData[[]rawCategory](t, c)
}

func (e *identEnv) getPackage(t *testing.T, packageId string) *capture {
	t.Helper()
	return e.call(t, func() error { _, _, err := e.client.HeadlessAPI.GetPackage(e.ctx, packageId).Execute(); return err })
}

// standardPackage returns the configured standard package as listed by GET /packages.
func (e *identEnv) standardPackage(t *testing.T) rawPackage {
	t.Helper()
	want := e.cfg.Variables["packageId"]
	for _, p := range e.allPackages(t) {
		if p.id() == want {
			return p
		}
	}
	t.Fatalf("configured packageId %q not found in GET /packages", want)
	return rawPackage{}
}

func (e *identEnv) newBasket(t *testing.T) string {
	t.Helper()
	body := TebexHeadless.NewCreateBasketRequest()
	body.SetCompleteUrl("https://example.tebex.io/complete")
	body.SetCancelUrl("https://example.tebex.io/cancel")
	c := e.call(t, func() error {
		_, _, err := e.client.HeadlessAPI.CreateBasket(e.ctx).CreateBasketRequest(*body).Execute()
		return err
	})
	wantStatus(t, c, http.StatusOK)
	var env struct {
		Data struct {
			Ident string `json:"ident"`
		} `json:"data"`
	}
	if err := json.Unmarshal(c.respBody, &env); err != nil || env.Data.Ident == "" {
		t.Fatalf("createBasket: no ident in response: %s", snippet(c.respBody))
	}
	return env.Data.Ident
}

func (e *identEnv) addPackage(t *testing.T, basketIdent, packageId string) *capture {
	t.Helper()
	body := TebexHeadless.NewAddBasketPackageRequest(packageId, 1)
	return e.call(t, func() error {
		_, _, err := e.client.BasketsAPI.AddBasketPackage(e.ctx, basketIdent).AddBasketPackageRequest(*body).Execute()
		return err
	})
}

// dynamicPackages creates a dynamic package in the store's first dynamic category
// for a fresh basket and returns that basket and the category's packages. It
// skips when the store has no dynamic category.
func (e *identEnv) dynamicPackages(t *testing.T) (string, []rawPackage) {
	t.Helper()
	var catID string
	for _, cat := range e.categoriesWithPackages(t) {
		if cat.Dynamic {
			catID = strings.Trim(string(cat.ID), `"`)
			break
		}
	}
	if catID == "" {
		t.Skip("accepted constraint: test store has no dynamic category")
	}
	n, err := strconv.Atoi(catID)
	if err != nil {
		t.Fatalf("dynamic category id %q is not numeric", catID)
	}
	basket := e.newBasket(t)
	e.createDynamicPackage(t, basket, n)

	c := e.call(t, func() error {
		_, _, err := e.client.HeadlessAPI.GetCategoryIncludeDynamicPackages(e.ctx, catID, basket).Execute()
		return err
	})
	wantStatus(t, c, http.StatusOK)
	pkgs := decodeData[rawCategory](t, c).Packages
	if len(pkgs) == 0 {
		t.Fatalf("dynamic category %s has no packages after createDynamicPackage: %s", catID, snippet(c.respBody))
	}
	return basket, pkgs
}

func (e *identEnv) createDynamicPackage(t *testing.T, basketIdent string, categoryID int) {
	t.Helper()
	pkg := TebexHeadless.NewDynamicPackageInput("Ident Test Package", 1.0, "ident-test-package")
	req := TebexHeadless.NewDynamicPackagesRequest(basketIdent, "ident-test-user", int32(categoryID), []TebexHeadless.DynamicPackageInput{*pkg})
	c := e.call(t, func() error {
		_, _, err := e.client.HeadlessAPI.CreateDynamicPackage(e.ctx, basketIdent).DynamicPackagesRequest(*req).Execute()
		return err
	})
	wantStatus(t, c, http.StatusOK)
}

// checkIdent asserts IDENT_001 and IDENT_002 for one package.
func checkIdent(t *testing.T, src string, p rawPackage) {
	t.Helper()
	ident := p.ident()
	if ident == "" {
		t.Errorf("%s: package %s has no ident", src, p.id())
		return
	}
	parts := strings.SplitN(ident, "_", 3)
	if len(parts) != 3 || parts[1] == "" || parts[2] == "" {
		t.Errorf("%s: ident %q is not {prefix}_{categoryId}_{id}", src, ident)
		return
	}
	prefix, cat, id := parts[0], parts[1], parts[2]
	if want := strings.Trim(string(p.Category.ID), `"`); cat != want {
		t.Errorf("%s: ident %q category segment %q != category.id %s", src, ident, cat, want)
	}
	switch prefix {
	case "pkg":
		if id != p.id() {
			t.Errorf("%s: standard ident %q id segment %q != id %s", src, ident, id, p.id())
		}
	case "dyn":
		if !digitsRe.MatchString(id) {
			t.Errorf("%s: dynamic ident %q id segment %q is not numeric", src, ident, id)
		}
	case "ext":
		if _, err := url.PathUnescape(id); err != nil {
			t.Errorf("%s: external ident %q id segment is not valid URL encoding: %v", src, ident, err)
		}
	default:
		t.Errorf("%s: ident %q has unknown prefix %q", src, ident, prefix)
	}
}

func TestIdentOnEveryPackageResponse(t *testing.T) {
	covers(t, "IDENT_001", "IDENT_002")
	e := newIdentEnv(t)

	t.Run("GET /packages", func(t *testing.T) {
		pkgs := e.allPackages(t)
		if len(pkgs) == 0 {
			t.Fatal("GET /packages returned no packages")
		}
		for _, p := range pkgs {
			checkIdent(t, "GET /packages", p)
		}
	})

	t.Run("GET /categories?includePackages=1", func(t *testing.T) {
		for _, cat := range e.categoriesWithPackages(t) {
			for _, p := range cat.Packages {
				checkIdent(t, "GET /categories", p)
			}
		}
	})

	t.Run("GET /categories/{categoryId}?includePackages=1", func(t *testing.T) {
		catID := e.cfg.Variables["categoryId"]
		c := e.call(t, func() error {
			_, _, err := e.client.HeadlessAPI.GetCategoryIncludePackages(e.ctx, catID).Execute()
			return err
		})
		wantStatus(t, c, http.StatusOK)
		pkgs := decodeData[rawCategory](t, c).Packages
		if len(pkgs) == 0 {
			t.Fatalf("category %s has no packages", catID)
		}
		for _, p := range pkgs {
			checkIdent(t, "GET /categories/"+catID, p)
		}
	})

	t.Run("GET /packages/{packageId}", func(t *testing.T) {
		c := e.getPackage(t, e.cfg.Variables["packageId"])
		wantStatus(t, c, http.StatusOK)
		checkIdent(t, "GET /packages/{packageId}", decodeData[rawPackage](t, c))
	})

	t.Run("dynamic", func(t *testing.T) {
		_, pkgs := e.dynamicPackages(t)
		for _, p := range pkgs {
			checkIdent(t, "dynamic category", p)
			if !strings.HasPrefix(p.ident(), "dyn_") {
				t.Errorf("dynamic package %s has ident %q, want dyn_ prefix", p.id(), p.ident())
			}
		}
	})
}

func TestGetPackageByIdent(t *testing.T) {
	covers(t, "IDENT_003")
	e := newIdentEnv(t)

	t.Run("every standard package", func(t *testing.T) {
		for _, p := range e.allPackages(t) {
			c := e.getPackage(t, p.ident())
			wantStatus(t, c, http.StatusOK)
			got := decodeData[rawPackage](t, c)
			if got.ident() != p.ident() || got.id() != p.id() {
				t.Errorf("GET /packages/%s returned id=%s ident=%q, want id=%s", p.ident(), got.id(), got.ident(), p.id())
			}
		}
	})

	t.Run("dynamic package", func(t *testing.T) {
		_, pkgs := e.dynamicPackages(t)
		c := e.getPackage(t, pkgs[0].ident())
		wantStatus(t, c, http.StatusOK)
		if got := decodeData[rawPackage](t, c); got.ident() != pkgs[0].ident() {
			t.Errorf("GET /packages/%s returned ident %q", pkgs[0].ident(), got.ident())
		}
	})

	// Concurrent lookups by ident must all resolve to the same package. Uses a
	// plain SDK client because the capturing transport is not goroutine-safe.
	t.Run("concurrent", func(t *testing.T) {
		p := e.standardPackage(t)
		const n = 8
		var wg sync.WaitGroup
		errs := make(chan error, n)
		for i := 0; i < n; i++ {
			wg.Add(1)
			go func() {
				defer wg.Done()
				client := TebexHeadless.NewAPIClient(TebexHeadless.NewConfiguration())
				resp, _, err := client.HeadlessAPI.GetPackage(e.ctx, p.ident()).Execute()
				if err != nil {
					errs <- err
					return
				}
				if resp.Data == nil || resp.Data.GetIdent() != p.ident() {
					errs <- fmt.Errorf("got %+v, want ident %q", resp.Data, p.ident())
				}
			}()
		}
		wg.Wait()
		close(errs)
		for err := range errs {
			t.Error(err)
		}
	})
}

func TestGetPackageByNumericId(t *testing.T) {
	covers(t, "IDENT_004")
	e := newIdentEnv(t)
	for _, p := range e.allPackages(t) {
		if !strings.HasPrefix(p.ident(), "pkg_") {
			continue
		}
		c := e.getPackage(t, p.id())
		wantStatus(t, c, http.StatusOK)
		if got := decodeData[rawPackage](t, c); got.ident() != p.ident() {
			t.Errorf("GET /packages/%s returned ident %q, want %q", p.id(), got.ident(), p.ident())
		}
	}
}

func basketHas(t *testing.T, c *capture, id string) {
	t.Helper()
	for _, p := range decodeData[rawBasket](t, c).Packages {
		if p.id() == id {
			return
		}
	}
	t.Errorf("basket does not contain package %s after add\nbody: %s", id, snippet(c.respBody))
}

// basketHasName is for dynamic packages, whose basket entries have a null id.
func basketHasName(t *testing.T, c *capture, name string) {
	t.Helper()
	for _, p := range decodeData[rawBasket](t, c).Packages {
		if p.Name == name {
			return
		}
	}
	t.Errorf("basket does not contain package %q after add\nbody: %s", name, snippet(c.respBody))
}

func TestAddBasketPackageByIdent(t *testing.T) {
	covers(t, "IDENT_005")
	e := newIdentEnv(t)

	t.Run("standard", func(t *testing.T) {
		p := e.standardPackage(t)
		c := e.addPackage(t, e.newBasket(t), p.ident())
		wantStatus(t, c, http.StatusOK)
		basketHas(t, c, p.id())
	})

	t.Run("dynamic", func(t *testing.T) {
		basket, pkgs := e.dynamicPackages(t)
		c := e.addPackage(t, basket, pkgs[0].ident())
		wantStatus(t, c, http.StatusOK)
		basketHasName(t, c, pkgs[0].Name)
	})
}

func TestAddBasketPackageByNumericId(t *testing.T) {
	covers(t, "IDENT_006")
	e := newIdentEnv(t)
	p := e.standardPackage(t)
	c := e.addPackage(t, e.newBasket(t), p.id())
	wantStatus(t, c, http.StatusOK)
	basketHas(t, c, p.id())
}

// TestAddBasketPackageInvalidIdent varies one condition at a time from a valid
// ident (MC/DC): each of category, id and prefix independently flips the outcome
// from 200 to 400.
func TestAddBasketPackageInvalidIdent(t *testing.T) {
	covers(t, "IDENT_008")
	e := newIdentEnv(t)
	p := e.standardPackage(t)
	parts := strings.SplitN(p.ident(), "_", 3)
	cat, id := parts[1], parts[2]

	otherCat := ""
	for _, c := range e.categoriesWithPackages(t) {
		if cid := strings.Trim(string(c.ID), `"`); cid != cat {
			otherCat = cid
			break
		}
	}
	if otherCat == "" {
		t.Fatal("need a second category to build a mismatched ident")
	}

	t.Run("control: valid ident", func(t *testing.T) {
		wantStatus(t, e.addPackage(t, e.newBasket(t), p.ident()), http.StatusOK)
	})

	basket := e.newBasket(t)
	cases := map[string]string{
		"wrong category":      "pkg_" + otherCat + "_" + id,
		"unknown id":          "pkg_" + cat + "_999999999",
		"dyn prefix":          "dyn_" + cat + "_" + id,
		"ext prefix":          "ext_" + cat + "_" + id,
		"lower boundary ids":  "pkg_1_1",
		"category id swapped": "pkg_" + id + "_" + cat,
		"unknown external id": "ext_" + cat + "_" + url.PathEscape("00000000-0000-0000-0000-000000000000"),
	}
	for name, v := range cases {
		t.Run(name, func(t *testing.T) {
			c := e.addPackage(t, basket, v)
			wantStatus(t, c, http.StatusBadRequest)
			wantMessage(t, c, msgInvalidIdent)
		})
	}
}

func TestExternalPackageIdent(t *testing.T) {
	covers(t, "IDENT_009")
	e := newIdentEnv(t)
	var ext *rawPackage
	for _, p := range e.allPackages(t) {
		if strings.HasPrefix(p.ident(), "ext_") {
			ext = &p
			break
		}
	}
	if ext == nil {
		t.Skip("accepted constraint: test store has no external packages")
	}

	c := e.getPackage(t, ext.ident())
	wantStatus(t, c, http.StatusOK)
	if got := decodeData[rawPackage](t, c); got.ident() != ext.ident() {
		t.Errorf("GET /packages/%s returned ident %q", ext.ident(), got.ident())
	}

	wantStatus(t, e.addPackage(t, e.newBasket(t), ext.ident()), http.StatusOK)

	// The synthetic id must not stand in for the ident.
	if c := e.addPackage(t, e.newBasket(t), ext.id()); c.status == http.StatusOK {
		t.Errorf("adding external package by synthetic id %s succeeded; ident is required", ext.id())
	}
}

func (e *identEnv) removePackage(t *testing.T, basketIdent, packageId string) *capture {
	t.Helper()
	body := TebexHeadless.NewRemoveBasketPackageRequest()
	body.SetPackageId(packageId)
	return e.call(t, func() error {
		_, _, err := e.client.BasketsAPI.RemoveBasketPackage(e.ctx, basketIdent).RemoveBasketPackageRequest(*body).Execute()
		return err
	})
}

func (e *identEnv) updateQuantity(t *testing.T, basketIdent, packageId string, quantity int32) *capture {
	t.Helper()
	body := TebexHeadless.NewUpdatePackageQuantityRequest()
	body.SetQuantity(quantity)
	return e.call(t, func() error {
		_, err := e.client.BasketsAPI.UpdatePackageQuantity(e.ctx, basketIdent, packageId).UpdatePackageQuantityRequest(*body).Execute()
		return err
	})
}

// basketPackages returns the basket's packages as reported by GET /baskets/{basketIdent}.
func (e *identEnv) basketPackages(t *testing.T, basketIdent string) []rawPackage {
	t.Helper()
	c := e.call(t, func() error { _, _, err := e.client.HeadlessAPI.GetBasket(e.ctx, basketIdent).Execute(); return err })
	wantStatus(t, c, http.StatusOK)
	return decodeData[rawBasket](t, c).Packages
}

// basketQuantity returns the quantity of the matching package, or 0 if absent.
func (e *identEnv) basketQuantity(t *testing.T, basketIdent string, match func(rawPackage) bool) int {
	t.Helper()
	for _, p := range e.basketPackages(t, basketIdent) {
		if match(p) {
			return p.InBasket.Quantity
		}
	}
	return 0
}

func byID(id string) func(rawPackage) bool { return func(p rawPackage) bool { return p.id() == id } }
func byName(name string) func(rawPackage) bool {
	return func(p rawPackage) bool { return p.Name == name }
}

// basketWith returns a fresh basket holding one unit of the standard package.
func (e *identEnv) basketWith(t *testing.T, p rawPackage) string {
	t.Helper()
	basket := e.newBasket(t)
	wantStatus(t, e.addPackage(t, basket, p.id()), http.StatusOK)
	return basket
}

func TestRemoveBasketPackageByIdentOrId(t *testing.T) {
	covers(t, "IDENT_010")
	e := newIdentEnv(t)
	p := e.standardPackage(t)

	for name, packageId := range map[string]string{"ident": p.ident(), "numeric": p.id()} {
		t.Run(name, func(t *testing.T) {
			basket := e.basketWith(t, p)
			wantStatus(t, e.removePackage(t, basket, packageId), http.StatusOK)
			if q := e.basketQuantity(t, basket, byID(p.id())); q != 0 {
				t.Errorf("package %s still in basket (quantity %d) after remove by %q", p.id(), q, packageId)
			}
		})
	}

	t.Run("dynamic ident", func(t *testing.T) {
		basket, pkgs := e.dynamicPackages(t)
		wantStatus(t, e.addPackage(t, basket, pkgs[0].ident()), http.StatusOK)
		wantStatus(t, e.removePackage(t, basket, pkgs[0].ident()), http.StatusOK)
		if q := e.basketQuantity(t, basket, byName(pkgs[0].Name)); q != 0 {
			t.Errorf("dynamic package %s still in basket (quantity %d) after remove", pkgs[0].ident(), q)
		}
	})
}

func TestUpdatePackageQuantityByIdentOrId(t *testing.T) {
	covers(t, "IDENT_011")
	e := newIdentEnv(t)
	p := e.standardPackage(t)

	// Distinct target quantities so each update is observable.
	for name, tc := range map[string]struct {
		packageId string
		quantity  int32
	}{"ident": {p.ident(), 3}, "numeric": {p.id(), 2}} {
		t.Run(name, func(t *testing.T) {
			basket := e.basketWith(t, p)
			wantStatus(t, e.updateQuantity(t, basket, tc.packageId, tc.quantity), http.StatusOK)
			if q := e.basketQuantity(t, basket, byID(p.id())); q != int(tc.quantity) {
				t.Errorf("quantity after update by %q = %d, want %d", tc.packageId, q, tc.quantity)
			}
		})
	}

	t.Run("dynamic ident", func(t *testing.T) {
		basket, pkgs := e.dynamicPackages(t)
		wantStatus(t, e.addPackage(t, basket, pkgs[0].ident()), http.StatusOK)
		wantStatus(t, e.updateQuantity(t, basket, pkgs[0].ident(), 2), http.StatusOK)
		if q := e.basketQuantity(t, basket, byName(pkgs[0].Name)); q != 2 {
			t.Errorf("dynamic quantity after update = %d, want 2", q)
		}
	})
}

func TestRemoveAndUpdateRejectInvalidIdent(t *testing.T) {
	covers(t, "IDENT_012")
	e := newIdentEnv(t)
	p := e.standardPackage(t)
	parts := strings.SplitN(p.ident(), "_", 3)
	cat, id := parts[1], parts[2]
	otherCat := ""
	for _, c := range e.categoriesWithPackages(t) {
		if cid := strings.Trim(string(c.ID), `"`); cid != cat {
			otherCat = cid
			break
		}
	}
	if otherCat == "" {
		t.Fatal("need a second category to build a mismatched ident")
	}

	basket := e.basketWith(t, p)
	cases := map[string]string{
		"wrong category": "pkg_" + otherCat + "_" + id,
		"unknown id":     "pkg_" + cat + "_999999999",
		"dyn prefix":     "dyn_" + cat + "_" + id,
		"ext prefix":     "ext_" + cat + "_" + id,
		"malformed":      "abc",
		"xss":            "<script>alert(1)</script>",
		"oversized":      strings.Repeat("a", 10000),
	}
	reject := func(t *testing.T, op, v string, c *capture) {
		t.Helper()
		if c.status < 400 || c.status > 499 {
			t.Errorf("%s %q: got status %d, want 4xx\nbody: %s", op, v, c.status, snippet(c.respBody))
		}
	}
	for name, v := range cases {
		t.Run(name, func(t *testing.T) {
			reject(t, "remove", v, e.removePackage(t, basket, v))
			reject(t, "update", v, e.updateQuantity(t, basket, v, 5))
			if q := e.basketQuantity(t, basket, byID(p.id())); q != 1 {
				t.Errorf("basket changed after rejected %q: quantity %d, want 1", v, q)
			}
		})
	}
}

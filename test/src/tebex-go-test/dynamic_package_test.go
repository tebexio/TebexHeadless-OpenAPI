package tebex_go_test

// Live tests for createDynamicPackage (DYNPKG_* in requirements.go). Skipped
// under -short.

import (
	"context"
	"net/http"
	"strconv"
	"testing"

	TebexHeadless "github.com/tebexio/TebexHeadless"
)

func (e *identEnv) dynamicCategoryID(t *testing.T) int32 {
	t.Helper()
	n, err := strconv.Atoi(e.cfg.Variables["dynamicCategoryId"])
	if err != nil {
		t.Fatalf("config variable dynamicCategoryId must be a numeric dynamic category id: %v", err)
	}
	return int32(n)
}

func (e *identEnv) putDynamicPackages(t *testing.T, ctx context.Context, basketIdent string, req *TebexHeadless.DynamicPackagesRequest) *capture {
	t.Helper()
	return e.call(t, func() error {
		_, _, err := e.client.HeadlessAPI.CreateDynamicPackage(ctx, basketIdent).DynamicPackagesRequest(*req).Execute()
		return err
	})
}

func (e *identEnv) dynamicCategoryNames(t *testing.T, catID int32, basketIdent string) []string {
	t.Helper()
	c := e.call(t, func() error {
		_, _, err := e.client.HeadlessAPI.GetCategoryIncludeDynamicPackages(e.ctx, strconv.Itoa(int(catID)), basketIdent).Execute()
		return err
	})
	wantStatus(t, c, http.StatusOK)
	var names []string
	for _, p := range decodeData[rawCategory](t, c).Packages {
		names = append(names, p.Name)
	}
	return names
}

func dynamicRequest(basketIdent string, catID int32, name string) *TebexHeadless.DynamicPackagesRequest {
	pkg := TebexHeadless.NewDynamicPackageInput(name, 1.0, "dynpkg-test")
	return TebexHeadless.NewDynamicPackagesRequest(basketIdent, "dynpkg-test-user", catID, []TebexHeadless.DynamicPackageInput{*pkg})
}

func TestCreateDynamicPackage(t *testing.T) {
	covers(t, "DYNPKG_001")
	e := newIdentEnv(t)
	catID := e.dynamicCategoryID(t)
	basket, other := e.newBasket(t), e.newBasket(t)

	wantStatus(t, e.putDynamicPackages(t, e.ctx, basket, dynamicRequest(basket, catID, "DynPkg Test")), http.StatusOK)

	if names := e.dynamicCategoryNames(t, catID, basket); len(names) != 1 || names[0] != "DynPkg Test" {
		t.Errorf("dynamic category for basket = %q, want [DynPkg Test]", names)
	}
	if names := e.dynamicCategoryNames(t, catID, other); len(names) != 0 {
		t.Errorf("dynamic packages leaked to another basket: %q", names)
	}
}

func TestCreateDynamicPackageRejects(t *testing.T) {
	covers(t, "DYNPKG_002")
	e := newIdentEnv(t)
	catID := e.dynamicCategoryID(t)
	basket := e.newBasket(t)
	nonDynamic, err := strconv.Atoi(e.cfg.Variables["categoryId"])
	if err != nil {
		t.Fatalf("config variable categoryId: %v", err)
	}

	// Each case differs from a valid request in exactly one condition.
	noAuth := context.WithValue(context.Background(), TebexHeadless.ContextServerVariables, map[string]string{"token": e.cfg.Variables["token"]})
	cases := []struct {
		name string
		ctx  context.Context
		req  *TebexHeadless.DynamicPackagesRequest
	}{
		{"missing basic auth", noAuth, dynamicRequest(basket, catID, "DynPkg Reject")},
		{"empty basket_id", e.ctx, dynamicRequest("", catID, "DynPkg Reject")},
		{"non-dynamic category", e.ctx, dynamicRequest(basket, int32(nonDynamic), "DynPkg Reject")},
	}
	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			wantStatus(t, e.putDynamicPackages(t, tc.ctx, basket, tc.req), http.StatusUnprocessableEntity)
		})
	}
	if names := e.dynamicCategoryNames(t, catID, basket); len(names) != 0 {
		t.Errorf("rejected requests created dynamic packages: %q", names)
	}
}

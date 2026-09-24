// Package e2e is an end-to-end test suite for the Tebex Headless API.
//
// It drives every operation through the gen Go SDK (sdks/go) rather than
// hand-rolled HTTP, so a passing run validates the gen SDK as much as the
// live API.
//
// Because the gen models are plain structs that silently drop unknown JSON
// keys and null out missing ones, the typed return value cannot by itself reveal
// documentation drift. So the suite installs a capturing http.RoundTripper into
// the SDK's HTTP client to grab the raw response bytes, then diffs those raw keys
// against the SDK model's json tags via reflection:
//
//   - keys the API returns that the SDK does NOT document -> "undocumented" (fail)
//   - required keys the SDK documents that the API does NOT return -> "missing" (fail)
//
// Each operation (defined in package funcs) runs as its own subtest, in config
// order. Envs (all optional):
//
//	E2E_CONFIG     path to the JSON config (default e2e_config.json)
//	E2E_BASE_URL   override the API base URL (default from the SDK)
//	E2E_RECURSIVE  "false" to disable nested-object key diffing (default true)
//
// Use `go test -short` to skip the live suite entirely (e.g. in unit-only CI).
package tebex_go_test

import (
	"context"
	"errors"
	"net/http"
	"os"
	"strings"
	"testing"
	"time"

	"tebex-headless-test/funcs"

	TebexHeadless "github.com/tebexio/TebexHeadless"
)

func envOr(key, def string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return def
}

func recursive() bool { return envOr("E2E_RECURSIVE", "true") != "false" }

// snippet truncates a response body so failure messages stay readable.
func snippet(b []byte) string {
	const max = 500
	s := strings.TrimSpace(string(b))
	if len(s) > max {
		return s[:max] + "…"
	}
	return s
}

// newClient builds an SDK client wired to a capturing transport plus the basic-auth
// context, returning both so tests can read the raw bytes of each call.
func newClient(t *testing.T, cfg *Config) (*TebexHeadless.APIClient, *capturingTransport, context.Context) {
	t.Helper()
	transport := newCapturingTransport()
	sdkCfg := TebexHeadless.NewConfiguration()
	sdkCfg.HTTPClient = &http.Client{Transport: transport, Timeout: 30 * time.Second}
	if base := os.Getenv("E2E_BASE_URL"); base != "" {
		sdkCfg.Servers = TebexHeadless.ServerConfigurations{{URL: base}}
	}
	client := TebexHeadless.NewAPIClient(sdkCfg)
	ctx := context.WithValue(context.Background(), TebexHeadless.ContextBasicAuth, TebexHeadless.BasicAuth{
		UserName: cfg.Auth.Username,
		Password: cfg.Auth.Password,
	})
	// The account-scoped server URL template (https://.../accounts/{token}) has an
	// empty default for {token}; the gen SDK only exposes it as a call parameter
	// for the one operation (getSidebar) that redeclares it as an explicit path
	// parameter, so every other call needs it supplied via ContextServerVariables.
	ctx = context.WithValue(ctx, TebexHeadless.ContextServerVariables, map[string]string{
		"token": cfg.Variables["token"],
	})
	return client, transport, ctx
}

// TestEndpoints exercises every configured operation as a subtest, validating the
// HTTP status and (for ops with a documented body) that the live response keys
// match the gen SDK model.
func TestEndpoints(t *testing.T) {
	if testing.Short() {
		t.Skip("skipping live E2E API test in -short mode")
	}

	cfg, err := loadConfig(envOr("E2E_CONFIG", "e2e_config.json"))
	if err != nil {
		t.Fatalf("load config: %v", err)
	}
	store := funcs.NewVarStore(cfg.Variables)
	registry := funcs.BuildRegistry()
	client, transport, ctx := newClient(t, cfg)
	recurse := recursive()

	for _, opID := range cfg.Order {
		op, ok := registry[opID]
		if !ok {
			t.Run(opID, func(t *testing.T) {
				t.Fatalf("unknown operationId %q in config order (no SDK method)", opID)
			})
			continue
		}

		t.Run(op.OperationId, func(t *testing.T) {
			expected := http.StatusOK
			transport.last = nil
			invokeErr := op.Do(ctx, client, store)
			request := transport.last
			if request == nil {
				t.Fatalf("request not sent: %v", invokeErr)
			}

			// A GenericOpenAPIError just means a non-2xx status (body still
			// captured); any other error is a real transport/decode failure.
			var apiErr *TebexHeadless.GenericOpenAPIError
			if invokeErr != nil && !errors.As(invokeErr, &apiErr) {
				t.Fatalf("transport/decode error calling %s %s: %v", op.Spec.HttpMethod, request.url, invokeErr)
			}

			if request.status != expected {
				t.Fatalf("%s %s: got status %d, want %d\nbody: %s",
					op.Spec.HttpMethod, request.url, request.status, expected, snippet(request.respBody))
			}

			// No documented body (204/empty-body ops): status match is enough.
			if op.Spec.Expected == nil {
				return
			}

			t.Logf("body: %s", request.respBody)
			d := diffKeys(op.Spec.Expected, request.respBody, recurse)
			for _, n := range d.notes {
				t.Log(n)
			}
			if len(d.missing) > 0 {
				t.Errorf("documented keys missing from API response: %s", strings.Join(d.missing, ", "))
			}
			if len(d.extra) > 0 {
				t.Errorf("undocumented keys returned by API: %s", strings.Join(d.extra, ", "))
			}
		})
	}
}

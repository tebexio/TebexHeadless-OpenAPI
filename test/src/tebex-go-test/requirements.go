package tebex_go_test

import "testing"

// Requirements is the registry of requirement IDs exercised by this suite. Every
// entry must be covered by at least one test (via covers), and every covers tag
// must name an entry here; TestTraceability enforces both directions.
var Requirements = map[string]string{
	"IDENT_001":  "Every package returned by GET /packages, GET /categories/* and GET /packages/{packageId} has a non-empty string `ident`.",
	"IDENT_002":  "`ident` has the form {prefix}_{categoryId}_{id}: prefix is pkg|dyn|ext, categoryId is the package's category, a pkg id equals the numeric package id and a dyn id is numeric.",
	"IDENT_003":  "GET /packages/{packageId} accepts an ident and returns the package it identifies.",
	"IDENT_004":  "GET /packages/{packageId} still accepts a numeric ID for standard packages and returns the same ident.",
	"IDENT_005":  "POST /baskets/{basketIdent}/packages accepts an ident in package_id and adds that package (standard and dynamic).",
	"IDENT_006":  "POST /baskets/{basketIdent}/packages still accepts a numeric package_id for standard packages.",
	"IDENT_008":  "POST /baskets/{basketIdent}/packages rejects an unknown or mismatched (wrong category, wrong prefix, unknown id) ident with 400 \"The selected id is invalid.\".",
	"IDENT_009":  "External (ext) packages can be fetched and added to a basket by ident.",
	"IDENT_010":  "POST /baskets/{basketIdent}/packages/remove accepts an ident (standard and dynamic) or a numeric ID (standard) in package_id and removes that package.",
	"IDENT_011":  "PUT /baskets/{basketIdent}/packages/{packageId} accepts an ident (standard and dynamic) or a numeric ID (standard) and sets that package's quantity.",
	"DYNPKG_001": "PUT /baskets/{basketIdent}/dynamic-packages with basic auth, basket_id, username, a dynamic category_id and packages returns 200 and the packages are listed in that category for that basket only.",
	"DYNPKG_002": "PUT /baskets/{basketIdent}/dynamic-packages rejects with 422: missing basic auth, empty basket_id, or a non-dynamic category_id.",
	"IDENT_012":  "Remove and update-quantity reject an unknown, mismatched or malformed ident with a 4xx (never 2xx or 5xx) and leave the basket unchanged.",
}

// covers tags a test with the requirement IDs it verifies. The tags are read
// statically by TestTraceability, so pass string literals.
func covers(t *testing.T, ids ...string) {
	t.Helper()
	for _, id := range ids {
		if _, ok := Requirements[id]; !ok {
			t.Fatalf("covers: unknown requirement %q", id)
		}
	}
	t.Logf("covers %v", ids)
}

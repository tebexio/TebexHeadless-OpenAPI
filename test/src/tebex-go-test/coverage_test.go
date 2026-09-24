package tebex_go_test

import (
	"os"
	"regexp"
	"sort"
	"testing"

	"tebex-headless-test/funcs"
)

// operationIDRe matches an `operationId: <id>` line in the OpenAPI spec. The Go
// module deliberately has no YAML dependency, so we extract the ids with a line
// scan rather than parsing the whole document. operationIds are alphanumeric and
// always appear as an indented mapping key under an operation.
var operationIDRe = regexp.MustCompile(`(?m)^[ \t]*operationId:[ \t]*([A-Za-z0-9_]+)`)

// specOperationIDs returns the set of operationIds declared in the OpenAPI spec.
func specOperationIDs(t *testing.T, specPath string) map[string]bool {
	t.Helper()
	b, err := os.ReadFile(specPath)
	if err != nil {
		t.Fatalf("read spec %s: %v", specPath, err)
	}
	matches := operationIDRe.FindAllSubmatch(b, -1)
	if len(matches) == 0 {
		t.Fatalf("no operationId entries found in %s (wrong path or format?)", specPath)
	}
	ids := make(map[string]bool, len(matches))
	for _, m := range matches {
		ids[string(m[1])] = true
	}
	return ids
}

// TestSpecCoverage fails if any operation documented in the OpenAPI spec has no
// corresponding entry in the test registry (i.e. no test is written for it), and
// also flags registry entries that no longer exist in the spec (stale tests). It
// is a static check — no network — so it runs even under `go test -short`.
func TestSpecCoverage(t *testing.T) {
	specPath := envOr("E2E_SPEC", "../../../headless-api.yaml")
	specOps := specOperationIDs(t, specPath)
	registry := funcs.BuildRegistry()

	var untested []string
	for id := range specOps {
		if _, ok := registry[id]; !ok {
			untested = append(untested, id)
		}
	}
	sort.Strings(untested)
	if len(untested) > 0 {
		t.Errorf("%d spec operation(s) have no test in the registry: %v", len(untested), untested)
	}

	var stale []string
	for id := range registry {
		if !specOps[id] {
			stale = append(stale, id)
		}
	}
	sort.Strings(stale)
	if len(stale) > 0 {
		t.Errorf("%d registry operation(s) are not in the spec (stale tests): %v", len(stale), stale)
	}
}

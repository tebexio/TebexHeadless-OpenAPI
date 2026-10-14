package tebex_go_test

import (
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"sort"
	"strings"
	"testing"
)

// coversRe matches a covers(t, "ID", ...) call and captures its argument list.
var coversRe = regexp.MustCompile(`covers\(t((?:,\s*"[A-Z0-9_]+")+)\)`)
var reqIDRe = regexp.MustCompile(`"([A-Z0-9_]+)"`)
var testFuncRe = regexp.MustCompile(`^func (Test\w+)\(`)

// TestTraceability fails on any GAP: a requirement with no test, or a test tag
// naming an unregistered requirement. It is static (no network), so it runs under
// -short. Set E2E_TRACE_OUT to also write the traceability matrix (not committed).
func TestTraceability(t *testing.T) {
	files, err := filepath.Glob("*_test.go")
	if err != nil {
		t.Fatal(err)
	}
	matrix := map[string][]string{} // requirement -> tests
	for _, f := range files {
		b, err := os.ReadFile(f)
		if err != nil {
			t.Fatal(err)
		}
		current := ""
		for _, line := range strings.Split(string(b), "\n") {
			if m := testFuncRe.FindStringSubmatch(line); m != nil {
				current = m[1]
			}
			m := coversRe.FindStringSubmatch(line)
			if m == nil || f == "traceability_test.go" {
				continue
			}
			for _, id := range reqIDRe.FindAllStringSubmatch(m[1], -1) {
				if _, ok := Requirements[id[1]]; !ok {
					t.Errorf("GAP: %s:%s covers unregistered requirement %s", f, current, id[1])
				}
				matrix[id[1]] = append(matrix[id[1]], current)
			}
		}
	}

	ids := make([]string, 0, len(Requirements))
	for id := range Requirements {
		ids = append(ids, id)
	}
	sort.Strings(ids)

	var out strings.Builder
	out.WriteString("| Requirement | Tests |\n|---|---|\n")
	for _, id := range ids {
		tests := matrix[id]
		if len(tests) == 0 {
			t.Errorf("GAP: requirement %s has no test", id)
		}
		fmt.Fprintf(&out, "| %s | %s |\n", id, strings.Join(dedupe(tests), ", "))
	}
	t.Log("\n" + out.String())
	if p := os.Getenv("E2E_TRACE_OUT"); p != "" {
		if err := os.WriteFile(p, []byte(out.String()), 0o644); err != nil {
			t.Fatal(err)
		}
	}
}

func dedupe(s []string) []string {
	seen := map[string]bool{}
	var out []string
	for _, v := range s {
		if !seen[v] {
			seen[v] = true
			out = append(out, v)
		}
	}
	return out
}

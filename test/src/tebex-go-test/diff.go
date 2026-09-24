package tebex_go_test

import (
	"bytes"
	"encoding/json"
	"reflect"
	"sort"
	"strings"
)

// diffResult holds the outcome of comparing a live API response against the
// gen SDK struct that documents it.
type diffResult struct {
	missing []string // documented (in the SDK struct) but absent from the API response
	extra   []string // returned by the API but undocumented (not in the SDK struct)
	notes   []string // informational (HTML body, empty array, non-object, ...)
}

func (d diffResult) clean() bool { return len(d.missing) == 0 && len(d.extra) == 0 }

// fieldMeta describes one documented json field: its Go type (for recursion) and
// whether it is optional. openapi-generator emits `,omitempty` for optional and
// nullable fields and omits it for required ones, so an absent optional/nullable
// field is NOT a documentation violation.
type fieldMeta struct {
	typ      reflect.Type
	optional bool
}

// jsonKeys extracts the documented key set from a struct type via its json tags,
// recording each field's type and optionality. Pointers and slices are
// dereferenced to the underlying struct.
func jsonKeys(t reflect.Type) map[string]fieldMeta {
	t = derefToStruct(t)
	keys := map[string]fieldMeta{}
	if t == nil || t.Kind() != reflect.Struct {
		return keys
	}
	for i := 0; i < t.NumField(); i++ {
		f := t.Field(i)
		if f.PkgPath != "" { // unexported
			continue
		}
		tag := f.Tag.Get("json")
		if tag == "" {
			continue
		}
		parts := strings.Split(tag, ",")
		name := parts[0]
		if name == "" || name == "-" {
			continue
		}
		optional := false
		for _, opt := range parts[1:] {
			if opt == "omitempty" {
				optional = true
			}
		}
		keys[name] = fieldMeta{typ: f.Type, optional: optional}
	}
	return keys
}

// derefToStruct unwraps pointer/slice/array layers and returns the underlying
// struct type, or nil if there is no struct underneath.
func derefToStruct(t reflect.Type) reflect.Type {
	for t != nil {
		switch t.Kind() {
		case reflect.Ptr, reflect.Slice, reflect.Array:
			t = t.Elem()
		default:
			if t.Kind() == reflect.Struct {
				return t
			}
			return nil
		}
	}
	return nil
}

// looksLikeHTML reports whether a body is an HTML document rather than JSON,
// matching the Python reference's DOCTYPE heuristic.
func looksLikeHTML(b []byte) bool {
	s := strings.ToLower(strings.TrimSpace(string(b)))
	return strings.HasPrefix(s, "<!doctype") || strings.HasPrefix(s, "<html")
}

// diffKeys compares a raw JSON response body against the json tags of `expected`
// (a zero value of the unwrapped SDK model). It mirrors the Python script's
// envelope handling: a single-key {"data": ...} wrapper is unwrapped, arrays are
// reduced to their first element, and missing/extra keys are reported. When
// recurse is true it descends into nested struct / []struct fields with prefixed
// names (e.g. "category.id", "packages[].id").
func diffKeys(expected any, raw []byte, recurse bool) diffResult {
	var res diffResult
	if expected == nil {
		return res // no-body operation; nothing to diff
	}
	if len(bytes.TrimSpace(raw)) == 0 {
		res.notes = append(res.notes, "empty response body, cannot diff keys")
		return res
	}
	if looksLikeHTML(raw) {
		res.notes = append(res.notes, "non-JSON/HTML response, cannot diff keys")
		return res
	}

	var top any
	if err := json.Unmarshal(raw, &top); err != nil {
		res.notes = append(res.notes, "unparseable (non-JSON) body, cannot diff keys")
		return res
	}

	objMap, ok := top.(map[string]any)
	if !ok {
		return res
	}

	// Unwrap the {"data": ...} envelope the API wraps responses in; the
	// registry's Expected models describe the unwrapped payload.
	if len(objMap) == 1 {
		if inner, ok := objMap["data"]; ok {
			switch v := inner.(type) {
			case map[string]any:
				objMap = v
			case []any: // list endpoints: reduce to first element
				if len(v) > 0 {
					if first, ok := v[0].(map[string]any); ok {
						objMap = first
					}
				} else {
					res.notes = append(res.notes, "empty data array, cannot diff keys")
					return res
				}
			}
		}
	}

	diffInto(&res, reflect.TypeOf(expected), objMap, "", recurse, map[reflect.Type]bool{})
	sort.Strings(res.missing)
	sort.Strings(res.extra)
	return res
}

// unionMemberTypes detects an openapi-generator anyOf/oneOf wrapper struct and
// returns its variant struct types. Such wrappers carry no json-tagged fields;
// instead every exported field is a pointer to one variant struct (e.g.
// CategoryPackagesInner{ DynamicPackage *DynamicPackage; Package *Package }).
// Ordinary models (whose fields do carry json tags) return nil.
func unionMemberTypes(t reflect.Type) []reflect.Type {
	t = derefToStruct(t)
	if t == nil || t.Kind() != reflect.Struct || t.NumField() == 0 {
		return nil
	}
	var members []reflect.Type
	for i := 0; i < t.NumField(); i++ {
		f := t.Field(i)
		if f.PkgPath != "" { // unexported field: not a clean wrapper
			return nil
		}
		if f.Tag.Get("json") != "" { // a documented field: ordinary struct
			return nil
		}
		st := derefToStruct(f.Type)
		if st == nil || st.Kind() != reflect.Struct {
			return nil
		}
		members = append(members, st)
	}
	return members
}

// cloneVisited copies the cyclic-recursion guard so independent union-variant
// trials don't pollute each other's visited set.
func cloneVisited(v map[reflect.Type]bool) map[reflect.Type]bool {
	c := make(map[reflect.Type]bool, len(v))
	for k, val := range v {
		c[k] = val
	}
	return c
}

// diffInto compares one struct type against one decoded JSON object, recording
// missing/extra keys (prefixed) and optionally recursing into nested structs.
func diffInto(res *diffResult, t reflect.Type, objMap map[string]any, prefix string, recurse bool, visited map[reflect.Type]bool) {
	// anyOf/oneOf wrapper: the live object matches one variant, but we don't
	// know which. Diff against each variant and adopt the closest match (fewest
	// missing+extra keys) so a valid response of any variant passes cleanly.
	if members := unionMemberTypes(t); members != nil {
		var best *diffResult
		for _, m := range members {
			trial := &diffResult{}
			diffInto(trial, m, objMap, prefix, recurse, cloneVisited(visited))
			if best == nil || len(trial.missing)+len(trial.extra) < len(best.missing)+len(best.extra) {
				best = trial
			}
		}
		if best != nil {
			res.missing = append(res.missing, best.missing...)
			res.extra = append(res.extra, best.extra...)
			res.notes = append(res.notes, best.notes...)
		}
		return
	}

	expected := jsonKeys(t)

	// A documented key is only "missing" if it is required; optional/nullable
	// fields are allowed to be absent from the response.
	for name, meta := range expected {
		if meta.optional {
			continue
		}
		if _, ok := objMap[name]; !ok {
			res.missing = append(res.missing, prefix+name)
		}
	}
	for name := range objMap {
		if _, ok := expected[name]; !ok {
			res.extra = append(res.extra, prefix+name)
		}
	}

	if !recurse {
		return
	}
	for name, meta := range expected {
		val, present := objMap[name]
		if !present {
			continue
		}
		st := derefToStruct(meta.typ)
		if st == nil || st.Kind() != reflect.Struct {
			continue
		}
		if visited[st] {
			continue // guard against cyclic types
		}
		visited[st] = true

		switch v := val.(type) {
		case map[string]any:
			diffInto(res, st, v, prefix+name+".", recurse, visited)
		case []any:
			if len(v) > 0 {
				if nested, ok := v[0].(map[string]any); ok {
					diffInto(res, st, nested, prefix+name+"[].", recurse, visited)
				}
			}
		}
		delete(visited, st)
	}
}

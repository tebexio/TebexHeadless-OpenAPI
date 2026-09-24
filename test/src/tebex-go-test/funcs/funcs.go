// Package funcs holds one named function per Tebex Headless SDK operation (one
// per file), plus the registry that maps each operationId to its function and the
// shared types those functions need. The e2e test package consumes BuildRegistry.
package funcs

import (
	"context"
	"fmt"
	"strconv"
	"sync"

	TebexHeadless "github.com/tebexio/TebexHeadless"
)

// client aliases the gen SDK client so each operation function can take it
// as `client client` (the alias is identical to *TebexHeadless.APIClient, so the
// caller may pass a *TebexHeadless.APIClient directly).
type client = *TebexHeadless.APIClient

// SdkOperation describes one testable SDK operation: its static spec and the
// function that invokes it through the gen SDK.
type SdkOperation struct {
	OperationId string // matches the spec operationId and the config order key
	Spec        Spec

	// Do builds and executes the request via the SDK. It returns the SDK error
	// (the runner reads the captured transport for the authoritative status/body).
	Do func(ctx context.Context, client client, s *VarStore) error
}

// Spec is the static description of an operation's request and expected response.
// Registry literals fill it positionally: {HttpMethod, Endpoint, IsWrappedData, Expected}.
type Spec struct {
	HttpMethod string // HTTP verb, for test output
	Endpoint   string // spec path template, for test output

	// Expected is a zero value of the unwrapped model (e.g. TebexHeadless.Webstore{}),
	// or nil for operations that return no JSON body.
	Expected any
}

// VarStore holds runtime-resolvable variables, seeded from the config's variables
type VarStore struct {
	mu sync.RWMutex
	m  map[string]string
}

// NewVarStore returns a VarStore seeded from the given variable map.
func NewVarStore(seed map[string]string) *VarStore {
	m := make(map[string]string, len(seed))
	for k, v := range seed {
		m[k] = v
	}
	return &VarStore{m: m}
}

func (s *VarStore) get(key string) string {
	s.mu.RLock()
	defer s.mu.RUnlock()
	return s.m[key]
}

// require returns the value or an error if it is missing/empty, so a call with an
// unsatisfied path variable fails loudly instead of hitting a malformed URL.
func (s *VarStore) require(key string) (string, error) {
	v := s.get(key)
	if v == "" {
		return "", fmt.Errorf("required variable %q is not set in config/variables or persisted state", key)
	}
	return v, nil
}

// Set stores a variable (e.g. a value persisted from a prior response).
func (s *VarStore) Set(key, value string) {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.m[key] = value
}

// intVar reads a variable and converts it to int32 for the SDK's typed params.
func intVar(s *VarStore, key string) (int32, error) {
	v, err := s.require(key)
	if err != nil {
		return 0, err
	}
	n, err := strconv.Atoi(v)
	if err != nil {
		return 0, fmt.Errorf("variable %q=%q is not an integer: %w", key, v, err)
	}
	return int32(n), nil
}

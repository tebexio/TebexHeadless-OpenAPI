# Tebex Test Functions (Golang)

This is an implementation of Headless API's client operations in Golang using the SDKs from the OpenAPI generator. 

Two tests are included, `coverage_test` which ensures all operations in the OpenAPI schema have an associated test, and `e2e_test` which tests all API endpoints end-to-end against the production API.

## Requirements and traceability

`requirements.go` is the requirements registry (e.g. `IDENT_001`). Tests tag what they cover with `covers(t, "IDENT_001")`. `TestTraceability` (static, runs under `-short`) fails on any requirement without a test or any tag without a requirement. Set `E2E_TRACE_OUT=traceability_matrix.md` to write the matrix (git-ignored).

`dynamic_package_test.go` covers createDynamicPackage (DYNPKG_001–002). It needs the `dynamicCategoryId` config variable to be a category of type `dynamic`.

`ident_test.go` holds the live package ident tests (IDENT_001–IDENT_009). Accepted constraint: IDENT_009 (external packages) skips when the store has no external package.

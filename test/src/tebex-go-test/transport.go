package tebex_go_test

import (
	"bytes"
	"io"
	"net/http"
)

// capture records everything we need about a single round trip for validation
// and reporting: the resolved URL, request/response bodies, and status. We read
// the raw response bytes here (not from the typed SDK return value) because the
// gen models silently drop undocumented keys and null out missing ones, so
// only the raw JSON reveals extra/missing fields.
type capture struct {
	method   string
	url      string
	reqBody  []byte
	status   int
	respBody []byte
	ct       string // response Content-Type
}

// capturingTransport wraps a base RoundTripper and remembers the last round trip.
// It is installed into the SDK's http.Client so we keep using the gen SDK
// to build/send every request (validating the SDK) while still seeing raw bytes.
type capturingTransport struct {
	base http.RoundTripper
	last *capture
}

func newCapturingTransport() *capturingTransport {
	return &capturingTransport{base: http.DefaultTransport}
}

func (t *capturingTransport) RoundTrip(req *http.Request) (*http.Response, error) {
	c := &capture{method: req.Method, url: req.URL.String()}

	if req.Body != nil {
		b, _ := io.ReadAll(req.Body)
		_ = req.Body.Close()
		c.reqBody = b
		// Restore the body so the real request can be sent.
		req.Body = io.NopCloser(bytes.NewReader(b))
	}

	resp, err := t.base.RoundTrip(req)
	if resp != nil {
		body, _ := io.ReadAll(resp.Body)
		_ = resp.Body.Close()
		c.respBody = body
		// Restore the body so the SDK can decode it as usual.
		resp.Body = io.NopCloser(bytes.NewReader(body))
		c.status = resp.StatusCode
		c.ct = resp.Header.Get("Content-Type")
	}

	t.last = c
	return resp, err
}

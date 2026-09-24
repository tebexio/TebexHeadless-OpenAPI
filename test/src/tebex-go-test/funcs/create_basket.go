package funcs

import (
	"context"
	"encoding/json"
	"errors"

	TebexHeadless "github.com/tebexio/TebexHeadless"
)

func createBasket(ctx context.Context, client client, s *VarStore) error {
	body := TebexHeadless.NewCreateBasketRequest()
	body.SetCompleteUrl("https://example.tebex.io/complete")
	body.SetCancelUrl("https://example.tebex.io/cancel")
	body.SetCompleteAutoRedirect(true)
	resp, _, err := client.HeadlessAPI.CreateBasket(ctx).CreateBasketRequest(*body).Execute()

	// The basket ident is ephemeral, so capture it here for the basket-scoped
	// operations that follow (createBasket must run before them in the config
	// order). Read it from the raw response so it still works when the SDK can't
	// fully decode the basket (e.g. the data.id field-type mismatch this suite
	// exists to surface).
	if ident := createdBasketIdent(resp, err); ident != "" {
		s.Set("basketIdent", ident)
	}
	return err
}

// createdBasketIdent returns the new basket's ident from a decoded response, or
// failing that from the raw body carried by a GenericOpenAPIError.
func createdBasketIdent(resp *TebexHeadless.BasketResponse, execErr error) string {
	if resp != nil && resp.Data != nil && resp.Data.Ident != nil && *resp.Data.Ident != "" {
		return *resp.Data.Ident
	}
	var apiErr *TebexHeadless.GenericOpenAPIError
	if errors.As(execErr, &apiErr) {
		var env struct {
			Data struct {
				Ident string `json:"ident"`
			} `json:"data"`
		}
		if json.Unmarshal(apiErr.Body(), &env) == nil {
			return env.Data.Ident
		}
	}
	return ""
}

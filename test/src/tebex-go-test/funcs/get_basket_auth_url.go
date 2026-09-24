package funcs

import "context"

func getBasketAuthUrl(ctx context.Context, client client, s *VarStore) error {
	basketIdent, err := s.require("basketIdent")
	if err != nil {
		return err
	}
	returnUrl, err := s.require("returnUrl")
	if err != nil {
		return err
	}
	_, _, err = client.HeadlessAPI.GetBasketAuthUrl(ctx, basketIdent, returnUrl).Execute()
	return err
}

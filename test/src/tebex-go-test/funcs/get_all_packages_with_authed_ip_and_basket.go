package funcs

import "context"

func getAllPackagesWithAuthedIPAndBasket(ctx context.Context, client client, s *VarStore) error {
	basketIdent, err := s.require("basketIdent")
	if err != nil {
		return err
	}
	ipAddress, err := s.require("ipAddress")
	if err != nil {
		return err
	}
	_, _, err = client.HeadlessAPI.GetAllPackagesWithAuthedIPAndBasket(ctx, basketIdent, ipAddress).Execute()
	return err
}

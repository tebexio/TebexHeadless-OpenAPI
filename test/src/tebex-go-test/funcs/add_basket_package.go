package funcs

import (
	"context"

	TebexHeadless "github.com/tebexio/TebexHeadless"
)

func addBasketPackage(ctx context.Context, client client, s *VarStore) error {
	basketIdent, err := s.require("basketIdent")
	if err != nil {
		return err
	}
	packageId, err := s.require("packageId")
	if err != nil {
		return err
	}
	body := TebexHeadless.NewAddBasketPackageRequest(packageId, 1) // package_id is a string in this request model
	_, _, err = client.HeadlessAPI.AddBasketPackage(ctx, basketIdent).AddBasketPackageRequest(*body).Execute()
	return err
}

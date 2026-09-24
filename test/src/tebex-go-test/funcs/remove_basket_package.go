package funcs

import (
	"context"

	TebexHeadless "github.com/tebexio/TebexHeadless"
)

func removeBasketPackage(ctx context.Context, client client, s *VarStore) error {
	basketIdent, err := s.require("basketIdent")
	if err != nil {
		return err
	}
	packageId, err := s.require("packageId")
	if err != nil {
		return err
	}
	body := TebexHeadless.NewRemoveBasketPackageRequest()
	body.SetPackageId(packageId) // string in this request model
	_, _, err = client.HeadlessAPI.RemoveBasketPackage(ctx, basketIdent).RemoveBasketPackageRequest(*body).Execute()
	return err
}

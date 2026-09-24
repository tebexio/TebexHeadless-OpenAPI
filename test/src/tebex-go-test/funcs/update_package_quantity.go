package funcs

import (
	"context"

	TebexHeadless "github.com/tebexio/TebexHeadless"
)

func updatePackageQuantity(ctx context.Context, client client, s *VarStore) error {
	basketIdent, err := s.require("basketIdent")
	if err != nil {
		return err
	}
	packageId, err := s.require("packageId") // path param is a string in the schema
	if err != nil {
		return err
	}
	body := TebexHeadless.NewUpdatePackageQuantityRequest()
	body.SetQuantity(2)
	_, err = client.HeadlessAPI.UpdatePackageQuantity(ctx, basketIdent, packageId).UpdatePackageQuantityRequest(*body).Execute()
	return err
}

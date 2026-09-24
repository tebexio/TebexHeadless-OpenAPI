package funcs

import (
	"context"

	TebexHeadless "github.com/tebexio/TebexHeadless"
)

func updateTier(ctx context.Context, client client, s *VarStore) error {
	tierId, err := intVar(s, "tierId")
	if err != nil {
		return err
	}
	packageId, err := intVar(s, "packageId")
	if err != nil {
		return err
	}
	body := TebexHeadless.NewUpdateTierRequest()
	body.SetPackageId(packageId) // int32 in this request model
	_, _, err = client.HeadlessAPI.UpdateTier(ctx, tierId).UpdateTierRequest(*body).Execute()
	return err
}

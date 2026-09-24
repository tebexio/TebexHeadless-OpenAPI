package funcs

import (
	"context"

	TebexHeadless "github.com/tebexio/TebexHeadless"
)

func applyCoupon(ctx context.Context, client client, s *VarStore) error {
	basketIdent, err := s.require("basketIdent")
	if err != nil {
		return err
	}
	body := TebexHeadless.NewApplyCouponRequest()
	body.SetCouponCode("Academy10")
	_, _, err = client.HeadlessAPI.ApplyCoupon(ctx, basketIdent).ApplyCouponRequest(*body).Execute()
	return err
}

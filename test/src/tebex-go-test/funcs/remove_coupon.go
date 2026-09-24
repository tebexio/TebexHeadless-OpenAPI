package funcs

import (
	"context"

	"github.com/tebexio/TebexHeadless"
)

func removeCoupon(ctx context.Context, client client, s *VarStore) error {
	basketIdent, err := s.require("basketIdent")
	if err != nil {
		return err
	}
	req := TebexHeadless.NewApplyCouponRequest()
	req.SetCouponCode("Academy10")
	_, err = client.HeadlessAPI.RemoveCoupon(ctx, basketIdent).ApplyCouponRequest(*req).Execute()
	return err
}

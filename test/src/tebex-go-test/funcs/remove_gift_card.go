package funcs

import (
	"context"

	TebexHeadless "github.com/tebexio/TebexHeadless"
)

func removeGiftCard(ctx context.Context, client client, s *VarStore) error {
	basketIdent, err := s.require("basketIdent")
	if err != nil {
		return err
	}
	body := TebexHeadless.NewRemoveGiftCardRequest()
	body.SetCardNumber("8616 8805 6580 1044")
	_, err = client.HeadlessAPI.RemoveGiftCard(ctx, basketIdent).RemoveGiftCardRequest(*body).Execute()
	return err
}

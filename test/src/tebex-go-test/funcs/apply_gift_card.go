package funcs

import (
	"context"

	TebexHeadless "github.com/tebexio/TebexHeadless"
)

func applyGiftCard(ctx context.Context, client client, s *VarStore) error {
	basketIdent, err := s.require("basketIdent")
	if err != nil {
		return err
	}
	body := TebexHeadless.NewGiftCard()
	body.SetCardNumber("8616 8805 6580 1044")
	_, _, err = client.HeadlessAPI.ApplyGiftCard(ctx, basketIdent).GiftCard(*body).Execute()
	return err
}

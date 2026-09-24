package funcs

import (
	"context"

	TebexHeadless "github.com/tebexio/TebexHeadless"
)

func applyCreatorCode(ctx context.Context, client client, s *VarStore) error {
	basketIdent, err := s.require("basketIdent")
	if err != nil {
		return err
	}
	body := TebexHeadless.NewApplyCreatorCodeRequest()
	body.SetCreatorCode("TebexDev")
	_, _, err = client.HeadlessAPI.ApplyCreatorCode(ctx, basketIdent).ApplyCreatorCodeRequest(*body).Execute()
	return err
}

package funcs

import "context"

func removeCreatorCode(ctx context.Context, client client, s *VarStore) error {
	basketIdent, err := s.require("basketIdent")
	if err != nil {
		return err
	}
	_, err = client.HeadlessAPI.RemoveCreatorCode(ctx, basketIdent).Execute()
	return err
}

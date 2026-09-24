package funcs

import "context"

func getSidebar(ctx context.Context, client client, s *VarStore) error {
	token, err := s.require("token")
	if err != nil {
		return err
	}
	_, _, err = client.HeadlessAPI.GetSidebar(ctx, token).Execute()
	return err
}

package funcs

import "context"

func getCategoryById(ctx context.Context, client client, s *VarStore) error {
	categoryId, err := s.require("categoryId")
	if err != nil {
		return err
	}
	_, _, err = client.HeadlessAPI.GetCategory(ctx, categoryId).Execute()
	return err
}

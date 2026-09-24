package funcs

import "context"

func getCategoryIncludingPackages(ctx context.Context, client client, s *VarStore) error {
	categoryId, err := s.require("categoryId")
	if err != nil {
		return err
	}
	_, _, err = client.HeadlessAPI.GetCategoryIncludePackages(ctx, categoryId).Execute()
	return err
}

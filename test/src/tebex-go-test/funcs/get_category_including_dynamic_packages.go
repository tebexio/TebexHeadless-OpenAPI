package funcs

import "context"

func getCategoryIncludingDynamicPackages(ctx context.Context, client client, s *VarStore) error {
	categoryId, err := s.require("categoryId")
	if err != nil {
		return err
	}
	basketIdent, err := s.require("basketIdent")
	if err != nil {
		return err
	}
	_, _, err = client.HeadlessAPI.GetCategoryIncludeDynamicPackages(ctx, categoryId, basketIdent).Execute()
	return err
}

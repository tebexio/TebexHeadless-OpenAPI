package funcs

import "context"

func getAllCategoriesIncludingDynamicPackages(ctx context.Context, client client, s *VarStore) error {
	basketIdent, err := s.require("basketIdent")
	if err != nil {
		return err
	}
	_, _, err = client.HeadlessAPI.GetDynamicCategories(ctx, basketIdent).Execute()
	return err
}

package funcs

import "context"

func getAllCategoriesIncludingPackages(ctx context.Context, client client, s *VarStore) error {
	_, _, err := client.HeadlessAPI.GetCategoriesIncludePackages(ctx).Execute()
	return err
}

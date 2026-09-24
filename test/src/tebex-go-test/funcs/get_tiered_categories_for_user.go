package funcs

import "context"

func getTieredCategoriesForUser(ctx context.Context, client client, s *VarStore) error {
	usernameId, err := intVar(s, "usernameId")
	if err != nil {
		return err
	}
	_, _, err = client.HeadlessAPI.GetUserTieredCategories(ctx, usernameId).Execute()
	return err
}

package funcs

import "context"

func getAllCategories(ctx context.Context, client client, s *VarStore) error {
	_, _, err := client.HeadlessAPI.GetCategories(ctx).Execute()
	return err
}

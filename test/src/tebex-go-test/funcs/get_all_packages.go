package funcs

import "context"

func getAllPackages(ctx context.Context, client client, s *VarStore) error {
	_, _, err := client.HeadlessAPI.GetAllPackages(ctx).Execute()
	return err
}

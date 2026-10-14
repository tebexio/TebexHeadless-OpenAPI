package funcs

import "context"

func getTopCustomer(ctx context.Context, client client, s *VarStore) error {
	_, _, err := client.HeadlessAPI.GetTopCustomer(ctx).Execute()
	return err
}

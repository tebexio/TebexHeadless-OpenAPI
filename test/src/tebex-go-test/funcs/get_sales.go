package funcs

import "context"

func getSales(ctx context.Context, client client, s *VarStore) error {
	_, _, err := client.HeadlessAPI.GetSales(ctx).Execute()
	return err
}

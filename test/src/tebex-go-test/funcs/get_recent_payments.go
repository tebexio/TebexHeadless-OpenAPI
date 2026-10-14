package funcs

import "context"

func getRecentPayments(ctx context.Context, client client, s *VarStore) error {
	_, _, err := client.HeadlessAPI.GetRecentPayments(ctx).Execute()
	return err
}

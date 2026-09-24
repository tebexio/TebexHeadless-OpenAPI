package funcs

import "context"

func getCMSPages(ctx context.Context, client client, s *VarStore) error {
	_, _, err := client.HeadlessAPI.GetCustomPages(ctx).Execute()
	return err
}

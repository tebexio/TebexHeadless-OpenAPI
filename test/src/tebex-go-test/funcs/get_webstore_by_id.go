package funcs

import "context"

func getWebstoreById(ctx context.Context, client client, s *VarStore) error {
	_, _, err := client.HeadlessAPI.GetWebstore(ctx).Execute()
	return err
}

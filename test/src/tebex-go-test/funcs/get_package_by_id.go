package funcs

import "context"

func getPackageById(ctx context.Context, client client, s *VarStore) error {
	packageId, err := s.require("packageId") // path param is a string in the schema
	if err != nil {
		return err
	}
	_, _, err = client.HeadlessAPI.GetPackage(ctx, packageId).Execute()
	return err
}

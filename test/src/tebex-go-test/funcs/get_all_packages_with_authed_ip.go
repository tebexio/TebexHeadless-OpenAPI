package funcs

import "context"

func getAllPackagesWithAuthedIP(ctx context.Context, client client, s *VarStore) error {
	ipAddress, err := s.require("ipAddress")
	if err != nil {
		return err
	}
	_, _, err = client.HeadlessAPI.GetAllPackagesWithAuthedIP(ctx, ipAddress).Execute()
	return err
}

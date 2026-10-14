package funcs

import "context"

func getCommunityGoal(ctx context.Context, client client, s *VarStore) error {
	communityGoalId, err := intVar(s, "communityGoalId")
	if err != nil {
		return err
	}
	_, _, err = client.HeadlessAPI.GetCommunityGoal(ctx, communityGoalId).Execute()
	return err
}

package funcs

import (
	"context"
	"strconv"
)

func getCommunityGoals(ctx context.Context, client client, s *VarStore) error {
	resp, _, err := client.HeadlessAPI.GetCommunityGoals(ctx).Execute()

	// Capture a real goal ID for getCommunityGoal (which must run after this in
	// the config order), unless the config already pins one.
	if s.get("communityGoalId") == "" && resp != nil && len(resp.Data) > 0 {
		s.Set("communityGoalId", strconv.Itoa(int(resp.Data[0].Id)))
	}
	return err
}

# CommunityGoalResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CommunityGoal**](CommunityGoal.md) |  | 

## Example

```python
from TebexHeadless.models.community_goal_response import CommunityGoalResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CommunityGoalResponse from a JSON string
community_goal_response_instance = CommunityGoalResponse.from_json(json)
# print the JSON string representation of the object
print(CommunityGoalResponse.to_json())

# convert the object into a dict
community_goal_response_dict = community_goal_response_instance.to_dict()
# create an instance of CommunityGoalResponse from a dict
community_goal_response_from_dict = CommunityGoalResponse.from_dict(community_goal_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



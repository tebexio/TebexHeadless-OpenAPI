# CommunityGoalsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[CommunityGoal]**](CommunityGoal.md) | Community goals. Empty when none match. | 

## Example

```python
from TebexHeadless.models.community_goals_response import CommunityGoalsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CommunityGoalsResponse from a JSON string
community_goals_response_instance = CommunityGoalsResponse.from_json(json)
# print the JSON string representation of the object
print(CommunityGoalsResponse.to_json())

# convert the object into a dict
community_goals_response_dict = community_goals_response_instance.to_dict()
# create an instance of CommunityGoalsResponse from a dict
community_goals_response_from_dict = CommunityGoalsResponse.from_dict(community_goals_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



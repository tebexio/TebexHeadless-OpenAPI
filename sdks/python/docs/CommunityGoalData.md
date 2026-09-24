# CommunityGoalData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | **str** |  | 
**bar_style** | **str** |  | 
**bar_animated** | **bool** |  | 
**percentage** | **float** |  | 
**total_payments** | **float** | Optional, present depending on module configuration. | [optional] 
**target** | **float** | Optional, present depending on module configuration. | [optional] 
**times_achieved** | **int** | Optional, present depending on module configuration. | [optional] 

## Example

```python
from TebexHeadless.models.community_goal_data import CommunityGoalData

# TODO update the JSON string below
json = "{}"
# create an instance of CommunityGoalData from a JSON string
community_goal_data_instance = CommunityGoalData.from_json(json)
# print the JSON string representation of the object
print(CommunityGoalData.to_json())

# convert the object into a dict
community_goal_data_dict = community_goal_data_instance.to_dict()
# create an instance of CommunityGoalData from a dict
community_goal_data_from_dict = CommunityGoalData.from_dict(community_goal_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



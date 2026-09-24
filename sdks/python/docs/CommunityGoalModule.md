# CommunityGoalModule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**type** | **object** |  | 
**start_time** | **datetime** |  | 
**end_time** | **datetime** | Nullable; when null the module is ongoing. | [optional] 
**data** | [**CommunityGoalData**](CommunityGoalData.md) |  | 

## Example

```python
from TebexHeadless.models.community_goal_module import CommunityGoalModule

# TODO update the JSON string below
json = "{}"
# create an instance of CommunityGoalModule from a JSON string
community_goal_module_instance = CommunityGoalModule.from_json(json)
# print the JSON string representation of the object
print(CommunityGoalModule.to_json())

# convert the object into a dict
community_goal_module_dict = community_goal_module_instance.to_dict()
# create an instance of CommunityGoalModule from a dict
community_goal_module_from_dict = CommunityGoalModule.from_dict(community_goal_module_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



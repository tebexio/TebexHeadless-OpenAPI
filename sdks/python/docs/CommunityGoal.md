# CommunityGoal


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**name** | **str** |  | 
**description** | **str** |  | 
**image_url** | **str** |  | 
**target** | **float** | The goal amount, in &#x60;currency&#x60;. | 
**current** | **float** | The amount raised so far, in &#x60;currency&#x60;. | 
**currency** | **str** | The account currency. | 
**percentage** | **float** |  | 
**repeatable** | **bool** |  | 
**times_achieved** | **int** |  | 
**last_achieved** | **datetime** |  | 
**status** | **str** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from TebexHeadless.models.community_goal import CommunityGoal

# TODO update the JSON string below
json = "{}"
# create an instance of CommunityGoal from a JSON string
community_goal_instance = CommunityGoal.from_json(json)
# print the JSON string representation of the object
print(CommunityGoal.to_json())

# convert the object into a dict
community_goal_dict = community_goal_instance.to_dict()
# create an instance of CommunityGoal from a dict
community_goal_from_dict = CommunityGoal.from_dict(community_goal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



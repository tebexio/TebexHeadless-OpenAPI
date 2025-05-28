# TierStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **float** |  | [optional] 
**description** | **str** |  | [optional] 

## Example

```python
from TebexHeadless.models.tier_status import TierStatus

# TODO update the JSON string below
json = "{}"
# create an instance of TierStatus from a JSON string
tier_status_instance = TierStatus.from_json(json)
# print the JSON string representation of the object
print(TierStatus.to_json())

# convert the object into a dict
tier_status_dict = tier_status_instance.to_dict()
# create an instance of TierStatus from a dict
tier_status_from_dict = TierStatus.from_dict(tier_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



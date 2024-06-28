# UpdateTierResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from TebexHeadless.models.update_tier_response import UpdateTierResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTierResponse from a JSON string
update_tier_response_instance = UpdateTierResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateTierResponse.to_json())

# convert the object into a dict
update_tier_response_dict = update_tier_response_instance.to_dict()
# create an instance of UpdateTierResponse from a dict
update_tier_response_from_dict = UpdateTierResponse.from_dict(update_tier_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



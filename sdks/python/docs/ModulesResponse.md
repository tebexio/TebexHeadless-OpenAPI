# ModulesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Module]**](Module.md) |  | 

## Example

```python
from TebexHeadless.models.modules_response import ModulesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ModulesResponse from a JSON string
modules_response_instance = ModulesResponse.from_json(json)
# print the JSON string representation of the object
print(ModulesResponse.to_json())

# convert the object into a dict
modules_response_dict = modules_response_instance.to_dict()
# create an instance of ModulesResponse from a dict
modules_response_from_dict = ModulesResponse.from_dict(modules_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



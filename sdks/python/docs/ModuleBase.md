# ModuleBase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**type** | **str** | Discriminator for module kind. | 
**start_time** | **datetime** |  | 
**end_time** | **datetime** | Nullable; when null the module is ongoing. | [optional] 
**data** | **object** | Type-specific payload. | 

## Example

```python
from TebexHeadless.models.module_base import ModuleBase

# TODO update the JSON string below
json = "{}"
# create an instance of ModuleBase from a JSON string
module_base_instance = ModuleBase.from_json(json)
# print the JSON string representation of the object
print(ModuleBase.to_json())

# convert the object into a dict
module_base_dict = module_base_instance.to_dict()
# create an instance of ModuleBase from a dict
module_base_from_dict = ModuleBase.from_dict(module_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



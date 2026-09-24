# TextboxModule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**type** | **object** |  | 
**start_time** | **datetime** |  | 
**end_time** | **datetime** | Nullable; when null the module is ongoing. | [optional] 
**data** | [**TextboxData**](TextboxData.md) |  | 

## Example

```python
from TebexHeadless.models.textbox_module import TextboxModule

# TODO update the JSON string below
json = "{}"
# create an instance of TextboxModule from a JSON string
textbox_module_instance = TextboxModule.from_json(json)
# print the JSON string representation of the object
print(TextboxModule.to_json())

# convert the object into a dict
textbox_module_dict = textbox_module_instance.to_dict()
# create an instance of TextboxModule from a dict
textbox_module_from_dict = TextboxModule.from_dict(textbox_module_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



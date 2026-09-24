# ServerStatusModule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**type** | **object** |  | 
**start_time** | **datetime** |  | 
**end_time** | **datetime** | Nullable; when null the module is ongoing. | [optional] 
**data** | [**ServerStatusData**](ServerStatusData.md) |  | 

## Example

```python
from TebexHeadless.models.server_status_module import ServerStatusModule

# TODO update the JSON string below
json = "{}"
# create an instance of ServerStatusModule from a JSON string
server_status_module_instance = ServerStatusModule.from_json(json)
# print the JSON string representation of the object
print(ServerStatusModule.to_json())

# convert the object into a dict
server_status_module_dict = server_status_module_instance.to_dict()
# create an instance of ServerStatusModule from a dict
server_status_module_from_dict = ServerStatusModule.from_dict(server_status_module_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



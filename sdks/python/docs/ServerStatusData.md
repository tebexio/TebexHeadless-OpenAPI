# ServerStatusData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | **str** |  | 
**hostname** | **str** |  | 
**port** | **int** |  | 
**online** | **bool** |  | 
**players** | [**Players**](Players.md) |  | 

## Example

```python
from TebexHeadless.models.server_status_data import ServerStatusData

# TODO update the JSON string below
json = "{}"
# create an instance of ServerStatusData from a JSON string
server_status_data_instance = ServerStatusData.from_json(json)
# print the JSON string representation of the object
print(ServerStatusData.to_json())

# convert the object into a dict
server_status_data_dict = server_status_data_instance.to_dict()
# create an instance of ServerStatusData from a dict
server_status_data_from_dict = ServerStatusData.from_dict(server_status_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



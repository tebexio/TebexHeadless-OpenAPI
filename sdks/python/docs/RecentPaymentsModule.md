# RecentPaymentsModule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**type** | **object** |  | 
**start_time** | **datetime** |  | 
**end_time** | **datetime** | Nullable; when null the module is ongoing. | [optional] 
**data** | [**RecentPaymentsData**](RecentPaymentsData.md) |  | 

## Example

```python
from TebexHeadless.models.recent_payments_module import RecentPaymentsModule

# TODO update the JSON string below
json = "{}"
# create an instance of RecentPaymentsModule from a JSON string
recent_payments_module_instance = RecentPaymentsModule.from_json(json)
# print the JSON string representation of the object
print(RecentPaymentsModule.to_json())

# convert the object into a dict
recent_payments_module_dict = recent_payments_module_instance.to_dict()
# create an instance of RecentPaymentsModule from a dict
recent_payments_module_from_dict = RecentPaymentsModule.from_dict(recent_payments_module_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



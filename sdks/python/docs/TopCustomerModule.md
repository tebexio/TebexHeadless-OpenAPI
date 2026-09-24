# TopCustomerModule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**type** | **object** |  | 
**start_time** | **datetime** |  | 
**end_time** | **datetime** | Nullable; when null the module is ongoing. | [optional] 
**data** | [**TopCustomerData**](TopCustomerData.md) |  | 

## Example

```python
from TebexHeadless.models.top_customer_module import TopCustomerModule

# TODO update the JSON string below
json = "{}"
# create an instance of TopCustomerModule from a JSON string
top_customer_module_instance = TopCustomerModule.from_json(json)
# print the JSON string representation of the object
print(TopCustomerModule.to_json())

# convert the object into a dict
top_customer_module_dict = top_customer_module_instance.to_dict()
# create an instance of TopCustomerModule from a dict
top_customer_module_from_dict = TopCustomerModule.from_dict(top_customer_module_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



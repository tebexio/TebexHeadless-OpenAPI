# TopCustomerData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | **str** |  | 
**username** | **str** |  | 
**username_id** | **str** | User identifier. | 
**total** | **float** | Optional, present depending on module configuration. | [optional] 

## Example

```python
from TebexHeadless.models.top_customer_data import TopCustomerData

# TODO update the JSON string below
json = "{}"
# create an instance of TopCustomerData from a JSON string
top_customer_data_instance = TopCustomerData.from_json(json)
# print the JSON string representation of the object
print(TopCustomerData.to_json())

# convert the object into a dict
top_customer_data_dict = top_customer_data_instance.to_dict()
# create an instance of TopCustomerData from a dict
top_customer_data_from_dict = TopCustomerData.from_dict(top_customer_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



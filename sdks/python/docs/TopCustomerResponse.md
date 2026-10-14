# TopCustomerResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**TopCustomer**](TopCustomer.md) |  | 

## Example

```python
from TebexHeadless.models.top_customer_response import TopCustomerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TopCustomerResponse from a JSON string
top_customer_response_instance = TopCustomerResponse.from_json(json)
# print the JSON string representation of the object
print(TopCustomerResponse.to_json())

# convert the object into a dict
top_customer_response_dict = top_customer_response_instance.to_dict()
# create an instance of TopCustomerResponse from a dict
top_customer_response_from_dict = TopCustomerResponse.from_dict(top_customer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



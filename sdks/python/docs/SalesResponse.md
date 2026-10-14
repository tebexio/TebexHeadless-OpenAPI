# SalesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Sale]**](Sale.md) | Active sales, in control panel order. Empty when there are none. | 

## Example

```python
from TebexHeadless.models.sales_response import SalesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SalesResponse from a JSON string
sales_response_instance = SalesResponse.from_json(json)
# print the JSON string representation of the object
print(SalesResponse.to_json())

# convert the object into a dict
sales_response_dict = sales_response_instance.to_dict()
# create an instance of SalesResponse from a dict
sales_response_from_dict = SalesResponse.from_dict(sales_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



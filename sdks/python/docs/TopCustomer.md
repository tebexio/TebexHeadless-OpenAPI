# TopCustomer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** |  | 
**username_id** | **str** |  | 
**avatar_url** | **str** |  | 
**total** | **float** | Amount spent in the period, in the account&#39;s currency, net of tax. | 
**currency** | **str** |  | 
**period** | **str** | The period requested. | 

## Example

```python
from TebexHeadless.models.top_customer import TopCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of TopCustomer from a JSON string
top_customer_instance = TopCustomer.from_json(json)
# print the JSON string representation of the object
print(TopCustomer.to_json())

# convert the object into a dict
top_customer_dict = top_customer_instance.to_dict()
# create an instance of TopCustomer from a dict
top_customer_from_dict = TopCustomer.from_dict(top_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RecentPaymentsData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | **str** |  | 
**payments** | [**List[RecentPayment]**](RecentPayment.md) |  | 

## Example

```python
from TebexHeadless.models.recent_payments_data import RecentPaymentsData

# TODO update the JSON string below
json = "{}"
# create an instance of RecentPaymentsData from a JSON string
recent_payments_data_instance = RecentPaymentsData.from_json(json)
# print the JSON string representation of the object
print(RecentPaymentsData.to_json())

# convert the object into a dict
recent_payments_data_dict = recent_payments_data_instance.to_dict()
# create an instance of RecentPaymentsData from a dict
recent_payments_data_from_dict = RecentPaymentsData.from_dict(recent_payments_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



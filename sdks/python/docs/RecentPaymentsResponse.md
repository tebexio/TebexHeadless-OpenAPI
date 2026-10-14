# RecentPaymentsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[RecentPaymentEntry]**](RecentPaymentEntry.md) | Recent payments, newest first. Empty when there are none. | 

## Example

```python
from TebexHeadless.models.recent_payments_response import RecentPaymentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RecentPaymentsResponse from a JSON string
recent_payments_response_instance = RecentPaymentsResponse.from_json(json)
# print the JSON string representation of the object
print(RecentPaymentsResponse.to_json())

# convert the object into a dict
recent_payments_response_dict = recent_payments_response_instance.to_dict()
# create an instance of RecentPaymentsResponse from a dict
recent_payments_response_from_dict = RecentPaymentsResponse.from_dict(recent_payments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



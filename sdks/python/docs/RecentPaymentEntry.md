# RecentPaymentEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**username** | **str** |  | 
**username_id** | **str** |  | 
**avatar_url** | **str** |  | 
**package_name** | **str** | The first package on the payment. If the payment holds more, it is suffixed, e.g. \&quot;+ 1 more\&quot;. | 
**created_at** | **datetime** |  | 
**price** | **float** |  | 
**currency** | **str** |  | 

## Example

```python
from TebexHeadless.models.recent_payment_entry import RecentPaymentEntry

# TODO update the JSON string below
json = "{}"
# create an instance of RecentPaymentEntry from a JSON string
recent_payment_entry_instance = RecentPaymentEntry.from_json(json)
# print the JSON string representation of the object
print(RecentPaymentEntry.to_json())

# convert the object into a dict
recent_payment_entry_dict = recent_payment_entry_instance.to_dict()
# create an instance of RecentPaymentEntry from a dict
recent_payment_entry_from_dict = RecentPaymentEntry.from_dict(recent_payment_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



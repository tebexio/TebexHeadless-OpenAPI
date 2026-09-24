# RecentPayment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** |  | 
**username_id** | **str** |  | 
**package** | [**RecentPaymentPackage**](RecentPaymentPackage.md) |  | 
**created_at** | **datetime** | Optional, present depending on module configuration. | [optional] 
**price** | **float** | Optional, present depending on module configuration. | [optional] 
**currency** | **str** | Optional, present depending on module configuration. | [optional] 

## Example

```python
from TebexHeadless.models.recent_payment import RecentPayment

# TODO update the JSON string below
json = "{}"
# create an instance of RecentPayment from a JSON string
recent_payment_instance = RecentPayment.from_json(json)
# print the JSON string representation of the object
print(RecentPayment.to_json())

# convert the object into a dict
recent_payment_dict = recent_payment_instance.to_dict()
# create an instance of RecentPayment from a dict
recent_payment_from_dict = RecentPayment.from_dict(recent_payment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# PaymentGoalModule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**type** | **object** |  | 
**start_time** | **datetime** |  | 
**end_time** | **datetime** | Nullable; when null the module is ongoing. | [optional] 
**data** | [**PaymentGoalData**](PaymentGoalData.md) |  | 

## Example

```python
from TebexHeadless.models.payment_goal_module import PaymentGoalModule

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentGoalModule from a JSON string
payment_goal_module_instance = PaymentGoalModule.from_json(json)
# print the JSON string representation of the object
print(PaymentGoalModule.to_json())

# convert the object into a dict
payment_goal_module_dict = payment_goal_module_instance.to_dict()
# create an instance of PaymentGoalModule from a dict
payment_goal_module_from_dict = PaymentGoalModule.from_dict(payment_goal_module_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



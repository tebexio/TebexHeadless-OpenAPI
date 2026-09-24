# PaymentGoalData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | **str** |  | 
**percentage** | **float** |  | 
**bar_style** | **str** |  | 
**bar_animated** | **bool** |  | 
**total** | **float** | Optional, present depending on module configuration. | [optional] 
**target** | **float** | Optional, present depending on module configuration. | [optional] 

## Example

```python
from TebexHeadless.models.payment_goal_data import PaymentGoalData

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentGoalData from a JSON string
payment_goal_data_instance = PaymentGoalData.from_json(json)
# print the JSON string representation of the object
print(PaymentGoalData.to_json())

# convert the object into a dict
payment_goal_data_dict = payment_goal_data_instance.to_dict()
# create an instance of PaymentGoalData from a dict
payment_goal_data_from_dict = PaymentGoalData.from_dict(payment_goal_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



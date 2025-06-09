# Tier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**created_at** | **datetime** | The date and time when the tier became active | [optional] 
**username_id** | **str** | The user&#39;s username ID. For Steam, this is a numeric representation of their Steam64ID | [optional] 
**package** | [**Package**](Package.md) |  | [optional] 
**active** | **bool** | True if the tier is currently active. | [optional] 
**recurring_payment_reference** | **str** | The ID of the recurring payment this tier is attached to. | [optional] 
**next_payment_date** | **datetime** | The date and time of the next payment for this tier. | [optional] 
**status** | [**TierStatus**](TierStatus.md) |  | [optional] 
**pending_downgrade_package** | [**TierPendingDowngradePackage**](TierPendingDowngradePackage.md) |  | [optional] 

## Example

```python
from TebexHeadless.models.tier import Tier

# TODO update the JSON string below
json = "{}"
# create an instance of Tier from a JSON string
tier_instance = Tier.from_json(json)
# print the JSON string representation of the object
print(Tier.to_json())

# convert the object into a dict
tier_dict = tier_instance.to_dict()
# create an instance of Tier from a dict
tier_from_dict = Tier.from_dict(tier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



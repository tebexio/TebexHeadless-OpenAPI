# TierPendingDowngradePackage

The package this tier is downgrading to if a downgrade is pending.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from TebexHeadless.models.tier_pending_downgrade_package import TierPendingDowngradePackage

# TODO update the JSON string below
json = "{}"
# create an instance of TierPendingDowngradePackage from a JSON string
tier_pending_downgrade_package_instance = TierPendingDowngradePackage.from_json(json)
# print the JSON string representation of the object
print(TierPendingDowngradePackage.to_json())

# convert the object into a dict
tier_pending_downgrade_package_dict = tier_pending_downgrade_package_instance.to_dict()
# create an instance of TierPendingDowngradePackage from a dict
tier_pending_downgrade_package_from_dict = TierPendingDowngradePackage.from_dict(tier_pending_downgrade_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



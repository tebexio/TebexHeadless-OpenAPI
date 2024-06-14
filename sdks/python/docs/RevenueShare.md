# RevenueShare


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wallet_ref** | **str** |  | [optional] 
**amount** | **float** | A float (decimal) value representing the amount of this payment in your account currency that is credited to the &#x60;wallet_ref&#x60; | [optional] 
**gateway_fee_percent** | **float** | A float (decimal) value representing the percentage of the gateway fee that should be dedicated from this wallet’s revenue share. This optional value can be anywhere between 0 - 100. | [optional] 

## Example

```python
from TebexHeadless.models.revenue_share import RevenueShare

# TODO update the JSON string below
json = "{}"
# create an instance of RevenueShare from a JSON string
revenue_share_instance = RevenueShare.from_json(json)
# print the JSON string representation of the object
print(RevenueShare.to_json())

# convert the object into a dict
revenue_share_dict = revenue_share_instance.to_dict()
# create an instance of RevenueShare from a dict
revenue_share_from_dict = RevenueShare.from_dict(revenue_share_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



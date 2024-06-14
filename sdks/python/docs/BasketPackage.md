# BasketPackage

A package within an existing basket.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**qty** | **int** | The quantity of &#x60;package&#x60; in this basket. This is not the total quantity of overall items in the basket. | [optional] 
**type** | **str** | The type of payment, either &#x60;single&#x60; for one-time payments or &#x60;subscription&#x60;. | [optional] 
**revenue_share** | [**List[RevenueShare]**](RevenueShare.md) | An array of payment destination objects describing how the purchase should be split between multiple wallets. **Only available with pre-agreement from Tebex.** | [optional] 

## Example

```python
from TebexHeadless.models.basket_package import BasketPackage

# TODO update the JSON string below
json = "{}"
# create an instance of BasketPackage from a JSON string
basket_package_instance = BasketPackage.from_json(json)
# print the JSON string representation of the object
print(BasketPackage.to_json())

# convert the object into a dict
basket_package_dict = basket_package_instance.to_dict()
# create an instance of BasketPackage from a dict
basket_package_from_dict = BasketPackage.from_dict(basket_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



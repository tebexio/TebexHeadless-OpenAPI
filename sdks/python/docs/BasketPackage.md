# BasketPackage

A package within an existing basket.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The package ID | [optional] 
**description** | **str** |  | [optional] 
**image** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**slug** | **str** |  | [optional] 
**in_basket** | [**BasketPackageInBasket**](BasketPackageInBasket.md) |  | [optional] 
**type** | **str** | The type of payment, either &#x60;single&#x60; for one-time payments or &#x60;subscription&#x60;. | [optional] 
**revenue_share** | [**List[RevenueShare]**](RevenueShare.md) | An array of payment destination objects describing how the purchase should be split between multiple wallets. **Only available with pre-agreement from Tebex.** | [optional] 
**is_recurring** | **bool** | Whether this package is a recurring (subscription) purchase. | [optional] 

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



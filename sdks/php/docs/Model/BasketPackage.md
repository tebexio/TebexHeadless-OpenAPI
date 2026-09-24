# # BasketPackage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The package ID | [optional]
**description** | **string** |  | [optional]
**image** | **string** |  | [optional]
**name** | **string** |  | [optional]
**slug** | **string** |  | [optional]
**in_basket** | [**\TebexHeadless\Model\BasketPackageInBasket**](BasketPackageInBasket.md) |  | [optional]
**type** | **string** | The type of payment, either &#x60;single&#x60; for one-time payments or &#x60;subscription&#x60;. | [optional]
**revenue_share** | [**\TebexHeadless\Model\RevenueShare[]**](RevenueShare.md) | An array of payment destination objects describing how the purchase should be split between multiple wallets. **Only available with pre-agreement from Tebex.** | [optional]
**is_recurring** | **bool** | Whether this package is a recurring (subscription) purchase. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)

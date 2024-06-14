# # BasketPackage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**qty** | **int** | The quantity of &#x60;package&#x60; in this basket. This is not the total quantity of overall items in the basket. | [optional]
**type** | **string** | The type of payment, either &#x60;single&#x60; for one-time payments or &#x60;subscription&#x60;. | [optional]
**revenue_share** | [**\TebexHeadless\Model\RevenueShare[]**](RevenueShare.md) | An array of payment destination objects describing how the purchase should be split between multiple wallets. **Only available with pre-agreement from Tebex.** | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)

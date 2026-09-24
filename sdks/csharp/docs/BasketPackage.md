# TebexHeadless.Model.BasketPackage
A package within an existing basket.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int** | The package ID | [optional] 
**Description** | **string** |  | [optional] 
**Image** | **string** |  | [optional] 
**Name** | **string** |  | [optional] 
**Slug** | **string** |  | [optional] 
**InBasket** | [**BasketPackageInBasket**](BasketPackageInBasket.md) |  | [optional] 
**Type** | **string** | The type of payment, either &#x60;single&#x60; for one-time payments or &#x60;subscription&#x60;. | [optional] 
**RevenueShare** | [**List&lt;RevenueShare&gt;**](RevenueShare.md) | An array of payment destination objects describing how the purchase should be split between multiple wallets. **Only available with pre-agreement from Tebex.** | [optional] 
**IsRecurring** | **bool** | Whether this package is a recurring (subscription) purchase. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


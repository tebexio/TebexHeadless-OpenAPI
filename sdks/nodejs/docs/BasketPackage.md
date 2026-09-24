# TebexHeadlessApi.BasketPackage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The package ID | [optional] 
**description** | **String** |  | [optional] 
**image** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**slug** | **String** |  | [optional] 
**inBasket** | [**BasketPackageInBasket**](BasketPackageInBasket.md) |  | [optional] 
**type** | **String** | The type of payment, either &#x60;single&#x60; for one-time payments or &#x60;subscription&#x60;. | [optional] 
**revenueShare** | [**[RevenueShare]**](RevenueShare.md) | An array of payment destination objects describing how the purchase should be split between multiple wallets. **Only available with pre-agreement from Tebex.** | [optional] 
**isRecurring** | **Boolean** | Whether this package is a recurring (subscription) purchase. | [optional] 



## Enum: TypeEnum


* `single` (value: `"single"`)

* `subscription` (value: `"subscription"`)





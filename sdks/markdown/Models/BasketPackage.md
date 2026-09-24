# BasketPackage
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** | The package ID | [optional] [default to null] |
| **description** | **String** |  | [optional] [default to null] |
| **image** | **String** |  | [optional] [default to null] |
| **name** | **String** |  | [optional] [default to null] |
| **slug** | **String** |  | [optional] [default to null] |
| **in\_basket** | [**BasketPackage_in_basket**](BasketPackage_in_basket.md) |  | [optional] [default to null] |
| **type** | **String** | The type of payment, either &#x60;single&#x60; for one-time payments or &#x60;subscription&#x60;. | [optional] [default to null] |
| **revenue\_share** | [**List**](RevenueShare.md) | An array of payment destination objects describing how the purchase should be split between multiple wallets. **Only available with pre-agreement from Tebex.** | [optional] [default to null] |
| **is\_recurring** | **Boolean** | Whether this package is a recurring (subscription) purchase. | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


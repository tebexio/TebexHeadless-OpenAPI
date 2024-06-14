# createBasket_request
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **complete\_url** | **String** | A URL the user can return to when checkout is completed. | [optional] [default to null] |
| **cancel\_url** | **String** | A URL the user can return to when cancelling checkout. | [optional] [default to null] |
| **custom** | [**Object**](.md) | Custom data you wish to associate with the basket. This data will be included with webhook responses and GET requests associated with the Basket. | [optional] [default to null] |
| **complete\_auto\_redirect** | **Boolean** | True if the user should automatically be redirected to the relevant complete/cancel URL | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


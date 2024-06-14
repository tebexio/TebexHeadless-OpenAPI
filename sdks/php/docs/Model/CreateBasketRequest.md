# # CreateBasketRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complete_url** | **string** | A URL the user can return to when checkout is completed. | [optional]
**cancel_url** | **string** | A URL the user can return to when cancelling checkout. | [optional]
**custom** | **object** | Custom data you wish to associate with the basket. This data will be included with webhook responses and GET requests associated with the Basket. | [optional]
**complete_auto_redirect** | **bool** | True if the user should automatically be redirected to the relevant complete/cancel URL | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)

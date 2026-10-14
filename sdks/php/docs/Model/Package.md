# # Package

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The package&#39;s numeric ID. For external packages this is synthetic; use &#x60;ident&#x60; instead. | [optional]
**name** | **string** |  | [optional]
**description** | **string** |  | [optional]
**image** | **string** |  | [optional]
**type** | **string** |  | [optional]
**category** | [**\TebexHeadless\Model\PackageCategory**](PackageCategory.md) |  | [optional]
**base_price** | **float** |  | [optional]
**sales_tax** | **float** |  | [optional]
**total_price** | **float** |  | [optional]
**currency** | **string** |  | [optional]
**prorate_price** | **float** | If this package is part of a tiered category, this is the difference on upgrade pricing from the current active tier. | [optional]
**discount** | **float** |  | [optional]
**disable_quantity** | **bool** |  | [optional]
**disable_gifting** | **bool** |  | [optional]
**expiration_date** | **\DateTime** |  | [optional]
**media** | [**\TebexHeadless\Model\PackageMedia[]**](PackageMedia.md) |  | [optional]
**order** | **int** |  | [optional]
**slug** | **string** |  | [optional]
**user_limit** | **int** |  | [optional]
**creator_meta_data** | **object** |  | [optional]
**options** | **string[]** |  | [optional]
**variables** | **string[]** |  | [optional]
**created_at** | **\DateTime** |  | [optional]
**updated_at** | **\DateTime** |  | [optional]
**ident** | **string** | The package&#39;s string identifier, returned on every package (standard, dynamic and external). Treat it as an opaque string: store it and send it back as-is to &#x60;getPackage&#x60; and &#x60;addBasketPackage&#x60;; don&#39;t build or parse it.  It has the form &#x60;{prefix}_{categoryId}_{id}&#x60;, where &#x60;prefix&#x60; is &#x60;pkg&#x60; (standard), &#x60;dyn&#x60; (dynamic, numeric id) or &#x60;ext&#x60; (external, e.g. &#x60;ext_10_{asset-uuid}&#x60; for INTRACT, with the provider&#39;s identifier URL-encoded). | [optional]
**vip_status** | **string** | The package&#39;s VIP status. Only &#x60;null&#x60; has been observed so far, so the non-null type is unconfirmed. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)

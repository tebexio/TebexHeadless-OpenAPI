# TebexHeadless.Model.Package

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int** | The package&#39;s numeric ID. For external packages this is synthetic; use &#x60;ident&#x60; instead. | [optional] 
**Name** | **string** |  | [optional] 
**Description** | **string** |  | [optional] 
**Image** | **string** |  | [optional] 
**Type** | **string** |  | [optional] 
**Category** | [**PackageCategory**](PackageCategory.md) |  | [optional] 
**BasePrice** | **float** |  | [optional] 
**SalesTax** | **float** |  | [optional] 
**TotalPrice** | **float** |  | [optional] 
**Currency** | **string** |  | [optional] 
**ProratePrice** | **float** | If this package is part of a tiered category, this is the difference on upgrade pricing from the current active tier. | [optional] 
**Discount** | **float** |  | [optional] 
**DisableQuantity** | **bool** |  | [optional] 
**DisableGifting** | **bool** |  | [optional] 
**ExpirationDate** | **DateTime** |  | [optional] 
**Media** | [**List&lt;PackageMedia&gt;**](PackageMedia.md) |  | [optional] 
**Order** | **int** |  | [optional] 
**Slug** | **string** |  | [optional] 
**UserLimit** | **int** |  | [optional] 
**CreatorMetaData** | **Object** |  | [optional] 
**Options** | **List&lt;string&gt;** |  | [optional] 
**Variables** | **List&lt;string&gt;** |  | [optional] 
**CreatedAt** | **DateTime** |  | [optional] 
**UpdatedAt** | **DateTime** |  | [optional] 
**Ident** | **string** | The package&#39;s string identifier, returned on every package (standard, dynamic and external). Treat it as an opaque string: store it and send it back as-is to &#x60;getPackage&#x60; and &#x60;addBasketPackage&#x60;; don&#39;t build or parse it.  It has the form &#x60;{prefix}_{categoryId}_{id}&#x60;, where &#x60;prefix&#x60; is &#x60;pkg&#x60; (standard), &#x60;dyn&#x60; (dynamic, numeric id) or &#x60;ext&#x60; (external, e.g. &#x60;ext_10_{asset-uuid}&#x60; for INTRACT, with the provider&#39;s identifier URL-encoded). | [optional] 
**VipStatus** | **string** | The package&#39;s VIP status. Only &#x60;null&#x60; has been observed so far, so the non-null type is unconfirmed. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


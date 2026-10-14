# TebexHeadlessApi.Package

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The package&#39;s numeric ID. For external packages this is synthetic; use &#x60;ident&#x60; instead. | [optional] 
**name** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**image** | **String** |  | [optional] 
**type** | **String** |  | [optional] 
**category** | [**PackageCategory**](PackageCategory.md) |  | [optional] 
**basePrice** | **Number** |  | [optional] 
**salesTax** | **Number** |  | [optional] 
**totalPrice** | **Number** |  | [optional] 
**currency** | **String** |  | [optional] 
**proratePrice** | **Number** | If this package is part of a tiered category, this is the difference on upgrade pricing from the current active tier. | [optional] 
**discount** | **Number** |  | [optional] 
**disableQuantity** | **Boolean** |  | [optional] 
**disableGifting** | **Boolean** |  | [optional] 
**expirationDate** | **Date** |  | [optional] 
**media** | [**[PackageMedia]**](PackageMedia.md) |  | [optional] 
**order** | **Number** |  | [optional] 
**slug** | **String** |  | [optional] 
**userLimit** | **Number** |  | [optional] 
**creatorMetaData** | **Object** |  | [optional] 
**options** | **[String]** |  | [optional] 
**variables** | **[String]** |  | [optional] 
**createdAt** | **Date** |  | [optional] 
**updatedAt** | **Date** |  | [optional] 
**ident** | **String** | The package&#39;s string identifier, returned on every package (standard, dynamic and external). Treat it as an opaque string: store it and send it back as-is to &#x60;getPackage&#x60; and &#x60;addBasketPackage&#x60;; don&#39;t build or parse it.  It has the form &#x60;{prefix}_{categoryId}_{id}&#x60;, where &#x60;prefix&#x60; is &#x60;pkg&#x60; (standard), &#x60;dyn&#x60; (dynamic, numeric id) or &#x60;ext&#x60; (external, e.g. &#x60;ext_10_{asset-uuid}&#x60; for INTRACT, with the provider&#39;s identifier URL-encoded). | [optional] 
**vipStatus** | **String** | The package&#39;s VIP status. Only &#x60;null&#x60; has been observed so far, so the non-null type is unconfirmed. | [optional] 



# Package
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** | The package&#39;s numeric ID. For external packages this is synthetic; use &#x60;ident&#x60; instead. | [optional] [default to null] |
| **name** | **String** |  | [optional] [default to null] |
| **description** | **String** |  | [optional] [default to null] |
| **image** | **String** |  | [optional] [default to null] |
| **type** | **String** |  | [optional] [default to null] |
| **category** | [**Package_category**](Package_category.md) |  | [optional] [default to null] |
| **base\_price** | **Float** |  | [optional] [default to null] |
| **sales\_tax** | **Float** |  | [optional] [default to null] |
| **total\_price** | **Float** |  | [optional] [default to null] |
| **currency** | **String** |  | [optional] [default to null] |
| **prorate\_price** | **Float** | If this package is part of a tiered category, this is the difference on upgrade pricing from the current active tier. | [optional] [default to null] |
| **discount** | **Float** |  | [optional] [default to null] |
| **disable\_quantity** | **Boolean** |  | [optional] [default to null] |
| **disable\_gifting** | **Boolean** |  | [optional] [default to null] |
| **expiration\_date** | **Date** |  | [optional] [default to null] |
| **media** | [**List**](PackageMedia.md) |  | [optional] [default to null] |
| **order** | **Integer** |  | [optional] [default to null] |
| **slug** | **String** |  | [optional] [default to null] |
| **user\_limit** | **Integer** |  | [optional] [default to null] |
| **creator\_meta\_data** | [**Object**](.md) |  | [optional] [default to null] |
| **options** | **List** |  | [optional] [default to null] |
| **variables** | **List** |  | [optional] [default to null] |
| **created\_at** | **Date** |  | [optional] [default to null] |
| **updated\_at** | **Date** |  | [optional] [default to null] |
| **ident** | **String** | The package&#39;s string identifier, returned on every package (standard, dynamic and external). Treat it as an opaque string: store it and send it back as-is to &#x60;getPackage&#x60; and &#x60;addBasketPackage&#x60;; don&#39;t build or parse it.  It has the form &#x60;{prefix}_{categoryId}_{id}&#x60;, where &#x60;prefix&#x60; is &#x60;pkg&#x60; (standard), &#x60;dyn&#x60; (dynamic, numeric id) or &#x60;ext&#x60; (external, e.g. &#x60;ext_10_{asset-uuid}&#x60; for INTRACT, with the provider&#39;s identifier URL-encoded). | [optional] [default to null] |
| **vip\_status** | **String** | The package&#39;s VIP status. Only &#x60;null&#x60; has been observed so far, so the non-null type is unconfirmed. | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


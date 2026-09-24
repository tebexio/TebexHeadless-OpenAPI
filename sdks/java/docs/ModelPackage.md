

# ModelPackage


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **Integer** |  |  [optional] |
|**name** | **String** |  |  [optional] |
|**description** | **String** |  |  [optional] |
|**image** | **String** |  |  [optional] |
|**type** | **String** |  |  [optional] |
|**category** | [**PackageCategory**](PackageCategory.md) |  |  [optional] |
|**basePrice** | **Float** |  |  [optional] |
|**salesTax** | **Float** |  |  [optional] |
|**totalPrice** | **Float** |  |  [optional] |
|**currency** | **String** |  |  [optional] |
|**proratePrice** | **Float** | If this package is part of a tiered category, this is the difference on upgrade pricing from the current active tier. |  [optional] |
|**discount** | **Float** |  |  [optional] |
|**disableQuantity** | **Boolean** |  |  [optional] |
|**disableGifting** | **Boolean** |  |  [optional] |
|**expirationDate** | **OffsetDateTime** |  |  [optional] |
|**media** | [**List&lt;PackageMedia&gt;**](PackageMedia.md) |  |  [optional] |
|**order** | **Integer** |  |  [optional] |
|**slug** | **String** |  |  [optional] |
|**userLimit** | **Integer** |  |  [optional] |
|**creatorMetaData** | **Object** |  |  [optional] |
|**options** | **List&lt;String&gt;** |  |  [optional] |
|**variables** | **List&lt;String&gt;** |  |  [optional] |
|**createdAt** | **OffsetDateTime** |  |  [optional] |
|**updatedAt** | **OffsetDateTime** |  |  [optional] |
|**ident** | **String** | The package&#39;s string identifier. |  [optional] |
|**vipStatus** | **String** | The package&#39;s VIP status. Only &#x60;null&#x60; has been observed so far, so the non-null type is unconfirmed. |  [optional] |




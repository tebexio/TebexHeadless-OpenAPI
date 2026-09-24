# TebexHeadless.Model.Package

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int** |  | [optional] 
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
**Ident** | **string** | The package&#39;s string identifier. | [optional] 
**VipStatus** | **string** | The package&#39;s VIP status. Only &#x60;null&#x60; has been observed so far, so the non-null type is unconfirmed. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


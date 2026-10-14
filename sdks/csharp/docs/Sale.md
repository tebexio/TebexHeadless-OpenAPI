# TebexHeadless.Model.Sale

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int** |  | 
**Name** | **string** |  | 
**StartsAt** | **DateTime** | Start of the sale, ISO 8601 in UTC. | 
**EndsAt** | **DateTime** | End of the sale, ISO 8601 in UTC. | 
**Discount** | [**SaleDiscount**](SaleDiscount.md) |  | 
**AppliesTo** | [**SaleAppliesTo**](SaleAppliesTo.md) |  | 
**Requirements** | [**List&lt;SaleRequirement&gt;**](SaleRequirement.md) | Conditions a customer must meet for the sale to apply. Empty when the sale has none. &#x60;minimum_basket_value&#x60; can appear alongside &#x60;purchased_packages&#x60; or &#x60;lifetime_spend&#x60;. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


# TebexHeadlessApi.Sale

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | 
**name** | **String** |  | 
**startsAt** | **Date** | Start of the sale, ISO 8601 in UTC. | 
**endsAt** | **Date** | End of the sale, ISO 8601 in UTC. | 
**discount** | [**SaleDiscount**](SaleDiscount.md) |  | 
**appliesTo** | [**SaleAppliesTo**](SaleAppliesTo.md) |  | 
**requirements** | [**[SaleRequirement]**](SaleRequirement.md) | Conditions a customer must meet for the sale to apply. Empty when the sale has none. &#x60;minimum_basket_value&#x60; can appear alongside &#x60;purchased_packages&#x60; or &#x60;lifetime_spend&#x60;. | 



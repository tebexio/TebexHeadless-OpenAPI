# TebexHeadless.Model.SaleRequirement
A condition for the sale. Fields present depend on `type`: - `purchased_packages`: `packages` and `match` (always `all`). `packages` is empty if every required package is hidden. - `lifetime_spend`: `amount` and `currency`. - `minimum_basket_value`: `amount` and `currency`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of requirement for the sale. Additional requirement types may be added later. Clients must ignore requirement types they do not know. | 
**Packages** | [**List&lt;SaleReference&gt;**](SaleReference.md) | Packages the customer must have purchased. Present for &#x60;purchased_packages&#x60;. | [optional] 
**Match** | **string** | Present for &#x60;purchased_packages&#x60;. Always &#x60;all&#x60;. | [optional] 
**Amount** | **decimal** | Present for &#x60;lifetime_spend&#x60; and &#x60;minimum_basket_value&#x60;. | [optional] 
**Currency** | **string** | Present for &#x60;lifetime_spend&#x60; and &#x60;minimum_basket_value&#x60;. The store currency. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


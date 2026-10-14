# TebexHeadlessApi.SaleRequirement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of requirement for the sale. Additional requirement types may be added later. Clients must ignore requirement types they do not know. | 
**packages** | [**[SaleReference]**](SaleReference.md) | Packages the customer must have purchased. Present for &#x60;purchased_packages&#x60;. | [optional] 
**match** | **String** | Present for &#x60;purchased_packages&#x60;. Always &#x60;all&#x60;. | [optional] 
**amount** | **Number** | Present for &#x60;lifetime_spend&#x60; and &#x60;minimum_basket_value&#x60;. | [optional] 
**currency** | **String** | Present for &#x60;lifetime_spend&#x60; and &#x60;minimum_basket_value&#x60;. The store currency. | [optional] 



## Enum: TypeEnum


* `purchased_packages` (value: `"purchased_packages"`)

* `lifetime_spend` (value: `"lifetime_spend"`)

* `minimum_basket_value` (value: `"minimum_basket_value"`)





## Enum: MatchEnum


* `all` (value: `"all"`)







# SaleRequirement

A condition for the sale. Fields present depend on `type`: - `purchased_packages`: `packages` and `match` (always `all`). `packages` is empty if every required package is hidden. - `lifetime_spend`: `amount` and `currency`. - `minimum_basket_value`: `amount` and `currency`.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**type** | [**TypeEnum**](#TypeEnum) | The type of requirement for the sale. Additional requirement types may be added later. Clients must ignore requirement types they do not know. |  |
|**packages** | [**List&lt;SaleReference&gt;**](SaleReference.md) | Packages the customer must have purchased. Present for &#x60;purchased_packages&#x60;. |  [optional] |
|**match** | [**MatchEnum**](#MatchEnum) | Present for &#x60;purchased_packages&#x60;. Always &#x60;all&#x60;. |  [optional] |
|**amount** | **BigDecimal** | Present for &#x60;lifetime_spend&#x60; and &#x60;minimum_basket_value&#x60;. |  [optional] |
|**currency** | **String** | Present for &#x60;lifetime_spend&#x60; and &#x60;minimum_basket_value&#x60;. The store currency. |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| PURCHASED_PACKAGES | &quot;purchased_packages&quot; |
| LIFETIME_SPEND | &quot;lifetime_spend&quot; |
| MINIMUM_BASKET_VALUE | &quot;minimum_basket_value&quot; |



## Enum: MatchEnum

| Name | Value |
|---- | -----|
| ALL | &quot;all&quot; |




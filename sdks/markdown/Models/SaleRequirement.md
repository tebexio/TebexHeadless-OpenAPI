# SaleRequirement
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **type** | **String** | The type of requirement for the sale. Additional requirement types may be added later. Clients must ignore requirement types they do not know. | [default to null] |
| **packages** | [**List**](SaleReference.md) | Packages the customer must have purchased. Present for &#x60;purchased_packages&#x60;. | [optional] [default to null] |
| **match** | **String** | Present for &#x60;purchased_packages&#x60;. Always &#x60;all&#x60;. | [optional] [default to null] |
| **amount** | **BigDecimal** | Present for &#x60;lifetime_spend&#x60; and &#x60;minimum_basket_value&#x60;. | [optional] [default to null] |
| **currency** | **String** | Present for &#x60;lifetime_spend&#x60; and &#x60;minimum_basket_value&#x60;. The store currency. | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


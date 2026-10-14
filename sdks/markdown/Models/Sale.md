# Sale
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** |  | [default to null] |
| **name** | **String** |  | [default to null] |
| **starts\_at** | **Date** | Start of the sale, ISO 8601 in UTC. | [default to null] |
| **ends\_at** | **Date** | End of the sale, ISO 8601 in UTC. | [default to null] |
| **discount** | [**SaleDiscount**](SaleDiscount.md) |  | [default to null] |
| **applies\_to** | [**SaleAppliesTo**](SaleAppliesTo.md) |  | [default to null] |
| **requirements** | [**List**](SaleRequirement.md) | Conditions a customer must meet for the sale to apply. Empty when the sale has none. &#x60;minimum_basket_value&#x60; can appear alongside &#x60;purchased_packages&#x60; or &#x60;lifetime_spend&#x60;. | [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


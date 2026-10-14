# # Sale

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  |
**name** | **string** |  |
**starts_at** | **\DateTime** | Start of the sale, ISO 8601 in UTC. |
**ends_at** | **\DateTime** | End of the sale, ISO 8601 in UTC. |
**discount** | [**\TebexHeadless\Model\SaleDiscount**](SaleDiscount.md) |  |
**applies_to** | [**\TebexHeadless\Model\SaleAppliesTo**](SaleAppliesTo.md) |  |
**requirements** | [**\TebexHeadless\Model\SaleRequirement[]**](SaleRequirement.md) | Conditions a customer must meet for the sale to apply. Empty when the sale has none. &#x60;minimum_basket_value&#x60; can appear alongside &#x60;purchased_packages&#x60; or &#x60;lifetime_spend&#x60;. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)

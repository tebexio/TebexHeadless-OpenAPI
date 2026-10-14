# # SaleRequirement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The type of requirement for the sale. Additional requirement types may be added later. Clients must ignore requirement types they do not know. |
**packages** | [**\TebexHeadless\Model\SaleReference[]**](SaleReference.md) | Packages the customer must have purchased. Present for &#x60;purchased_packages&#x60;. | [optional]
**match** | **string** | Present for &#x60;purchased_packages&#x60;. Always &#x60;all&#x60;. | [optional]
**amount** | **float** | Present for &#x60;lifetime_spend&#x60; and &#x60;minimum_basket_value&#x60;. | [optional]
**currency** | **string** | Present for &#x60;lifetime_spend&#x60; and &#x60;minimum_basket_value&#x60;. The store currency. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)

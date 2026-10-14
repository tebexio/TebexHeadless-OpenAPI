# TebexHeadless.Model.SaleAppliesTo
What the sale applies to. Only the array matching `type` is filled; the others are empty. When `type` is `all`, only `excluded_packages` may be filled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** |  | 
**Packages** | [**List&lt;SaleReference&gt;**](SaleReference.md) | Filled when &#x60;type&#x60; is &#x60;package&#x60;. | 
**Categories** | [**List&lt;SaleReference&gt;**](SaleReference.md) | Filled when &#x60;type&#x60; is &#x60;category&#x60;. | 
**VariableOptions** | [**List&lt;SaleReference&gt;**](SaleReference.md) | Filled when &#x60;type&#x60; is &#x60;variable_option&#x60;. | 
**ExcludedPackages** | [**List&lt;SaleReference&gt;**](SaleReference.md) | Packages excluded from the sale. Filled only when &#x60;type&#x60; is &#x60;all&#x60;. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


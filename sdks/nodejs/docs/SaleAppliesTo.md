# TebexHeadlessApi.SaleAppliesTo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | 
**packages** | [**[SaleReference]**](SaleReference.md) | Filled when &#x60;type&#x60; is &#x60;package&#x60;. | 
**categories** | [**[SaleReference]**](SaleReference.md) | Filled when &#x60;type&#x60; is &#x60;category&#x60;. | 
**variableOptions** | [**[SaleReference]**](SaleReference.md) | Filled when &#x60;type&#x60; is &#x60;variable_option&#x60;. | 
**excludedPackages** | [**[SaleReference]**](SaleReference.md) | Packages excluded from the sale. Filled only when &#x60;type&#x60; is &#x60;all&#x60;. | 



## Enum: TypeEnum


* `all` (value: `"all"`)

* `package` (value: `"package"`)

* `category` (value: `"category"`)

* `variable_option` (value: `"variable_option"`)





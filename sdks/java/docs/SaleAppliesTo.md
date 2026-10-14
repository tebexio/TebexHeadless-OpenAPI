

# SaleAppliesTo

What the sale applies to. Only the array matching `type` is filled; the others are empty. When `type` is `all`, only `excluded_packages` may be filled.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**type** | [**TypeEnum**](#TypeEnum) |  |  |
|**packages** | [**List&lt;SaleReference&gt;**](SaleReference.md) | Filled when &#x60;type&#x60; is &#x60;package&#x60;. |  |
|**categories** | [**List&lt;SaleReference&gt;**](SaleReference.md) | Filled when &#x60;type&#x60; is &#x60;category&#x60;. |  |
|**variableOptions** | [**List&lt;SaleReference&gt;**](SaleReference.md) | Filled when &#x60;type&#x60; is &#x60;variable_option&#x60;. |  |
|**excludedPackages** | [**List&lt;SaleReference&gt;**](SaleReference.md) | Packages excluded from the sale. Filled only when &#x60;type&#x60; is &#x60;all&#x60;. |  |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| ALL | &quot;all&quot; |
| PACKAGE | &quot;package&quot; |
| CATEGORY | &quot;category&quot; |
| VARIABLE_OPTION | &quot;variable_option&quot; |




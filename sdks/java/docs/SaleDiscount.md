

# SaleDiscount


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**type** | [**TypeEnum**](#TypeEnum) |  |  |
|**percentage** | **BigDecimal** | Set only when &#x60;type&#x60; is &#x60;percentage&#x60;, otherwise null. |  |
|**amount** | **BigDecimal** | Set only when &#x60;type&#x60; is &#x60;amount&#x60;, otherwise null. |  |
|**currency** | **String** | The store currency. |  |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| PERCENTAGE | &quot;percentage&quot; |
| AMOUNT | &quot;amount&quot; |
| COMMANDS | &quot;commands&quot; |




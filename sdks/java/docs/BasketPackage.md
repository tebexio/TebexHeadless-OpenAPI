

# BasketPackage

A package within an existing basket.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**qty** | **Integer** | The quantity of &#x60;package&#x60; in this basket. This is not the total quantity of overall items in the basket. |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) | The type of payment, either &#x60;single&#x60; for one-time payments or &#x60;subscription&#x60;. |  [optional] |
|**revenueShare** | [**List&lt;RevenueShare&gt;**](RevenueShare.md) | An array of payment destination objects describing how the purchase should be split between multiple wallets. **Only available with pre-agreement from Tebex.** |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| SINGLE | &quot;single&quot; |
| SUBSCRIPTION | &quot;subscription&quot; |




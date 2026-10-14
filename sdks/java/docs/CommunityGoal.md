

# CommunityGoal


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **Integer** |  |  |
|**name** | **String** |  |  |
|**description** | **String** |  |  |
|**imageUrl** | **URI** |  |  |
|**target** | **BigDecimal** | The goal amount, in &#x60;currency&#x60;. |  |
|**current** | **BigDecimal** | The amount raised so far, in &#x60;currency&#x60;. |  |
|**currency** | **String** | The account currency. |  |
|**percentage** | **BigDecimal** |  |  |
|**repeatable** | **Boolean** |  |  |
|**timesAchieved** | **Integer** |  |  |
|**lastAchieved** | **OffsetDateTime** |  |  |
|**status** | [**StatusEnum**](#StatusEnum) |  |  |
|**createdAt** | **OffsetDateTime** |  |  |
|**updatedAt** | **OffsetDateTime** |  |  |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| ACTIVE | &quot;active&quot; |
| COMPLETED | &quot;completed&quot; |
| DISABLED | &quot;disabled&quot; |




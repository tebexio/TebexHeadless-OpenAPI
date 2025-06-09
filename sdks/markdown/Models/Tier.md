# Tier
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** |  | [optional] [default to null] |
| **created\_at** | **Date** | The date and time when the tier became active | [optional] [default to null] |
| **username\_id** | **String** | The user&#39;s username ID. For Steam, this is a numeric representation of their Steam64ID | [optional] [default to null] |
| **package** | [**Package**](Package.md) |  | [optional] [default to null] |
| **active** | **Boolean** | True if the tier is currently active. | [optional] [default to null] |
| **recurring\_payment\_reference** | **String** | The ID of the recurring payment this tier is attached to. | [optional] [default to null] |
| **next\_payment\_date** | **Date** | The date and time of the next payment for this tier. | [optional] [default to null] |
| **status** | [**Tier_status**](Tier_status.md) |  | [optional] [default to null] |
| **pending\_downgrade\_package** | [**Tier_pending_downgrade_package**](Tier_pending_downgrade_package.md) |  | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


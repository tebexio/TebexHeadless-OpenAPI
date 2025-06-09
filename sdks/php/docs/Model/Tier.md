# # Tier

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional]
**created_at** | **\DateTime** | The date and time when the tier became active | [optional]
**username_id** | **string** | The user&#39;s username ID. For Steam, this is a numeric representation of their Steam64ID | [optional]
**package** | [**\TebexHeadless\Model\Package**](Package.md) |  | [optional]
**active** | **bool** | True if the tier is currently active. | [optional]
**recurring_payment_reference** | **string** | The ID of the recurring payment this tier is attached to. | [optional]
**next_payment_date** | **\DateTime** | The date and time of the next payment for this tier. | [optional]
**status** | [**\TebexHeadless\Model\TierStatus**](TierStatus.md) |  | [optional]
**pending_downgrade_package** | [**\TebexHeadless\Model\TierPendingDowngradePackage**](TierPendingDowngradePackage.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)

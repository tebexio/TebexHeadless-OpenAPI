# TebexHeadless.Model.Tier

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **decimal** |  | [optional] 
**CreatedAt** | **DateTime** | The date and time when the tier became active | [optional] 
**UsernameId** | **string** | The user&#39;s username ID. For Steam, this is a numeric representation of their Steam64ID | [optional] 
**Package** | [**Package**](Package.md) |  | [optional] 
**Active** | **bool** | True if the tier is currently active. | [optional] 
**RecurringPaymentReference** | **string** | The ID of the recurring payment this tier is attached to. | [optional] 
**NextPaymentDate** | **DateTime** | The date and time of the next payment for this tier. | [optional] 
**Status** | [**TierStatus**](TierStatus.md) |  | [optional] 
**PendingDowngradePackage** | [**TierPendingDowngradePackage**](TierPendingDowngradePackage.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)




# Tier


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **Integer** |  |  [optional] |
|**createdAt** | **OffsetDateTime** | The date and time when the tier became active |  [optional] |
|**usernameId** | **String** | The user&#39;s username ID. For Steam, this is a numeric representation of their Steam64ID |  [optional] |
|**_package** | [**ModelPackage**](ModelPackage.md) |  |  [optional] |
|**active** | **Boolean** | True if the tier is currently active. |  [optional] |
|**recurringPaymentReference** | **String** | The ID of the recurring payment this tier is attached to. |  [optional] |
|**nextPaymentDate** | **OffsetDateTime** | The date and time of the next payment for this tier. |  [optional] |
|**status** | [**TierStatus**](TierStatus.md) |  |  [optional] |
|**pendingDowngradePackage** | [**TierPendingDowngradePackage**](TierPendingDowngradePackage.md) |  |  [optional] |




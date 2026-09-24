

# ModuleBase


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **Long** |  |  |
|**type** | **String** | Discriminator for module kind. |  |
|**startTime** | **OffsetDateTime** |  |  |
|**endTime** | **OffsetDateTime** | Nullable; when null the module is ongoing. |  [optional] |
|**data** | **Object** | Type-specific payload. |  |




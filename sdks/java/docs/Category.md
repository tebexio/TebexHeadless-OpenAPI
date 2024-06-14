

# Category


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **Integer** |  |  [optional] |
|**name** | **String** | User-friendly name of the category |  [optional] |
|**slug** | **String** | Short identifier slug for the category |  [optional] |
|**parent** | **Object** | Parent category, if applicable |  [optional] |
|**description** | **String** | HTML description of the category |  [optional] |
|**packages** | [**List&lt;ModelPackage&gt;**](ModelPackage.md) |  |  [optional] |
|**order** | **Integer** | The numeric order in which to display the category. |  [optional] |
|**displayType** | [**DisplayTypeEnum**](#DisplayTypeEnum) | How the category should be displayed |  [optional] |



## Enum: DisplayTypeEnum

| Name | Value |
|---- | -----|
| LIST | &quot;list&quot; |
| GRID | &quot;grid&quot; |




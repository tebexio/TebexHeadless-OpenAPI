# Category
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** |  | [optional] [default to null] |
| **name** | **String** | User-friendly name of the category | [optional] [default to null] |
| **slug** | **String** | Short identifier slug for the category | [optional] [default to null] |
| **parent** | [**Object**](.md) | Parent category, if applicable | [optional] [default to null] |
| **tiered** | **Boolean** | True if this is a tiered category | [optional] [default to null] |
| **active\_tier** | [**Tier**](Tier.md) | If this is a tiered category and the usernameId is provided, this will be the active tier information for this category. | [optional] [default to null] |
| **description** | **String** | HTML description of the category | [optional] [default to null] |
| **packages** | [**List**](Package.md) | Packages within the category. For dynamic categories, packages use the &#x60;DynamicPackage&#x60; shape and are only populated when a &#x60;basketIdent&#x60; is provided. | [optional] [default to null] |
| **order** | **Integer** | The numeric order in which to display the category. | [optional] [default to null] |
| **display\_type** | **String** | How the category should be displayed | [optional] [default to null] |
| **image\_url** | **URI** | URL of the category image, if set. | [optional] [default to null] |
| **dynamic** | **Boolean** | True if this is a dynamic category. Dynamic categories are populated with custom packages per-basket using the Add Dynamic Packages endpoint, and their packages can only be fetched by providing a &#x60;basketIdent&#x60;. | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


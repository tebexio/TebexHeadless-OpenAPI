# # Category

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional]
**name** | **string** | User-friendly name of the category | [optional]
**slug** | **string** | Short identifier slug for the category | [optional]
**parent** | **object** | Parent category, if applicable | [optional]
**tiered** | **bool** | True if this is a tiered category | [optional]
**active_tier** | [**\TebexHeadless\Model\Tier**](Tier.md) | If this is a tiered category and the usernameId is provided, this will be the active tier information for this category. | [optional]
**description** | **string** | HTML description of the category | [optional]
**packages** | [**\TebexHeadless\Model\Package[]**](Package.md) | Packages within the category. For dynamic categories, packages use the &#x60;DynamicPackage&#x60; shape and are only populated when a &#x60;basketIdent&#x60; is provided. | [optional]
**order** | **int** | The numeric order in which to display the category. | [optional]
**display_type** | **string** | How the category should be displayed | [optional]
**image_url** | **string** | URL of the category image, if set. | [optional]
**dynamic** | **bool** | True if this is a dynamic category. Dynamic categories are populated with custom packages per-basket using the Add Dynamic Packages endpoint, and their packages can only be fetched by providing a &#x60;basketIdent&#x60;. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)

# TebexHeadless.Model.Category

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int** |  | [optional] 
**Name** | **string** | User-friendly name of the category | [optional] 
**Slug** | **string** | Short identifier slug for the category | [optional] 
**Parent** | **Object** | Parent category, if applicable | [optional] 
**Tiered** | **bool** | True if this is a tiered category | [optional] 
**ActiveTier** | [**Tier**](Tier.md) | If this is a tiered category and the usernameId is provided, this will be the active tier information for this category. | [optional] 
**Description** | **string** | HTML description of the category | [optional] 
**Packages** | [**List&lt;Package&gt;**](Package.md) | Packages within the category. For dynamic categories, packages use the &#x60;DynamicPackage&#x60; shape and are only populated when a &#x60;basketIdent&#x60; is provided. | [optional] 
**Order** | **int** | The numeric order in which to display the category. | [optional] 
**DisplayType** | **string** | How the category should be displayed | [optional] 
**ImageUrl** | **string** | URL of the category image, if set. | [optional] 
**Dynamic** | **bool** | True if this is a dynamic category. Dynamic categories are populated with custom packages per-basket using the Add Dynamic Packages endpoint, and their packages can only be fetched by providing a &#x60;basketIdent&#x60;. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


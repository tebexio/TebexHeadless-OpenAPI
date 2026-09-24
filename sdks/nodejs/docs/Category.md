# TebexHeadlessApi.Category

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**name** | **String** | User-friendly name of the category | [optional] 
**slug** | **String** | Short identifier slug for the category | [optional] 
**parent** | **Object** | Parent category, if applicable | [optional] 
**tiered** | **Boolean** | True if this is a tiered category | [optional] 
**activeTier** | [**Tier**](Tier.md) | If this is a tiered category and the usernameId is provided, this will be the active tier information for this category. | [optional] 
**description** | **String** | HTML description of the category | [optional] 
**packages** | [**[Package]**](Package.md) | Packages within the category. For dynamic categories, packages use the &#x60;DynamicPackage&#x60; shape and are only populated when a &#x60;basketIdent&#x60; is provided. | [optional] 
**order** | **Number** | The numeric order in which to display the category. | [optional] 
**displayType** | **String** | How the category should be displayed | [optional] 
**imageUrl** | **String** | URL of the category image, if set. | [optional] 
**dynamic** | **Boolean** | True if this is a dynamic category. Dynamic categories are populated with custom packages per-basket using the Add Dynamic Packages endpoint, and their packages can only be fetched by providing a &#x60;basketIdent&#x60;. | [optional] 



## Enum: DisplayTypeEnum


* `list` (value: `"list"`)

* `grid` (value: `"grid"`)





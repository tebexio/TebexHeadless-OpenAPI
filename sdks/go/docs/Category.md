# Category

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int32** |  | [optional] 
**Name** | Pointer to **string** | User-friendly name of the category | [optional] 
**Slug** | Pointer to **string** | Short identifier slug for the category | [optional] 
**Parent** | Pointer to **map[string]interface{}** | Parent category, if applicable | [optional] 
**Tiered** | Pointer to **bool** | True if this is a tiered category | [optional] 
**ActiveTier** | Pointer to [**Tier**](Tier.md) | If this is a tiered category and the usernameId is provided, this will be the active tier information for this category. | [optional] 
**Description** | Pointer to **string** | HTML description of the category | [optional] 
**Packages** | Pointer to [**[]Package**](Package.md) | Packages within the category. For dynamic categories, packages use the &#x60;DynamicPackage&#x60; shape and are only populated when a &#x60;basketIdent&#x60; is provided. | [optional] 
**Order** | Pointer to **int32** | The numeric order in which to display the category. | [optional] 
**DisplayType** | Pointer to **string** | How the category should be displayed | [optional] 
**ImageUrl** | Pointer to **string** | URL of the category image, if set. | [optional] 
**Dynamic** | Pointer to **bool** | True if this is a dynamic category. Dynamic categories are populated with custom packages per-basket using the Add Dynamic Packages endpoint, and their packages can only be fetched by providing a &#x60;basketIdent&#x60;. | [optional] 

## Methods

### NewCategory

`func NewCategory() *Category`

NewCategory instantiates a new Category object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCategoryWithDefaults

`func NewCategoryWithDefaults() *Category`

NewCategoryWithDefaults instantiates a new Category object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Category) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Category) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Category) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *Category) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Category) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Category) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Category) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Category) HasName() bool`

HasName returns a boolean if a field has been set.

### GetSlug

`func (o *Category) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *Category) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *Category) SetSlug(v string)`

SetSlug sets Slug field to given value.

### HasSlug

`func (o *Category) HasSlug() bool`

HasSlug returns a boolean if a field has been set.

### GetParent

`func (o *Category) GetParent() map[string]interface{}`

GetParent returns the Parent field if non-nil, zero value otherwise.

### GetParentOk

`func (o *Category) GetParentOk() (*map[string]interface{}, bool)`

GetParentOk returns a tuple with the Parent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParent

`func (o *Category) SetParent(v map[string]interface{})`

SetParent sets Parent field to given value.

### HasParent

`func (o *Category) HasParent() bool`

HasParent returns a boolean if a field has been set.

### GetTiered

`func (o *Category) GetTiered() bool`

GetTiered returns the Tiered field if non-nil, zero value otherwise.

### GetTieredOk

`func (o *Category) GetTieredOk() (*bool, bool)`

GetTieredOk returns a tuple with the Tiered field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTiered

`func (o *Category) SetTiered(v bool)`

SetTiered sets Tiered field to given value.

### HasTiered

`func (o *Category) HasTiered() bool`

HasTiered returns a boolean if a field has been set.

### GetActiveTier

`func (o *Category) GetActiveTier() Tier`

GetActiveTier returns the ActiveTier field if non-nil, zero value otherwise.

### GetActiveTierOk

`func (o *Category) GetActiveTierOk() (*Tier, bool)`

GetActiveTierOk returns a tuple with the ActiveTier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveTier

`func (o *Category) SetActiveTier(v Tier)`

SetActiveTier sets ActiveTier field to given value.

### HasActiveTier

`func (o *Category) HasActiveTier() bool`

HasActiveTier returns a boolean if a field has been set.

### GetDescription

`func (o *Category) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Category) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Category) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Category) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetPackages

`func (o *Category) GetPackages() []Package`

GetPackages returns the Packages field if non-nil, zero value otherwise.

### GetPackagesOk

`func (o *Category) GetPackagesOk() (*[]Package, bool)`

GetPackagesOk returns a tuple with the Packages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackages

`func (o *Category) SetPackages(v []Package)`

SetPackages sets Packages field to given value.

### HasPackages

`func (o *Category) HasPackages() bool`

HasPackages returns a boolean if a field has been set.

### GetOrder

`func (o *Category) GetOrder() int32`

GetOrder returns the Order field if non-nil, zero value otherwise.

### GetOrderOk

`func (o *Category) GetOrderOk() (*int32, bool)`

GetOrderOk returns a tuple with the Order field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrder

`func (o *Category) SetOrder(v int32)`

SetOrder sets Order field to given value.

### HasOrder

`func (o *Category) HasOrder() bool`

HasOrder returns a boolean if a field has been set.

### GetDisplayType

`func (o *Category) GetDisplayType() string`

GetDisplayType returns the DisplayType field if non-nil, zero value otherwise.

### GetDisplayTypeOk

`func (o *Category) GetDisplayTypeOk() (*string, bool)`

GetDisplayTypeOk returns a tuple with the DisplayType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayType

`func (o *Category) SetDisplayType(v string)`

SetDisplayType sets DisplayType field to given value.

### HasDisplayType

`func (o *Category) HasDisplayType() bool`

HasDisplayType returns a boolean if a field has been set.

### GetImageUrl

`func (o *Category) GetImageUrl() string`

GetImageUrl returns the ImageUrl field if non-nil, zero value otherwise.

### GetImageUrlOk

`func (o *Category) GetImageUrlOk() (*string, bool)`

GetImageUrlOk returns a tuple with the ImageUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageUrl

`func (o *Category) SetImageUrl(v string)`

SetImageUrl sets ImageUrl field to given value.

### HasImageUrl

`func (o *Category) HasImageUrl() bool`

HasImageUrl returns a boolean if a field has been set.

### GetDynamic

`func (o *Category) GetDynamic() bool`

GetDynamic returns the Dynamic field if non-nil, zero value otherwise.

### GetDynamicOk

`func (o *Category) GetDynamicOk() (*bool, bool)`

GetDynamicOk returns a tuple with the Dynamic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDynamic

`func (o *Category) SetDynamic(v bool)`

SetDynamic sets Dynamic field to given value.

### HasDynamic

`func (o *Category) HasDynamic() bool`

HasDynamic returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



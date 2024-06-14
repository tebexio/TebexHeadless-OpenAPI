# Category

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int32** |  | [optional] 
**Name** | Pointer to **string** | User-friendly name of the category | [optional] 
**Slug** | Pointer to **NullableString** | Short identifier slug for the category | [optional] 
**Parent** | Pointer to **map[string]interface{}** | Parent category, if applicable | [optional] 
**Description** | Pointer to **string** | HTML description of the category | [optional] 
**Packages** | Pointer to [**[]Package**](Package.md) |  | [optional] 
**Order** | Pointer to **int32** | The numeric order in which to display the category. | [optional] 
**DisplayType** | Pointer to **string** | How the category should be displayed | [optional] 

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

### SetSlugNil

`func (o *Category) SetSlugNil(b bool)`

 SetSlugNil sets the value for Slug to be an explicit nil

### UnsetSlug
`func (o *Category) UnsetSlug()`

UnsetSlug ensures that no value is present for Slug, not even an explicit nil
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

### SetParentNil

`func (o *Category) SetParentNil(b bool)`

 SetParentNil sets the value for Parent to be an explicit nil

### UnsetParent
`func (o *Category) UnsetParent()`

UnsetParent ensures that no value is present for Parent, not even an explicit nil
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

### SetPackagesNil

`func (o *Category) SetPackagesNil(b bool)`

 SetPackagesNil sets the value for Packages to be an explicit nil

### UnsetPackages
`func (o *Category) UnsetPackages()`

UnsetPackages ensures that no value is present for Packages, not even an explicit nil
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


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DynamicPackageInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Price** | **float32** |  | 
**Slug** | **string** |  | 
**Description** | Pointer to **string** |  | [optional] 
**ImageUrl** | Pointer to **string** |  | [optional] 
**Custom** | Pointer to  | Arbitrary custom key/value data to associate with the package. | [optional] 

## Methods

### NewDynamicPackageInput

`func NewDynamicPackageInput(name string, price float32, slug string, ) *DynamicPackageInput`

NewDynamicPackageInput instantiates a new DynamicPackageInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDynamicPackageInputWithDefaults

`func NewDynamicPackageInputWithDefaults() *DynamicPackageInput`

NewDynamicPackageInputWithDefaults instantiates a new DynamicPackageInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *DynamicPackageInput) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DynamicPackageInput) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DynamicPackageInput) SetName(v string)`

SetName sets Name field to given value.


### GetPrice

`func (o *DynamicPackageInput) GetPrice() float32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *DynamicPackageInput) GetPriceOk() (*float32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *DynamicPackageInput) SetPrice(v float32)`

SetPrice sets Price field to given value.


### GetSlug

`func (o *DynamicPackageInput) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *DynamicPackageInput) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *DynamicPackageInput) SetSlug(v string)`

SetSlug sets Slug field to given value.


### GetDescription

`func (o *DynamicPackageInput) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *DynamicPackageInput) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *DynamicPackageInput) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *DynamicPackageInput) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetImageUrl

`func (o *DynamicPackageInput) GetImageUrl() string`

GetImageUrl returns the ImageUrl field if non-nil, zero value otherwise.

### GetImageUrlOk

`func (o *DynamicPackageInput) GetImageUrlOk() (*string, bool)`

GetImageUrlOk returns a tuple with the ImageUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageUrl

`func (o *DynamicPackageInput) SetImageUrl(v string)`

SetImageUrl sets ImageUrl field to given value.

### HasImageUrl

`func (o *DynamicPackageInput) HasImageUrl() bool`

HasImageUrl returns a boolean if a field has been set.

### GetCustom

`func (o *DynamicPackageInput) GetCustom() map[string]string`

GetCustom returns the Custom field if non-nil, zero value otherwise.

### GetCustomOk

`func (o *DynamicPackageInput) GetCustomOk() (*map[string]string, bool)`

GetCustomOk returns a tuple with the Custom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustom

`func (o *DynamicPackageInput) SetCustom(v map[string]string)`

SetCustom sets Custom field to given value.

### HasCustom

`func (o *DynamicPackageInput) HasCustom() bool`

HasCustom returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



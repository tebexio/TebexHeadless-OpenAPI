# Webstore

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int32** |  | [optional] 
**Description** | Pointer to **string** | Store description in HTML format | [optional] 
**Name** | Pointer to **string** | Name of the store | [optional] 
**WebstoreUrl** | Pointer to **string** | URL of the webstore | [optional] 
**Currency** | Pointer to **string** | Currency used in the store | [optional] 
**Lang** | Pointer to **string** | Language of the store | [optional] 
**Logo** | Pointer to **NullableString** | URL of the store&#39;s logo | [optional] 
**PlatformType** | Pointer to **string** | Platform type for the store | [optional] 
**PlatformTypeId** | Pointer to **string** |  | [optional] 
**CreatedAt** | Pointer to **time.Time** | The date and time when the store was created | [optional] 

## Methods

### NewWebstore

`func NewWebstore() *Webstore`

NewWebstore instantiates a new Webstore object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWebstoreWithDefaults

`func NewWebstoreWithDefaults() *Webstore`

NewWebstoreWithDefaults instantiates a new Webstore object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Webstore) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Webstore) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Webstore) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *Webstore) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDescription

`func (o *Webstore) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Webstore) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Webstore) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Webstore) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *Webstore) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Webstore) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Webstore) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Webstore) HasName() bool`

HasName returns a boolean if a field has been set.

### GetWebstoreUrl

`func (o *Webstore) GetWebstoreUrl() string`

GetWebstoreUrl returns the WebstoreUrl field if non-nil, zero value otherwise.

### GetWebstoreUrlOk

`func (o *Webstore) GetWebstoreUrlOk() (*string, bool)`

GetWebstoreUrlOk returns a tuple with the WebstoreUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebstoreUrl

`func (o *Webstore) SetWebstoreUrl(v string)`

SetWebstoreUrl sets WebstoreUrl field to given value.

### HasWebstoreUrl

`func (o *Webstore) HasWebstoreUrl() bool`

HasWebstoreUrl returns a boolean if a field has been set.

### GetCurrency

`func (o *Webstore) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *Webstore) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *Webstore) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *Webstore) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetLang

`func (o *Webstore) GetLang() string`

GetLang returns the Lang field if non-nil, zero value otherwise.

### GetLangOk

`func (o *Webstore) GetLangOk() (*string, bool)`

GetLangOk returns a tuple with the Lang field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLang

`func (o *Webstore) SetLang(v string)`

SetLang sets Lang field to given value.

### HasLang

`func (o *Webstore) HasLang() bool`

HasLang returns a boolean if a field has been set.

### GetLogo

`func (o *Webstore) GetLogo() string`

GetLogo returns the Logo field if non-nil, zero value otherwise.

### GetLogoOk

`func (o *Webstore) GetLogoOk() (*string, bool)`

GetLogoOk returns a tuple with the Logo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogo

`func (o *Webstore) SetLogo(v string)`

SetLogo sets Logo field to given value.

### HasLogo

`func (o *Webstore) HasLogo() bool`

HasLogo returns a boolean if a field has been set.

### SetLogoNil

`func (o *Webstore) SetLogoNil(b bool)`

 SetLogoNil sets the value for Logo to be an explicit nil

### UnsetLogo
`func (o *Webstore) UnsetLogo()`

UnsetLogo ensures that no value is present for Logo, not even an explicit nil
### GetPlatformType

`func (o *Webstore) GetPlatformType() string`

GetPlatformType returns the PlatformType field if non-nil, zero value otherwise.

### GetPlatformTypeOk

`func (o *Webstore) GetPlatformTypeOk() (*string, bool)`

GetPlatformTypeOk returns a tuple with the PlatformType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlatformType

`func (o *Webstore) SetPlatformType(v string)`

SetPlatformType sets PlatformType field to given value.

### HasPlatformType

`func (o *Webstore) HasPlatformType() bool`

HasPlatformType returns a boolean if a field has been set.

### GetPlatformTypeId

`func (o *Webstore) GetPlatformTypeId() string`

GetPlatformTypeId returns the PlatformTypeId field if non-nil, zero value otherwise.

### GetPlatformTypeIdOk

`func (o *Webstore) GetPlatformTypeIdOk() (*string, bool)`

GetPlatformTypeIdOk returns a tuple with the PlatformTypeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlatformTypeId

`func (o *Webstore) SetPlatformTypeId(v string)`

SetPlatformTypeId sets PlatformTypeId field to given value.

### HasPlatformTypeId

`func (o *Webstore) HasPlatformTypeId() bool`

HasPlatformTypeId returns a boolean if a field has been set.

### GetCreatedAt

`func (o *Webstore) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Webstore) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Webstore) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Webstore) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CMSPage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **float32** |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] 
**UpdatedAt** | Pointer to **time.Time** |  | [optional] 
**AccountId** | Pointer to **float32** |  | [optional] 
**Title** | Pointer to **string** |  | [optional] 
**Slug** | Pointer to **string** |  | [optional] 
**Private** | Pointer to **bool** |  | [optional] 
**Hidden** | Pointer to **bool** |  | [optional] 
**Disabled** | Pointer to **bool** |  | [optional] 
**Sequence** | Pointer to **bool** |  | [optional] 
**Content** | Pointer to **string** |  | [optional] 

## Methods

### NewCMSPage

`func NewCMSPage() *CMSPage`

NewCMSPage instantiates a new CMSPage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCMSPageWithDefaults

`func NewCMSPageWithDefaults() *CMSPage`

NewCMSPageWithDefaults instantiates a new CMSPage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CMSPage) GetId() float32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CMSPage) GetIdOk() (*float32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CMSPage) SetId(v float32)`

SetId sets Id field to given value.

### HasId

`func (o *CMSPage) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCreatedAt

`func (o *CMSPage) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *CMSPage) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *CMSPage) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *CMSPage) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *CMSPage) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *CMSPage) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *CMSPage) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *CMSPage) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetAccountId

`func (o *CMSPage) GetAccountId() float32`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *CMSPage) GetAccountIdOk() (*float32, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *CMSPage) SetAccountId(v float32)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *CMSPage) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetTitle

`func (o *CMSPage) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *CMSPage) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *CMSPage) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *CMSPage) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetSlug

`func (o *CMSPage) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *CMSPage) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *CMSPage) SetSlug(v string)`

SetSlug sets Slug field to given value.

### HasSlug

`func (o *CMSPage) HasSlug() bool`

HasSlug returns a boolean if a field has been set.

### GetPrivate

`func (o *CMSPage) GetPrivate() bool`

GetPrivate returns the Private field if non-nil, zero value otherwise.

### GetPrivateOk

`func (o *CMSPage) GetPrivateOk() (*bool, bool)`

GetPrivateOk returns a tuple with the Private field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivate

`func (o *CMSPage) SetPrivate(v bool)`

SetPrivate sets Private field to given value.

### HasPrivate

`func (o *CMSPage) HasPrivate() bool`

HasPrivate returns a boolean if a field has been set.

### GetHidden

`func (o *CMSPage) GetHidden() bool`

GetHidden returns the Hidden field if non-nil, zero value otherwise.

### GetHiddenOk

`func (o *CMSPage) GetHiddenOk() (*bool, bool)`

GetHiddenOk returns a tuple with the Hidden field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHidden

`func (o *CMSPage) SetHidden(v bool)`

SetHidden sets Hidden field to given value.

### HasHidden

`func (o *CMSPage) HasHidden() bool`

HasHidden returns a boolean if a field has been set.

### GetDisabled

`func (o *CMSPage) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *CMSPage) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *CMSPage) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *CMSPage) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetSequence

`func (o *CMSPage) GetSequence() bool`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *CMSPage) GetSequenceOk() (*bool, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *CMSPage) SetSequence(v bool)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *CMSPage) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetContent

`func (o *CMSPage) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *CMSPage) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *CMSPage) SetContent(v string)`

SetContent sets Content field to given value.

### HasContent

`func (o *CMSPage) HasContent() bool`

HasContent returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



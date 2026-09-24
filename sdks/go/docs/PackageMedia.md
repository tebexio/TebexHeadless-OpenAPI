# PackageMedia

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** | A file name for the media, if applicable. | [optional] 
**Url** | Pointer to **string** | The URL of the package media. | [optional] 
**Featured** | Pointer to **bool** | True if this media should be featured more prominently than others. | [optional] 
**Primary** | Pointer to **bool** | True if this is the primary media for the package. | [optional] 

## Methods

### NewPackageMedia

`func NewPackageMedia() *PackageMedia`

NewPackageMedia instantiates a new PackageMedia object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPackageMediaWithDefaults

`func NewPackageMediaWithDefaults() *PackageMedia`

NewPackageMediaWithDefaults instantiates a new PackageMedia object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *PackageMedia) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PackageMedia) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PackageMedia) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *PackageMedia) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *PackageMedia) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PackageMedia) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PackageMedia) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PackageMedia) HasName() bool`

HasName returns a boolean if a field has been set.

### GetUrl

`func (o *PackageMedia) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *PackageMedia) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *PackageMedia) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *PackageMedia) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetFeatured

`func (o *PackageMedia) GetFeatured() bool`

GetFeatured returns the Featured field if non-nil, zero value otherwise.

### GetFeaturedOk

`func (o *PackageMedia) GetFeaturedOk() (*bool, bool)`

GetFeaturedOk returns a tuple with the Featured field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatured

`func (o *PackageMedia) SetFeatured(v bool)`

SetFeatured sets Featured field to given value.

### HasFeatured

`func (o *PackageMedia) HasFeatured() bool`

HasFeatured returns a boolean if a field has been set.

### GetPrimary

`func (o *PackageMedia) GetPrimary() bool`

GetPrimary returns the Primary field if non-nil, zero value otherwise.

### GetPrimaryOk

`func (o *PackageMedia) GetPrimaryOk() (*bool, bool)`

GetPrimaryOk returns a tuple with the Primary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimary

`func (o *PackageMedia) SetPrimary(v bool)`

SetPrimary sets Primary field to given value.

### HasPrimary

`func (o *PackageMedia) HasPrimary() bool`

HasPrimary returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DynamicPackagesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Username** | **string** | The username of the authenticated customer the packages are being created for. | 
**CategoryId** | **int32** | The ID of the dynamic category to populate. | 
**Packages** | [**[]DynamicPackageInput**](DynamicPackageInput.md) |  | 

## Methods

### NewDynamicPackagesRequest

`func NewDynamicPackagesRequest(username string, categoryId int32, packages []DynamicPackageInput, ) *DynamicPackagesRequest`

NewDynamicPackagesRequest instantiates a new DynamicPackagesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDynamicPackagesRequestWithDefaults

`func NewDynamicPackagesRequestWithDefaults() *DynamicPackagesRequest`

NewDynamicPackagesRequestWithDefaults instantiates a new DynamicPackagesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUsername

`func (o *DynamicPackagesRequest) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *DynamicPackagesRequest) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *DynamicPackagesRequest) SetUsername(v string)`

SetUsername sets Username field to given value.


### GetCategoryId

`func (o *DynamicPackagesRequest) GetCategoryId() int32`

GetCategoryId returns the CategoryId field if non-nil, zero value otherwise.

### GetCategoryIdOk

`func (o *DynamicPackagesRequest) GetCategoryIdOk() (*int32, bool)`

GetCategoryIdOk returns a tuple with the CategoryId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategoryId

`func (o *DynamicPackagesRequest) SetCategoryId(v int32)`

SetCategoryId sets CategoryId field to given value.


### GetPackages

`func (o *DynamicPackagesRequest) GetPackages() []DynamicPackageInput`

GetPackages returns the Packages field if non-nil, zero value otherwise.

### GetPackagesOk

`func (o *DynamicPackagesRequest) GetPackagesOk() (*[]DynamicPackageInput, bool)`

GetPackagesOk returns a tuple with the Packages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackages

`func (o *DynamicPackagesRequest) SetPackages(v []DynamicPackageInput)`

SetPackages sets Packages field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



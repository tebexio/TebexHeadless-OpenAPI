# PackageResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | Pointer to [**[]Package**](Package.md) |  | [optional] 

## Methods

### NewPackageResponse

`func NewPackageResponse() *PackageResponse`

NewPackageResponse instantiates a new PackageResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPackageResponseWithDefaults

`func NewPackageResponseWithDefaults() *PackageResponse`

NewPackageResponseWithDefaults instantiates a new PackageResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *PackageResponse) GetData() []Package`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *PackageResponse) GetDataOk() (*[]Package, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *PackageResponse) SetData(v []Package)`

SetData sets Data field to given value.

### HasData

`func (o *PackageResponse) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



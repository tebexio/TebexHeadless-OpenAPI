# AddBasketPackageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PackageId** | **string** |  | 
**Quantity** | **int32** |  | 
**Dynamic** | Pointer to **bool** | Set to &#x60;true&#x60; when adding a package that belongs to a dynamic category. When omitted, the API acts as if a normal package ID was provided. | [optional] 

## Methods

### NewAddBasketPackageRequest

`func NewAddBasketPackageRequest(packageId string, quantity int32, ) *AddBasketPackageRequest`

NewAddBasketPackageRequest instantiates a new AddBasketPackageRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAddBasketPackageRequestWithDefaults

`func NewAddBasketPackageRequestWithDefaults() *AddBasketPackageRequest`

NewAddBasketPackageRequestWithDefaults instantiates a new AddBasketPackageRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPackageId

`func (o *AddBasketPackageRequest) GetPackageId() string`

GetPackageId returns the PackageId field if non-nil, zero value otherwise.

### GetPackageIdOk

`func (o *AddBasketPackageRequest) GetPackageIdOk() (*string, bool)`

GetPackageIdOk returns a tuple with the PackageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageId

`func (o *AddBasketPackageRequest) SetPackageId(v string)`

SetPackageId sets PackageId field to given value.


### GetQuantity

`func (o *AddBasketPackageRequest) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *AddBasketPackageRequest) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *AddBasketPackageRequest) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.


### GetDynamic

`func (o *AddBasketPackageRequest) GetDynamic() bool`

GetDynamic returns the Dynamic field if non-nil, zero value otherwise.

### GetDynamicOk

`func (o *AddBasketPackageRequest) GetDynamicOk() (*bool, bool)`

GetDynamicOk returns a tuple with the Dynamic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDynamic

`func (o *AddBasketPackageRequest) SetDynamic(v bool)`

SetDynamic sets Dynamic field to given value.

### HasDynamic

`func (o *AddBasketPackageRequest) HasDynamic() bool`

HasDynamic returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



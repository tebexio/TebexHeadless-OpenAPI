# RecentPayment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Username** | **string** |  | 
**UsernameId** | **string** |  | 
**Package** | [**RecentPaymentPackage**](RecentPaymentPackage.md) |  | 
**CreatedAt** | Pointer to **NullableTime** | Optional, present depending on module configuration. | [optional] 
**Price** | Pointer to **NullableFloat32** | Optional, present depending on module configuration. | [optional] 
**Currency** | Pointer to **NullableString** | Optional, present depending on module configuration. | [optional] 

## Methods

### NewRecentPayment

`func NewRecentPayment(username string, usernameId string, package_ RecentPaymentPackage, ) *RecentPayment`

NewRecentPayment instantiates a new RecentPayment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecentPaymentWithDefaults

`func NewRecentPaymentWithDefaults() *RecentPayment`

NewRecentPaymentWithDefaults instantiates a new RecentPayment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUsername

`func (o *RecentPayment) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *RecentPayment) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *RecentPayment) SetUsername(v string)`

SetUsername sets Username field to given value.


### GetUsernameId

`func (o *RecentPayment) GetUsernameId() string`

GetUsernameId returns the UsernameId field if non-nil, zero value otherwise.

### GetUsernameIdOk

`func (o *RecentPayment) GetUsernameIdOk() (*string, bool)`

GetUsernameIdOk returns a tuple with the UsernameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsernameId

`func (o *RecentPayment) SetUsernameId(v string)`

SetUsernameId sets UsernameId field to given value.


### GetPackage

`func (o *RecentPayment) GetPackage() RecentPaymentPackage`

GetPackage returns the Package field if non-nil, zero value otherwise.

### GetPackageOk

`func (o *RecentPayment) GetPackageOk() (*RecentPaymentPackage, bool)`

GetPackageOk returns a tuple with the Package field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackage

`func (o *RecentPayment) SetPackage(v RecentPaymentPackage)`

SetPackage sets Package field to given value.


### GetCreatedAt

`func (o *RecentPayment) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *RecentPayment) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *RecentPayment) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *RecentPayment) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### SetCreatedAtNil

`func (o *RecentPayment) SetCreatedAtNil(b bool)`

 SetCreatedAtNil sets the value for CreatedAt to be an explicit nil

### UnsetCreatedAt
`func (o *RecentPayment) UnsetCreatedAt()`

UnsetCreatedAt ensures that no value is present for CreatedAt, not even an explicit nil
### GetPrice

`func (o *RecentPayment) GetPrice() float32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *RecentPayment) GetPriceOk() (*float32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *RecentPayment) SetPrice(v float32)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *RecentPayment) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### SetPriceNil

`func (o *RecentPayment) SetPriceNil(b bool)`

 SetPriceNil sets the value for Price to be an explicit nil

### UnsetPrice
`func (o *RecentPayment) UnsetPrice()`

UnsetPrice ensures that no value is present for Price, not even an explicit nil
### GetCurrency

`func (o *RecentPayment) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *RecentPayment) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *RecentPayment) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *RecentPayment) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### SetCurrencyNil

`func (o *RecentPayment) SetCurrencyNil(b bool)`

 SetCurrencyNil sets the value for Currency to be an explicit nil

### UnsetCurrency
`func (o *RecentPayment) UnsetCurrency()`

UnsetCurrency ensures that no value is present for Currency, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



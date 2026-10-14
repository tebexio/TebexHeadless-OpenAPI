# RecentPaymentEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Username** | **string** |  | 
**UsernameId** | **string** |  | 
**AvatarUrl** | **string** |  | 
**PackageName** | **string** | The first package on the payment. If the payment holds more, it is suffixed, e.g. \&quot;+ 1 more\&quot;. | 
**CreatedAt** | **time.Time** |  | 
**Price** | **float32** |  | 
**Currency** | **string** |  | 

## Methods

### NewRecentPaymentEntry

`func NewRecentPaymentEntry(id int32, username string, usernameId string, avatarUrl string, packageName string, createdAt time.Time, price float32, currency string, ) *RecentPaymentEntry`

NewRecentPaymentEntry instantiates a new RecentPaymentEntry object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecentPaymentEntryWithDefaults

`func NewRecentPaymentEntryWithDefaults() *RecentPaymentEntry`

NewRecentPaymentEntryWithDefaults instantiates a new RecentPaymentEntry object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RecentPaymentEntry) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RecentPaymentEntry) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RecentPaymentEntry) SetId(v int32)`

SetId sets Id field to given value.


### GetUsername

`func (o *RecentPaymentEntry) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *RecentPaymentEntry) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *RecentPaymentEntry) SetUsername(v string)`

SetUsername sets Username field to given value.


### GetUsernameId

`func (o *RecentPaymentEntry) GetUsernameId() string`

GetUsernameId returns the UsernameId field if non-nil, zero value otherwise.

### GetUsernameIdOk

`func (o *RecentPaymentEntry) GetUsernameIdOk() (*string, bool)`

GetUsernameIdOk returns a tuple with the UsernameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsernameId

`func (o *RecentPaymentEntry) SetUsernameId(v string)`

SetUsernameId sets UsernameId field to given value.


### GetAvatarUrl

`func (o *RecentPaymentEntry) GetAvatarUrl() string`

GetAvatarUrl returns the AvatarUrl field if non-nil, zero value otherwise.

### GetAvatarUrlOk

`func (o *RecentPaymentEntry) GetAvatarUrlOk() (*string, bool)`

GetAvatarUrlOk returns a tuple with the AvatarUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvatarUrl

`func (o *RecentPaymentEntry) SetAvatarUrl(v string)`

SetAvatarUrl sets AvatarUrl field to given value.


### GetPackageName

`func (o *RecentPaymentEntry) GetPackageName() string`

GetPackageName returns the PackageName field if non-nil, zero value otherwise.

### GetPackageNameOk

`func (o *RecentPaymentEntry) GetPackageNameOk() (*string, bool)`

GetPackageNameOk returns a tuple with the PackageName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageName

`func (o *RecentPaymentEntry) SetPackageName(v string)`

SetPackageName sets PackageName field to given value.


### GetCreatedAt

`func (o *RecentPaymentEntry) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *RecentPaymentEntry) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *RecentPaymentEntry) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetPrice

`func (o *RecentPaymentEntry) GetPrice() float32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *RecentPaymentEntry) GetPriceOk() (*float32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *RecentPaymentEntry) SetPrice(v float32)`

SetPrice sets Price field to given value.


### GetCurrency

`func (o *RecentPaymentEntry) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *RecentPaymentEntry) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *RecentPaymentEntry) SetCurrency(v string)`

SetCurrency sets Currency field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



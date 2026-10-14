# TopCustomer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Username** | **string** |  | 
**UsernameId** | **string** |  | 
**AvatarUrl** | **string** |  | 
**Total** | **float32** | Amount spent in the period, in the account&#39;s currency, net of tax. | 
**Currency** | **string** |  | 
**Period** | **string** | The period requested. | 

## Methods

### NewTopCustomer

`func NewTopCustomer(username string, usernameId string, avatarUrl string, total float32, currency string, period string, ) *TopCustomer`

NewTopCustomer instantiates a new TopCustomer object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTopCustomerWithDefaults

`func NewTopCustomerWithDefaults() *TopCustomer`

NewTopCustomerWithDefaults instantiates a new TopCustomer object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUsername

`func (o *TopCustomer) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *TopCustomer) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *TopCustomer) SetUsername(v string)`

SetUsername sets Username field to given value.


### GetUsernameId

`func (o *TopCustomer) GetUsernameId() string`

GetUsernameId returns the UsernameId field if non-nil, zero value otherwise.

### GetUsernameIdOk

`func (o *TopCustomer) GetUsernameIdOk() (*string, bool)`

GetUsernameIdOk returns a tuple with the UsernameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsernameId

`func (o *TopCustomer) SetUsernameId(v string)`

SetUsernameId sets UsernameId field to given value.


### GetAvatarUrl

`func (o *TopCustomer) GetAvatarUrl() string`

GetAvatarUrl returns the AvatarUrl field if non-nil, zero value otherwise.

### GetAvatarUrlOk

`func (o *TopCustomer) GetAvatarUrlOk() (*string, bool)`

GetAvatarUrlOk returns a tuple with the AvatarUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvatarUrl

`func (o *TopCustomer) SetAvatarUrl(v string)`

SetAvatarUrl sets AvatarUrl field to given value.


### GetTotal

`func (o *TopCustomer) GetTotal() float32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *TopCustomer) GetTotalOk() (*float32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *TopCustomer) SetTotal(v float32)`

SetTotal sets Total field to given value.


### GetCurrency

`func (o *TopCustomer) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *TopCustomer) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *TopCustomer) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetPeriod

`func (o *TopCustomer) GetPeriod() string`

GetPeriod returns the Period field if non-nil, zero value otherwise.

### GetPeriodOk

`func (o *TopCustomer) GetPeriodOk() (*string, bool)`

GetPeriodOk returns a tuple with the Period field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeriod

`func (o *TopCustomer) SetPeriod(v string)`

SetPeriod sets Period field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



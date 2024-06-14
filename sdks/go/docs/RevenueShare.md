# RevenueShare

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WalletRef** | Pointer to **string** |  | [optional] 
**Amount** | Pointer to **float32** | A float (decimal) value representing the amount of this payment in your account currency that is credited to the &#x60;wallet_ref&#x60; | [optional] 
**GatewayFeePercent** | Pointer to **float32** | A float (decimal) value representing the percentage of the gateway fee that should be dedicated from this wallet’s revenue share. This optional value can be anywhere between 0 - 100. | [optional] 

## Methods

### NewRevenueShare

`func NewRevenueShare() *RevenueShare`

NewRevenueShare instantiates a new RevenueShare object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevenueShareWithDefaults

`func NewRevenueShareWithDefaults() *RevenueShare`

NewRevenueShareWithDefaults instantiates a new RevenueShare object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWalletRef

`func (o *RevenueShare) GetWalletRef() string`

GetWalletRef returns the WalletRef field if non-nil, zero value otherwise.

### GetWalletRefOk

`func (o *RevenueShare) GetWalletRefOk() (*string, bool)`

GetWalletRefOk returns a tuple with the WalletRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWalletRef

`func (o *RevenueShare) SetWalletRef(v string)`

SetWalletRef sets WalletRef field to given value.

### HasWalletRef

`func (o *RevenueShare) HasWalletRef() bool`

HasWalletRef returns a boolean if a field has been set.

### GetAmount

`func (o *RevenueShare) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *RevenueShare) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *RevenueShare) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *RevenueShare) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetGatewayFeePercent

`func (o *RevenueShare) GetGatewayFeePercent() float32`

GetGatewayFeePercent returns the GatewayFeePercent field if non-nil, zero value otherwise.

### GetGatewayFeePercentOk

`func (o *RevenueShare) GetGatewayFeePercentOk() (*float32, bool)`

GetGatewayFeePercentOk returns a tuple with the GatewayFeePercent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGatewayFeePercent

`func (o *RevenueShare) SetGatewayFeePercent(v float32)`

SetGatewayFeePercent sets GatewayFeePercent field to given value.

### HasGatewayFeePercent

`func (o *RevenueShare) HasGatewayFeePercent() bool`

HasGatewayFeePercent returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



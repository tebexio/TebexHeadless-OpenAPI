# SaleDiscount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** |  | 
**Percentage** | **NullableFloat32** | Set only when &#x60;type&#x60; is &#x60;percentage&#x60;, otherwise null. | 
**Amount** | **NullableFloat32** | Set only when &#x60;type&#x60; is &#x60;amount&#x60;, otherwise null. | 
**Currency** | **string** | The store currency. | 

## Methods

### NewSaleDiscount

`func NewSaleDiscount(type_ string, percentage NullableFloat32, amount NullableFloat32, currency string, ) *SaleDiscount`

NewSaleDiscount instantiates a new SaleDiscount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSaleDiscountWithDefaults

`func NewSaleDiscountWithDefaults() *SaleDiscount`

NewSaleDiscountWithDefaults instantiates a new SaleDiscount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SaleDiscount) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SaleDiscount) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SaleDiscount) SetType(v string)`

SetType sets Type field to given value.


### GetPercentage

`func (o *SaleDiscount) GetPercentage() float32`

GetPercentage returns the Percentage field if non-nil, zero value otherwise.

### GetPercentageOk

`func (o *SaleDiscount) GetPercentageOk() (*float32, bool)`

GetPercentageOk returns a tuple with the Percentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentage

`func (o *SaleDiscount) SetPercentage(v float32)`

SetPercentage sets Percentage field to given value.


### SetPercentageNil

`func (o *SaleDiscount) SetPercentageNil(b bool)`

 SetPercentageNil sets the value for Percentage to be an explicit nil

### UnsetPercentage
`func (o *SaleDiscount) UnsetPercentage()`

UnsetPercentage ensures that no value is present for Percentage, not even an explicit nil
### GetAmount

`func (o *SaleDiscount) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *SaleDiscount) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *SaleDiscount) SetAmount(v float32)`

SetAmount sets Amount field to given value.


### SetAmountNil

`func (o *SaleDiscount) SetAmountNil(b bool)`

 SetAmountNil sets the value for Amount to be an explicit nil

### UnsetAmount
`func (o *SaleDiscount) UnsetAmount()`

UnsetAmount ensures that no value is present for Amount, not even an explicit nil
### GetCurrency

`func (o *SaleDiscount) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *SaleDiscount) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *SaleDiscount) SetCurrency(v string)`

SetCurrency sets Currency field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



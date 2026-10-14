# SaleRequirement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of requirement for the sale. Additional requirement types may be added later. Clients must ignore requirement types they do not know. | 
**Packages** | Pointer to [**[]SaleReference**](SaleReference.md) | Packages the customer must have purchased. Present for &#x60;purchased_packages&#x60;. | [optional] 
**Match** | Pointer to **string** | Present for &#x60;purchased_packages&#x60;. Always &#x60;all&#x60;. | [optional] 
**Amount** | Pointer to **float32** | Present for &#x60;lifetime_spend&#x60; and &#x60;minimum_basket_value&#x60;. | [optional] 
**Currency** | Pointer to **string** | Present for &#x60;lifetime_spend&#x60; and &#x60;minimum_basket_value&#x60;. The store currency. | [optional] 

## Methods

### NewSaleRequirement

`func NewSaleRequirement(type_ string, ) *SaleRequirement`

NewSaleRequirement instantiates a new SaleRequirement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSaleRequirementWithDefaults

`func NewSaleRequirementWithDefaults() *SaleRequirement`

NewSaleRequirementWithDefaults instantiates a new SaleRequirement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SaleRequirement) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SaleRequirement) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SaleRequirement) SetType(v string)`

SetType sets Type field to given value.


### GetPackages

`func (o *SaleRequirement) GetPackages() []SaleReference`

GetPackages returns the Packages field if non-nil, zero value otherwise.

### GetPackagesOk

`func (o *SaleRequirement) GetPackagesOk() (*[]SaleReference, bool)`

GetPackagesOk returns a tuple with the Packages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackages

`func (o *SaleRequirement) SetPackages(v []SaleReference)`

SetPackages sets Packages field to given value.

### HasPackages

`func (o *SaleRequirement) HasPackages() bool`

HasPackages returns a boolean if a field has been set.

### GetMatch

`func (o *SaleRequirement) GetMatch() string`

GetMatch returns the Match field if non-nil, zero value otherwise.

### GetMatchOk

`func (o *SaleRequirement) GetMatchOk() (*string, bool)`

GetMatchOk returns a tuple with the Match field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatch

`func (o *SaleRequirement) SetMatch(v string)`

SetMatch sets Match field to given value.

### HasMatch

`func (o *SaleRequirement) HasMatch() bool`

HasMatch returns a boolean if a field has been set.

### GetAmount

`func (o *SaleRequirement) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *SaleRequirement) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *SaleRequirement) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *SaleRequirement) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCurrency

`func (o *SaleRequirement) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *SaleRequirement) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *SaleRequirement) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *SaleRequirement) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



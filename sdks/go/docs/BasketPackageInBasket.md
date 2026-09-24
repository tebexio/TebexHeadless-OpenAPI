# BasketPackageInBasket

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Quantity** | Pointer to **int32** | The quantity of &#x60;package&#x60; in this basket. This is not the total quantity of overall items in the basket. | [optional] 
**Price** | Pointer to **float32** |  | [optional] 
**GiftUsernameId** | Pointer to **string** | The username id of the user this package is gifted to | [optional] 
**GiftUsername** | Pointer to **string** | The username of the user this package is gifted to. | [optional] 

## Methods

### NewBasketPackageInBasket

`func NewBasketPackageInBasket() *BasketPackageInBasket`

NewBasketPackageInBasket instantiates a new BasketPackageInBasket object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBasketPackageInBasketWithDefaults

`func NewBasketPackageInBasketWithDefaults() *BasketPackageInBasket`

NewBasketPackageInBasketWithDefaults instantiates a new BasketPackageInBasket object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuantity

`func (o *BasketPackageInBasket) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *BasketPackageInBasket) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *BasketPackageInBasket) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *BasketPackageInBasket) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetPrice

`func (o *BasketPackageInBasket) GetPrice() float32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *BasketPackageInBasket) GetPriceOk() (*float32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *BasketPackageInBasket) SetPrice(v float32)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *BasketPackageInBasket) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetGiftUsernameId

`func (o *BasketPackageInBasket) GetGiftUsernameId() string`

GetGiftUsernameId returns the GiftUsernameId field if non-nil, zero value otherwise.

### GetGiftUsernameIdOk

`func (o *BasketPackageInBasket) GetGiftUsernameIdOk() (*string, bool)`

GetGiftUsernameIdOk returns a tuple with the GiftUsernameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGiftUsernameId

`func (o *BasketPackageInBasket) SetGiftUsernameId(v string)`

SetGiftUsernameId sets GiftUsernameId field to given value.

### HasGiftUsernameId

`func (o *BasketPackageInBasket) HasGiftUsernameId() bool`

HasGiftUsernameId returns a boolean if a field has been set.

### GetGiftUsername

`func (o *BasketPackageInBasket) GetGiftUsername() string`

GetGiftUsername returns the GiftUsername field if non-nil, zero value otherwise.

### GetGiftUsernameOk

`func (o *BasketPackageInBasket) GetGiftUsernameOk() (*string, bool)`

GetGiftUsernameOk returns a tuple with the GiftUsername field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGiftUsername

`func (o *BasketPackageInBasket) SetGiftUsername(v string)`

SetGiftUsername sets GiftUsername field to given value.

### HasGiftUsername

`func (o *BasketPackageInBasket) HasGiftUsername() bool`

HasGiftUsername returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



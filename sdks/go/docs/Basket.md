# Basket

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**Ident** | Pointer to **string** |  | [optional] 
**Complete** | Pointer to **bool** |  | [optional] 
**Email** | Pointer to **NullableString** |  | [optional] 
**Username** | Pointer to **NullableString** |  | [optional] 
**Coupons** | Pointer to [**[]Coupon**](Coupon.md) |  | [optional] 
**Giftcards** | Pointer to [**[]GiftCard**](GiftCard.md) |  | [optional] 
**CreatorCode** | Pointer to **string** | The creator code is used to share a percentage of the payment with another party. See more about creator codes at https://docs.tebex.io/creators/tebex-control-panel/engagement/creator-codes | [optional] 
**CancelUrl** | Pointer to **string** |  | [optional] 
**CompleteUrl** | Pointer to **NullableString** |  | [optional] 
**CompleteAutoRedirect** | Pointer to **bool** |  | [optional] 
**Country** | Pointer to **string** | A two-character country code | [optional] 
**Ip** | Pointer to **string** |  | [optional] 
**UsernameId** | Pointer to **float32** |  | [optional] 
**BasePrice** | Pointer to **float32** |  | [optional] 
**SalesTax** | Pointer to **float32** |  | [optional] 
**TotalPrice** | Pointer to **float32** |  | [optional] 
**Currency** | Pointer to **string** | A 3 character currency code | [optional] 
**Packages** | Pointer to [**[]BasketPackage**](BasketPackage.md) |  | [optional] 
**Custom** | Pointer to **map[string]interface{}** |  | [optional] 
**Links** | Pointer to [**BasketLinks**](BasketLinks.md) |  | [optional] 

## Methods

### NewBasket

`func NewBasket() *Basket`

NewBasket instantiates a new Basket object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBasketWithDefaults

`func NewBasketWithDefaults() *Basket`

NewBasketWithDefaults instantiates a new Basket object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Basket) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Basket) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Basket) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Basket) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdent

`func (o *Basket) GetIdent() string`

GetIdent returns the Ident field if non-nil, zero value otherwise.

### GetIdentOk

`func (o *Basket) GetIdentOk() (*string, bool)`

GetIdentOk returns a tuple with the Ident field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdent

`func (o *Basket) SetIdent(v string)`

SetIdent sets Ident field to given value.

### HasIdent

`func (o *Basket) HasIdent() bool`

HasIdent returns a boolean if a field has been set.

### GetComplete

`func (o *Basket) GetComplete() bool`

GetComplete returns the Complete field if non-nil, zero value otherwise.

### GetCompleteOk

`func (o *Basket) GetCompleteOk() (*bool, bool)`

GetCompleteOk returns a tuple with the Complete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComplete

`func (o *Basket) SetComplete(v bool)`

SetComplete sets Complete field to given value.

### HasComplete

`func (o *Basket) HasComplete() bool`

HasComplete returns a boolean if a field has been set.

### GetEmail

`func (o *Basket) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *Basket) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *Basket) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *Basket) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### SetEmailNil

`func (o *Basket) SetEmailNil(b bool)`

 SetEmailNil sets the value for Email to be an explicit nil

### UnsetEmail
`func (o *Basket) UnsetEmail()`

UnsetEmail ensures that no value is present for Email, not even an explicit nil
### GetUsername

`func (o *Basket) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *Basket) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *Basket) SetUsername(v string)`

SetUsername sets Username field to given value.

### HasUsername

`func (o *Basket) HasUsername() bool`

HasUsername returns a boolean if a field has been set.

### SetUsernameNil

`func (o *Basket) SetUsernameNil(b bool)`

 SetUsernameNil sets the value for Username to be an explicit nil

### UnsetUsername
`func (o *Basket) UnsetUsername()`

UnsetUsername ensures that no value is present for Username, not even an explicit nil
### GetCoupons

`func (o *Basket) GetCoupons() []Coupon`

GetCoupons returns the Coupons field if non-nil, zero value otherwise.

### GetCouponsOk

`func (o *Basket) GetCouponsOk() (*[]Coupon, bool)`

GetCouponsOk returns a tuple with the Coupons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCoupons

`func (o *Basket) SetCoupons(v []Coupon)`

SetCoupons sets Coupons field to given value.

### HasCoupons

`func (o *Basket) HasCoupons() bool`

HasCoupons returns a boolean if a field has been set.

### GetGiftcards

`func (o *Basket) GetGiftcards() []GiftCard`

GetGiftcards returns the Giftcards field if non-nil, zero value otherwise.

### GetGiftcardsOk

`func (o *Basket) GetGiftcardsOk() (*[]GiftCard, bool)`

GetGiftcardsOk returns a tuple with the Giftcards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGiftcards

`func (o *Basket) SetGiftcards(v []GiftCard)`

SetGiftcards sets Giftcards field to given value.

### HasGiftcards

`func (o *Basket) HasGiftcards() bool`

HasGiftcards returns a boolean if a field has been set.

### GetCreatorCode

`func (o *Basket) GetCreatorCode() string`

GetCreatorCode returns the CreatorCode field if non-nil, zero value otherwise.

### GetCreatorCodeOk

`func (o *Basket) GetCreatorCodeOk() (*string, bool)`

GetCreatorCodeOk returns a tuple with the CreatorCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorCode

`func (o *Basket) SetCreatorCode(v string)`

SetCreatorCode sets CreatorCode field to given value.

### HasCreatorCode

`func (o *Basket) HasCreatorCode() bool`

HasCreatorCode returns a boolean if a field has been set.

### GetCancelUrl

`func (o *Basket) GetCancelUrl() string`

GetCancelUrl returns the CancelUrl field if non-nil, zero value otherwise.

### GetCancelUrlOk

`func (o *Basket) GetCancelUrlOk() (*string, bool)`

GetCancelUrlOk returns a tuple with the CancelUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelUrl

`func (o *Basket) SetCancelUrl(v string)`

SetCancelUrl sets CancelUrl field to given value.

### HasCancelUrl

`func (o *Basket) HasCancelUrl() bool`

HasCancelUrl returns a boolean if a field has been set.

### GetCompleteUrl

`func (o *Basket) GetCompleteUrl() string`

GetCompleteUrl returns the CompleteUrl field if non-nil, zero value otherwise.

### GetCompleteUrlOk

`func (o *Basket) GetCompleteUrlOk() (*string, bool)`

GetCompleteUrlOk returns a tuple with the CompleteUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleteUrl

`func (o *Basket) SetCompleteUrl(v string)`

SetCompleteUrl sets CompleteUrl field to given value.

### HasCompleteUrl

`func (o *Basket) HasCompleteUrl() bool`

HasCompleteUrl returns a boolean if a field has been set.

### SetCompleteUrlNil

`func (o *Basket) SetCompleteUrlNil(b bool)`

 SetCompleteUrlNil sets the value for CompleteUrl to be an explicit nil

### UnsetCompleteUrl
`func (o *Basket) UnsetCompleteUrl()`

UnsetCompleteUrl ensures that no value is present for CompleteUrl, not even an explicit nil
### GetCompleteAutoRedirect

`func (o *Basket) GetCompleteAutoRedirect() bool`

GetCompleteAutoRedirect returns the CompleteAutoRedirect field if non-nil, zero value otherwise.

### GetCompleteAutoRedirectOk

`func (o *Basket) GetCompleteAutoRedirectOk() (*bool, bool)`

GetCompleteAutoRedirectOk returns a tuple with the CompleteAutoRedirect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleteAutoRedirect

`func (o *Basket) SetCompleteAutoRedirect(v bool)`

SetCompleteAutoRedirect sets CompleteAutoRedirect field to given value.

### HasCompleteAutoRedirect

`func (o *Basket) HasCompleteAutoRedirect() bool`

HasCompleteAutoRedirect returns a boolean if a field has been set.

### GetCountry

`func (o *Basket) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *Basket) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *Basket) SetCountry(v string)`

SetCountry sets Country field to given value.

### HasCountry

`func (o *Basket) HasCountry() bool`

HasCountry returns a boolean if a field has been set.

### GetIp

`func (o *Basket) GetIp() string`

GetIp returns the Ip field if non-nil, zero value otherwise.

### GetIpOk

`func (o *Basket) GetIpOk() (*string, bool)`

GetIpOk returns a tuple with the Ip field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIp

`func (o *Basket) SetIp(v string)`

SetIp sets Ip field to given value.

### HasIp

`func (o *Basket) HasIp() bool`

HasIp returns a boolean if a field has been set.

### GetUsernameId

`func (o *Basket) GetUsernameId() float32`

GetUsernameId returns the UsernameId field if non-nil, zero value otherwise.

### GetUsernameIdOk

`func (o *Basket) GetUsernameIdOk() (*float32, bool)`

GetUsernameIdOk returns a tuple with the UsernameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsernameId

`func (o *Basket) SetUsernameId(v float32)`

SetUsernameId sets UsernameId field to given value.

### HasUsernameId

`func (o *Basket) HasUsernameId() bool`

HasUsernameId returns a boolean if a field has been set.

### GetBasePrice

`func (o *Basket) GetBasePrice() float32`

GetBasePrice returns the BasePrice field if non-nil, zero value otherwise.

### GetBasePriceOk

`func (o *Basket) GetBasePriceOk() (*float32, bool)`

GetBasePriceOk returns a tuple with the BasePrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBasePrice

`func (o *Basket) SetBasePrice(v float32)`

SetBasePrice sets BasePrice field to given value.

### HasBasePrice

`func (o *Basket) HasBasePrice() bool`

HasBasePrice returns a boolean if a field has been set.

### GetSalesTax

`func (o *Basket) GetSalesTax() float32`

GetSalesTax returns the SalesTax field if non-nil, zero value otherwise.

### GetSalesTaxOk

`func (o *Basket) GetSalesTaxOk() (*float32, bool)`

GetSalesTaxOk returns a tuple with the SalesTax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesTax

`func (o *Basket) SetSalesTax(v float32)`

SetSalesTax sets SalesTax field to given value.

### HasSalesTax

`func (o *Basket) HasSalesTax() bool`

HasSalesTax returns a boolean if a field has been set.

### GetTotalPrice

`func (o *Basket) GetTotalPrice() float32`

GetTotalPrice returns the TotalPrice field if non-nil, zero value otherwise.

### GetTotalPriceOk

`func (o *Basket) GetTotalPriceOk() (*float32, bool)`

GetTotalPriceOk returns a tuple with the TotalPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPrice

`func (o *Basket) SetTotalPrice(v float32)`

SetTotalPrice sets TotalPrice field to given value.

### HasTotalPrice

`func (o *Basket) HasTotalPrice() bool`

HasTotalPrice returns a boolean if a field has been set.

### GetCurrency

`func (o *Basket) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *Basket) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *Basket) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *Basket) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetPackages

`func (o *Basket) GetPackages() []BasketPackage`

GetPackages returns the Packages field if non-nil, zero value otherwise.

### GetPackagesOk

`func (o *Basket) GetPackagesOk() (*[]BasketPackage, bool)`

GetPackagesOk returns a tuple with the Packages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackages

`func (o *Basket) SetPackages(v []BasketPackage)`

SetPackages sets Packages field to given value.

### HasPackages

`func (o *Basket) HasPackages() bool`

HasPackages returns a boolean if a field has been set.

### GetCustom

`func (o *Basket) GetCustom() map[string]interface{}`

GetCustom returns the Custom field if non-nil, zero value otherwise.

### GetCustomOk

`func (o *Basket) GetCustomOk() (*map[string]interface{}, bool)`

GetCustomOk returns a tuple with the Custom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustom

`func (o *Basket) SetCustom(v map[string]interface{})`

SetCustom sets Custom field to given value.

### HasCustom

`func (o *Basket) HasCustom() bool`

HasCustom returns a boolean if a field has been set.

### SetCustomNil

`func (o *Basket) SetCustomNil(b bool)`

 SetCustomNil sets the value for Custom to be an explicit nil

### UnsetCustom
`func (o *Basket) UnsetCustom()`

UnsetCustom ensures that no value is present for Custom, not even an explicit nil
### GetLinks

`func (o *Basket) GetLinks() BasketLinks`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Basket) GetLinksOk() (*BasketLinks, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Basket) SetLinks(v BasketLinks)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Basket) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



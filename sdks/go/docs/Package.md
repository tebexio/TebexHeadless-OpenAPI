# Package

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int32** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Image** | Pointer to **NullableString** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Category** | Pointer to [**PackageCategory**](PackageCategory.md) |  | [optional] 
**BasePrice** | Pointer to **float32** |  | [optional] 
**SalesTax** | Pointer to **float32** |  | [optional] 
**TotalPrice** | Pointer to **float32** |  | [optional] 
**Currency** | Pointer to **string** |  | [optional] 
**Discount** | Pointer to **float32** |  | [optional] 
**DisableQuantity** | Pointer to **bool** |  | [optional] 
**DisableGifting** | Pointer to **bool** |  | [optional] 
**ExpirationDate** | Pointer to **NullableTime** |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] 
**UpdatedAt** | Pointer to **time.Time** |  | [optional] 

## Methods

### NewPackage

`func NewPackage() *Package`

NewPackage instantiates a new Package object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPackageWithDefaults

`func NewPackageWithDefaults() *Package`

NewPackageWithDefaults instantiates a new Package object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Package) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Package) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Package) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *Package) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Package) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Package) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Package) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Package) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Package) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Package) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Package) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Package) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetImage

`func (o *Package) GetImage() string`

GetImage returns the Image field if non-nil, zero value otherwise.

### GetImageOk

`func (o *Package) GetImageOk() (*string, bool)`

GetImageOk returns a tuple with the Image field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImage

`func (o *Package) SetImage(v string)`

SetImage sets Image field to given value.

### HasImage

`func (o *Package) HasImage() bool`

HasImage returns a boolean if a field has been set.

### SetImageNil

`func (o *Package) SetImageNil(b bool)`

 SetImageNil sets the value for Image to be an explicit nil

### UnsetImage
`func (o *Package) UnsetImage()`

UnsetImage ensures that no value is present for Image, not even an explicit nil
### GetType

`func (o *Package) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Package) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Package) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Package) HasType() bool`

HasType returns a boolean if a field has been set.

### GetCategory

`func (o *Package) GetCategory() PackageCategory`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *Package) GetCategoryOk() (*PackageCategory, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *Package) SetCategory(v PackageCategory)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *Package) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetBasePrice

`func (o *Package) GetBasePrice() float32`

GetBasePrice returns the BasePrice field if non-nil, zero value otherwise.

### GetBasePriceOk

`func (o *Package) GetBasePriceOk() (*float32, bool)`

GetBasePriceOk returns a tuple with the BasePrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBasePrice

`func (o *Package) SetBasePrice(v float32)`

SetBasePrice sets BasePrice field to given value.

### HasBasePrice

`func (o *Package) HasBasePrice() bool`

HasBasePrice returns a boolean if a field has been set.

### GetSalesTax

`func (o *Package) GetSalesTax() float32`

GetSalesTax returns the SalesTax field if non-nil, zero value otherwise.

### GetSalesTaxOk

`func (o *Package) GetSalesTaxOk() (*float32, bool)`

GetSalesTaxOk returns a tuple with the SalesTax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesTax

`func (o *Package) SetSalesTax(v float32)`

SetSalesTax sets SalesTax field to given value.

### HasSalesTax

`func (o *Package) HasSalesTax() bool`

HasSalesTax returns a boolean if a field has been set.

### GetTotalPrice

`func (o *Package) GetTotalPrice() float32`

GetTotalPrice returns the TotalPrice field if non-nil, zero value otherwise.

### GetTotalPriceOk

`func (o *Package) GetTotalPriceOk() (*float32, bool)`

GetTotalPriceOk returns a tuple with the TotalPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPrice

`func (o *Package) SetTotalPrice(v float32)`

SetTotalPrice sets TotalPrice field to given value.

### HasTotalPrice

`func (o *Package) HasTotalPrice() bool`

HasTotalPrice returns a boolean if a field has been set.

### GetCurrency

`func (o *Package) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *Package) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *Package) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *Package) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetDiscount

`func (o *Package) GetDiscount() float32`

GetDiscount returns the Discount field if non-nil, zero value otherwise.

### GetDiscountOk

`func (o *Package) GetDiscountOk() (*float32, bool)`

GetDiscountOk returns a tuple with the Discount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscount

`func (o *Package) SetDiscount(v float32)`

SetDiscount sets Discount field to given value.

### HasDiscount

`func (o *Package) HasDiscount() bool`

HasDiscount returns a boolean if a field has been set.

### GetDisableQuantity

`func (o *Package) GetDisableQuantity() bool`

GetDisableQuantity returns the DisableQuantity field if non-nil, zero value otherwise.

### GetDisableQuantityOk

`func (o *Package) GetDisableQuantityOk() (*bool, bool)`

GetDisableQuantityOk returns a tuple with the DisableQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisableQuantity

`func (o *Package) SetDisableQuantity(v bool)`

SetDisableQuantity sets DisableQuantity field to given value.

### HasDisableQuantity

`func (o *Package) HasDisableQuantity() bool`

HasDisableQuantity returns a boolean if a field has been set.

### GetDisableGifting

`func (o *Package) GetDisableGifting() bool`

GetDisableGifting returns the DisableGifting field if non-nil, zero value otherwise.

### GetDisableGiftingOk

`func (o *Package) GetDisableGiftingOk() (*bool, bool)`

GetDisableGiftingOk returns a tuple with the DisableGifting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisableGifting

`func (o *Package) SetDisableGifting(v bool)`

SetDisableGifting sets DisableGifting field to given value.

### HasDisableGifting

`func (o *Package) HasDisableGifting() bool`

HasDisableGifting returns a boolean if a field has been set.

### GetExpirationDate

`func (o *Package) GetExpirationDate() time.Time`

GetExpirationDate returns the ExpirationDate field if non-nil, zero value otherwise.

### GetExpirationDateOk

`func (o *Package) GetExpirationDateOk() (*time.Time, bool)`

GetExpirationDateOk returns a tuple with the ExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDate

`func (o *Package) SetExpirationDate(v time.Time)`

SetExpirationDate sets ExpirationDate field to given value.

### HasExpirationDate

`func (o *Package) HasExpirationDate() bool`

HasExpirationDate returns a boolean if a field has been set.

### SetExpirationDateNil

`func (o *Package) SetExpirationDateNil(b bool)`

 SetExpirationDateNil sets the value for ExpirationDate to be an explicit nil

### UnsetExpirationDate
`func (o *Package) UnsetExpirationDate()`

UnsetExpirationDate ensures that no value is present for ExpirationDate, not even an explicit nil
### GetCreatedAt

`func (o *Package) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Package) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Package) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Package) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *Package) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Package) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Package) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Package) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# BasketPackage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int32** | The package ID | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Image** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Slug** | Pointer to **string** |  | [optional] 
**InBasket** | Pointer to [**BasketPackageInBasket**](BasketPackageInBasket.md) |  | [optional] 
**Type** | Pointer to **string** | The type of payment, either &#x60;single&#x60; for one-time payments or &#x60;subscription&#x60;. | [optional] 
**RevenueShare** | Pointer to [**[]RevenueShare**](RevenueShare.md) | An array of payment destination objects describing how the purchase should be split between multiple wallets. **Only available with pre-agreement from Tebex.** | [optional] 
**IsRecurring** | Pointer to **bool** | Whether this package is a recurring (subscription) purchase. | [optional] 

## Methods

### NewBasketPackage

`func NewBasketPackage() *BasketPackage`

NewBasketPackage instantiates a new BasketPackage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBasketPackageWithDefaults

`func NewBasketPackageWithDefaults() *BasketPackage`

NewBasketPackageWithDefaults instantiates a new BasketPackage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *BasketPackage) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BasketPackage) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BasketPackage) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *BasketPackage) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDescription

`func (o *BasketPackage) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *BasketPackage) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *BasketPackage) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *BasketPackage) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetImage

`func (o *BasketPackage) GetImage() string`

GetImage returns the Image field if non-nil, zero value otherwise.

### GetImageOk

`func (o *BasketPackage) GetImageOk() (*string, bool)`

GetImageOk returns a tuple with the Image field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImage

`func (o *BasketPackage) SetImage(v string)`

SetImage sets Image field to given value.

### HasImage

`func (o *BasketPackage) HasImage() bool`

HasImage returns a boolean if a field has been set.

### GetName

`func (o *BasketPackage) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BasketPackage) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BasketPackage) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *BasketPackage) HasName() bool`

HasName returns a boolean if a field has been set.

### GetSlug

`func (o *BasketPackage) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *BasketPackage) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *BasketPackage) SetSlug(v string)`

SetSlug sets Slug field to given value.

### HasSlug

`func (o *BasketPackage) HasSlug() bool`

HasSlug returns a boolean if a field has been set.

### GetInBasket

`func (o *BasketPackage) GetInBasket() BasketPackageInBasket`

GetInBasket returns the InBasket field if non-nil, zero value otherwise.

### GetInBasketOk

`func (o *BasketPackage) GetInBasketOk() (*BasketPackageInBasket, bool)`

GetInBasketOk returns a tuple with the InBasket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInBasket

`func (o *BasketPackage) SetInBasket(v BasketPackageInBasket)`

SetInBasket sets InBasket field to given value.

### HasInBasket

`func (o *BasketPackage) HasInBasket() bool`

HasInBasket returns a boolean if a field has been set.

### GetType

`func (o *BasketPackage) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *BasketPackage) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *BasketPackage) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *BasketPackage) HasType() bool`

HasType returns a boolean if a field has been set.

### GetRevenueShare

`func (o *BasketPackage) GetRevenueShare() []RevenueShare`

GetRevenueShare returns the RevenueShare field if non-nil, zero value otherwise.

### GetRevenueShareOk

`func (o *BasketPackage) GetRevenueShareOk() (*[]RevenueShare, bool)`

GetRevenueShareOk returns a tuple with the RevenueShare field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueShare

`func (o *BasketPackage) SetRevenueShare(v []RevenueShare)`

SetRevenueShare sets RevenueShare field to given value.

### HasRevenueShare

`func (o *BasketPackage) HasRevenueShare() bool`

HasRevenueShare returns a boolean if a field has been set.

### GetIsRecurring

`func (o *BasketPackage) GetIsRecurring() bool`

GetIsRecurring returns the IsRecurring field if non-nil, zero value otherwise.

### GetIsRecurringOk

`func (o *BasketPackage) GetIsRecurringOk() (*bool, bool)`

GetIsRecurringOk returns a tuple with the IsRecurring field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsRecurring

`func (o *BasketPackage) SetIsRecurring(v bool)`

SetIsRecurring sets IsRecurring field to given value.

### HasIsRecurring

`func (o *BasketPackage) HasIsRecurring() bool`

HasIsRecurring returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



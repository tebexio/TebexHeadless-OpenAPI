# Sale

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Name** | **string** |  | 
**StartsAt** | **time.Time** | Start of the sale, ISO 8601 in UTC. | 
**EndsAt** | **time.Time** | End of the sale, ISO 8601 in UTC. | 
**Discount** | [**SaleDiscount**](SaleDiscount.md) |  | 
**AppliesTo** | [**SaleAppliesTo**](SaleAppliesTo.md) |  | 
**Requirements** | [**[]SaleRequirement**](SaleRequirement.md) | Conditions a customer must meet for the sale to apply. Empty when the sale has none. &#x60;minimum_basket_value&#x60; can appear alongside &#x60;purchased_packages&#x60; or &#x60;lifetime_spend&#x60;. | 

## Methods

### NewSale

`func NewSale(id int32, name string, startsAt time.Time, endsAt time.Time, discount SaleDiscount, appliesTo SaleAppliesTo, requirements []SaleRequirement, ) *Sale`

NewSale instantiates a new Sale object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSaleWithDefaults

`func NewSaleWithDefaults() *Sale`

NewSaleWithDefaults instantiates a new Sale object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Sale) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Sale) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Sale) SetId(v int32)`

SetId sets Id field to given value.


### GetName

`func (o *Sale) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Sale) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Sale) SetName(v string)`

SetName sets Name field to given value.


### GetStartsAt

`func (o *Sale) GetStartsAt() time.Time`

GetStartsAt returns the StartsAt field if non-nil, zero value otherwise.

### GetStartsAtOk

`func (o *Sale) GetStartsAtOk() (*time.Time, bool)`

GetStartsAtOk returns a tuple with the StartsAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartsAt

`func (o *Sale) SetStartsAt(v time.Time)`

SetStartsAt sets StartsAt field to given value.


### GetEndsAt

`func (o *Sale) GetEndsAt() time.Time`

GetEndsAt returns the EndsAt field if non-nil, zero value otherwise.

### GetEndsAtOk

`func (o *Sale) GetEndsAtOk() (*time.Time, bool)`

GetEndsAtOk returns a tuple with the EndsAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndsAt

`func (o *Sale) SetEndsAt(v time.Time)`

SetEndsAt sets EndsAt field to given value.


### GetDiscount

`func (o *Sale) GetDiscount() SaleDiscount`

GetDiscount returns the Discount field if non-nil, zero value otherwise.

### GetDiscountOk

`func (o *Sale) GetDiscountOk() (*SaleDiscount, bool)`

GetDiscountOk returns a tuple with the Discount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscount

`func (o *Sale) SetDiscount(v SaleDiscount)`

SetDiscount sets Discount field to given value.


### GetAppliesTo

`func (o *Sale) GetAppliesTo() SaleAppliesTo`

GetAppliesTo returns the AppliesTo field if non-nil, zero value otherwise.

### GetAppliesToOk

`func (o *Sale) GetAppliesToOk() (*SaleAppliesTo, bool)`

GetAppliesToOk returns a tuple with the AppliesTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppliesTo

`func (o *Sale) SetAppliesTo(v SaleAppliesTo)`

SetAppliesTo sets AppliesTo field to given value.


### GetRequirements

`func (o *Sale) GetRequirements() []SaleRequirement`

GetRequirements returns the Requirements field if non-nil, zero value otherwise.

### GetRequirementsOk

`func (o *Sale) GetRequirementsOk() (*[]SaleRequirement, bool)`

GetRequirementsOk returns a tuple with the Requirements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequirements

`func (o *Sale) SetRequirements(v []SaleRequirement)`

SetRequirements sets Requirements field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



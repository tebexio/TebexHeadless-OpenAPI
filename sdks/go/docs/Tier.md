# Tier

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int32** |  | [optional] 
**CreatedAt** | Pointer to **time.Time** | The date and time when the tier became active | [optional] 
**UsernameId** | Pointer to **string** | The user&#39;s username ID. For Steam, this is a numeric representation of their Steam64ID | [optional] 
**Package** | Pointer to [**Package**](Package.md) |  | [optional] 
**Active** | Pointer to **bool** | True if the tier is currently active. | [optional] 
**RecurringPaymentReference** | Pointer to **string** | The ID of the recurring payment this tier is attached to. | [optional] 
**NextPaymentDate** | Pointer to **time.Time** | The date and time of the next payment for this tier. | [optional] 
**Status** | Pointer to [**TierStatus**](TierStatus.md) |  | [optional] 
**PendingDowngradePackage** | Pointer to [**NullableTierPendingDowngradePackage**](TierPendingDowngradePackage.md) |  | [optional] 

## Methods

### NewTier

`func NewTier() *Tier`

NewTier instantiates a new Tier object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTierWithDefaults

`func NewTierWithDefaults() *Tier`

NewTierWithDefaults instantiates a new Tier object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Tier) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Tier) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Tier) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *Tier) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCreatedAt

`func (o *Tier) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Tier) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Tier) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Tier) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUsernameId

`func (o *Tier) GetUsernameId() string`

GetUsernameId returns the UsernameId field if non-nil, zero value otherwise.

### GetUsernameIdOk

`func (o *Tier) GetUsernameIdOk() (*string, bool)`

GetUsernameIdOk returns a tuple with the UsernameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsernameId

`func (o *Tier) SetUsernameId(v string)`

SetUsernameId sets UsernameId field to given value.

### HasUsernameId

`func (o *Tier) HasUsernameId() bool`

HasUsernameId returns a boolean if a field has been set.

### GetPackage

`func (o *Tier) GetPackage() Package`

GetPackage returns the Package field if non-nil, zero value otherwise.

### GetPackageOk

`func (o *Tier) GetPackageOk() (*Package, bool)`

GetPackageOk returns a tuple with the Package field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackage

`func (o *Tier) SetPackage(v Package)`

SetPackage sets Package field to given value.

### HasPackage

`func (o *Tier) HasPackage() bool`

HasPackage returns a boolean if a field has been set.

### GetActive

`func (o *Tier) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *Tier) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *Tier) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *Tier) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetRecurringPaymentReference

`func (o *Tier) GetRecurringPaymentReference() string`

GetRecurringPaymentReference returns the RecurringPaymentReference field if non-nil, zero value otherwise.

### GetRecurringPaymentReferenceOk

`func (o *Tier) GetRecurringPaymentReferenceOk() (*string, bool)`

GetRecurringPaymentReferenceOk returns a tuple with the RecurringPaymentReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecurringPaymentReference

`func (o *Tier) SetRecurringPaymentReference(v string)`

SetRecurringPaymentReference sets RecurringPaymentReference field to given value.

### HasRecurringPaymentReference

`func (o *Tier) HasRecurringPaymentReference() bool`

HasRecurringPaymentReference returns a boolean if a field has been set.

### GetNextPaymentDate

`func (o *Tier) GetNextPaymentDate() time.Time`

GetNextPaymentDate returns the NextPaymentDate field if non-nil, zero value otherwise.

### GetNextPaymentDateOk

`func (o *Tier) GetNextPaymentDateOk() (*time.Time, bool)`

GetNextPaymentDateOk returns a tuple with the NextPaymentDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextPaymentDate

`func (o *Tier) SetNextPaymentDate(v time.Time)`

SetNextPaymentDate sets NextPaymentDate field to given value.

### HasNextPaymentDate

`func (o *Tier) HasNextPaymentDate() bool`

HasNextPaymentDate returns a boolean if a field has been set.

### GetStatus

`func (o *Tier) GetStatus() TierStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Tier) GetStatusOk() (*TierStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Tier) SetStatus(v TierStatus)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Tier) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetPendingDowngradePackage

`func (o *Tier) GetPendingDowngradePackage() TierPendingDowngradePackage`

GetPendingDowngradePackage returns the PendingDowngradePackage field if non-nil, zero value otherwise.

### GetPendingDowngradePackageOk

`func (o *Tier) GetPendingDowngradePackageOk() (*TierPendingDowngradePackage, bool)`

GetPendingDowngradePackageOk returns a tuple with the PendingDowngradePackage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPendingDowngradePackage

`func (o *Tier) SetPendingDowngradePackage(v TierPendingDowngradePackage)`

SetPendingDowngradePackage sets PendingDowngradePackage field to given value.

### HasPendingDowngradePackage

`func (o *Tier) HasPendingDowngradePackage() bool`

HasPendingDowngradePackage returns a boolean if a field has been set.

### SetPendingDowngradePackageNil

`func (o *Tier) SetPendingDowngradePackageNil(b bool)`

 SetPendingDowngradePackageNil sets the value for PendingDowngradePackage to be an explicit nil

### UnsetPendingDowngradePackage
`func (o *Tier) UnsetPendingDowngradePackage()`

UnsetPendingDowngradePackage ensures that no value is present for PendingDowngradePackage, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



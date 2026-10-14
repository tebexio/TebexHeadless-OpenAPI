# CommunityGoal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Name** | **string** |  | 
**Description** | **string** |  | 
**ImageUrl** | **NullableString** |  | 
**Target** | **float32** | The goal amount, in &#x60;currency&#x60;. | 
**Current** | **float32** | The amount raised so far, in &#x60;currency&#x60;. | 
**Currency** | **string** | The account currency. | 
**Percentage** | **float32** |  | 
**Repeatable** | **bool** |  | 
**TimesAchieved** | **int32** |  | 
**LastAchieved** | **NullableTime** |  | 
**Status** | **string** |  | 
**CreatedAt** | **time.Time** |  | 
**UpdatedAt** | **time.Time** |  | 

## Methods

### NewCommunityGoal

`func NewCommunityGoal(id int32, name string, description string, imageUrl NullableString, target float32, current float32, currency string, percentage float32, repeatable bool, timesAchieved int32, lastAchieved NullableTime, status string, createdAt time.Time, updatedAt time.Time, ) *CommunityGoal`

NewCommunityGoal instantiates a new CommunityGoal object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommunityGoalWithDefaults

`func NewCommunityGoalWithDefaults() *CommunityGoal`

NewCommunityGoalWithDefaults instantiates a new CommunityGoal object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CommunityGoal) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CommunityGoal) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CommunityGoal) SetId(v int32)`

SetId sets Id field to given value.


### GetName

`func (o *CommunityGoal) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CommunityGoal) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CommunityGoal) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *CommunityGoal) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CommunityGoal) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CommunityGoal) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetImageUrl

`func (o *CommunityGoal) GetImageUrl() string`

GetImageUrl returns the ImageUrl field if non-nil, zero value otherwise.

### GetImageUrlOk

`func (o *CommunityGoal) GetImageUrlOk() (*string, bool)`

GetImageUrlOk returns a tuple with the ImageUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageUrl

`func (o *CommunityGoal) SetImageUrl(v string)`

SetImageUrl sets ImageUrl field to given value.


### SetImageUrlNil

`func (o *CommunityGoal) SetImageUrlNil(b bool)`

 SetImageUrlNil sets the value for ImageUrl to be an explicit nil

### UnsetImageUrl
`func (o *CommunityGoal) UnsetImageUrl()`

UnsetImageUrl ensures that no value is present for ImageUrl, not even an explicit nil
### GetTarget

`func (o *CommunityGoal) GetTarget() float32`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *CommunityGoal) GetTargetOk() (*float32, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *CommunityGoal) SetTarget(v float32)`

SetTarget sets Target field to given value.


### GetCurrent

`func (o *CommunityGoal) GetCurrent() float32`

GetCurrent returns the Current field if non-nil, zero value otherwise.

### GetCurrentOk

`func (o *CommunityGoal) GetCurrentOk() (*float32, bool)`

GetCurrentOk returns a tuple with the Current field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrent

`func (o *CommunityGoal) SetCurrent(v float32)`

SetCurrent sets Current field to given value.


### GetCurrency

`func (o *CommunityGoal) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *CommunityGoal) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *CommunityGoal) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetPercentage

`func (o *CommunityGoal) GetPercentage() float32`

GetPercentage returns the Percentage field if non-nil, zero value otherwise.

### GetPercentageOk

`func (o *CommunityGoal) GetPercentageOk() (*float32, bool)`

GetPercentageOk returns a tuple with the Percentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentage

`func (o *CommunityGoal) SetPercentage(v float32)`

SetPercentage sets Percentage field to given value.


### GetRepeatable

`func (o *CommunityGoal) GetRepeatable() bool`

GetRepeatable returns the Repeatable field if non-nil, zero value otherwise.

### GetRepeatableOk

`func (o *CommunityGoal) GetRepeatableOk() (*bool, bool)`

GetRepeatableOk returns a tuple with the Repeatable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRepeatable

`func (o *CommunityGoal) SetRepeatable(v bool)`

SetRepeatable sets Repeatable field to given value.


### GetTimesAchieved

`func (o *CommunityGoal) GetTimesAchieved() int32`

GetTimesAchieved returns the TimesAchieved field if non-nil, zero value otherwise.

### GetTimesAchievedOk

`func (o *CommunityGoal) GetTimesAchievedOk() (*int32, bool)`

GetTimesAchievedOk returns a tuple with the TimesAchieved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimesAchieved

`func (o *CommunityGoal) SetTimesAchieved(v int32)`

SetTimesAchieved sets TimesAchieved field to given value.


### GetLastAchieved

`func (o *CommunityGoal) GetLastAchieved() time.Time`

GetLastAchieved returns the LastAchieved field if non-nil, zero value otherwise.

### GetLastAchievedOk

`func (o *CommunityGoal) GetLastAchievedOk() (*time.Time, bool)`

GetLastAchievedOk returns a tuple with the LastAchieved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastAchieved

`func (o *CommunityGoal) SetLastAchieved(v time.Time)`

SetLastAchieved sets LastAchieved field to given value.


### SetLastAchievedNil

`func (o *CommunityGoal) SetLastAchievedNil(b bool)`

 SetLastAchievedNil sets the value for LastAchieved to be an explicit nil

### UnsetLastAchieved
`func (o *CommunityGoal) UnsetLastAchieved()`

UnsetLastAchieved ensures that no value is present for LastAchieved, not even an explicit nil
### GetStatus

`func (o *CommunityGoal) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CommunityGoal) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CommunityGoal) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetCreatedAt

`func (o *CommunityGoal) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *CommunityGoal) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *CommunityGoal) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *CommunityGoal) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *CommunityGoal) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *CommunityGoal) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



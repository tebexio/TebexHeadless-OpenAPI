# CommunityGoalData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Header** | **string** |  | 
**BarStyle** | **string** |  | 
**BarAnimated** | **bool** |  | 
**Percentage** | **float32** |  | 
**TotalPayments** | Pointer to **NullableFloat32** | Optional, present depending on module configuration. | [optional] 
**Target** | Pointer to **NullableFloat32** | Optional, present depending on module configuration. | [optional] 
**TimesAchieved** | Pointer to **NullableInt32** | Optional, present depending on module configuration. | [optional] 

## Methods

### NewCommunityGoalData

`func NewCommunityGoalData(header string, barStyle string, barAnimated bool, percentage float32, ) *CommunityGoalData`

NewCommunityGoalData instantiates a new CommunityGoalData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommunityGoalDataWithDefaults

`func NewCommunityGoalDataWithDefaults() *CommunityGoalData`

NewCommunityGoalDataWithDefaults instantiates a new CommunityGoalData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHeader

`func (o *CommunityGoalData) GetHeader() string`

GetHeader returns the Header field if non-nil, zero value otherwise.

### GetHeaderOk

`func (o *CommunityGoalData) GetHeaderOk() (*string, bool)`

GetHeaderOk returns a tuple with the Header field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeader

`func (o *CommunityGoalData) SetHeader(v string)`

SetHeader sets Header field to given value.


### GetBarStyle

`func (o *CommunityGoalData) GetBarStyle() string`

GetBarStyle returns the BarStyle field if non-nil, zero value otherwise.

### GetBarStyleOk

`func (o *CommunityGoalData) GetBarStyleOk() (*string, bool)`

GetBarStyleOk returns a tuple with the BarStyle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBarStyle

`func (o *CommunityGoalData) SetBarStyle(v string)`

SetBarStyle sets BarStyle field to given value.


### GetBarAnimated

`func (o *CommunityGoalData) GetBarAnimated() bool`

GetBarAnimated returns the BarAnimated field if non-nil, zero value otherwise.

### GetBarAnimatedOk

`func (o *CommunityGoalData) GetBarAnimatedOk() (*bool, bool)`

GetBarAnimatedOk returns a tuple with the BarAnimated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBarAnimated

`func (o *CommunityGoalData) SetBarAnimated(v bool)`

SetBarAnimated sets BarAnimated field to given value.


### GetPercentage

`func (o *CommunityGoalData) GetPercentage() float32`

GetPercentage returns the Percentage field if non-nil, zero value otherwise.

### GetPercentageOk

`func (o *CommunityGoalData) GetPercentageOk() (*float32, bool)`

GetPercentageOk returns a tuple with the Percentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentage

`func (o *CommunityGoalData) SetPercentage(v float32)`

SetPercentage sets Percentage field to given value.


### GetTotalPayments

`func (o *CommunityGoalData) GetTotalPayments() float32`

GetTotalPayments returns the TotalPayments field if non-nil, zero value otherwise.

### GetTotalPaymentsOk

`func (o *CommunityGoalData) GetTotalPaymentsOk() (*float32, bool)`

GetTotalPaymentsOk returns a tuple with the TotalPayments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPayments

`func (o *CommunityGoalData) SetTotalPayments(v float32)`

SetTotalPayments sets TotalPayments field to given value.

### HasTotalPayments

`func (o *CommunityGoalData) HasTotalPayments() bool`

HasTotalPayments returns a boolean if a field has been set.

### SetTotalPaymentsNil

`func (o *CommunityGoalData) SetTotalPaymentsNil(b bool)`

 SetTotalPaymentsNil sets the value for TotalPayments to be an explicit nil

### UnsetTotalPayments
`func (o *CommunityGoalData) UnsetTotalPayments()`

UnsetTotalPayments ensures that no value is present for TotalPayments, not even an explicit nil
### GetTarget

`func (o *CommunityGoalData) GetTarget() float32`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *CommunityGoalData) GetTargetOk() (*float32, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *CommunityGoalData) SetTarget(v float32)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *CommunityGoalData) HasTarget() bool`

HasTarget returns a boolean if a field has been set.

### SetTargetNil

`func (o *CommunityGoalData) SetTargetNil(b bool)`

 SetTargetNil sets the value for Target to be an explicit nil

### UnsetTarget
`func (o *CommunityGoalData) UnsetTarget()`

UnsetTarget ensures that no value is present for Target, not even an explicit nil
### GetTimesAchieved

`func (o *CommunityGoalData) GetTimesAchieved() int32`

GetTimesAchieved returns the TimesAchieved field if non-nil, zero value otherwise.

### GetTimesAchievedOk

`func (o *CommunityGoalData) GetTimesAchievedOk() (*int32, bool)`

GetTimesAchievedOk returns a tuple with the TimesAchieved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimesAchieved

`func (o *CommunityGoalData) SetTimesAchieved(v int32)`

SetTimesAchieved sets TimesAchieved field to given value.

### HasTimesAchieved

`func (o *CommunityGoalData) HasTimesAchieved() bool`

HasTimesAchieved returns a boolean if a field has been set.

### SetTimesAchievedNil

`func (o *CommunityGoalData) SetTimesAchievedNil(b bool)`

 SetTimesAchievedNil sets the value for TimesAchieved to be an explicit nil

### UnsetTimesAchieved
`func (o *CommunityGoalData) UnsetTimesAchieved()`

UnsetTimesAchieved ensures that no value is present for TimesAchieved, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



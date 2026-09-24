# PaymentGoalData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Header** | **string** |  | 
**Percentage** | **float32** |  | 
**BarStyle** | **string** |  | 
**BarAnimated** | **bool** |  | 
**Total** | Pointer to **NullableFloat32** | Optional, present depending on module configuration. | [optional] 
**Target** | Pointer to **NullableFloat32** | Optional, present depending on module configuration. | [optional] 

## Methods

### NewPaymentGoalData

`func NewPaymentGoalData(header string, percentage float32, barStyle string, barAnimated bool, ) *PaymentGoalData`

NewPaymentGoalData instantiates a new PaymentGoalData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentGoalDataWithDefaults

`func NewPaymentGoalDataWithDefaults() *PaymentGoalData`

NewPaymentGoalDataWithDefaults instantiates a new PaymentGoalData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHeader

`func (o *PaymentGoalData) GetHeader() string`

GetHeader returns the Header field if non-nil, zero value otherwise.

### GetHeaderOk

`func (o *PaymentGoalData) GetHeaderOk() (*string, bool)`

GetHeaderOk returns a tuple with the Header field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeader

`func (o *PaymentGoalData) SetHeader(v string)`

SetHeader sets Header field to given value.


### GetPercentage

`func (o *PaymentGoalData) GetPercentage() float32`

GetPercentage returns the Percentage field if non-nil, zero value otherwise.

### GetPercentageOk

`func (o *PaymentGoalData) GetPercentageOk() (*float32, bool)`

GetPercentageOk returns a tuple with the Percentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentage

`func (o *PaymentGoalData) SetPercentage(v float32)`

SetPercentage sets Percentage field to given value.


### GetBarStyle

`func (o *PaymentGoalData) GetBarStyle() string`

GetBarStyle returns the BarStyle field if non-nil, zero value otherwise.

### GetBarStyleOk

`func (o *PaymentGoalData) GetBarStyleOk() (*string, bool)`

GetBarStyleOk returns a tuple with the BarStyle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBarStyle

`func (o *PaymentGoalData) SetBarStyle(v string)`

SetBarStyle sets BarStyle field to given value.


### GetBarAnimated

`func (o *PaymentGoalData) GetBarAnimated() bool`

GetBarAnimated returns the BarAnimated field if non-nil, zero value otherwise.

### GetBarAnimatedOk

`func (o *PaymentGoalData) GetBarAnimatedOk() (*bool, bool)`

GetBarAnimatedOk returns a tuple with the BarAnimated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBarAnimated

`func (o *PaymentGoalData) SetBarAnimated(v bool)`

SetBarAnimated sets BarAnimated field to given value.


### GetTotal

`func (o *PaymentGoalData) GetTotal() float32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *PaymentGoalData) GetTotalOk() (*float32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *PaymentGoalData) SetTotal(v float32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *PaymentGoalData) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### SetTotalNil

`func (o *PaymentGoalData) SetTotalNil(b bool)`

 SetTotalNil sets the value for Total to be an explicit nil

### UnsetTotal
`func (o *PaymentGoalData) UnsetTotal()`

UnsetTotal ensures that no value is present for Total, not even an explicit nil
### GetTarget

`func (o *PaymentGoalData) GetTarget() float32`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *PaymentGoalData) GetTargetOk() (*float32, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *PaymentGoalData) SetTarget(v float32)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *PaymentGoalData) HasTarget() bool`

HasTarget returns a boolean if a field has been set.

### SetTargetNil

`func (o *PaymentGoalData) SetTargetNil(b bool)`

 SetTargetNil sets the value for Target to be an explicit nil

### UnsetTarget
`func (o *PaymentGoalData) UnsetTarget()`

UnsetTarget ensures that no value is present for Target, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



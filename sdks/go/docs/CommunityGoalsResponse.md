# CommunityGoalsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | [**[]CommunityGoal**](CommunityGoal.md) | Community goals. Empty when none match. | 

## Methods

### NewCommunityGoalsResponse

`func NewCommunityGoalsResponse(data []CommunityGoal, ) *CommunityGoalsResponse`

NewCommunityGoalsResponse instantiates a new CommunityGoalsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommunityGoalsResponseWithDefaults

`func NewCommunityGoalsResponseWithDefaults() *CommunityGoalsResponse`

NewCommunityGoalsResponseWithDefaults instantiates a new CommunityGoalsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *CommunityGoalsResponse) GetData() []CommunityGoal`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *CommunityGoalsResponse) GetDataOk() (*[]CommunityGoal, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *CommunityGoalsResponse) SetData(v []CommunityGoal)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



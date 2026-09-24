# RecentPaymentsModule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | 
**Type** | **interface{}** |  | 
**StartTime** | **time.Time** |  | 
**EndTime** | Pointer to **time.Time** | Nullable; when null the module is ongoing. | [optional] 
**Data** | [**RecentPaymentsData**](RecentPaymentsData.md) |  | 

## Methods

### NewRecentPaymentsModule

`func NewRecentPaymentsModule(id int64, type_ interface{}, startTime time.Time, data RecentPaymentsData, ) *RecentPaymentsModule`

NewRecentPaymentsModule instantiates a new RecentPaymentsModule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecentPaymentsModuleWithDefaults

`func NewRecentPaymentsModuleWithDefaults() *RecentPaymentsModule`

NewRecentPaymentsModuleWithDefaults instantiates a new RecentPaymentsModule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RecentPaymentsModule) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RecentPaymentsModule) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RecentPaymentsModule) SetId(v int64)`

SetId sets Id field to given value.


### GetType

`func (o *RecentPaymentsModule) GetType() interface{}`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RecentPaymentsModule) GetTypeOk() (*interface{}, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RecentPaymentsModule) SetType(v interface{})`

SetType sets Type field to given value.


### SetTypeNil

`func (o *RecentPaymentsModule) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *RecentPaymentsModule) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil
### GetStartTime

`func (o *RecentPaymentsModule) GetStartTime() time.Time`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *RecentPaymentsModule) GetStartTimeOk() (*time.Time, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *RecentPaymentsModule) SetStartTime(v time.Time)`

SetStartTime sets StartTime field to given value.


### GetEndTime

`func (o *RecentPaymentsModule) GetEndTime() time.Time`

GetEndTime returns the EndTime field if non-nil, zero value otherwise.

### GetEndTimeOk

`func (o *RecentPaymentsModule) GetEndTimeOk() (*time.Time, bool)`

GetEndTimeOk returns a tuple with the EndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndTime

`func (o *RecentPaymentsModule) SetEndTime(v time.Time)`

SetEndTime sets EndTime field to given value.

### HasEndTime

`func (o *RecentPaymentsModule) HasEndTime() bool`

HasEndTime returns a boolean if a field has been set.

### GetData

`func (o *RecentPaymentsModule) GetData() RecentPaymentsData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *RecentPaymentsModule) GetDataOk() (*RecentPaymentsData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *RecentPaymentsModule) SetData(v RecentPaymentsData)`

SetData sets Data field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



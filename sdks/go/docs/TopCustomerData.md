# TopCustomerData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Header** | **string** |  | 
**Username** | **string** |  | 
**UsernameId** | **string** | User identifier. | 
**Total** | Pointer to **float32** | Optional, present depending on module configuration. | [optional] 

## Methods

### NewTopCustomerData

`func NewTopCustomerData(header string, username string, usernameId string, ) *TopCustomerData`

NewTopCustomerData instantiates a new TopCustomerData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTopCustomerDataWithDefaults

`func NewTopCustomerDataWithDefaults() *TopCustomerData`

NewTopCustomerDataWithDefaults instantiates a new TopCustomerData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHeader

`func (o *TopCustomerData) GetHeader() string`

GetHeader returns the Header field if non-nil, zero value otherwise.

### GetHeaderOk

`func (o *TopCustomerData) GetHeaderOk() (*string, bool)`

GetHeaderOk returns a tuple with the Header field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeader

`func (o *TopCustomerData) SetHeader(v string)`

SetHeader sets Header field to given value.


### GetUsername

`func (o *TopCustomerData) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *TopCustomerData) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *TopCustomerData) SetUsername(v string)`

SetUsername sets Username field to given value.


### GetUsernameId

`func (o *TopCustomerData) GetUsernameId() string`

GetUsernameId returns the UsernameId field if non-nil, zero value otherwise.

### GetUsernameIdOk

`func (o *TopCustomerData) GetUsernameIdOk() (*string, bool)`

GetUsernameIdOk returns a tuple with the UsernameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsernameId

`func (o *TopCustomerData) SetUsernameId(v string)`

SetUsernameId sets UsernameId field to given value.


### GetTotal

`func (o *TopCustomerData) GetTotal() float32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *TopCustomerData) GetTotalOk() (*float32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *TopCustomerData) SetTotal(v float32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *TopCustomerData) HasTotal() bool`

HasTotal returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CreateBasketRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompleteUrl** | Pointer to **string** | A URL the user can return to when checkout is completed. | [optional] 
**CancelUrl** | Pointer to **string** | A URL the user can return to when cancelling checkout. | [optional] 
**Custom** | Pointer to **map[string]interface{}** | Custom data you wish to associate with the basket. This data will be included with webhook responses and GET requests associated with the Basket. | [optional] 
**CompleteAutoRedirect** | Pointer to **bool** | True if the user should automatically be redirected to the relevant complete/cancel URL | [optional] 

## Methods

### NewCreateBasketRequest

`func NewCreateBasketRequest() *CreateBasketRequest`

NewCreateBasketRequest instantiates a new CreateBasketRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateBasketRequestWithDefaults

`func NewCreateBasketRequestWithDefaults() *CreateBasketRequest`

NewCreateBasketRequestWithDefaults instantiates a new CreateBasketRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompleteUrl

`func (o *CreateBasketRequest) GetCompleteUrl() string`

GetCompleteUrl returns the CompleteUrl field if non-nil, zero value otherwise.

### GetCompleteUrlOk

`func (o *CreateBasketRequest) GetCompleteUrlOk() (*string, bool)`

GetCompleteUrlOk returns a tuple with the CompleteUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleteUrl

`func (o *CreateBasketRequest) SetCompleteUrl(v string)`

SetCompleteUrl sets CompleteUrl field to given value.

### HasCompleteUrl

`func (o *CreateBasketRequest) HasCompleteUrl() bool`

HasCompleteUrl returns a boolean if a field has been set.

### GetCancelUrl

`func (o *CreateBasketRequest) GetCancelUrl() string`

GetCancelUrl returns the CancelUrl field if non-nil, zero value otherwise.

### GetCancelUrlOk

`func (o *CreateBasketRequest) GetCancelUrlOk() (*string, bool)`

GetCancelUrlOk returns a tuple with the CancelUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelUrl

`func (o *CreateBasketRequest) SetCancelUrl(v string)`

SetCancelUrl sets CancelUrl field to given value.

### HasCancelUrl

`func (o *CreateBasketRequest) HasCancelUrl() bool`

HasCancelUrl returns a boolean if a field has been set.

### GetCustom

`func (o *CreateBasketRequest) GetCustom() map[string]interface{}`

GetCustom returns the Custom field if non-nil, zero value otherwise.

### GetCustomOk

`func (o *CreateBasketRequest) GetCustomOk() (*map[string]interface{}, bool)`

GetCustomOk returns a tuple with the Custom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustom

`func (o *CreateBasketRequest) SetCustom(v map[string]interface{})`

SetCustom sets Custom field to given value.

### HasCustom

`func (o *CreateBasketRequest) HasCustom() bool`

HasCustom returns a boolean if a field has been set.

### GetCompleteAutoRedirect

`func (o *CreateBasketRequest) GetCompleteAutoRedirect() bool`

GetCompleteAutoRedirect returns the CompleteAutoRedirect field if non-nil, zero value otherwise.

### GetCompleteAutoRedirectOk

`func (o *CreateBasketRequest) GetCompleteAutoRedirectOk() (*bool, bool)`

GetCompleteAutoRedirectOk returns a tuple with the CompleteAutoRedirect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleteAutoRedirect

`func (o *CreateBasketRequest) SetCompleteAutoRedirect(v bool)`

SetCompleteAutoRedirect sets CompleteAutoRedirect field to given value.

### HasCompleteAutoRedirect

`func (o *CreateBasketRequest) HasCompleteAutoRedirect() bool`

HasCompleteAutoRedirect returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



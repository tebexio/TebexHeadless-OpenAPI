# RecentPaymentsData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Header** | **string** |  | 
**Payments** | [**[]RecentPayment**](RecentPayment.md) |  | 

## Methods

### NewRecentPaymentsData

`func NewRecentPaymentsData(header string, payments []RecentPayment, ) *RecentPaymentsData`

NewRecentPaymentsData instantiates a new RecentPaymentsData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecentPaymentsDataWithDefaults

`func NewRecentPaymentsDataWithDefaults() *RecentPaymentsData`

NewRecentPaymentsDataWithDefaults instantiates a new RecentPaymentsData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHeader

`func (o *RecentPaymentsData) GetHeader() string`

GetHeader returns the Header field if non-nil, zero value otherwise.

### GetHeaderOk

`func (o *RecentPaymentsData) GetHeaderOk() (*string, bool)`

GetHeaderOk returns a tuple with the Header field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeader

`func (o *RecentPaymentsData) SetHeader(v string)`

SetHeader sets Header field to given value.


### GetPayments

`func (o *RecentPaymentsData) GetPayments() []RecentPayment`

GetPayments returns the Payments field if non-nil, zero value otherwise.

### GetPaymentsOk

`func (o *RecentPaymentsData) GetPaymentsOk() (*[]RecentPayment, bool)`

GetPaymentsOk returns a tuple with the Payments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayments

`func (o *RecentPaymentsData) SetPayments(v []RecentPayment)`

SetPayments sets Payments field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



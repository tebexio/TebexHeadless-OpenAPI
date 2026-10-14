# SaleAppliesTo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** |  | 
**Packages** | [**[]SaleReference**](SaleReference.md) | Filled when &#x60;type&#x60; is &#x60;package&#x60;. | 
**Categories** | [**[]SaleReference**](SaleReference.md) | Filled when &#x60;type&#x60; is &#x60;category&#x60;. | 
**VariableOptions** | [**[]SaleReference**](SaleReference.md) | Filled when &#x60;type&#x60; is &#x60;variable_option&#x60;. | 
**ExcludedPackages** | [**[]SaleReference**](SaleReference.md) | Packages excluded from the sale. Filled only when &#x60;type&#x60; is &#x60;all&#x60;. | 

## Methods

### NewSaleAppliesTo

`func NewSaleAppliesTo(type_ string, packages []SaleReference, categories []SaleReference, variableOptions []SaleReference, excludedPackages []SaleReference, ) *SaleAppliesTo`

NewSaleAppliesTo instantiates a new SaleAppliesTo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSaleAppliesToWithDefaults

`func NewSaleAppliesToWithDefaults() *SaleAppliesTo`

NewSaleAppliesToWithDefaults instantiates a new SaleAppliesTo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SaleAppliesTo) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SaleAppliesTo) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SaleAppliesTo) SetType(v string)`

SetType sets Type field to given value.


### GetPackages

`func (o *SaleAppliesTo) GetPackages() []SaleReference`

GetPackages returns the Packages field if non-nil, zero value otherwise.

### GetPackagesOk

`func (o *SaleAppliesTo) GetPackagesOk() (*[]SaleReference, bool)`

GetPackagesOk returns a tuple with the Packages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackages

`func (o *SaleAppliesTo) SetPackages(v []SaleReference)`

SetPackages sets Packages field to given value.


### GetCategories

`func (o *SaleAppliesTo) GetCategories() []SaleReference`

GetCategories returns the Categories field if non-nil, zero value otherwise.

### GetCategoriesOk

`func (o *SaleAppliesTo) GetCategoriesOk() (*[]SaleReference, bool)`

GetCategoriesOk returns a tuple with the Categories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategories

`func (o *SaleAppliesTo) SetCategories(v []SaleReference)`

SetCategories sets Categories field to given value.


### GetVariableOptions

`func (o *SaleAppliesTo) GetVariableOptions() []SaleReference`

GetVariableOptions returns the VariableOptions field if non-nil, zero value otherwise.

### GetVariableOptionsOk

`func (o *SaleAppliesTo) GetVariableOptionsOk() (*[]SaleReference, bool)`

GetVariableOptionsOk returns a tuple with the VariableOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariableOptions

`func (o *SaleAppliesTo) SetVariableOptions(v []SaleReference)`

SetVariableOptions sets VariableOptions field to given value.


### GetExcludedPackages

`func (o *SaleAppliesTo) GetExcludedPackages() []SaleReference`

GetExcludedPackages returns the ExcludedPackages field if non-nil, zero value otherwise.

### GetExcludedPackagesOk

`func (o *SaleAppliesTo) GetExcludedPackagesOk() (*[]SaleReference, bool)`

GetExcludedPackagesOk returns a tuple with the ExcludedPackages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludedPackages

`func (o *SaleAppliesTo) SetExcludedPackages(v []SaleReference)`

SetExcludedPackages sets ExcludedPackages field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



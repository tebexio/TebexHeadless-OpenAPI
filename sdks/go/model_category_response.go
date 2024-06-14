/*
Tebex Headless API

The headless API is designed for implementing your own store frontend with the data of your store. You are able to call the Headless API directly from a web browser (such as within an SPA), or from a backend server, such as for in-game GUIs.

API version: 1.0.0
Contact: tebex-integrations@overwolf.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package TebexHeadless

import (
	"encoding/json"
)

// checks if the CategoryResponse type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CategoryResponse{}

// CategoryResponse struct for CategoryResponse
type CategoryResponse struct {
	Data []Category `json:"data,omitempty"`
}

// NewCategoryResponse instantiates a new CategoryResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCategoryResponse() *CategoryResponse {
	this := CategoryResponse{}
	return &this
}

// NewCategoryResponseWithDefaults instantiates a new CategoryResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCategoryResponseWithDefaults() *CategoryResponse {
	this := CategoryResponse{}
	return &this
}

// GetData returns the Data field value if set, zero value otherwise.
func (o *CategoryResponse) GetData() []Category {
	if o == nil || IsNil(o.Data) {
		var ret []Category
		return ret
	}
	return o.Data
}

// GetDataOk returns a tuple with the Data field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CategoryResponse) GetDataOk() ([]Category, bool) {
	if o == nil || IsNil(o.Data) {
		return nil, false
	}
	return o.Data, true
}

// HasData returns a boolean if a field has been set.
func (o *CategoryResponse) HasData() bool {
	if o != nil && !IsNil(o.Data) {
		return true
	}

	return false
}

// SetData gets a reference to the given []Category and assigns it to the Data field.
func (o *CategoryResponse) SetData(v []Category) {
	o.Data = v
}

func (o CategoryResponse) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CategoryResponse) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Data) {
		toSerialize["data"] = o.Data
	}
	return toSerialize, nil
}

type NullableCategoryResponse struct {
	value *CategoryResponse
	isSet bool
}

func (v NullableCategoryResponse) Get() *CategoryResponse {
	return v.value
}

func (v *NullableCategoryResponse) Set(val *CategoryResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableCategoryResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableCategoryResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCategoryResponse(val *CategoryResponse) *NullableCategoryResponse {
	return &NullableCategoryResponse{value: val, isSet: true}
}

func (v NullableCategoryResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCategoryResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



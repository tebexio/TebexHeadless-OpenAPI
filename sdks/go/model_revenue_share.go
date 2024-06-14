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

// checks if the RevenueShare type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RevenueShare{}

// RevenueShare struct for RevenueShare
type RevenueShare struct {
	WalletRef *string `json:"wallet_ref,omitempty"`
	// A float (decimal) value representing the amount of this payment in your account currency that is credited to the `wallet_ref`
	Amount *float32 `json:"amount,omitempty"`
	// A float (decimal) value representing the percentage of the gateway fee that should be dedicated from this wallet’s revenue share. This optional value can be anywhere between 0 - 100.
	GatewayFeePercent *float32 `json:"gateway_fee_percent,omitempty"`
}

// NewRevenueShare instantiates a new RevenueShare object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRevenueShare() *RevenueShare {
	this := RevenueShare{}
	return &this
}

// NewRevenueShareWithDefaults instantiates a new RevenueShare object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRevenueShareWithDefaults() *RevenueShare {
	this := RevenueShare{}
	return &this
}

// GetWalletRef returns the WalletRef field value if set, zero value otherwise.
func (o *RevenueShare) GetWalletRef() string {
	if o == nil || IsNil(o.WalletRef) {
		var ret string
		return ret
	}
	return *o.WalletRef
}

// GetWalletRefOk returns a tuple with the WalletRef field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueShare) GetWalletRefOk() (*string, bool) {
	if o == nil || IsNil(o.WalletRef) {
		return nil, false
	}
	return o.WalletRef, true
}

// HasWalletRef returns a boolean if a field has been set.
func (o *RevenueShare) HasWalletRef() bool {
	if o != nil && !IsNil(o.WalletRef) {
		return true
	}

	return false
}

// SetWalletRef gets a reference to the given string and assigns it to the WalletRef field.
func (o *RevenueShare) SetWalletRef(v string) {
	o.WalletRef = &v
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *RevenueShare) GetAmount() float32 {
	if o == nil || IsNil(o.Amount) {
		var ret float32
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueShare) GetAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.Amount) {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *RevenueShare) HasAmount() bool {
	if o != nil && !IsNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given float32 and assigns it to the Amount field.
func (o *RevenueShare) SetAmount(v float32) {
	o.Amount = &v
}

// GetGatewayFeePercent returns the GatewayFeePercent field value if set, zero value otherwise.
func (o *RevenueShare) GetGatewayFeePercent() float32 {
	if o == nil || IsNil(o.GatewayFeePercent) {
		var ret float32
		return ret
	}
	return *o.GatewayFeePercent
}

// GetGatewayFeePercentOk returns a tuple with the GatewayFeePercent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RevenueShare) GetGatewayFeePercentOk() (*float32, bool) {
	if o == nil || IsNil(o.GatewayFeePercent) {
		return nil, false
	}
	return o.GatewayFeePercent, true
}

// HasGatewayFeePercent returns a boolean if a field has been set.
func (o *RevenueShare) HasGatewayFeePercent() bool {
	if o != nil && !IsNil(o.GatewayFeePercent) {
		return true
	}

	return false
}

// SetGatewayFeePercent gets a reference to the given float32 and assigns it to the GatewayFeePercent field.
func (o *RevenueShare) SetGatewayFeePercent(v float32) {
	o.GatewayFeePercent = &v
}

func (o RevenueShare) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RevenueShare) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.WalletRef) {
		toSerialize["wallet_ref"] = o.WalletRef
	}
	if !IsNil(o.Amount) {
		toSerialize["amount"] = o.Amount
	}
	if !IsNil(o.GatewayFeePercent) {
		toSerialize["gateway_fee_percent"] = o.GatewayFeePercent
	}
	return toSerialize, nil
}

type NullableRevenueShare struct {
	value *RevenueShare
	isSet bool
}

func (v NullableRevenueShare) Get() *RevenueShare {
	return v.value
}

func (v *NullableRevenueShare) Set(val *RevenueShare) {
	v.value = val
	v.isSet = true
}

func (v NullableRevenueShare) IsSet() bool {
	return v.isSet
}

func (v *NullableRevenueShare) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRevenueShare(val *RevenueShare) *NullableRevenueShare {
	return &NullableRevenueShare{value: val, isSet: true}
}

func (v NullableRevenueShare) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRevenueShare) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



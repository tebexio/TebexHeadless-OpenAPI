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

// checks if the BasketLinks type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BasketLinks{}

// BasketLinks struct for BasketLinks
type BasketLinks struct {
	// The `links.payment` property is only returned if the basket has been paid for and a payment exists with the `complete`,`refund`, or `chargeback` status.
	Payment *string `json:"payment,omitempty"`
	// The `links.checkout` property is only returned if the basket has not been paid, and is the URL to send the customer to make payment
	Checkout *string `json:"checkout,omitempty"`
}

// NewBasketLinks instantiates a new BasketLinks object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBasketLinks() *BasketLinks {
	this := BasketLinks{}
	return &this
}

// NewBasketLinksWithDefaults instantiates a new BasketLinks object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBasketLinksWithDefaults() *BasketLinks {
	this := BasketLinks{}
	return &this
}

// GetPayment returns the Payment field value if set, zero value otherwise.
func (o *BasketLinks) GetPayment() string {
	if o == nil || IsNil(o.Payment) {
		var ret string
		return ret
	}
	return *o.Payment
}

// GetPaymentOk returns a tuple with the Payment field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BasketLinks) GetPaymentOk() (*string, bool) {
	if o == nil || IsNil(o.Payment) {
		return nil, false
	}
	return o.Payment, true
}

// HasPayment returns a boolean if a field has been set.
func (o *BasketLinks) HasPayment() bool {
	if o != nil && !IsNil(o.Payment) {
		return true
	}

	return false
}

// SetPayment gets a reference to the given string and assigns it to the Payment field.
func (o *BasketLinks) SetPayment(v string) {
	o.Payment = &v
}

// GetCheckout returns the Checkout field value if set, zero value otherwise.
func (o *BasketLinks) GetCheckout() string {
	if o == nil || IsNil(o.Checkout) {
		var ret string
		return ret
	}
	return *o.Checkout
}

// GetCheckoutOk returns a tuple with the Checkout field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BasketLinks) GetCheckoutOk() (*string, bool) {
	if o == nil || IsNil(o.Checkout) {
		return nil, false
	}
	return o.Checkout, true
}

// HasCheckout returns a boolean if a field has been set.
func (o *BasketLinks) HasCheckout() bool {
	if o != nil && !IsNil(o.Checkout) {
		return true
	}

	return false
}

// SetCheckout gets a reference to the given string and assigns it to the Checkout field.
func (o *BasketLinks) SetCheckout(v string) {
	o.Checkout = &v
}

func (o BasketLinks) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BasketLinks) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Payment) {
		toSerialize["payment"] = o.Payment
	}
	if !IsNil(o.Checkout) {
		toSerialize["checkout"] = o.Checkout
	}
	return toSerialize, nil
}

type NullableBasketLinks struct {
	value *BasketLinks
	isSet bool
}

func (v NullableBasketLinks) Get() *BasketLinks {
	return v.value
}

func (v *NullableBasketLinks) Set(val *BasketLinks) {
	v.value = val
	v.isSet = true
}

func (v NullableBasketLinks) IsSet() bool {
	return v.isSet
}

func (v *NullableBasketLinks) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBasketLinks(val *BasketLinks) *NullableBasketLinks {
	return &NullableBasketLinks{value: val, isSet: true}
}

func (v NullableBasketLinks) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBasketLinks) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



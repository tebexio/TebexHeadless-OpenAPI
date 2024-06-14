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
	"time"
)

// checks if the Webstore type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &Webstore{}

// Webstore struct for Webstore
type Webstore struct {
	Id *int32 `json:"id,omitempty"`
	// Store description in HTML format
	Description *string `json:"description,omitempty"`
	// Name of the store
	Name *string `json:"name,omitempty"`
	// URL of the webstore
	WebstoreUrl *string `json:"webstore_url,omitempty"`
	// Currency used in the store
	Currency *string `json:"currency,omitempty"`
	// Language of the store
	Lang *string `json:"lang,omitempty"`
	// URL of the store's logo
	Logo NullableString `json:"logo,omitempty"`
	// Platform type for the store
	PlatformType *string `json:"platform_type,omitempty"`
	PlatformTypeId *string `json:"platform_type_id,omitempty"`
	// The date and time when the store was created
	CreatedAt *time.Time `json:"created_at,omitempty"`
}

// NewWebstore instantiates a new Webstore object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewWebstore() *Webstore {
	this := Webstore{}
	return &this
}

// NewWebstoreWithDefaults instantiates a new Webstore object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewWebstoreWithDefaults() *Webstore {
	this := Webstore{}
	return &this
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *Webstore) GetId() int32 {
	if o == nil || IsNil(o.Id) {
		var ret int32
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Webstore) GetIdOk() (*int32, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *Webstore) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given int32 and assigns it to the Id field.
func (o *Webstore) SetId(v int32) {
	o.Id = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *Webstore) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Webstore) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *Webstore) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *Webstore) SetDescription(v string) {
	o.Description = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *Webstore) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Webstore) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *Webstore) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *Webstore) SetName(v string) {
	o.Name = &v
}

// GetWebstoreUrl returns the WebstoreUrl field value if set, zero value otherwise.
func (o *Webstore) GetWebstoreUrl() string {
	if o == nil || IsNil(o.WebstoreUrl) {
		var ret string
		return ret
	}
	return *o.WebstoreUrl
}

// GetWebstoreUrlOk returns a tuple with the WebstoreUrl field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Webstore) GetWebstoreUrlOk() (*string, bool) {
	if o == nil || IsNil(o.WebstoreUrl) {
		return nil, false
	}
	return o.WebstoreUrl, true
}

// HasWebstoreUrl returns a boolean if a field has been set.
func (o *Webstore) HasWebstoreUrl() bool {
	if o != nil && !IsNil(o.WebstoreUrl) {
		return true
	}

	return false
}

// SetWebstoreUrl gets a reference to the given string and assigns it to the WebstoreUrl field.
func (o *Webstore) SetWebstoreUrl(v string) {
	o.WebstoreUrl = &v
}

// GetCurrency returns the Currency field value if set, zero value otherwise.
func (o *Webstore) GetCurrency() string {
	if o == nil || IsNil(o.Currency) {
		var ret string
		return ret
	}
	return *o.Currency
}

// GetCurrencyOk returns a tuple with the Currency field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Webstore) GetCurrencyOk() (*string, bool) {
	if o == nil || IsNil(o.Currency) {
		return nil, false
	}
	return o.Currency, true
}

// HasCurrency returns a boolean if a field has been set.
func (o *Webstore) HasCurrency() bool {
	if o != nil && !IsNil(o.Currency) {
		return true
	}

	return false
}

// SetCurrency gets a reference to the given string and assigns it to the Currency field.
func (o *Webstore) SetCurrency(v string) {
	o.Currency = &v
}

// GetLang returns the Lang field value if set, zero value otherwise.
func (o *Webstore) GetLang() string {
	if o == nil || IsNil(o.Lang) {
		var ret string
		return ret
	}
	return *o.Lang
}

// GetLangOk returns a tuple with the Lang field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Webstore) GetLangOk() (*string, bool) {
	if o == nil || IsNil(o.Lang) {
		return nil, false
	}
	return o.Lang, true
}

// HasLang returns a boolean if a field has been set.
func (o *Webstore) HasLang() bool {
	if o != nil && !IsNil(o.Lang) {
		return true
	}

	return false
}

// SetLang gets a reference to the given string and assigns it to the Lang field.
func (o *Webstore) SetLang(v string) {
	o.Lang = &v
}

// GetLogo returns the Logo field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *Webstore) GetLogo() string {
	if o == nil || IsNil(o.Logo.Get()) {
		var ret string
		return ret
	}
	return *o.Logo.Get()
}

// GetLogoOk returns a tuple with the Logo field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *Webstore) GetLogoOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return o.Logo.Get(), o.Logo.IsSet()
}

// HasLogo returns a boolean if a field has been set.
func (o *Webstore) HasLogo() bool {
	if o != nil && o.Logo.IsSet() {
		return true
	}

	return false
}

// SetLogo gets a reference to the given NullableString and assigns it to the Logo field.
func (o *Webstore) SetLogo(v string) {
	o.Logo.Set(&v)
}
// SetLogoNil sets the value for Logo to be an explicit nil
func (o *Webstore) SetLogoNil() {
	o.Logo.Set(nil)
}

// UnsetLogo ensures that no value is present for Logo, not even an explicit nil
func (o *Webstore) UnsetLogo() {
	o.Logo.Unset()
}

// GetPlatformType returns the PlatformType field value if set, zero value otherwise.
func (o *Webstore) GetPlatformType() string {
	if o == nil || IsNil(o.PlatformType) {
		var ret string
		return ret
	}
	return *o.PlatformType
}

// GetPlatformTypeOk returns a tuple with the PlatformType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Webstore) GetPlatformTypeOk() (*string, bool) {
	if o == nil || IsNil(o.PlatformType) {
		return nil, false
	}
	return o.PlatformType, true
}

// HasPlatformType returns a boolean if a field has been set.
func (o *Webstore) HasPlatformType() bool {
	if o != nil && !IsNil(o.PlatformType) {
		return true
	}

	return false
}

// SetPlatformType gets a reference to the given string and assigns it to the PlatformType field.
func (o *Webstore) SetPlatformType(v string) {
	o.PlatformType = &v
}

// GetPlatformTypeId returns the PlatformTypeId field value if set, zero value otherwise.
func (o *Webstore) GetPlatformTypeId() string {
	if o == nil || IsNil(o.PlatformTypeId) {
		var ret string
		return ret
	}
	return *o.PlatformTypeId
}

// GetPlatformTypeIdOk returns a tuple with the PlatformTypeId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Webstore) GetPlatformTypeIdOk() (*string, bool) {
	if o == nil || IsNil(o.PlatformTypeId) {
		return nil, false
	}
	return o.PlatformTypeId, true
}

// HasPlatformTypeId returns a boolean if a field has been set.
func (o *Webstore) HasPlatformTypeId() bool {
	if o != nil && !IsNil(o.PlatformTypeId) {
		return true
	}

	return false
}

// SetPlatformTypeId gets a reference to the given string and assigns it to the PlatformTypeId field.
func (o *Webstore) SetPlatformTypeId(v string) {
	o.PlatformTypeId = &v
}

// GetCreatedAt returns the CreatedAt field value if set, zero value otherwise.
func (o *Webstore) GetCreatedAt() time.Time {
	if o == nil || IsNil(o.CreatedAt) {
		var ret time.Time
		return ret
	}
	return *o.CreatedAt
}

// GetCreatedAtOk returns a tuple with the CreatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Webstore) GetCreatedAtOk() (*time.Time, bool) {
	if o == nil || IsNil(o.CreatedAt) {
		return nil, false
	}
	return o.CreatedAt, true
}

// HasCreatedAt returns a boolean if a field has been set.
func (o *Webstore) HasCreatedAt() bool {
	if o != nil && !IsNil(o.CreatedAt) {
		return true
	}

	return false
}

// SetCreatedAt gets a reference to the given time.Time and assigns it to the CreatedAt field.
func (o *Webstore) SetCreatedAt(v time.Time) {
	o.CreatedAt = &v
}

func (o Webstore) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o Webstore) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	if !IsNil(o.WebstoreUrl) {
		toSerialize["webstore_url"] = o.WebstoreUrl
	}
	if !IsNil(o.Currency) {
		toSerialize["currency"] = o.Currency
	}
	if !IsNil(o.Lang) {
		toSerialize["lang"] = o.Lang
	}
	if o.Logo.IsSet() {
		toSerialize["logo"] = o.Logo.Get()
	}
	if !IsNil(o.PlatformType) {
		toSerialize["platform_type"] = o.PlatformType
	}
	if !IsNil(o.PlatformTypeId) {
		toSerialize["platform_type_id"] = o.PlatformTypeId
	}
	if !IsNil(o.CreatedAt) {
		toSerialize["created_at"] = o.CreatedAt
	}
	return toSerialize, nil
}

type NullableWebstore struct {
	value *Webstore
	isSet bool
}

func (v NullableWebstore) Get() *Webstore {
	return v.value
}

func (v *NullableWebstore) Set(val *Webstore) {
	v.value = val
	v.isSet = true
}

func (v NullableWebstore) IsSet() bool {
	return v.isSet
}

func (v *NullableWebstore) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableWebstore(val *Webstore) *NullableWebstore {
	return &NullableWebstore{value: val, isSet: true}
}

func (v NullableWebstore) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableWebstore) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



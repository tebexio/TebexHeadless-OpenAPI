# BasketLinks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Payment** | Pointer to **string** | The &#x60;links.payment&#x60; property is only returned if the basket has been paid for and a payment exists with the &#x60;complete&#x60;,&#x60;refund&#x60;, or &#x60;chargeback&#x60; status. | [optional] 
**Checkout** | Pointer to **string** | The &#x60;links.checkout&#x60; property is only returned if the basket has not been paid, and is the URL to send the customer to make payment | [optional] 

## Methods

### NewBasketLinks

`func NewBasketLinks() *BasketLinks`

NewBasketLinks instantiates a new BasketLinks object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBasketLinksWithDefaults

`func NewBasketLinksWithDefaults() *BasketLinks`

NewBasketLinksWithDefaults instantiates a new BasketLinks object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPayment

`func (o *BasketLinks) GetPayment() string`

GetPayment returns the Payment field if non-nil, zero value otherwise.

### GetPaymentOk

`func (o *BasketLinks) GetPaymentOk() (*string, bool)`

GetPaymentOk returns a tuple with the Payment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayment

`func (o *BasketLinks) SetPayment(v string)`

SetPayment sets Payment field to given value.

### HasPayment

`func (o *BasketLinks) HasPayment() bool`

HasPayment returns a boolean if a field has been set.

### GetCheckout

`func (o *BasketLinks) GetCheckout() string`

GetCheckout returns the Checkout field if non-nil, zero value otherwise.

### GetCheckoutOk

`func (o *BasketLinks) GetCheckoutOk() (*string, bool)`

GetCheckoutOk returns a tuple with the Checkout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckout

`func (o *BasketLinks) SetCheckout(v string)`

SetCheckout sets Checkout field to given value.

### HasCheckout

`func (o *BasketLinks) HasCheckout() bool`

HasCheckout returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



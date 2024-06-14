# BasketLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment** | **str** | The &#x60;links.payment&#x60; property is only returned if the basket has been paid for and a payment exists with the &#x60;complete&#x60;,&#x60;refund&#x60;, or &#x60;chargeback&#x60; status. | [optional] 
**checkout** | **str** | The &#x60;links.checkout&#x60; property is only returned if the basket has not been paid, and is the URL to send the customer to make payment | [optional] 

## Example

```python
from TebexHeadless.models.basket_links import BasketLinks

# TODO update the JSON string below
json = "{}"
# create an instance of BasketLinks from a JSON string
basket_links_instance = BasketLinks.from_json(json)
# print the JSON string representation of the object
print(BasketLinks.to_json())

# convert the object into a dict
basket_links_dict = basket_links_instance.to_dict()
# create an instance of BasketLinks from a dict
basket_links_from_dict = BasketLinks.from_dict(basket_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SaleDiscount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**percentage** | **float** | Set only when &#x60;type&#x60; is &#x60;percentage&#x60;, otherwise null. | 
**amount** | **float** | Set only when &#x60;type&#x60; is &#x60;amount&#x60;, otherwise null. | 
**currency** | **str** | The store currency. | 

## Example

```python
from TebexHeadless.models.sale_discount import SaleDiscount

# TODO update the JSON string below
json = "{}"
# create an instance of SaleDiscount from a JSON string
sale_discount_instance = SaleDiscount.from_json(json)
# print the JSON string representation of the object
print(SaleDiscount.to_json())

# convert the object into a dict
sale_discount_dict = sale_discount_instance.to_dict()
# create an instance of SaleDiscount from a dict
sale_discount_from_dict = SaleDiscount.from_dict(sale_discount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SaleAppliesTo

What the sale applies to. Only the array matching `type` is filled; the others are empty. When `type` is `all`, only `excluded_packages` may be filled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**packages** | [**List[SaleReference]**](SaleReference.md) | Filled when &#x60;type&#x60; is &#x60;package&#x60;. | 
**categories** | [**List[SaleReference]**](SaleReference.md) | Filled when &#x60;type&#x60; is &#x60;category&#x60;. | 
**variable_options** | [**List[SaleReference]**](SaleReference.md) | Filled when &#x60;type&#x60; is &#x60;variable_option&#x60;. | 
**excluded_packages** | [**List[SaleReference]**](SaleReference.md) | Packages excluded from the sale. Filled only when &#x60;type&#x60; is &#x60;all&#x60;. | 

## Example

```python
from TebexHeadless.models.sale_applies_to import SaleAppliesTo

# TODO update the JSON string below
json = "{}"
# create an instance of SaleAppliesTo from a JSON string
sale_applies_to_instance = SaleAppliesTo.from_json(json)
# print the JSON string representation of the object
print(SaleAppliesTo.to_json())

# convert the object into a dict
sale_applies_to_dict = sale_applies_to_instance.to_dict()
# create an instance of SaleAppliesTo from a dict
sale_applies_to_from_dict = SaleAppliesTo.from_dict(sale_applies_to_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



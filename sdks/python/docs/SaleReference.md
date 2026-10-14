# SaleReference

A package, category or variable option referenced by a sale.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**name** | **str** |  | 

## Example

```python
from TebexHeadless.models.sale_reference import SaleReference

# TODO update the JSON string below
json = "{}"
# create an instance of SaleReference from a JSON string
sale_reference_instance = SaleReference.from_json(json)
# print the JSON string representation of the object
print(SaleReference.to_json())

# convert the object into a dict
sale_reference_dict = sale_reference_instance.to_dict()
# create an instance of SaleReference from a dict
sale_reference_from_dict = SaleReference.from_dict(sale_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



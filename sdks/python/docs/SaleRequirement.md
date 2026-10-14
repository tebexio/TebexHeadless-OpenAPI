# SaleRequirement

A condition for the sale. Fields present depend on `type`: - `purchased_packages`: `packages` and `match` (always `all`). `packages` is empty if every required package is hidden. - `lifetime_spend`: `amount` and `currency`. - `minimum_basket_value`: `amount` and `currency`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of requirement for the sale. Additional requirement types may be added later. Clients must ignore requirement types they do not know. | 
**packages** | [**List[SaleReference]**](SaleReference.md) | Packages the customer must have purchased. Present for &#x60;purchased_packages&#x60;. | [optional] 
**match** | **str** | Present for &#x60;purchased_packages&#x60;. Always &#x60;all&#x60;. | [optional] 
**amount** | **float** | Present for &#x60;lifetime_spend&#x60; and &#x60;minimum_basket_value&#x60;. | [optional] 
**currency** | **str** | Present for &#x60;lifetime_spend&#x60; and &#x60;minimum_basket_value&#x60;. The store currency. | [optional] 

## Example

```python
from TebexHeadless.models.sale_requirement import SaleRequirement

# TODO update the JSON string below
json = "{}"
# create an instance of SaleRequirement from a JSON string
sale_requirement_instance = SaleRequirement.from_json(json)
# print the JSON string representation of the object
print(SaleRequirement.to_json())

# convert the object into a dict
sale_requirement_dict = sale_requirement_instance.to_dict()
# create an instance of SaleRequirement from a dict
sale_requirement_from_dict = SaleRequirement.from_dict(sale_requirement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



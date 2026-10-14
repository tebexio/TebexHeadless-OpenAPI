# Sale


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**name** | **str** |  | 
**starts_at** | **datetime** | Start of the sale, ISO 8601 in UTC. | 
**ends_at** | **datetime** | End of the sale, ISO 8601 in UTC. | 
**discount** | [**SaleDiscount**](SaleDiscount.md) |  | 
**applies_to** | [**SaleAppliesTo**](SaleAppliesTo.md) |  | 
**requirements** | [**List[SaleRequirement]**](SaleRequirement.md) | Conditions a customer must meet for the sale to apply. Empty when the sale has none. &#x60;minimum_basket_value&#x60; can appear alongside &#x60;purchased_packages&#x60; or &#x60;lifetime_spend&#x60;. | 

## Example

```python
from TebexHeadless.models.sale import Sale

# TODO update the JSON string below
json = "{}"
# create an instance of Sale from a JSON string
sale_instance = Sale.from_json(json)
# print the JSON string representation of the object
print(Sale.to_json())

# convert the object into a dict
sale_dict = sale_instance.to_dict()
# create an instance of Sale from a dict
sale_from_dict = Sale.from_dict(sale_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



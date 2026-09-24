# BasketPackageInBasket


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity** | **int** | The quantity of &#x60;package&#x60; in this basket. This is not the total quantity of overall items in the basket. | [optional] 
**price** | **float** |  | [optional] 
**gift_username_id** | **str** | The username id of the user this package is gifted to | [optional] 
**gift_username** | **str** | The username of the user this package is gifted to. | [optional] 

## Example

```python
from TebexHeadless.models.basket_package_in_basket import BasketPackageInBasket

# TODO update the JSON string below
json = "{}"
# create an instance of BasketPackageInBasket from a JSON string
basket_package_in_basket_instance = BasketPackageInBasket.from_json(json)
# print the JSON string representation of the object
print(BasketPackageInBasket.to_json())

# convert the object into a dict
basket_package_in_basket_dict = basket_package_in_basket_instance.to_dict()
# create an instance of BasketPackageInBasket from a dict
basket_package_in_basket_from_dict = BasketPackageInBasket.from_dict(basket_package_in_basket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



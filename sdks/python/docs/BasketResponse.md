# BasketResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Basket**](.md) |  | [optional] 

## Example

```python
from TebexHeadless.models.basket_response import BasketResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BasketResponse from a JSON string
basket_response_instance = BasketResponse.from_json(json)
# print the JSON string representation of the object
print(BasketResponse.to_json())

# convert the object into a dict
basket_response_dict = basket_response_instance.to_dict()
# create an instance of BasketResponse from a dict
basket_response_from_dict = BasketResponse.from_dict(basket_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



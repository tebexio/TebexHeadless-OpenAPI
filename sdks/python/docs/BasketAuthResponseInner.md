# BasketAuthResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from TebexHeadless.models.basket_auth_response_inner import BasketAuthResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of BasketAuthResponseInner from a JSON string
basket_auth_response_inner_instance = BasketAuthResponseInner.from_json(json)
# print the JSON string representation of the object
print(BasketAuthResponseInner.to_json())

# convert the object into a dict
basket_auth_response_inner_dict = basket_auth_response_inner_instance.to_dict()
# create an instance of BasketAuthResponseInner from a dict
basket_auth_response_inner_from_dict = BasketAuthResponseInner.from_dict(basket_auth_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



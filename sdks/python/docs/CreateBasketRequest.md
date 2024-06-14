# CreateBasketRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complete_url** | **str** | A URL the user can return to when checkout is completed. | [optional] 
**cancel_url** | **str** | A URL the user can return to when cancelling checkout. | [optional] 
**custom** | **object** | Custom data you wish to associate with the basket. This data will be included with webhook responses and GET requests associated with the Basket. | [optional] 
**complete_auto_redirect** | **bool** | True if the user should automatically be redirected to the relevant complete/cancel URL | [optional] 

## Example

```python
from TebexHeadless.models.create_basket_request import CreateBasketRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBasketRequest from a JSON string
create_basket_request_instance = CreateBasketRequest.from_json(json)
# print the JSON string representation of the object
print(CreateBasketRequest.to_json())

# convert the object into a dict
create_basket_request_dict = create_basket_request_instance.to_dict()
# create an instance of CreateBasketRequest from a dict
create_basket_request_from_dict = CreateBasketRequest.from_dict(create_basket_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



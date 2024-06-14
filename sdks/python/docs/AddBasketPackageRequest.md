# AddBasketPackageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_id** | **str** |  | [optional] 
**quantity** | **float** |  | [optional] 

## Example

```python
from TebexHeadless.models.add_basket_package_request import AddBasketPackageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddBasketPackageRequest from a JSON string
add_basket_package_request_instance = AddBasketPackageRequest.from_json(json)
# print the JSON string representation of the object
print(AddBasketPackageRequest.to_json())

# convert the object into a dict
add_basket_package_request_dict = add_basket_package_request_instance.to_dict()
# create an instance of AddBasketPackageRequest from a dict
add_basket_package_request_from_dict = AddBasketPackageRequest.from_dict(add_basket_package_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



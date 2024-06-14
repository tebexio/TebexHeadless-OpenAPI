# RemoveBasketPackageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_id** | **str** |  | [optional] 

## Example

```python
from TebexHeadless.models.remove_basket_package_request import RemoveBasketPackageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveBasketPackageRequest from a JSON string
remove_basket_package_request_instance = RemoveBasketPackageRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveBasketPackageRequest.to_json())

# convert the object into a dict
remove_basket_package_request_dict = remove_basket_package_request_instance.to_dict()
# create an instance of RemoveBasketPackageRequest from a dict
remove_basket_package_request_from_dict = RemoveBasketPackageRequest.from_dict(remove_basket_package_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DynamicPackagesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** | The username of the authenticated customer the packages are being created for. | 
**category_id** | **int** | The ID of the dynamic category to populate. | 
**packages** | [**List[DynamicPackageInput]**](DynamicPackageInput.md) |  | 

## Example

```python
from TebexHeadless.models.dynamic_packages_request import DynamicPackagesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicPackagesRequest from a JSON string
dynamic_packages_request_instance = DynamicPackagesRequest.from_json(json)
# print the JSON string representation of the object
print(DynamicPackagesRequest.to_json())

# convert the object into a dict
dynamic_packages_request_dict = dynamic_packages_request_instance.to_dict()
# create an instance of DynamicPackagesRequest from a dict
dynamic_packages_request_from_dict = DynamicPackagesRequest.from_dict(dynamic_packages_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



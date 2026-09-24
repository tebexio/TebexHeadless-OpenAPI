# SinglePackageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Package**](Package.md) |  | [optional] 

## Example

```python
from TebexHeadless.models.single_package_response import SinglePackageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SinglePackageResponse from a JSON string
single_package_response_instance = SinglePackageResponse.from_json(json)
# print the JSON string representation of the object
print(SinglePackageResponse.to_json())

# convert the object into a dict
single_package_response_dict = single_package_response_instance.to_dict()
# create an instance of SinglePackageResponse from a dict
single_package_response_from_dict = SinglePackageResponse.from_dict(single_package_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



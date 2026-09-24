# DynamicPackageInput

A custom package to add to a dynamic category.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**price** | **float** |  | 
**slug** | **str** |  | 
**description** | **str** |  | [optional] 
**image_url** | **str** |  | [optional] 
**custom** | **Dict[str, str]** | Arbitrary custom key/value data to associate with the package. | [optional] 

## Example

```python
from TebexHeadless.models.dynamic_package_input import DynamicPackageInput

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicPackageInput from a JSON string
dynamic_package_input_instance = DynamicPackageInput.from_json(json)
# print the JSON string representation of the object
print(DynamicPackageInput.to_json())

# convert the object into a dict
dynamic_package_input_dict = dynamic_package_input_instance.to_dict()
# create an instance of DynamicPackageInput from a dict
dynamic_package_input_from_dict = DynamicPackageInput.from_dict(dynamic_package_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



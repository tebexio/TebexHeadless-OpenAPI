# FeaturedPackageModule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**type** | **object** |  | 
**start_time** | **datetime** |  | 
**end_time** | **datetime** | Nullable; when null the module is ongoing. | [optional] 
**data** | [**FeaturedPackageData**](FeaturedPackageData.md) |  | 

## Example

```python
from TebexHeadless.models.featured_package_module import FeaturedPackageModule

# TODO update the JSON string below
json = "{}"
# create an instance of FeaturedPackageModule from a JSON string
featured_package_module_instance = FeaturedPackageModule.from_json(json)
# print the JSON string representation of the object
print(FeaturedPackageModule.to_json())

# convert the object into a dict
featured_package_module_dict = featured_package_module_instance.to_dict()
# create an instance of FeaturedPackageModule from a dict
featured_package_module_from_dict = FeaturedPackageModule.from_dict(featured_package_module_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



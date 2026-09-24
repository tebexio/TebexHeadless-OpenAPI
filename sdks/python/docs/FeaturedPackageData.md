# FeaturedPackageData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | **str** |  | 
**package** | [**Package**](Package.md) |  | 

## Example

```python
from TebexHeadless.models.featured_package_data import FeaturedPackageData

# TODO update the JSON string below
json = "{}"
# create an instance of FeaturedPackageData from a JSON string
featured_package_data_instance = FeaturedPackageData.from_json(json)
# print the JSON string representation of the object
print(FeaturedPackageData.to_json())

# convert the object into a dict
featured_package_data_dict = featured_package_data_instance.to_dict()
# create an instance of FeaturedPackageData from a dict
featured_package_data_from_dict = FeaturedPackageData.from_dict(featured_package_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# PackageCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from TebexHeadless.models.package_category import PackageCategory

# TODO update the JSON string below
json = "{}"
# create an instance of PackageCategory from a JSON string
package_category_instance = PackageCategory.from_json(json)
# print the JSON string representation of the object
print(PackageCategory.to_json())

# convert the object into a dict
package_category_dict = package_category_instance.to_dict()
# create an instance of PackageCategory from a dict
package_category_from_dict = PackageCategory.from_dict(package_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



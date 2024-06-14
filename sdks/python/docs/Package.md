# Package


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**image** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**category** | [**PackageCategory**](PackageCategory.md) |  | [optional] 
**base_price** | **float** |  | [optional] 
**sales_tax** | **float** |  | [optional] 
**total_price** | **float** |  | [optional] 
**currency** | **str** |  | [optional] 
**discount** | **float** |  | [optional] 
**disable_quantity** | **bool** |  | [optional] 
**disable_gifting** | **bool** |  | [optional] 
**expiration_date** | **datetime** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from TebexHeadless.models.package import Package

# TODO update the JSON string below
json = "{}"
# create an instance of Package from a JSON string
package_instance = Package.from_json(json)
# print the JSON string representation of the object
print(Package.to_json())

# convert the object into a dict
package_dict = package_instance.to_dict()
# create an instance of Package from a dict
package_from_dict = Package.from_dict(package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



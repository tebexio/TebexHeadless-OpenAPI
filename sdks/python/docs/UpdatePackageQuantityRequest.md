# UpdatePackageQuantityRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity** | **float** |  | [optional] 

## Example

```python
from TebexHeadless.models.update_package_quantity_request import UpdatePackageQuantityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePackageQuantityRequest from a JSON string
update_package_quantity_request_instance = UpdatePackageQuantityRequest.from_json(json)
# print the JSON string representation of the object
print(UpdatePackageQuantityRequest.to_json())

# convert the object into a dict
update_package_quantity_request_dict = update_package_quantity_request_instance.to_dict()
# create an instance of UpdatePackageQuantityRequest from a dict
update_package_quantity_request_from_dict = UpdatePackageQuantityRequest.from_dict(update_package_quantity_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



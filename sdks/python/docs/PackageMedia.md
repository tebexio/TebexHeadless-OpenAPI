# PackageMedia


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] 
**name** | **str** | A file name for the media, if applicable. | [optional] 
**url** | **str** | The URL of the package media. | [optional] 
**featured** | **bool** | True if this media should be featured more prominently than others. | [optional] 
**primary** | **bool** | True if this is the primary media for the package. | [optional] 

## Example

```python
from TebexHeadless.models.package_media import PackageMedia

# TODO update the JSON string below
json = "{}"
# create an instance of PackageMedia from a JSON string
package_media_instance = PackageMedia.from_json(json)
# print the JSON string representation of the object
print(PackageMedia.to_json())

# convert the object into a dict
package_media_dict = package_media_instance.to_dict()
# create an instance of PackageMedia from a dict
package_media_from_dict = PackageMedia.from_dict(package_media_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# Webstore


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**description** | **str** | Store description in HTML format | [optional] 
**name** | **str** | Name of the store | [optional] 
**webstore_url** | **str** | URL of the webstore | [optional] 
**currency** | **str** | Currency used in the store | [optional] 
**lang** | **str** | Language of the store | [optional] 
**logo** | **str** | URL of the store&#39;s logo | [optional] 
**platform_type** | **str** | Platform type for the store | [optional] 
**platform_type_id** | **str** |  | [optional] 
**disabled** | **bool** | True if the store is disabled. | [optional] 
**created_at** | **datetime** | The date and time when the store was created | [optional] 
**supports_usernames** | **bool** | True if the store&#39;s platform identifies customers by username. | [optional] 
**supports_gifting** | **bool** | True if packages can be gifted to another user. | [optional] 

## Example

```python
from TebexHeadless.models.webstore import Webstore

# TODO update the JSON string below
json = "{}"
# create an instance of Webstore from a JSON string
webstore_instance = Webstore.from_json(json)
# print the JSON string representation of the object
print(Webstore.to_json())

# convert the object into a dict
webstore_dict = webstore_instance.to_dict()
# create an instance of Webstore from a dict
webstore_from_dict = Webstore.from_dict(webstore_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



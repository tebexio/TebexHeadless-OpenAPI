# CMSPage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **float** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**account_id** | **float** |  | [optional] 
**title** | **str** |  | [optional] 
**slug** | **str** |  | [optional] 
**private** | **bool** |  | [optional] 
**hidden** | **bool** |  | [optional] 
**disabled** | **bool** |  | [optional] 
**sequence** | **bool** |  | [optional] 
**content** | **str** |  | [optional] 

## Example

```python
from TebexHeadless.models.cms_page import CMSPage

# TODO update the JSON string below
json = "{}"
# create an instance of CMSPage from a JSON string
cms_page_instance = CMSPage.from_json(json)
# print the JSON string representation of the object
print(CMSPage.to_json())

# convert the object into a dict
cms_page_dict = cms_page_instance.to_dict()
# create an instance of CMSPage from a dict
cms_page_from_dict = CMSPage.from_dict(cms_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



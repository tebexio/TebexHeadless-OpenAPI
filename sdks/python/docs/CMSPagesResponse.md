# CMSPagesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[CMSPage]**](CMSPage.md) |  | [optional] 

## Example

```python
from TebexHeadless.models.cms_pages_response import CMSPagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CMSPagesResponse from a JSON string
cms_pages_response_instance = CMSPagesResponse.from_json(json)
# print the JSON string representation of the object
print(CMSPagesResponse.to_json())

# convert the object into a dict
cms_pages_response_dict = cms_pages_response_instance.to_dict()
# create an instance of CMSPagesResponse from a dict
cms_pages_response_from_dict = CMSPagesResponse.from_dict(cms_pages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



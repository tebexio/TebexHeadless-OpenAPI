# WebstoreResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**Webstore**](Webstore.md) |  | [optional] 

## Example

```python
from TebexHeadless.models.webstore_response_data import WebstoreResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of WebstoreResponseData from a JSON string
webstore_response_data_instance = WebstoreResponseData.from_json(json)
# print the JSON string representation of the object
print(WebstoreResponseData.to_json())

# convert the object into a dict
webstore_response_data_dict = webstore_response_data_instance.to_dict()
# create an instance of WebstoreResponseData from a dict
webstore_response_data_from_dict = WebstoreResponseData.from_dict(webstore_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



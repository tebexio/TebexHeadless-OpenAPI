# WebstoreResponse

Wrapped webstore information in a \"data\" object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**WebstoreResponseData**](WebstoreResponseData.md) |  | [optional] 

## Example

```python
from TebexHeadless.models.webstore_response import WebstoreResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WebstoreResponse from a JSON string
webstore_response_instance = WebstoreResponse.from_json(json)
# print the JSON string representation of the object
print(WebstoreResponse.to_json())

# convert the object into a dict
webstore_response_dict = webstore_response_instance.to_dict()
# create an instance of WebstoreResponse from a dict
webstore_response_from_dict = WebstoreResponse.from_dict(webstore_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



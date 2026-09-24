# TextboxData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | **str** |  | 
**text** | **str** | HTML supported. | 

## Example

```python
from TebexHeadless.models.textbox_data import TextboxData

# TODO update the JSON string below
json = "{}"
# create an instance of TextboxData from a JSON string
textbox_data_instance = TextboxData.from_json(json)
# print the JSON string representation of the object
print(TextboxData.to_json())

# convert the object into a dict
textbox_data_dict = textbox_data_instance.to_dict()
# create an instance of TextboxData from a dict
textbox_data_from_dict = TextboxData.from_dict(textbox_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



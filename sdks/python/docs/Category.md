# Category


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** | User-friendly name of the category | [optional] 
**slug** | **str** | Short identifier slug for the category | [optional] 
**parent** | **object** | Parent category, if applicable | [optional] 
**description** | **str** | HTML description of the category | [optional] 
**packages** | [**List[Package]**](Package.md) |  | [optional] 
**order** | **int** | The numeric order in which to display the category. | [optional] 
**display_type** | **str** | How the category should be displayed | [optional] 

## Example

```python
from TebexHeadless.models.category import Category

# TODO update the JSON string below
json = "{}"
# create an instance of Category from a JSON string
category_instance = Category.from_json(json)
# print the JSON string representation of the object
print(Category.to_json())

# convert the object into a dict
category_dict = category_instance.to_dict()
# create an instance of Category from a dict
category_from_dict = Category.from_dict(category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



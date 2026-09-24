# SingleCategoryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Category**](Category.md) |  | [optional] 

## Example

```python
from TebexHeadless.models.single_category_response import SingleCategoryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SingleCategoryResponse from a JSON string
single_category_response_instance = SingleCategoryResponse.from_json(json)
# print the JSON string representation of the object
print(SingleCategoryResponse.to_json())

# convert the object into a dict
single_category_response_dict = single_category_response_instance.to_dict()
# create an instance of SingleCategoryResponse from a dict
single_category_response_from_dict = SingleCategoryResponse.from_dict(single_category_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



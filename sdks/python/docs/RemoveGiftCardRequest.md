# RemoveGiftCardRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_number** | **str** |  | [optional] 

## Example

```python
from TebexHeadless.models.remove_gift_card_request import RemoveGiftCardRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveGiftCardRequest from a JSON string
remove_gift_card_request_instance = RemoveGiftCardRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveGiftCardRequest.to_json())

# convert the object into a dict
remove_gift_card_request_dict = remove_gift_card_request_instance.to_dict()
# create an instance of RemoveGiftCardRequest from a dict
remove_gift_card_request_from_dict = RemoveGiftCardRequest.from_dict(remove_gift_card_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GiftcardBalanceModule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**type** | **object** |  | 
**start_time** | **datetime** |  | 
**end_time** | **datetime** | Nullable; when null the module is ongoing. | [optional] 
**data** | [**GiftcardBalanceData**](GiftcardBalanceData.md) |  | 

## Example

```python
from TebexHeadless.models.giftcard_balance_module import GiftcardBalanceModule

# TODO update the JSON string below
json = "{}"
# create an instance of GiftcardBalanceModule from a JSON string
giftcard_balance_module_instance = GiftcardBalanceModule.from_json(json)
# print the JSON string representation of the object
print(GiftcardBalanceModule.to_json())

# convert the object into a dict
giftcard_balance_module_dict = giftcard_balance_module_instance.to_dict()
# create an instance of GiftcardBalanceModule from a dict
giftcard_balance_module_from_dict = GiftcardBalanceModule.from_dict(giftcard_balance_module_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



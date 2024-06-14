# Basket


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**ident** | **str** |  | [optional] 
**complete** | **bool** |  | [optional] 
**email** | **str** |  | [optional] 
**username** | **str** |  | [optional] 
**coupons** | [**List[Coupon]**](Coupon.md) |  | [optional] 
**giftcards** | [**List[GiftCard]**](GiftCard.md) |  | [optional] 
**creator_code** | **str** | The creator code is used to share a percentage of the payment with another party. See more about creator codes at https://docs.tebex.io/creators/tebex-control-panel/engagement/creator-codes | [optional] 
**cancel_url** | **str** |  | [optional] 
**complete_url** | **str** |  | [optional] 
**complete_auto_redirect** | **bool** |  | [optional] 
**country** | **str** | A two-character country code | [optional] 
**ip** | **str** |  | [optional] 
**username_id** | **float** |  | [optional] 
**base_price** | **float** |  | [optional] 
**sales_tax** | **float** |  | [optional] 
**total_price** | **float** |  | [optional] 
**currency** | **str** | A 3 character currency code | [optional] 
**packages** | [**List[BasketPackage]**](BasketPackage.md) |  | [optional] 
**custom** | **object** |  | [optional] 
**links** | [**BasketLinks**](BasketLinks.md) |  | [optional] 

## Example

```python
from TebexHeadless.models.basket import Basket

# TODO update the JSON string below
json = "{}"
# create an instance of Basket from a JSON string
basket_instance = Basket.from_json(json)
# print the JSON string representation of the object
print(Basket.to_json())

# convert the object into a dict
basket_dict = basket_instance.to_dict()
# create an instance of Basket from a dict
basket_from_dict = Basket.from_dict(basket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



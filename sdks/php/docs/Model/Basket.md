# # Basket

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional]
**ident** | **string** |  | [optional]
**complete** | **bool** |  | [optional]
**email** | **string** |  | [optional]
**username** | **string** |  | [optional]
**coupons** | [**\TebexHeadless\Model\Coupon[]**](Coupon.md) |  | [optional]
**giftcards** | [**\TebexHeadless\Model\GiftCard[]**](GiftCard.md) |  | [optional]
**creator_code** | **string** | The creator code is used to share a percentage of the payment with another party. See more about creator codes at https://docs.tebex.io/creators/tebex-control-panel/engagement/creator-codes | [optional]
**cancel_url** | **string** |  | [optional]
**complete_url** | **string** |  | [optional]
**complete_auto_redirect** | **bool** |  | [optional]
**country** | **string** | A two-character country code | [optional]
**ip** | **string** |  | [optional]
**username_id** | **float** |  | [optional]
**base_price** | **float** |  | [optional]
**sales_tax** | **float** |  | [optional]
**total_price** | **float** |  | [optional]
**currency** | **string** | A 3 character currency code | [optional]
**packages** | [**\TebexHeadless\Model\BasketPackage[]**](BasketPackage.md) |  | [optional]
**custom** | **object** |  | [optional]
**links** | [**\TebexHeadless\Model\BasketLinks**](BasketLinks.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)

# coding: utf-8

"""
    Tebex Headless API

    The headless API is designed for implementing your own store frontend with the data of your store. You are able to call the Headless API directly from a web browser (such as within an SPA), or from a backend server, such as for in-game GUIs.

    The version of the OpenAPI document: 1.0.0
    Contact: tebex-integrations@overwolf.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from TebexHeadless.models.basket_response import BasketResponse

class TestBasketResponse(unittest.TestCase):
    """BasketResponse unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> BasketResponse:
        """Test BasketResponse
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `BasketResponse`
        """
        model = BasketResponse()
        if include_optional:
            return BasketResponse(
                data = TebexHeadless.models.basket.Basket(
                    id = '244127617', 
                    ident = '1a-55fff4107740a1f40d844ff89607557f45bfafb3', 
                    complete = False, 
                    email = 'support@tebex.io', 
                    username = '', 
                    coupons = [
                        TebexHeadless.models.coupon.Coupon(
                            coupon_code = 'Academy10', )
                        ], 
                    giftcards = [
                        TebexHeadless.models.gift_card.GiftCard(
                            card_number = '0127 0244 7210 1111', )
                        ], 
                    creator_code = '', 
                    cancel_url = 'https://tebex.io', 
                    complete_url = '', 
                    complete_auto_redirect = False, 
                    country = 'US', 
                    ip = '127.0.0.1', 
                    username_id = 127244, 
                    base_price = 1.27, 
                    sales_tax = 0.11, 
                    total_price = 1.38, 
                    currency = 'USD', 
                    packages = [
                        TebexHeadless.models.basket_package.BasketPackage(
                            qty = 2, 
                            type = 'single', 
                            revenue_share = [
                                TebexHeadless.models.revenue_share.RevenueShare(
                                    wallet_ref = 'some_wallet_reference', 
                                    amount = 0.5, 
                                    gateway_fee_percent = 50.0, )
                                ], )
                        ], 
                    custom = {"foo":"bar","ref":1234}, 
                    links = TebexHeadless.models.basket_links.BasketLinks(
                        payment = 'https://checkout.tebex.io/api/payments/tbx-12345', 
                        checkout = 'https://checkout.tebex.io/checkout/1a-55fff4107740a1f40d844ff89607557f45bfafb3', ), )
            )
        else:
            return BasketResponse(
        )
        """

    def testBasketResponse(self):
        """Test BasketResponse"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()

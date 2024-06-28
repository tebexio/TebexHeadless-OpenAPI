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

from TebexHeadless.models.update_tier_response import UpdateTierResponse

class TestUpdateTierResponse(unittest.TestCase):
    """UpdateTierResponse unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> UpdateTierResponse:
        """Test UpdateTierResponse
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `UpdateTierResponse`
        """
        model = UpdateTierResponse()
        if include_optional:
            return UpdateTierResponse(
                success = True,
                message = 'Tier successfully upgraded, please allow a few moments for your changes to take effect.'
            )
        else:
            return UpdateTierResponse(
        )
        """

    def testUpdateTierResponse(self):
        """Test UpdateTierResponse"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()

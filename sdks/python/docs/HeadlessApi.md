# TebexHeadless.HeadlessApi

All URIs are relative to *https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apply_coupon**](HeadlessApi.md#apply_coupon) | **POST** /baskets/{basketIdent}/coupons | Apply a coupon
[**apply_creator_code**](HeadlessApi.md#apply_creator_code) | **POST** /baskets/{basketIdent}/creator-codes | Apply a creator code
[**apply_gift_card**](HeadlessApi.md#apply_gift_card) | **POST** /baskets/{basketIdent}/giftcards | Apply a gift card
[**create_basket**](HeadlessApi.md#create_basket) | **POST** /baskets | Create a new basket
[**create_dynamic_package**](HeadlessApi.md#create_dynamic_package) | **PUT** /baskets/{basketIdent}/dynamic-packages | Add packages to a dynamic category for a basket.
[**get_all_packages**](HeadlessApi.md#get_all_packages) | **GET** /packages | Get all packages
[**get_all_packages_with_authed_ip**](HeadlessApi.md#get_all_packages_with_authed_ip) | **GET** /packages?ipAddress&#x3D;{ipAddress} | Get packages
[**get_all_packages_with_authed_ip_and_basket**](HeadlessApi.md#get_all_packages_with_authed_ip_and_basket) | **GET** /packages?ipAddress&#x3D;{ipAddress}&amp;basketIdent&#x3D;{basketIdent} | Get packages available for IP and basket
[**get_basket**](HeadlessApi.md#get_basket) | **GET** /baskets/{basketIdent} | Get a basket
[**get_basket_auth_url**](HeadlessApi.md#get_basket_auth_url) | **GET** /baskets/{basketIdent}/auth?returnUrl&#x3D;{returnUrl} | Get auth links for basket
[**get_categories**](HeadlessApi.md#get_categories) | **GET** /categories | Get all categories
[**get_categories_include_packages**](HeadlessApi.md#get_categories_include_packages) | **GET** /categories?includePackages&#x3D;1 | Gets all categories and packages
[**get_category**](HeadlessApi.md#get_category) | **GET** /categories/{categoryId} | Get specific category
[**get_category_include_dynamic_packages**](HeadlessApi.md#get_category_include_dynamic_packages) | **GET** /categories/{categoryId}?includePackages&#x3D;1&amp;basketIdent&#x3D;{basketIdent} | Gets a specific category including packages, populating a dynamic category for the given basket.
[**get_category_include_packages**](HeadlessApi.md#get_category_include_packages) | **GET** /categories/{categoryId}?includePackages&#x3D;1 | Get a category with all packages
[**get_custom_pages**](HeadlessApi.md#get_custom_pages) | **GET** /pages | Get custom pages defined for the webstore.
[**get_dynamic_categories**](HeadlessApi.md#get_dynamic_categories) | **GET** /categories?includePackages&#x3D;1&amp;basketIdent&#x3D;{basketIdent} | Get Dynamic Categories
[**get_package**](HeadlessApi.md#get_package) | **GET** /packages/{packageId} | Get package
[**get_packages_for_basket**](HeadlessApi.md#get_packages_for_basket) | **GET** /packages?basketIdent&#x3D;{basketIdent} | Get packages available for basket
[**get_sidebar**](HeadlessApi.md#get_sidebar) | **GET** /sidebar | Retrieves the available sidebar modules.
[**get_user_tiered_categories**](HeadlessApi.md#get_user_tiered_categories) | **GET** /categories?usernameId&#x3D;{usernameId}&amp;includePackages&#x3D;1 | Get user&#39;s tiered categories
[**get_webstore**](HeadlessApi.md#get_webstore) | **GET** / | Get the webstore&#39;s information
[**remove_coupon**](HeadlessApi.md#remove_coupon) | **POST** /baskets/{basketIdent}/coupons/remove | Remove a coupon from the basket.
[**remove_creator_code**](HeadlessApi.md#remove_creator_code) | **POST** /baskets/{basketIdent}/creator-codes/remove | Removes the creator code from the basket.
[**remove_gift_card**](HeadlessApi.md#remove_gift_card) | **POST** /baskets/{basketIdent}/giftcards/remove | Remove a gift card from the basket.
[**update_tier**](HeadlessApi.md#update_tier) | **PATCH** /tiers/{tierId} | Update user&#39;s tier to a new package


# **apply_coupon**
> ApplyCoupon200Response apply_coupon(basket_ident, apply_coupon_request=apply_coupon_request)

Apply a coupon

Applies a coupon to a basket.

### Example


```python
import TebexHeadless
from TebexHeadless.models.apply_coupon200_response import ApplyCoupon200Response
from TebexHeadless.models.apply_coupon_request import ApplyCouponRequest
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.
    apply_coupon_request = TebexHeadless.ApplyCouponRequest() # ApplyCouponRequest | Provide a `coupon_code` to apply to the basket. (optional)

    try:
        # Apply a coupon
        api_response = api_instance.apply_coupon(basket_ident, apply_coupon_request=apply_coupon_request)
        print("The response of HeadlessApi->apply_coupon:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->apply_coupon: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basket_ident** | **str**| The basket identifier. | 
 **apply_coupon_request** | [**ApplyCouponRequest**](ApplyCouponRequest.md)| Provide a &#x60;coupon_code&#x60; to apply to the basket. | [optional] 

### Return type

[**ApplyCoupon200Response**](ApplyCoupon200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns a success message. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apply_creator_code**
> ApplyCreatorCode200Response apply_creator_code(basket_ident, apply_creator_code_request=apply_creator_code_request)

Apply a creator code

Applies a creator code to a basket.

### Example


```python
import TebexHeadless
from TebexHeadless.models.apply_creator_code200_response import ApplyCreatorCode200Response
from TebexHeadless.models.apply_creator_code_request import ApplyCreatorCodeRequest
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.
    apply_creator_code_request = TebexHeadless.ApplyCreatorCodeRequest() # ApplyCreatorCodeRequest | Provide a `creator_code` to apply to the basket. (optional)

    try:
        # Apply a creator code
        api_response = api_instance.apply_creator_code(basket_ident, apply_creator_code_request=apply_creator_code_request)
        print("The response of HeadlessApi->apply_creator_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->apply_creator_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basket_ident** | **str**| The basket identifier. | 
 **apply_creator_code_request** | [**ApplyCreatorCodeRequest**](ApplyCreatorCodeRequest.md)| Provide a &#x60;creator_code&#x60; to apply to the basket. | [optional] 

### Return type

[**ApplyCreatorCode200Response**](ApplyCreatorCode200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns a success object |  -  |
**422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apply_gift_card**
> ApplyGiftCard200Response apply_gift_card(basket_ident, gift_card=gift_card)

Apply a gift card

Applies a gift card to the basket.

### Example


```python
import TebexHeadless
from TebexHeadless.models.apply_gift_card200_response import ApplyGiftCard200Response
from TebexHeadless.models.gift_card import GiftCard
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.
    gift_card = TebexHeadless.GiftCard() # GiftCard | Provide a `card_number` to apply to the basket. (optional)

    try:
        # Apply a gift card
        api_response = api_instance.apply_gift_card(basket_ident, gift_card=gift_card)
        print("The response of HeadlessApi->apply_gift_card:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->apply_gift_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basket_ident** | **str**| The basket identifier. | 
 **gift_card** | [**GiftCard**](GiftCard.md)| Provide a &#x60;card_number&#x60; to apply to the basket. | [optional] 

### Return type

[**ApplyGiftCard200Response**](ApplyGiftCard200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns a success message. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_basket**
> BasketResponse create_basket(create_basket_request=create_basket_request)

Create a new basket

Creates a new basket for use during checkout.

### Example


```python
import TebexHeadless
from TebexHeadless.models.basket_response import BasketResponse
from TebexHeadless.models.create_basket_request import CreateBasketRequest
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    create_basket_request = TebexHeadless.CreateBasketRequest() # CreateBasketRequest |  (optional)

    try:
        # Create a new basket
        api_response = api_instance.create_basket(create_basket_request=create_basket_request)
        print("The response of HeadlessApi->create_basket:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->create_basket: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_basket_request** | [**CreateBasketRequest**](CreateBasketRequest.md)|  | [optional] 

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns the basket information. |  -  |
**422** | The provided webstore ID is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_dynamic_package**
> DynamicPackagesResponse create_dynamic_package(basket_ident, dynamic_packages_request=dynamic_packages_request)

Add packages to a dynamic category for a basket.

Populates a dynamic category with custom packages for the given basket. Dynamic categories are created in the creator panel with the type `dynamic`, and are typically populated in response to a `basket.authenticated` webhook.  Once created, the packages can be fetched using the category endpoints with both `includePackages=1` and `basketIdent` provided.

### Example


```python
import TebexHeadless
from TebexHeadless.models.dynamic_packages_request import DynamicPackagesRequest
from TebexHeadless.models.dynamic_packages_response import DynamicPackagesResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.
    dynamic_packages_request = TebexHeadless.DynamicPackagesRequest() # DynamicPackagesRequest |  (optional)

    try:
        # Add packages to a dynamic category for a basket.
        api_response = api_instance.create_dynamic_package(basket_ident, dynamic_packages_request=dynamic_packages_request)
        print("The response of HeadlessApi->create_dynamic_package:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->create_dynamic_package: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basket_ident** | **str**| The basket identifier. | 
 **dynamic_packages_request** | [**DynamicPackagesRequest**](DynamicPackagesRequest.md)|  | [optional] 

### Return type

[**DynamicPackagesResponse**](DynamicPackagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response confirms the dynamic packages were created. |  -  |
**422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_packages**
> PackageResponse get_all_packages()

Get all packages

Gets all packages from a webstore.  Note: this endpoint does not support packages belonging to dynamic categories. Use the category endpoints with `includePackages=1` and `basketIdent` to fetch dynamic packages.

### Example


```python
import TebexHeadless
from TebexHeadless.models.package_response import PackageResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)

    try:
        # Get all packages
        api_response = api_instance.get_all_packages()
        print("The response of HeadlessApi->get_all_packages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_all_packages: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**PackageResponse**](PackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns a list of package information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_packages_with_authed_ip**
> PackageResponse get_all_packages_with_authed_ip(ip_address)

Get packages

Gets all packages from a webstore.

### Example

* Basic Authentication (basicAuth):

```python
import TebexHeadless
from TebexHeadless.models.package_response import PackageResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = TebexHeadless.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    ip_address = '127.0.0.1' # str | An IP address can be provided with authenticated requests

    try:
        # Get packages
        api_response = api_instance.get_all_packages_with_authed_ip(ip_address)
        print("The response of HeadlessApi->get_all_packages_with_authed_ip:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_all_packages_with_authed_ip: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip_address** | **str**| An IP address can be provided with authenticated requests | 

### Return type

[**PackageResponse**](PackageResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns a list of package information. |  -  |
**422** | The provided request is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_packages_with_authed_ip_and_basket**
> PackageResponse get_all_packages_with_authed_ip_and_basket(basket_ident, ip_address)

Get packages available for IP and basket

Gets all packages from a webstore.

### Example

* Basic Authentication (basicAuth):

```python
import TebexHeadless
from TebexHeadless.models.package_response import PackageResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = TebexHeadless.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.
    ip_address = '127.0.0.1' # str | An IP address can be provided with authenticated requests.

    try:
        # Get packages available for IP and basket
        api_response = api_instance.get_all_packages_with_authed_ip_and_basket(basket_ident, ip_address)
        print("The response of HeadlessApi->get_all_packages_with_authed_ip_and_basket:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_all_packages_with_authed_ip_and_basket: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basket_ident** | **str**| The basket identifier. | 
 **ip_address** | **str**| An IP address can be provided with authenticated requests. | 

### Return type

[**PackageResponse**](PackageResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns a list of package information. |  -  |
**422** | The provided request is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_basket**
> BasketResponse get_basket(basket_ident)

Get a basket

Gets a basket associated with the provided identifier.

### Example


```python
import TebexHeadless
from TebexHeadless.models.basket_response import BasketResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.

    try:
        # Get a basket
        api_response = api_instance.get_basket(basket_ident)
        print("The response of HeadlessApi->get_basket:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_basket: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basket_ident** | **str**| The basket identifier. | 

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns the basket information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_basket_auth_url**
> List[BasketAuthResponseInner] get_basket_auth_url(basket_ident, return_url)

Get auth links for basket

Fetches a basket's auth URL. The player should be directed here in order for them to authorize their account. When complete, they will be returned to the provided `returnUrl` and the basket will be authorized from that moment onwards.

### Example


```python
import TebexHeadless
from TebexHeadless.models.basket_auth_response_inner import BasketAuthResponseInner
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.
    return_url = 'https://example.tebex.io/' # str | The URL you would like to redirect the user to after successful basket authentication.

    try:
        # Get auth links for basket
        api_response = api_instance.get_basket_auth_url(basket_ident, return_url)
        print("The response of HeadlessApi->get_basket_auth_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_basket_auth_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basket_ident** | **str**| The basket identifier. | 
 **return_url** | **str**| The URL you would like to redirect the user to after successful basket authentication. | 

### Return type

[**List[BasketAuthResponseInner]**](BasketAuthResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns the auth provider options and URLs of the sign-in link. |  -  |
**422** | The provided webstore ID or basket ID is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_categories**
> CategoryResponse get_categories()

Get all categories

Gets all categories from a webstore. This does not include package information. To include package information, add `?includePackages=1` to the URL.

### Example


```python
import TebexHeadless
from TebexHeadless.models.category_response import CategoryResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)

    try:
        # Get all categories
        api_response = api_instance.get_categories()
        print("The response of HeadlessApi->get_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_categories: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns a list of category information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_categories_include_packages**
> CategoryResponse get_categories_include_packages()

Gets all categories and packages

Gets all categories from a webstore including packages.

### Example


```python
import TebexHeadless
from TebexHeadless.models.category_response import CategoryResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)

    try:
        # Gets all categories and packages
        api_response = api_instance.get_categories_include_packages()
        print("The response of HeadlessApi->get_categories_include_packages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_categories_include_packages: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns a list of category information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_category**
> SingleCategoryResponse get_category(category_id)

Get specific category

Gets information about a category and returns the packages in that category.

### Example


```python
import TebexHeadless
from TebexHeadless.models.single_category_response import SingleCategoryResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    category_id = '127244343' # str | The ID or slug of the category to fetch.

    try:
        # Get specific category
        api_response = api_instance.get_category(category_id)
        print("The response of HeadlessApi->get_category:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_category: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **str**| The ID or slug of the category to fetch. | 

### Return type

[**SingleCategoryResponse**](SingleCategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns the category without package information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_category_include_dynamic_packages**
> SingleCategoryResponse get_category_include_dynamic_packages(category_id, basket_ident)

Gets a specific category including packages, populating a dynamic category for the given basket.

Gets information about a category and returns the packages in that category. When the category is dynamic and `basketIdent` is provided, the category is populated with the packages associated with that basket.  If a basket identifier is not provided, a dynamic category will be empty as the basket is required to relate packages to the category.

### Example


```python
import TebexHeadless
from TebexHeadless.models.single_category_response import SingleCategoryResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    category_id = '1234' # str | The ID or slug of the category to fetch.
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.

    try:
        # Gets a specific category including packages, populating a dynamic category for the given basket.
        api_response = api_instance.get_category_include_dynamic_packages(category_id, basket_ident)
        print("The response of HeadlessApi->get_category_include_dynamic_packages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_category_include_dynamic_packages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **str**| The ID or slug of the category to fetch. | 
 **basket_ident** | **str**| The basket identifier. | 

### Return type

[**SingleCategoryResponse**](SingleCategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns the category with package information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_category_include_packages**
> SingleCategoryResponse get_category_include_packages(category_id)

Get a category with all packages

Gets information about a category and returns the packages in that category.

### Example


```python
import TebexHeadless
from TebexHeadless.models.single_category_response import SingleCategoryResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    category_id = '127244343' # str | The ID or slug of the category to fetch.

    try:
        # Get a category with all packages
        api_response = api_instance.get_category_include_packages(category_id)
        print("The response of HeadlessApi->get_category_include_packages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_category_include_packages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **str**| The ID or slug of the category to fetch. | 

### Return type

[**SingleCategoryResponse**](SingleCategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns the category with package information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_custom_pages**
> CMSPagesResponse get_custom_pages()

Get custom pages defined for the webstore.

Gets a list of custom pages associated with the webstore. These contain a `content` variable with the HTML content of the page.

### Example


```python
import TebexHeadless
from TebexHeadless.models.cms_pages_response import CMSPagesResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)

    try:
        # Get custom pages defined for the webstore.
        api_response = api_instance.get_custom_pages()
        print("The response of HeadlessApi->get_custom_pages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_custom_pages: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**CMSPagesResponse**](CMSPagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns the webstore&#39;s pages. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dynamic_categories**
> CategoryResponse get_dynamic_categories(basket_ident)

Get Dynamic Categories

Gets all categories from a webstore including packages. When `basketIdent` is provided, dynamic categories are populated with the packages associated with that basket.  If a basket identifier is not provided, dynamic categories will be empty as the basket is required to relate packages to the category.

### Example


```python
import TebexHeadless
from TebexHeadless.models.category_response import CategoryResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.

    try:
        # Get Dynamic Categories
        api_response = api_instance.get_dynamic_categories(basket_ident)
        print("The response of HeadlessApi->get_dynamic_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_dynamic_categories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basket_ident** | **str**| The basket identifier. | 

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns a list of category information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_package**
> SinglePackageResponse get_package(package_id)

Get package

Gets a package from a webstore by its ID or slug.  Note: this endpoint does not support packages belonging to dynamic categories. Use the category endpoints with `includePackages=1` and `basketIdent` to fetch dynamic packages.

### Example


```python
import TebexHeadless
from TebexHeadless.models.single_package_response import SinglePackageResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    package_id = '1272441812' # str | The package's ID or slug.

    try:
        # Get package
        api_response = api_instance.get_package(package_id)
        print("The response of HeadlessApi->get_package:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_package: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_id** | **str**| The package&#39;s ID or slug. | 

### Return type

[**SinglePackageResponse**](SinglePackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns the package information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_packages_for_basket**
> PackageResponse get_packages_for_basket(basket_ident)

Get packages available for basket

Gets all packages available to the provided basket.

### Example


```python
import TebexHeadless
from TebexHeadless.models.package_response import PackageResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.

    try:
        # Get packages available for basket
        api_response = api_instance.get_packages_for_basket(basket_ident)
        print("The response of HeadlessApi->get_packages_for_basket:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_packages_for_basket: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basket_ident** | **str**| The basket identifier. | 

### Return type

[**PackageResponse**](PackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns a list of package information. |  -  |
**422** | The provided request is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_sidebar**
> ModulesResponse get_sidebar(token)

Retrieves the available sidebar modules.

Retrieves the available sidebar modules configured for the store.

### Example


```python
import TebexHeadless
from TebexHeadless.models.modules_response import ModulesResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    token = 'some-uuid' # str | The webstore identifier.

    try:
        # Retrieves the available sidebar modules.
        api_response = api_instance.get_sidebar(token)
        print("The response of HeadlessApi->get_sidebar:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_sidebar: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| The webstore identifier. | 

### Return type

[**ModulesResponse**](ModulesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_tiered_categories**
> CategoryResponse get_user_tiered_categories(username_id)

Get user's tiered categories

Gets all categories from the webstore, returning active tier information for the given player.

### Example

* Basic Authentication (basicAuth):

```python
import TebexHeadless
from TebexHeadless.models.category_response import CategoryResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = TebexHeadless.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    username_id = 76561198042467022 # int | 

    try:
        # Get user's tiered categories
        api_response = api_instance.get_user_tiered_categories(username_id)
        print("The response of HeadlessApi->get_user_tiered_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_user_tiered_categories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username_id** | **int**|  | 

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns a list of category information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_webstore**
> WebstoreResponse get_webstore()

Get the webstore's information

Gets the webstore associated with the provided token

### Example


```python
import TebexHeadless
from TebexHeadless.models.webstore_response import WebstoreResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)

    try:
        # Get the webstore's information
        api_response = api_instance.get_webstore()
        print("The response of HeadlessApi->get_webstore:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_webstore: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**WebstoreResponse**](WebstoreResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns the webstore&#39;s information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_coupon**
> remove_coupon(basket_ident, apply_coupon_request=apply_coupon_request)

Remove a coupon from the basket.

Removes a coupon code from a basket

### Example


```python
import TebexHeadless
from TebexHeadless.models.apply_coupon_request import ApplyCouponRequest
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.
    apply_coupon_request = TebexHeadless.ApplyCouponRequest() # ApplyCouponRequest | Provide a `coupon_code` to remove from the basket. (optional)

    try:
        # Remove a coupon from the basket.
        api_instance.remove_coupon(basket_ident, apply_coupon_request=apply_coupon_request)
    except Exception as e:
        print("Exception when calling HeadlessApi->remove_coupon: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basket_ident** | **str**| The basket identifier. | 
 **apply_coupon_request** | [**ApplyCouponRequest**](ApplyCouponRequest.md)| Provide a &#x60;coupon_code&#x60; to remove from the basket. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response. |  -  |
**422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_creator_code**
> remove_creator_code(basket_ident)

Removes the creator code from the basket.

Removes the creator code from the basket.

### Example


```python
import TebexHeadless
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.

    try:
        # Removes the creator code from the basket.
        api_instance.remove_creator_code(basket_ident)
    except Exception as e:
        print("Exception when calling HeadlessApi->remove_creator_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basket_ident** | **str**| The basket identifier. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Creator code removed successfully. |  -  |
**422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_gift_card**
> remove_gift_card(basket_ident, remove_gift_card_request=remove_gift_card_request)

Remove a gift card from the basket.

Removes a gift card from the basket.

### Example


```python
import TebexHeadless
from TebexHeadless.models.remove_gift_card_request import RemoveGiftCardRequest
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.
    remove_gift_card_request = TebexHeadless.RemoveGiftCardRequest() # RemoveGiftCardRequest | Provide the `card_number` to remove from the basket. (optional)

    try:
        # Remove a gift card from the basket.
        api_instance.remove_gift_card(basket_ident, remove_gift_card_request=remove_gift_card_request)
    except Exception as e:
        print("Exception when calling HeadlessApi->remove_gift_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basket_ident** | **str**| The basket identifier. | 
 **remove_gift_card_request** | [**RemoveGiftCardRequest**](RemoveGiftCardRequest.md)| Provide the &#x60;card_number&#x60; to remove from the basket. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gift card removed successfully. |  -  |
**422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_tier**
> UpdateTierResponse update_tier(tier_id, update_tier_request=update_tier_request)

Update user's tier to a new package

Updates a tier to a new package. A recurring payment updated webhook is sent when an update is successful.

### Example

* Basic Authentication (basicAuth):

```python
import TebexHeadless
from TebexHeadless.models.update_tier_request import UpdateTierRequest
from TebexHeadless.models.update_tier_response import UpdateTierResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = TebexHeadless.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    tier_id = 6276316 # int | The tier identifier
    update_tier_request = TebexHeadless.UpdateTierRequest() # UpdateTierRequest |  (optional)

    try:
        # Update user's tier to a new package
        api_response = api_instance.update_tier(tier_id, update_tier_request=update_tier_request)
        print("The response of HeadlessApi->update_tier:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->update_tier: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tier_id** | **int**| The tier identifier | 
 **update_tier_request** | [**UpdateTierRequest**](UpdateTierRequest.md)|  | [optional] 

### Return type

[**UpdateTierResponse**](UpdateTierResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


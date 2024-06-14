# TebexHeadless.HeadlessApi

All URIs are relative to *https://headless.tebex.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_basket_package**](HeadlessApi.md#add_basket_package) | **POST** /baskets/{basketIdent}/packages | Add a package to a basket
[**apply_coupon**](HeadlessApi.md#apply_coupon) | **POST** /accounts/{token}/baskets/{basketIdent}/coupons | Apply a coupon to a basket.
[**apply_creator_code**](HeadlessApi.md#apply_creator_code) | **POST** /accounts/{token}/baskets/{basketIdent}/creator-codes | Apply a creator code to a basket.
[**apply_gift_card**](HeadlessApi.md#apply_gift_card) | **POST** /accounts/{token}/baskets/{basketIdent}/giftcards | Apply a gift card to a basket.
[**create_basket**](HeadlessApi.md#create_basket) | **POST** /accounts/{token}/baskets | Create a new basket
[**get_all_categories**](HeadlessApi.md#get_all_categories) | **GET** /accounts/{token}/categories | Gets all categories available in the webstore.
[**get_all_categories_including_packages**](HeadlessApi.md#get_all_categories_including_packages) | **GET** /accounts/{token}/categories?includePackages&#x3D;1 | Gets a store&#39;s categories including all package information with them.
[**get_all_packages**](HeadlessApi.md#get_all_packages) | **GET** /accounts/{token}/packages | Fetch all packages from a webstore
[**get_all_packages_with_authed_ip**](HeadlessApi.md#get_all_packages_with_authed_ip) | **GET** /accounts/{token}/packages?ipAddress&#x3D;{ipAddress} | Fetch a package from a webstore by its identifier
[**get_all_packages_with_authed_ip_and_basket**](HeadlessApi.md#get_all_packages_with_authed_ip_and_basket) | **GET** /accounts/{token}/packages?ipAddress&#x3D;{ipAddress}&amp;basketIdent&#x3D;{basketIdent} | Fetch a package from a webstore by its identifier
[**get_all_packages_with_basket**](HeadlessApi.md#get_all_packages_with_basket) | **GET** /accounts/{token}/packages?basketIdent&#x3D;{basketIdent} | Fetch a package from a webstore by its identifier
[**get_basket_auth_url**](HeadlessApi.md#get_basket_auth_url) | **GET** /accounts/{token}/baskets/{basketIdent}/auth?returnUrl&#x3D;{returnUrl} | Fetch a basket from a webstore by its identifier
[**get_basket_by_id**](HeadlessApi.md#get_basket_by_id) | **GET** /accounts/{token}/baskets/{basketIdent} | Fetch a basket from a webstore by its identifier
[**get_category_by_id**](HeadlessApi.md#get_category_by_id) | **GET** /accounts/{token}/categories/{categoryId} | Gets information about a specific category
[**get_category_including_packages**](HeadlessApi.md#get_category_including_packages) | **GET** /accounts/{token}/categories/{categoryId}?includePackages&#x3D;1 | Gets information about a specific category, including all the packages in the category
[**get_package_by_id**](HeadlessApi.md#get_package_by_id) | **GET** /accounts/{token}/packages/{packageId} | Fetch a package from a webstore by its identifier
[**get_webstore_by_id**](HeadlessApi.md#get_webstore_by_id) | **GET** /accounts/{token} | Fetch a webstore by its identifier
[**remove_basket_package**](HeadlessApi.md#remove_basket_package) | **POST** /baskets/{basketIdent}/packages/remove | Remove a package from a basket
[**remove_coupon**](HeadlessApi.md#remove_coupon) | **POST** /accounts/{token}/baskets/{basketIdent}/coupons/remove | Remove a coupon from the basket.
[**remove_creator_code**](HeadlessApi.md#remove_creator_code) | **POST** /accounts/{token}/baskets/{basketIdent}/creator-codes/remove | Remove a creator code from the basket.
[**remove_gift_card**](HeadlessApi.md#remove_gift_card) | **POST** /accounts/{token}/baskets/{basketIdent}/giftcards/remove | Remove a gift card from the basket.
[**update_package_quantity**](HeadlessApi.md#update_package_quantity) | **PUT** /baskets/{basketIdent}/packages/{packageId} | Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed.


# **add_basket_package**
> Basket add_basket_package(basket_ident, add_basket_package_request=add_basket_package_request)

Add a package to a basket

Add a package with the given ID to the basket.

### Example


```python
import TebexHeadless
from TebexHeadless.models.add_basket_package_request import AddBasketPackageRequest
from TebexHeadless.models.basket import Basket
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.
    add_basket_package_request = TebexHeadless.AddBasketPackageRequest() # AddBasketPackageRequest |  (optional)

    try:
        # Add a package to a basket
        api_response = api_instance.add_basket_package(basket_ident, add_basket_package_request=add_basket_package_request)
        print("The response of HeadlessApi->add_basket_package:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->add_basket_package: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basket_ident** | **str**| The basket identifier. | 
 **add_basket_package_request** | [**AddBasketPackageRequest**](AddBasketPackageRequest.md)|  | [optional] 

### Return type

[**Basket**](Basket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response. |  -  |
**422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apply_coupon**
> BasketResponse apply_coupon(token, basket_ident, coupon=coupon)

Apply a coupon to a basket.

Applies a creator code to a basket.

### Example


```python
import TebexHeadless
from TebexHeadless.models.basket_response import BasketResponse
from TebexHeadless.models.coupon import Coupon
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    token = 't66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb' # str | The webstore identifier.
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.
    coupon = TebexHeadless.Coupon() # Coupon | Provide a `coupon_code` to apply to the basket. (optional)

    try:
        # Apply a coupon to a basket.
        api_response = api_instance.apply_coupon(token, basket_ident, coupon=coupon)
        print("The response of HeadlessApi->apply_coupon:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->apply_coupon: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| The webstore identifier. | 
 **basket_ident** | **str**| The basket identifier. | 
 **coupon** | [**Coupon**](Coupon.md)| Provide a &#x60;coupon_code&#x60; to apply to the basket. | [optional] 

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
**200** | Successful response returns the basket. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apply_creator_code**
> BasketResponse apply_creator_code(token, basket_ident, apply_creator_code_request=apply_creator_code_request)

Apply a creator code to a basket.

Applies a creator code to a basket.

### Example


```python
import TebexHeadless
from TebexHeadless.models.apply_creator_code_request import ApplyCreatorCodeRequest
from TebexHeadless.models.basket_response import BasketResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    token = 't66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb' # str | The webstore identifier.
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.
    apply_creator_code_request = TebexHeadless.ApplyCreatorCodeRequest() # ApplyCreatorCodeRequest | Provide a `creator_code` to apply to the basket. (optional)

    try:
        # Apply a creator code to a basket.
        api_response = api_instance.apply_creator_code(token, basket_ident, apply_creator_code_request=apply_creator_code_request)
        print("The response of HeadlessApi->apply_creator_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->apply_creator_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| The webstore identifier. | 
 **basket_ident** | **str**| The basket identifier. | 
 **apply_creator_code_request** | [**ApplyCreatorCodeRequest**](ApplyCreatorCodeRequest.md)| Provide a &#x60;creator_code&#x60; to apply to the basket. | [optional] 

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
**200** | Successful response returns the basket. |  -  |
**422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apply_gift_card**
> BasketResponse apply_gift_card(token, basket_ident, gift_card=gift_card)

Apply a gift card to a basket.

Applies a creator code to a basket.

### Example


```python
import TebexHeadless
from TebexHeadless.models.basket_response import BasketResponse
from TebexHeadless.models.gift_card import GiftCard
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    token = 't66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb' # str | The webstore identifier.
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.
    gift_card = TebexHeadless.GiftCard() # GiftCard | Provide a `card_number` to apply to the basket. (optional)

    try:
        # Apply a gift card to a basket.
        api_response = api_instance.apply_gift_card(token, basket_ident, gift_card=gift_card)
        print("The response of HeadlessApi->apply_gift_card:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->apply_gift_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| The webstore identifier. | 
 **basket_ident** | **str**| The basket identifier. | 
 **gift_card** | [**GiftCard**](GiftCard.md)| Provide a &#x60;card_number&#x60; to apply to the basket. | [optional] 

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
**200** | Successful response returns the basket. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_basket**
> BasketResponse create_basket(token, create_basket_request=create_basket_request)

Create a new basket

Creates a new basket for use during checkout.

### Example


```python
import TebexHeadless
from TebexHeadless.models.basket_response import BasketResponse
from TebexHeadless.models.create_basket_request import CreateBasketRequest
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    token = 't66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb' # str | The webstore identifier.
    create_basket_request = TebexHeadless.CreateBasketRequest() # CreateBasketRequest |  (optional)

    try:
        # Create a new basket
        api_response = api_instance.create_basket(token, create_basket_request=create_basket_request)
        print("The response of HeadlessApi->create_basket:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->create_basket: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| The webstore identifier. | 
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

# **get_all_categories**
> CategoryResponse get_all_categories(token)

Gets all categories available in the webstore.

Gets all categories from a webstore. This does not include package information. To include package information, add `?includePackages=1` to the URL.

### Example


```python
import TebexHeadless
from TebexHeadless.models.category_response import CategoryResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    token = 't66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb' # str | The webstore identifier.

    try:
        # Gets all categories available in the webstore.
        api_response = api_instance.get_all_categories(token)
        print("The response of HeadlessApi->get_all_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_all_categories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| The webstore identifier. | 

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

# **get_all_categories_including_packages**
> CategoryResponse get_all_categories_including_packages(token)

Gets a store's categories including all package information with them.

Gets all categories from a webstore including packages.

### Example


```python
import TebexHeadless
from TebexHeadless.models.category_response import CategoryResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    token = 't66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb' # str | The webstore identifier.

    try:
        # Gets a store's categories including all package information with them.
        api_response = api_instance.get_all_categories_including_packages(token)
        print("The response of HeadlessApi->get_all_categories_including_packages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_all_categories_including_packages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| The webstore identifier. | 

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

# **get_all_packages**
> PackageResponse get_all_packages(token)

Fetch all packages from a webstore

Gets all packages from a webstore.

### Example


```python
import TebexHeadless
from TebexHeadless.models.package_response import PackageResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    token = 't66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb' # str | The webstore identifier.

    try:
        # Fetch all packages from a webstore
        api_response = api_instance.get_all_packages(token)
        print("The response of HeadlessApi->get_all_packages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_all_packages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| The webstore identifier. | 

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
> PackageResponse get_all_packages_with_authed_ip(token, ip_address)

Fetch a package from a webstore by its identifier

Gets all packages from a webstore.

### Example


```python
import TebexHeadless
from TebexHeadless.models.package_response import PackageResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    token = 't66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb' # str | The webstore identifier.
    ip_address = '127.0.0.1' # str | An IP address can be provided with authenticated requests.

    try:
        # Fetch a package from a webstore by its identifier
        api_response = api_instance.get_all_packages_with_authed_ip(token, ip_address)
        print("The response of HeadlessApi->get_all_packages_with_authed_ip:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_all_packages_with_authed_ip: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| The webstore identifier. | 
 **ip_address** | **str**| An IP address can be provided with authenticated requests. | 

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

# **get_all_packages_with_authed_ip_and_basket**
> List[PackageResponse] get_all_packages_with_authed_ip_and_basket(token, basket_ident, ip_address)

Fetch a package from a webstore by its identifier

Gets all packages from a webstore.

### Example


```python
import TebexHeadless
from TebexHeadless.models.package_response import PackageResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    token = 't66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb' # str | The webstore identifier.
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.
    ip_address = '127.0.0.1' # str | An IP address can be provided with authenticated requests.

    try:
        # Fetch a package from a webstore by its identifier
        api_response = api_instance.get_all_packages_with_authed_ip_and_basket(token, basket_ident, ip_address)
        print("The response of HeadlessApi->get_all_packages_with_authed_ip_and_basket:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_all_packages_with_authed_ip_and_basket: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| The webstore identifier. | 
 **basket_ident** | **str**| The basket identifier. | 
 **ip_address** | **str**| An IP address can be provided with authenticated requests. | 

### Return type

[**List[PackageResponse]**](PackageResponse.md)

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

# **get_all_packages_with_basket**
> PackageResponse get_all_packages_with_basket(token, basket_ident)

Fetch a package from a webstore by its identifier

Gets all packages from a webstore.

### Example


```python
import TebexHeadless
from TebexHeadless.models.package_response import PackageResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    token = 't66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb' # str | The webstore identifier.
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.

    try:
        # Fetch a package from a webstore by its identifier
        api_response = api_instance.get_all_packages_with_basket(token, basket_ident)
        print("The response of HeadlessApi->get_all_packages_with_basket:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_all_packages_with_basket: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| The webstore identifier. | 
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

# **get_basket_auth_url**
> BasketResponse get_basket_auth_url(token, basket_ident, return_url)

Fetch a basket from a webstore by its identifier

Fetches a basket's auth URL.

### Example


```python
import TebexHeadless
from TebexHeadless.models.basket_response import BasketResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    token = 't66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb' # str | The webstore identifier.
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.
    return_url = 'https://example.tebex.io/' # str | The URL you would like to redirect the user to after successful basket authentication.

    try:
        # Fetch a basket from a webstore by its identifier
        api_response = api_instance.get_basket_auth_url(token, basket_ident, return_url)
        print("The response of HeadlessApi->get_basket_auth_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_basket_auth_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| The webstore identifier. | 
 **basket_ident** | **str**| The basket identifier. | 
 **return_url** | **str**| The URL you would like to redirect the user to after successful basket authentication. | 

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
**200** | Successful response returns the basket auth information. |  -  |
**422** | The provided webstore ID or basket ID is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_basket_by_id**
> BasketResponse get_basket_by_id(token, basket_ident)

Fetch a basket from a webstore by its identifier

Gets a basket associated with the provided identifier.

### Example


```python
import TebexHeadless
from TebexHeadless.models.basket_response import BasketResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    token = 't66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb' # str | The webstore identifier.
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.

    try:
        # Fetch a basket from a webstore by its identifier
        api_response = api_instance.get_basket_by_id(token, basket_ident)
        print("The response of HeadlessApi->get_basket_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_basket_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| The webstore identifier. | 
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

# **get_category_by_id**
> List[CategoryResponse] get_category_by_id(token, category_id)

Gets information about a specific category

Gets information about a category and returns the packages in that category.

### Example


```python
import TebexHeadless
from TebexHeadless.models.category_response import CategoryResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    token = 't66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb' # str | The webstore identifier.
    category_id = '127244343' # str | The ID of the category to fetch.

    try:
        # Gets information about a specific category
        api_response = api_instance.get_category_by_id(token, category_id)
        print("The response of HeadlessApi->get_category_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_category_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| The webstore identifier. | 
 **category_id** | **str**| The ID of the category to fetch. | 

### Return type

[**List[CategoryResponse]**](CategoryResponse.md)

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

# **get_category_including_packages**
> CategoryResponse get_category_including_packages(token, category_id)

Gets information about a specific category, including all the packages in the category

Gets information about a category and returns the packages in that category.

### Example


```python
import TebexHeadless
from TebexHeadless.models.category_response import CategoryResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    token = 't66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb' # str | The webstore identifier.
    category_id = '127244343' # str | The ID of the category to fetch.

    try:
        # Gets information about a specific category, including all the packages in the category
        api_response = api_instance.get_category_including_packages(token, category_id)
        print("The response of HeadlessApi->get_category_including_packages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_category_including_packages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| The webstore identifier. | 
 **category_id** | **str**| The ID of the category to fetch. | 

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
**200** | Successful response returns the category with package information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_package_by_id**
> PackageResponse get_package_by_id(token, package_id)

Fetch a package from a webstore by its identifier

Gets a package from a webstore by ID.

### Example


```python
import TebexHeadless
from TebexHeadless.models.package_response import PackageResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    token = 't66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb' # str | The webstore identifier.
    package_id = 1272441812 # float | The package's ID.

    try:
        # Fetch a package from a webstore by its identifier
        api_response = api_instance.get_package_by_id(token, package_id)
        print("The response of HeadlessApi->get_package_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_package_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| The webstore identifier. | 
 **package_id** | **float**| The package&#39;s ID. | 

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
**200** | Successful response returns the package information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_webstore_by_id**
> WebstoreResponse get_webstore_by_id(token)

Fetch a webstore by its identifier

Gets the webstore associated with the provided identifier.

### Example


```python
import TebexHeadless
from TebexHeadless.models.webstore_response import WebstoreResponse
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    token = 'some-uuid' # str | The webstore identifier.

    try:
        # Fetch a webstore by its identifier
        api_response = api_instance.get_webstore_by_id(token)
        print("The response of HeadlessApi->get_webstore_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->get_webstore_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| The webstore identifier. | 

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

# **remove_basket_package**
> Basket remove_basket_package(basket_ident, remove_basket_package_request=remove_basket_package_request)

Remove a package from a basket

Remove the given package ID from the basket.

### Example


```python
import TebexHeadless
from TebexHeadless.models.basket import Basket
from TebexHeadless.models.remove_basket_package_request import RemoveBasketPackageRequest
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.
    remove_basket_package_request = TebexHeadless.RemoveBasketPackageRequest() # RemoveBasketPackageRequest |  (optional)

    try:
        # Remove a package from a basket
        api_response = api_instance.remove_basket_package(basket_ident, remove_basket_package_request=remove_basket_package_request)
        print("The response of HeadlessApi->remove_basket_package:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeadlessApi->remove_basket_package: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basket_ident** | **str**| The basket identifier. | 
 **remove_basket_package_request** | [**RemoveBasketPackageRequest**](RemoveBasketPackageRequest.md)|  | [optional] 

### Return type

[**Basket**](Basket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns the basket. |  -  |
**422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_coupon**
> remove_coupon(token, basket_ident)

Remove a coupon from the basket.

Removes a coupon code from a basket

### Example


```python
import TebexHeadless
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    token = 't66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb' # str | The webstore identifier.
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.

    try:
        # Remove a coupon from the basket.
        api_instance.remove_coupon(token, basket_ident)
    except Exception as e:
        print("Exception when calling HeadlessApi->remove_coupon: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| The webstore identifier. | 
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
**200** | Successful response. |  -  |
**422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_creator_code**
> remove_creator_code(token, basket_ident)

Remove a creator code from the basket.

Applies a creator code to a basket.

### Example


```python
import TebexHeadless
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    token = 't66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb' # str | The webstore identifier.
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.

    try:
        # Remove a creator code from the basket.
        api_instance.remove_creator_code(token, basket_ident)
    except Exception as e:
        print("Exception when calling HeadlessApi->remove_creator_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| The webstore identifier. | 
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
> remove_gift_card(token, basket_ident, remove_gift_card_request=remove_gift_card_request)

Remove a gift card from the basket.

Removes a gift card from the basket.

### Example


```python
import TebexHeadless
from TebexHeadless.models.remove_gift_card_request import RemoveGiftCardRequest
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    token = 't66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb' # str | The webstore identifier.
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.
    remove_gift_card_request = TebexHeadless.RemoveGiftCardRequest() # RemoveGiftCardRequest | Provide the `card_number` to remove from the basket. (optional)

    try:
        # Remove a gift card from the basket.
        api_instance.remove_gift_card(token, basket_ident, remove_gift_card_request=remove_gift_card_request)
    except Exception as e:
        print("Exception when calling HeadlessApi->remove_gift_card: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| The webstore identifier. | 
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

# **update_package_quantity**
> update_package_quantity(basket_ident, package_id, update_package_quantity_request=update_package_quantity_request)

Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed.

Sets the quantity of the given item in the basket.

### Example


```python
import TebexHeadless
from TebexHeadless.models.update_package_quantity_request import UpdatePackageQuantityRequest
from TebexHeadless.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://headless.tebex.io/api
# See configuration.py for a list of all supported configuration parameters.
configuration = TebexHeadless.Configuration(
    host = "https://headless.tebex.io/api"
)


# Enter a context with an instance of the API client
with TebexHeadless.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = TebexHeadless.HeadlessApi(api_client)
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.
    package_id = 6276316 # float | The package identifier.
    update_package_quantity_request = TebexHeadless.UpdatePackageQuantityRequest() # UpdatePackageQuantityRequest |  (optional)

    try:
        # Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed.
        api_instance.update_package_quantity(basket_ident, package_id, update_package_quantity_request=update_package_quantity_request)
    except Exception as e:
        print("Exception when calling HeadlessApi->update_package_quantity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basket_ident** | **str**| The basket identifier. | 
 **package_id** | **float**| The package identifier. | 
 **update_package_quantity_request** | [**UpdatePackageQuantityRequest**](UpdatePackageQuantityRequest.md)|  | [optional] 

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


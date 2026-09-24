# TebexHeadless.BasketsApi

All URIs are relative to *https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_basket_package**](BasketsApi.md#add_basket_package) | **POST** /{basketIdent}/packages | Add package to basket
[**remove_basket_package**](BasketsApi.md#remove_basket_package) | **POST** /{basketIdent}/packages/remove | Remove a package from a basket
[**update_package_quantity**](BasketsApi.md#update_package_quantity) | **PUT** /{basketIdent}/packages/{packageId} | Update package quantity


# **add_basket_package**
> BasketResponse add_basket_package(basket_ident, add_basket_package_request=add_basket_package_request)

Add package to basket

Add a package with the given ID to the basket.  To add a package belonging to a dynamic category, set `dynamic` to `true`. Without this property the API will treat the request as a normal package ID.

### Example


```python
import TebexHeadless
from TebexHeadless.models.add_basket_package_request import AddBasketPackageRequest
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
    api_instance = TebexHeadless.BasketsApi(api_client)
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.
    add_basket_package_request = TebexHeadless.AddBasketPackageRequest() # AddBasketPackageRequest |  (optional)

    try:
        # Add package to basket
        api_response = api_instance.add_basket_package(basket_ident, add_basket_package_request=add_basket_package_request)
        print("The response of BasketsApi->add_basket_package:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BasketsApi->add_basket_package: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basket_ident** | **str**| The basket identifier. | 
 **add_basket_package_request** | [**AddBasketPackageRequest**](AddBasketPackageRequest.md)|  | [optional] 

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
**200** | Successful response. |  -  |
**422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_basket_package**
> BasketResponse remove_basket_package(basket_ident, remove_basket_package_request=remove_basket_package_request)

Remove a package from a basket

Remove the given package ID from the basket.

### Example


```python
import TebexHeadless
from TebexHeadless.models.basket_response import BasketResponse
from TebexHeadless.models.remove_basket_package_request import RemoveBasketPackageRequest
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
    api_instance = TebexHeadless.BasketsApi(api_client)
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.
    remove_basket_package_request = TebexHeadless.RemoveBasketPackageRequest() # RemoveBasketPackageRequest |  (optional)

    try:
        # Remove a package from a basket
        api_response = api_instance.remove_basket_package(basket_ident, remove_basket_package_request=remove_basket_package_request)
        print("The response of BasketsApi->remove_basket_package:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BasketsApi->remove_basket_package: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basket_ident** | **str**| The basket identifier. | 
 **remove_basket_package_request** | [**RemoveBasketPackageRequest**](RemoveBasketPackageRequest.md)|  | [optional] 

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

# **update_package_quantity**
> update_package_quantity(basket_ident, package_id, update_package_quantity_request=update_package_quantity_request)

Update package quantity

Sets the quantity of the given item in the basket. The user must be logged in before the quantity can be changed.

### Example


```python
import TebexHeadless
from TebexHeadless.models.update_package_quantity_request import UpdatePackageQuantityRequest
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
    api_instance = TebexHeadless.BasketsApi(api_client)
    basket_ident = 'c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c' # str | The basket identifier.
    package_id = '6276316' # str | The package identifier
    update_package_quantity_request = TebexHeadless.UpdatePackageQuantityRequest() # UpdatePackageQuantityRequest |  (optional)

    try:
        # Update package quantity
        api_instance.update_package_quantity(basket_ident, package_id, update_package_quantity_request=update_package_quantity_request)
    except Exception as e:
        print("Exception when calling BasketsApi->update_package_quantity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basket_ident** | **str**| The basket identifier. | 
 **package_id** | **str**| The package identifier | 
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


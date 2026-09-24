# TebexHeadless.TebexHeadless.BasketsApi

All URIs are relative to *https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**AddBasketPackage**](BasketsApi.md#addbasketpackage) | **POST** /{basketIdent}/packages | Add package to basket |
| [**RemoveBasketPackage**](BasketsApi.md#removebasketpackage) | **POST** /{basketIdent}/packages/remove | Remove a package from a basket |
| [**UpdatePackageQuantity**](BasketsApi.md#updatepackagequantity) | **PUT** /{basketIdent}/packages/{packageId} | Update package quantity |

<a id="addbasketpackage"></a>
# **AddBasketPackage**
> BasketResponse AddBasketPackage (string basketIdent, AddBasketPackageRequest? addBasketPackageRequest = null)

Add package to basket

Add a package with the given ID to the basket.  To add a package belonging to a dynamic category, set `dynamic` to `true`. Without this property the API will treat the request as a normal package ID.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class AddBasketPackageExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new BasketsApi(config);
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.
            var addBasketPackageRequest = new AddBasketPackageRequest?(); // AddBasketPackageRequest? |  (optional) 

            try
            {
                // Add package to basket
                BasketResponse result = apiInstance.AddBasketPackage(basketIdent, addBasketPackageRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BasketsApi.AddBasketPackage: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the AddBasketPackageWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Add package to basket
    ApiResponse<BasketResponse> response = apiInstance.AddBasketPackageWithHttpInfo(basketIdent, addBasketPackageRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BasketsApi.AddBasketPackageWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **basketIdent** | **string** | The basket identifier. |  |
| **addBasketPackageRequest** | [**AddBasketPackageRequest?**](AddBasketPackageRequest?.md) |  | [optional]  |

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
| **200** | Successful response. |  -  |
| **422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="removebasketpackage"></a>
# **RemoveBasketPackage**
> BasketResponse RemoveBasketPackage (string basketIdent, RemoveBasketPackageRequest? removeBasketPackageRequest = null)

Remove a package from a basket

Remove the given package ID from the basket.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class RemoveBasketPackageExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new BasketsApi(config);
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.
            var removeBasketPackageRequest = new RemoveBasketPackageRequest?(); // RemoveBasketPackageRequest? |  (optional) 

            try
            {
                // Remove a package from a basket
                BasketResponse result = apiInstance.RemoveBasketPackage(basketIdent, removeBasketPackageRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BasketsApi.RemoveBasketPackage: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RemoveBasketPackageWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Remove a package from a basket
    ApiResponse<BasketResponse> response = apiInstance.RemoveBasketPackageWithHttpInfo(basketIdent, removeBasketPackageRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BasketsApi.RemoveBasketPackageWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **basketIdent** | **string** | The basket identifier. |  |
| **removeBasketPackageRequest** | [**RemoveBasketPackageRequest?**](RemoveBasketPackageRequest?.md) |  | [optional]  |

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
| **200** | Successful response returns the basket. |  -  |
| **422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatepackagequantity"></a>
# **UpdatePackageQuantity**
> void UpdatePackageQuantity (string basketIdent, string packageId, UpdatePackageQuantityRequest? updatePackageQuantityRequest = null)

Update package quantity

Sets the quantity of the given item in the basket. The user must be logged in before the quantity can be changed.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class UpdatePackageQuantityExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new BasketsApi(config);
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.
            var packageId = 6276316;  // string | The package identifier
            var updatePackageQuantityRequest = new UpdatePackageQuantityRequest?(); // UpdatePackageQuantityRequest? |  (optional) 

            try
            {
                // Update package quantity
                apiInstance.UpdatePackageQuantity(basketIdent, packageId, updatePackageQuantityRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling BasketsApi.UpdatePackageQuantity: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdatePackageQuantityWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update package quantity
    apiInstance.UpdatePackageQuantityWithHttpInfo(basketIdent, packageId, updatePackageQuantityRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BasketsApi.UpdatePackageQuantityWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **basketIdent** | **string** | The basket identifier. |  |
| **packageId** | **string** | The package identifier |  |
| **updatePackageQuantityRequest** | [**UpdatePackageQuantityRequest?**](UpdatePackageQuantityRequest?.md) |  | [optional]  |

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
| **200** | Successful response. |  -  |
| **422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


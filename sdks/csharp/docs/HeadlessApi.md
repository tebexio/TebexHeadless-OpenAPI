# TebexHeadless.TebexHeadless.HeadlessApi

All URIs are relative to *https://headless.tebex.io/api*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**AddBasketPackage**](HeadlessApi.md#addbasketpackage) | **POST** /baskets/{basketIdent}/packages | Add a package to a basket |
| [**ApplyCoupon**](HeadlessApi.md#applycoupon) | **POST** /accounts/{token}/baskets/{basketIdent}/coupons | Apply a coupon to a basket. |
| [**ApplyCreatorCode**](HeadlessApi.md#applycreatorcode) | **POST** /accounts/{token}/baskets/{basketIdent}/creator-codes | Apply a creator code to a basket. |
| [**ApplyGiftCard**](HeadlessApi.md#applygiftcard) | **POST** /accounts/{token}/baskets/{basketIdent}/giftcards | Apply a gift card to a basket. |
| [**CreateBasket**](HeadlessApi.md#createbasket) | **POST** /accounts/{token}/baskets | Create a new basket |
| [**GetAllCategories**](HeadlessApi.md#getallcategories) | **GET** /accounts/{token}/categories | Gets all categories available in the webstore. |
| [**GetAllCategoriesIncludingPackages**](HeadlessApi.md#getallcategoriesincludingpackages) | **GET** /accounts/{token}/categories?includePackages&#x3D;1 | Gets a store&#39;s categories including all package information with them. |
| [**GetAllPackages**](HeadlessApi.md#getallpackages) | **GET** /accounts/{token}/packages | Fetch all packages from a webstore |
| [**GetAllPackagesWithAuthedIP**](HeadlessApi.md#getallpackageswithauthedip) | **GET** /accounts/{token}/packages?ipAddress&#x3D;{ipAddress} | Fetch a package from a webstore by its identifier |
| [**GetAllPackagesWithAuthedIPAndBasket**](HeadlessApi.md#getallpackageswithauthedipandbasket) | **GET** /accounts/{token}/packages?ipAddress&#x3D;{ipAddress}&amp;basketIdent&#x3D;{basketIdent} | Fetch a package from a webstore by its identifier |
| [**GetAllPackagesWithBasket**](HeadlessApi.md#getallpackageswithbasket) | **GET** /accounts/{token}/packages?basketIdent&#x3D;{basketIdent} | Fetch a package from a webstore by its identifier |
| [**GetBasketAuthUrl**](HeadlessApi.md#getbasketauthurl) | **GET** /accounts/{token}/baskets/{basketIdent}/auth?returnUrl&#x3D;{returnUrl} | Fetch a basket from a webstore by its identifier |
| [**GetBasketById**](HeadlessApi.md#getbasketbyid) | **GET** /accounts/{token}/baskets/{basketIdent} | Fetch a basket from a webstore by its identifier |
| [**GetCategoryById**](HeadlessApi.md#getcategorybyid) | **GET** /accounts/{token}/categories/{categoryId} | Gets information about a specific category |
| [**GetCategoryIncludingPackages**](HeadlessApi.md#getcategoryincludingpackages) | **GET** /accounts/{token}/categories/{categoryId}?includePackages&#x3D;1 | Gets information about a specific category, including all the packages in the category |
| [**GetPackageById**](HeadlessApi.md#getpackagebyid) | **GET** /accounts/{token}/packages/{packageId} | Fetch a package from a webstore by its identifier |
| [**GetWebstoreById**](HeadlessApi.md#getwebstorebyid) | **GET** /accounts/{token} | Fetch a webstore by its identifier |
| [**RemoveBasketPackage**](HeadlessApi.md#removebasketpackage) | **POST** /baskets/{basketIdent}/packages/remove | Remove a package from a basket |
| [**RemoveCoupon**](HeadlessApi.md#removecoupon) | **POST** /accounts/{token}/baskets/{basketIdent}/coupons/remove | Remove a coupon from the basket. |
| [**RemoveCreatorCode**](HeadlessApi.md#removecreatorcode) | **POST** /accounts/{token}/baskets/{basketIdent}/creator-codes/remove | Remove a creator code from the basket. |
| [**RemoveGiftCard**](HeadlessApi.md#removegiftcard) | **POST** /accounts/{token}/baskets/{basketIdent}/giftcards/remove | Remove a gift card from the basket. |
| [**UpdatePackageQuantity**](HeadlessApi.md#updatepackagequantity) | **PUT** /baskets/{basketIdent}/packages/{packageId} | Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed. |

<a id="addbasketpackage"></a>
# **AddBasketPackage**
> Basket AddBasketPackage (string basketIdent, AddBasketPackageRequest? addBasketPackageRequest = null)

Add a package to a basket

Add a package with the given ID to the basket.

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
            config.BasePath = "https://headless.tebex.io/api";
            var apiInstance = new HeadlessApi(config);
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.
            var addBasketPackageRequest = new AddBasketPackageRequest?(); // AddBasketPackageRequest? |  (optional) 

            try
            {
                // Add a package to a basket
                Basket result = apiInstance.AddBasketPackage(basketIdent, addBasketPackageRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.AddBasketPackage: " + e.Message);
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
    // Add a package to a basket
    ApiResponse<Basket> response = apiInstance.AddBasketPackageWithHttpInfo(basketIdent, addBasketPackageRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.AddBasketPackageWithHttpInfo: " + e.Message);
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

[**Basket**](Basket.md)

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

<a id="applycoupon"></a>
# **ApplyCoupon**
> BasketResponse ApplyCoupon (string token, string basketIdent, Coupon? coupon = null)

Apply a coupon to a basket.

Applies a creator code to a basket.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class ApplyCouponExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api";
            var apiInstance = new HeadlessApi(config);
            var token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb;  // string | The webstore identifier.
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.
            var coupon = new Coupon?(); // Coupon? | Provide a `coupon_code` to apply to the basket. (optional) 

            try
            {
                // Apply a coupon to a basket.
                BasketResponse result = apiInstance.ApplyCoupon(token, basketIdent, coupon);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.ApplyCoupon: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ApplyCouponWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Apply a coupon to a basket.
    ApiResponse<BasketResponse> response = apiInstance.ApplyCouponWithHttpInfo(token, basketIdent, coupon);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.ApplyCouponWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | The webstore identifier. |  |
| **basketIdent** | **string** | The basket identifier. |  |
| **coupon** | [**Coupon?**](Coupon?.md) | Provide a &#x60;coupon_code&#x60; to apply to the basket. | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="applycreatorcode"></a>
# **ApplyCreatorCode**
> BasketResponse ApplyCreatorCode (string token, string basketIdent, ApplyCreatorCodeRequest? applyCreatorCodeRequest = null)

Apply a creator code to a basket.

Applies a creator code to a basket.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class ApplyCreatorCodeExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api";
            var apiInstance = new HeadlessApi(config);
            var token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb;  // string | The webstore identifier.
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.
            var applyCreatorCodeRequest = new ApplyCreatorCodeRequest?(); // ApplyCreatorCodeRequest? | Provide a `creator_code` to apply to the basket. (optional) 

            try
            {
                // Apply a creator code to a basket.
                BasketResponse result = apiInstance.ApplyCreatorCode(token, basketIdent, applyCreatorCodeRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.ApplyCreatorCode: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ApplyCreatorCodeWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Apply a creator code to a basket.
    ApiResponse<BasketResponse> response = apiInstance.ApplyCreatorCodeWithHttpInfo(token, basketIdent, applyCreatorCodeRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.ApplyCreatorCodeWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | The webstore identifier. |  |
| **basketIdent** | **string** | The basket identifier. |  |
| **applyCreatorCodeRequest** | [**ApplyCreatorCodeRequest?**](ApplyCreatorCodeRequest?.md) | Provide a &#x60;creator_code&#x60; to apply to the basket. | [optional]  |

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

<a id="applygiftcard"></a>
# **ApplyGiftCard**
> BasketResponse ApplyGiftCard (string token, string basketIdent, GiftCard? giftCard = null)

Apply a gift card to a basket.

Applies a creator code to a basket.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class ApplyGiftCardExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api";
            var apiInstance = new HeadlessApi(config);
            var token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb;  // string | The webstore identifier.
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.
            var giftCard = new GiftCard?(); // GiftCard? | Provide a `card_number` to apply to the basket. (optional) 

            try
            {
                // Apply a gift card to a basket.
                BasketResponse result = apiInstance.ApplyGiftCard(token, basketIdent, giftCard);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.ApplyGiftCard: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ApplyGiftCardWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Apply a gift card to a basket.
    ApiResponse<BasketResponse> response = apiInstance.ApplyGiftCardWithHttpInfo(token, basketIdent, giftCard);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.ApplyGiftCardWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | The webstore identifier. |  |
| **basketIdent** | **string** | The basket identifier. |  |
| **giftCard** | [**GiftCard?**](GiftCard?.md) | Provide a &#x60;card_number&#x60; to apply to the basket. | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createbasket"></a>
# **CreateBasket**
> BasketResponse CreateBasket (string token, CreateBasketRequest? createBasketRequest = null)

Create a new basket

Creates a new basket for use during checkout.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class CreateBasketExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api";
            var apiInstance = new HeadlessApi(config);
            var token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb;  // string | The webstore identifier.
            var createBasketRequest = new CreateBasketRequest?(); // CreateBasketRequest? |  (optional) 

            try
            {
                // Create a new basket
                BasketResponse result = apiInstance.CreateBasket(token, createBasketRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.CreateBasket: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateBasketWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a new basket
    ApiResponse<BasketResponse> response = apiInstance.CreateBasketWithHttpInfo(token, createBasketRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.CreateBasketWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | The webstore identifier. |  |
| **createBasketRequest** | [**CreateBasketRequest?**](CreateBasketRequest?.md) |  | [optional]  |

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
| **200** | Successful response returns the basket information. |  -  |
| **422** | The provided webstore ID is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getallcategories"></a>
# **GetAllCategories**
> CategoryResponse GetAllCategories (string token)

Gets all categories available in the webstore.

Gets all categories from a webstore. This does not include package information. To include package information, add `?includePackages=1` to the URL.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class GetAllCategoriesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api";
            var apiInstance = new HeadlessApi(config);
            var token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb;  // string | The webstore identifier.

            try
            {
                // Gets all categories available in the webstore.
                CategoryResponse result = apiInstance.GetAllCategories(token);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetAllCategories: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAllCategoriesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Gets all categories available in the webstore.
    ApiResponse<CategoryResponse> response = apiInstance.GetAllCategoriesWithHttpInfo(token);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetAllCategoriesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | The webstore identifier. |  |

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
| **200** | Successful response returns a list of category information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getallcategoriesincludingpackages"></a>
# **GetAllCategoriesIncludingPackages**
> CategoryResponse GetAllCategoriesIncludingPackages (string token)

Gets a store's categories including all package information with them.

Gets all categories from a webstore including packages.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class GetAllCategoriesIncludingPackagesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api";
            var apiInstance = new HeadlessApi(config);
            var token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb;  // string | The webstore identifier.

            try
            {
                // Gets a store's categories including all package information with them.
                CategoryResponse result = apiInstance.GetAllCategoriesIncludingPackages(token);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetAllCategoriesIncludingPackages: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAllCategoriesIncludingPackagesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Gets a store's categories including all package information with them.
    ApiResponse<CategoryResponse> response = apiInstance.GetAllCategoriesIncludingPackagesWithHttpInfo(token);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetAllCategoriesIncludingPackagesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | The webstore identifier. |  |

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
| **200** | Successful response returns a list of category information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getallpackages"></a>
# **GetAllPackages**
> PackageResponse GetAllPackages (string token)

Fetch all packages from a webstore

Gets all packages from a webstore.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class GetAllPackagesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api";
            var apiInstance = new HeadlessApi(config);
            var token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb;  // string | The webstore identifier.

            try
            {
                // Fetch all packages from a webstore
                PackageResponse result = apiInstance.GetAllPackages(token);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetAllPackages: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAllPackagesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Fetch all packages from a webstore
    ApiResponse<PackageResponse> response = apiInstance.GetAllPackagesWithHttpInfo(token);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetAllPackagesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | The webstore identifier. |  |

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
| **200** | Successful response returns a list of package information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getallpackageswithauthedip"></a>
# **GetAllPackagesWithAuthedIP**
> PackageResponse GetAllPackagesWithAuthedIP (string token, string ipAddress)

Fetch a package from a webstore by its identifier

Gets all packages from a webstore.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class GetAllPackagesWithAuthedIPExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api";
            var apiInstance = new HeadlessApi(config);
            var token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb;  // string | The webstore identifier.
            var ipAddress = 127.0.0.1;  // string | An IP address can be provided with authenticated requests.

            try
            {
                // Fetch a package from a webstore by its identifier
                PackageResponse result = apiInstance.GetAllPackagesWithAuthedIP(token, ipAddress);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetAllPackagesWithAuthedIP: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAllPackagesWithAuthedIPWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Fetch a package from a webstore by its identifier
    ApiResponse<PackageResponse> response = apiInstance.GetAllPackagesWithAuthedIPWithHttpInfo(token, ipAddress);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetAllPackagesWithAuthedIPWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | The webstore identifier. |  |
| **ipAddress** | **string** | An IP address can be provided with authenticated requests. |  |

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
| **200** | Successful response returns a list of package information. |  -  |
| **422** | The provided request is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getallpackageswithauthedipandbasket"></a>
# **GetAllPackagesWithAuthedIPAndBasket**
> List&lt;PackageResponse&gt; GetAllPackagesWithAuthedIPAndBasket (string token, string basketIdent, string ipAddress)

Fetch a package from a webstore by its identifier

Gets all packages from a webstore.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class GetAllPackagesWithAuthedIPAndBasketExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api";
            var apiInstance = new HeadlessApi(config);
            var token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb;  // string | The webstore identifier.
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.
            var ipAddress = 127.0.0.1;  // string | An IP address can be provided with authenticated requests.

            try
            {
                // Fetch a package from a webstore by its identifier
                List<PackageResponse> result = apiInstance.GetAllPackagesWithAuthedIPAndBasket(token, basketIdent, ipAddress);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetAllPackagesWithAuthedIPAndBasket: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAllPackagesWithAuthedIPAndBasketWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Fetch a package from a webstore by its identifier
    ApiResponse<List<PackageResponse>> response = apiInstance.GetAllPackagesWithAuthedIPAndBasketWithHttpInfo(token, basketIdent, ipAddress);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetAllPackagesWithAuthedIPAndBasketWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | The webstore identifier. |  |
| **basketIdent** | **string** | The basket identifier. |  |
| **ipAddress** | **string** | An IP address can be provided with authenticated requests. |  |

### Return type

[**List&lt;PackageResponse&gt;**](PackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response returns a list of package information. |  -  |
| **422** | The provided request is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getallpackageswithbasket"></a>
# **GetAllPackagesWithBasket**
> PackageResponse GetAllPackagesWithBasket (string token, string basketIdent)

Fetch a package from a webstore by its identifier

Gets all packages from a webstore.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class GetAllPackagesWithBasketExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api";
            var apiInstance = new HeadlessApi(config);
            var token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb;  // string | The webstore identifier.
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.

            try
            {
                // Fetch a package from a webstore by its identifier
                PackageResponse result = apiInstance.GetAllPackagesWithBasket(token, basketIdent);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetAllPackagesWithBasket: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAllPackagesWithBasketWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Fetch a package from a webstore by its identifier
    ApiResponse<PackageResponse> response = apiInstance.GetAllPackagesWithBasketWithHttpInfo(token, basketIdent);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetAllPackagesWithBasketWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | The webstore identifier. |  |
| **basketIdent** | **string** | The basket identifier. |  |

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
| **200** | Successful response returns a list of package information. |  -  |
| **422** | The provided request is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getbasketauthurl"></a>
# **GetBasketAuthUrl**
> BasketResponse GetBasketAuthUrl (string token, string basketIdent, string returnUrl)

Fetch a basket from a webstore by its identifier

Fetches a basket's auth URL.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class GetBasketAuthUrlExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api";
            var apiInstance = new HeadlessApi(config);
            var token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb;  // string | The webstore identifier.
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.
            var returnUrl = https://example.tebex.io/;  // string | The URL you would like to redirect the user to after successful basket authentication.

            try
            {
                // Fetch a basket from a webstore by its identifier
                BasketResponse result = apiInstance.GetBasketAuthUrl(token, basketIdent, returnUrl);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetBasketAuthUrl: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetBasketAuthUrlWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Fetch a basket from a webstore by its identifier
    ApiResponse<BasketResponse> response = apiInstance.GetBasketAuthUrlWithHttpInfo(token, basketIdent, returnUrl);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetBasketAuthUrlWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | The webstore identifier. |  |
| **basketIdent** | **string** | The basket identifier. |  |
| **returnUrl** | **string** | The URL you would like to redirect the user to after successful basket authentication. |  |

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
| **200** | Successful response returns the basket auth information. |  -  |
| **422** | The provided webstore ID or basket ID is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getbasketbyid"></a>
# **GetBasketById**
> BasketResponse GetBasketById (string token, string basketIdent)

Fetch a basket from a webstore by its identifier

Gets a basket associated with the provided identifier.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class GetBasketByIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api";
            var apiInstance = new HeadlessApi(config);
            var token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb;  // string | The webstore identifier.
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.

            try
            {
                // Fetch a basket from a webstore by its identifier
                BasketResponse result = apiInstance.GetBasketById(token, basketIdent);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetBasketById: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetBasketByIdWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Fetch a basket from a webstore by its identifier
    ApiResponse<BasketResponse> response = apiInstance.GetBasketByIdWithHttpInfo(token, basketIdent);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetBasketByIdWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | The webstore identifier. |  |
| **basketIdent** | **string** | The basket identifier. |  |

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
| **200** | Successful response returns the basket information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getcategorybyid"></a>
# **GetCategoryById**
> List&lt;CategoryResponse&gt; GetCategoryById (string token, string categoryId)

Gets information about a specific category

Gets information about a category and returns the packages in that category.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class GetCategoryByIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api";
            var apiInstance = new HeadlessApi(config);
            var token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb;  // string | The webstore identifier.
            var categoryId = 127244343;  // string | The ID of the category to fetch.

            try
            {
                // Gets information about a specific category
                List<CategoryResponse> result = apiInstance.GetCategoryById(token, categoryId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetCategoryById: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetCategoryByIdWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Gets information about a specific category
    ApiResponse<List<CategoryResponse>> response = apiInstance.GetCategoryByIdWithHttpInfo(token, categoryId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetCategoryByIdWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | The webstore identifier. |  |
| **categoryId** | **string** | The ID of the category to fetch. |  |

### Return type

[**List&lt;CategoryResponse&gt;**](CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response returns the category without package information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getcategoryincludingpackages"></a>
# **GetCategoryIncludingPackages**
> CategoryResponse GetCategoryIncludingPackages (string token, string categoryId)

Gets information about a specific category, including all the packages in the category

Gets information about a category and returns the packages in that category.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class GetCategoryIncludingPackagesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api";
            var apiInstance = new HeadlessApi(config);
            var token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb;  // string | The webstore identifier.
            var categoryId = 127244343;  // string | The ID of the category to fetch.

            try
            {
                // Gets information about a specific category, including all the packages in the category
                CategoryResponse result = apiInstance.GetCategoryIncludingPackages(token, categoryId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetCategoryIncludingPackages: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetCategoryIncludingPackagesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Gets information about a specific category, including all the packages in the category
    ApiResponse<CategoryResponse> response = apiInstance.GetCategoryIncludingPackagesWithHttpInfo(token, categoryId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetCategoryIncludingPackagesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | The webstore identifier. |  |
| **categoryId** | **string** | The ID of the category to fetch. |  |

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
| **200** | Successful response returns the category with package information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getpackagebyid"></a>
# **GetPackageById**
> PackageResponse GetPackageById (string token, decimal packageId)

Fetch a package from a webstore by its identifier

Gets a package from a webstore by ID.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class GetPackageByIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api";
            var apiInstance = new HeadlessApi(config);
            var token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb;  // string | The webstore identifier.
            var packageId = 1272441812;  // decimal | The package's ID.

            try
            {
                // Fetch a package from a webstore by its identifier
                PackageResponse result = apiInstance.GetPackageById(token, packageId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetPackageById: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetPackageByIdWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Fetch a package from a webstore by its identifier
    ApiResponse<PackageResponse> response = apiInstance.GetPackageByIdWithHttpInfo(token, packageId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetPackageByIdWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | The webstore identifier. |  |
| **packageId** | **decimal** | The package&#39;s ID. |  |

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
| **200** | Successful response returns the package information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getwebstorebyid"></a>
# **GetWebstoreById**
> WebstoreResponse GetWebstoreById (string token)

Fetch a webstore by its identifier

Gets the webstore associated with the provided identifier.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class GetWebstoreByIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api";
            var apiInstance = new HeadlessApi(config);
            var token = some-uuid;  // string | The webstore identifier.

            try
            {
                // Fetch a webstore by its identifier
                WebstoreResponse result = apiInstance.GetWebstoreById(token);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetWebstoreById: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetWebstoreByIdWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Fetch a webstore by its identifier
    ApiResponse<WebstoreResponse> response = apiInstance.GetWebstoreByIdWithHttpInfo(token);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetWebstoreByIdWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | The webstore identifier. |  |

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
| **200** | Successful response returns the webstore&#39;s information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="removebasketpackage"></a>
# **RemoveBasketPackage**
> Basket RemoveBasketPackage (string basketIdent, RemoveBasketPackageRequest? removeBasketPackageRequest = null)

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
            config.BasePath = "https://headless.tebex.io/api";
            var apiInstance = new HeadlessApi(config);
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.
            var removeBasketPackageRequest = new RemoveBasketPackageRequest?(); // RemoveBasketPackageRequest? |  (optional) 

            try
            {
                // Remove a package from a basket
                Basket result = apiInstance.RemoveBasketPackage(basketIdent, removeBasketPackageRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.RemoveBasketPackage: " + e.Message);
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
    ApiResponse<Basket> response = apiInstance.RemoveBasketPackageWithHttpInfo(basketIdent, removeBasketPackageRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.RemoveBasketPackageWithHttpInfo: " + e.Message);
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

[**Basket**](Basket.md)

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

<a id="removecoupon"></a>
# **RemoveCoupon**
> void RemoveCoupon (string token, string basketIdent)

Remove a coupon from the basket.

Removes a coupon code from a basket

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class RemoveCouponExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api";
            var apiInstance = new HeadlessApi(config);
            var token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb;  // string | The webstore identifier.
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.

            try
            {
                // Remove a coupon from the basket.
                apiInstance.RemoveCoupon(token, basketIdent);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.RemoveCoupon: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RemoveCouponWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Remove a coupon from the basket.
    apiInstance.RemoveCouponWithHttpInfo(token, basketIdent);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.RemoveCouponWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | The webstore identifier. |  |
| **basketIdent** | **string** | The basket identifier. |  |

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
| **200** | Successful response. |  -  |
| **422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="removecreatorcode"></a>
# **RemoveCreatorCode**
> void RemoveCreatorCode (string token, string basketIdent)

Remove a creator code from the basket.

Applies a creator code to a basket.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class RemoveCreatorCodeExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api";
            var apiInstance = new HeadlessApi(config);
            var token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb;  // string | The webstore identifier.
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.

            try
            {
                // Remove a creator code from the basket.
                apiInstance.RemoveCreatorCode(token, basketIdent);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.RemoveCreatorCode: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RemoveCreatorCodeWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Remove a creator code from the basket.
    apiInstance.RemoveCreatorCodeWithHttpInfo(token, basketIdent);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.RemoveCreatorCodeWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | The webstore identifier. |  |
| **basketIdent** | **string** | The basket identifier. |  |

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
| **200** | Creator code removed successfully. |  -  |
| **422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="removegiftcard"></a>
# **RemoveGiftCard**
> void RemoveGiftCard (string token, string basketIdent, RemoveGiftCardRequest? removeGiftCardRequest = null)

Remove a gift card from the basket.

Removes a gift card from the basket.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class RemoveGiftCardExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api";
            var apiInstance = new HeadlessApi(config);
            var token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb;  // string | The webstore identifier.
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.
            var removeGiftCardRequest = new RemoveGiftCardRequest?(); // RemoveGiftCardRequest? | Provide the `card_number` to remove from the basket. (optional) 

            try
            {
                // Remove a gift card from the basket.
                apiInstance.RemoveGiftCard(token, basketIdent, removeGiftCardRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.RemoveGiftCard: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RemoveGiftCardWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Remove a gift card from the basket.
    apiInstance.RemoveGiftCardWithHttpInfo(token, basketIdent, removeGiftCardRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.RemoveGiftCardWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | The webstore identifier. |  |
| **basketIdent** | **string** | The basket identifier. |  |
| **removeGiftCardRequest** | [**RemoveGiftCardRequest?**](RemoveGiftCardRequest?.md) | Provide the &#x60;card_number&#x60; to remove from the basket. | [optional]  |

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
| **200** | Gift card removed successfully. |  -  |
| **422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="updatepackagequantity"></a>
# **UpdatePackageQuantity**
> void UpdatePackageQuantity (string basketIdent, decimal packageId, UpdatePackageQuantityRequest? updatePackageQuantityRequest = null)

Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed.

Sets the quantity of the given item in the basket.

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
            config.BasePath = "https://headless.tebex.io/api";
            var apiInstance = new HeadlessApi(config);
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.
            var packageId = 6276316;  // decimal | The package identifier.
            var updatePackageQuantityRequest = new UpdatePackageQuantityRequest?(); // UpdatePackageQuantityRequest? |  (optional) 

            try
            {
                // Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed.
                apiInstance.UpdatePackageQuantity(basketIdent, packageId, updatePackageQuantityRequest);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.UpdatePackageQuantity: " + e.Message);
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
    // Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed.
    apiInstance.UpdatePackageQuantityWithHttpInfo(basketIdent, packageId, updatePackageQuantityRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.UpdatePackageQuantityWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **basketIdent** | **string** | The basket identifier. |  |
| **packageId** | **decimal** | The package identifier. |  |
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


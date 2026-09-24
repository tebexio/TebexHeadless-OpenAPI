# TebexHeadless.TebexHeadless.HeadlessApi

All URIs are relative to *https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**ApplyCoupon**](HeadlessApi.md#applycoupon) | **POST** /baskets/{basketIdent}/coupons | Apply a coupon |
| [**ApplyCreatorCode**](HeadlessApi.md#applycreatorcode) | **POST** /baskets/{basketIdent}/creator-codes | Apply a creator code |
| [**ApplyGiftCard**](HeadlessApi.md#applygiftcard) | **POST** /baskets/{basketIdent}/giftcards | Apply a gift card |
| [**CreateBasket**](HeadlessApi.md#createbasket) | **POST** /baskets | Create a new basket |
| [**CreateDynamicPackage**](HeadlessApi.md#createdynamicpackage) | **PUT** /baskets/{basketIdent}/dynamic-packages | Add packages to a dynamic category for a basket. |
| [**GetAllPackages**](HeadlessApi.md#getallpackages) | **GET** /packages | Get all packages |
| [**GetAllPackagesWithAuthedIP**](HeadlessApi.md#getallpackageswithauthedip) | **GET** /packages?ipAddress&#x3D;{ipAddress} | Get packages |
| [**GetAllPackagesWithAuthedIPAndBasket**](HeadlessApi.md#getallpackageswithauthedipandbasket) | **GET** /packages?ipAddress&#x3D;{ipAddress}&amp;basketIdent&#x3D;{basketIdent} | Get packages available for IP and basket |
| [**GetBasket**](HeadlessApi.md#getbasket) | **GET** /baskets/{basketIdent} | Get a basket |
| [**GetBasketAuthUrl**](HeadlessApi.md#getbasketauthurl) | **GET** /baskets/{basketIdent}/auth?returnUrl&#x3D;{returnUrl} | Get auth links for basket |
| [**GetCategories**](HeadlessApi.md#getcategories) | **GET** /categories | Get all categories |
| [**GetCategoriesIncludePackages**](HeadlessApi.md#getcategoriesincludepackages) | **GET** /categories?includePackages&#x3D;1 | Gets all categories and packages |
| [**GetCategory**](HeadlessApi.md#getcategory) | **GET** /categories/{categoryId} | Get specific category |
| [**GetCategoryIncludeDynamicPackages**](HeadlessApi.md#getcategoryincludedynamicpackages) | **GET** /categories/{categoryId}?includePackages&#x3D;1&amp;basketIdent&#x3D;{basketIdent} | Gets a specific category including packages, populating a dynamic category for the given basket. |
| [**GetCategoryIncludePackages**](HeadlessApi.md#getcategoryincludepackages) | **GET** /categories/{categoryId}?includePackages&#x3D;1 | Get a category with all packages |
| [**GetCustomPages**](HeadlessApi.md#getcustompages) | **GET** /pages | Get custom pages defined for the webstore. |
| [**GetDynamicCategories**](HeadlessApi.md#getdynamiccategories) | **GET** /categories?includePackages&#x3D;1&amp;basketIdent&#x3D;{basketIdent} | Get Dynamic Categories |
| [**GetPackage**](HeadlessApi.md#getpackage) | **GET** /packages/{packageId} | Get package |
| [**GetPackagesForBasket**](HeadlessApi.md#getpackagesforbasket) | **GET** /packages?basketIdent&#x3D;{basketIdent} | Get packages available for basket |
| [**GetSidebar**](HeadlessApi.md#getsidebar) | **GET** /sidebar | Retrieves the available sidebar modules. |
| [**GetUserTieredCategories**](HeadlessApi.md#getusertieredcategories) | **GET** /categories?usernameId&#x3D;{usernameId}&amp;includePackages&#x3D;1 | Get user&#39;s tiered categories |
| [**GetWebstore**](HeadlessApi.md#getwebstore) | **GET** / | Get the webstore&#39;s information |
| [**RemoveCoupon**](HeadlessApi.md#removecoupon) | **POST** /baskets/{basketIdent}/coupons/remove | Remove a coupon from the basket. |
| [**RemoveCreatorCode**](HeadlessApi.md#removecreatorcode) | **POST** /baskets/{basketIdent}/creator-codes/remove | Removes the creator code from the basket. |
| [**RemoveGiftCard**](HeadlessApi.md#removegiftcard) | **POST** /baskets/{basketIdent}/giftcards/remove | Remove a gift card from the basket. |
| [**UpdateTier**](HeadlessApi.md#updatetier) | **PATCH** /tiers/{tierId} | Update user&#39;s tier to a new package |

<a id="applycoupon"></a>
# **ApplyCoupon**
> ApplyCoupon200Response ApplyCoupon (string basketIdent, ApplyCouponRequest? applyCouponRequest = null)

Apply a coupon

Applies a coupon to a basket.

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
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new HeadlessApi(config);
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.
            var applyCouponRequest = new ApplyCouponRequest?(); // ApplyCouponRequest? | Provide a `coupon_code` to apply to the basket. (optional) 

            try
            {
                // Apply a coupon
                ApplyCoupon200Response result = apiInstance.ApplyCoupon(basketIdent, applyCouponRequest);
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
    // Apply a coupon
    ApiResponse<ApplyCoupon200Response> response = apiInstance.ApplyCouponWithHttpInfo(basketIdent, applyCouponRequest);
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
| **basketIdent** | **string** | The basket identifier. |  |
| **applyCouponRequest** | [**ApplyCouponRequest?**](ApplyCouponRequest?.md) | Provide a &#x60;coupon_code&#x60; to apply to the basket. | [optional]  |

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
| **200** | Successful response returns a success message. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="applycreatorcode"></a>
# **ApplyCreatorCode**
> ApplyCreatorCode200Response ApplyCreatorCode (string basketIdent, ApplyCreatorCodeRequest? applyCreatorCodeRequest = null)

Apply a creator code

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
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new HeadlessApi(config);
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.
            var applyCreatorCodeRequest = new ApplyCreatorCodeRequest?(); // ApplyCreatorCodeRequest? | Provide a `creator_code` to apply to the basket. (optional) 

            try
            {
                // Apply a creator code
                ApplyCreatorCode200Response result = apiInstance.ApplyCreatorCode(basketIdent, applyCreatorCodeRequest);
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
    // Apply a creator code
    ApiResponse<ApplyCreatorCode200Response> response = apiInstance.ApplyCreatorCodeWithHttpInfo(basketIdent, applyCreatorCodeRequest);
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
| **basketIdent** | **string** | The basket identifier. |  |
| **applyCreatorCodeRequest** | [**ApplyCreatorCodeRequest?**](ApplyCreatorCodeRequest?.md) | Provide a &#x60;creator_code&#x60; to apply to the basket. | [optional]  |

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
| **200** | Successful response returns a success object |  -  |
| **422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="applygiftcard"></a>
# **ApplyGiftCard**
> ApplyGiftCard200Response ApplyGiftCard (string basketIdent, GiftCard? giftCard = null)

Apply a gift card

Applies a gift card to the basket.

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
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new HeadlessApi(config);
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.
            var giftCard = new GiftCard?(); // GiftCard? | Provide a `card_number` to apply to the basket. (optional) 

            try
            {
                // Apply a gift card
                ApplyGiftCard200Response result = apiInstance.ApplyGiftCard(basketIdent, giftCard);
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
    // Apply a gift card
    ApiResponse<ApplyGiftCard200Response> response = apiInstance.ApplyGiftCardWithHttpInfo(basketIdent, giftCard);
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
| **basketIdent** | **string** | The basket identifier. |  |
| **giftCard** | [**GiftCard?**](GiftCard?.md) | Provide a &#x60;card_number&#x60; to apply to the basket. | [optional]  |

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
| **200** | Successful response returns a success message. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="createbasket"></a>
# **CreateBasket**
> BasketResponse CreateBasket (CreateBasketRequest? createBasketRequest = null)

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
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new HeadlessApi(config);
            var createBasketRequest = new CreateBasketRequest?(); // CreateBasketRequest? |  (optional) 

            try
            {
                // Create a new basket
                BasketResponse result = apiInstance.CreateBasket(createBasketRequest);
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
    ApiResponse<BasketResponse> response = apiInstance.CreateBasketWithHttpInfo(createBasketRequest);
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

<a id="createdynamicpackage"></a>
# **CreateDynamicPackage**
> DynamicPackagesResponse CreateDynamicPackage (string basketIdent, DynamicPackagesRequest? dynamicPackagesRequest = null)

Add packages to a dynamic category for a basket.

Populates a dynamic category with custom packages for the given basket. Dynamic categories are created in the creator panel with the type `dynamic`, and are typically populated in response to a `basket.authenticated` webhook.  Once created, the packages can be fetched using the category endpoints with both `includePackages=1` and `basketIdent` provided.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class CreateDynamicPackageExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new HeadlessApi(config);
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.
            var dynamicPackagesRequest = new DynamicPackagesRequest?(); // DynamicPackagesRequest? |  (optional) 

            try
            {
                // Add packages to a dynamic category for a basket.
                DynamicPackagesResponse result = apiInstance.CreateDynamicPackage(basketIdent, dynamicPackagesRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.CreateDynamicPackage: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateDynamicPackageWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Add packages to a dynamic category for a basket.
    ApiResponse<DynamicPackagesResponse> response = apiInstance.CreateDynamicPackageWithHttpInfo(basketIdent, dynamicPackagesRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.CreateDynamicPackageWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **basketIdent** | **string** | The basket identifier. |  |
| **dynamicPackagesRequest** | [**DynamicPackagesRequest?**](DynamicPackagesRequest?.md) |  | [optional]  |

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
| **200** | Successful response confirms the dynamic packages were created. |  -  |
| **422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getallpackages"></a>
# **GetAllPackages**
> PackageResponse GetAllPackages ()

Get all packages

Gets all packages from a webstore.  Note: this endpoint does not support packages belonging to dynamic categories. Use the category endpoints with `includePackages=1` and `basketIdent` to fetch dynamic packages.

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
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new HeadlessApi(config);

            try
            {
                // Get all packages
                PackageResponse result = apiInstance.GetAllPackages();
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
    // Get all packages
    ApiResponse<PackageResponse> response = apiInstance.GetAllPackagesWithHttpInfo();
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
| **200** | Successful response returns a list of package information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getallpackageswithauthedip"></a>
# **GetAllPackagesWithAuthedIP**
> PackageResponse GetAllPackagesWithAuthedIP (string ipAddress)

Get packages

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
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            // Configure HTTP basic authorization: basicAuth
            config.Username = "YOUR_USERNAME";
            config.Password = "YOUR_PASSWORD";

            var apiInstance = new HeadlessApi(config);
            var ipAddress = 127.0.0.1;  // string | An IP address can be provided with authenticated requests

            try
            {
                // Get packages
                PackageResponse result = apiInstance.GetAllPackagesWithAuthedIP(ipAddress);
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
    // Get packages
    ApiResponse<PackageResponse> response = apiInstance.GetAllPackagesWithAuthedIPWithHttpInfo(ipAddress);
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
| **ipAddress** | **string** | An IP address can be provided with authenticated requests |  |

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
| **200** | Successful response returns a list of package information. |  -  |
| **422** | The provided request is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getallpackageswithauthedipandbasket"></a>
# **GetAllPackagesWithAuthedIPAndBasket**
> PackageResponse GetAllPackagesWithAuthedIPAndBasket (string basketIdent, string ipAddress)

Get packages available for IP and basket

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
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            // Configure HTTP basic authorization: basicAuth
            config.Username = "YOUR_USERNAME";
            config.Password = "YOUR_PASSWORD";

            var apiInstance = new HeadlessApi(config);
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.
            var ipAddress = 127.0.0.1;  // string | An IP address can be provided with authenticated requests.

            try
            {
                // Get packages available for IP and basket
                PackageResponse result = apiInstance.GetAllPackagesWithAuthedIPAndBasket(basketIdent, ipAddress);
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
    // Get packages available for IP and basket
    ApiResponse<PackageResponse> response = apiInstance.GetAllPackagesWithAuthedIPAndBasketWithHttpInfo(basketIdent, ipAddress);
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
| **basketIdent** | **string** | The basket identifier. |  |
| **ipAddress** | **string** | An IP address can be provided with authenticated requests. |  |

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
| **200** | Successful response returns a list of package information. |  -  |
| **422** | The provided request is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getbasket"></a>
# **GetBasket**
> BasketResponse GetBasket (string basketIdent)

Get a basket

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
    public class GetBasketExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new HeadlessApi(config);
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.

            try
            {
                // Get a basket
                BasketResponse result = apiInstance.GetBasket(basketIdent);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetBasket: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetBasketWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get a basket
    ApiResponse<BasketResponse> response = apiInstance.GetBasketWithHttpInfo(basketIdent);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetBasketWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
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

<a id="getbasketauthurl"></a>
# **GetBasketAuthUrl**
> List&lt;BasketAuthResponseInner&gt; GetBasketAuthUrl (string basketIdent, string returnUrl)

Get auth links for basket

Fetches a basket's auth URL. The player should be directed here in order for them to authorize their account. When complete, they will be returned to the provided `returnUrl` and the basket will be authorized from that moment onwards.

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
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new HeadlessApi(config);
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.
            var returnUrl = https://example.tebex.io/;  // string | The URL you would like to redirect the user to after successful basket authentication.

            try
            {
                // Get auth links for basket
                List<BasketAuthResponseInner> result = apiInstance.GetBasketAuthUrl(basketIdent, returnUrl);
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
    // Get auth links for basket
    ApiResponse<List<BasketAuthResponseInner>> response = apiInstance.GetBasketAuthUrlWithHttpInfo(basketIdent, returnUrl);
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
| **basketIdent** | **string** | The basket identifier. |  |
| **returnUrl** | **string** | The URL you would like to redirect the user to after successful basket authentication. |  |

### Return type

[**List&lt;BasketAuthResponseInner&gt;**](BasketAuthResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response returns the auth provider options and URLs of the sign-in link. |  -  |
| **422** | The provided webstore ID or basket ID is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getcategories"></a>
# **GetCategories**
> CategoryResponse GetCategories ()

Get all categories

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
    public class GetCategoriesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new HeadlessApi(config);

            try
            {
                // Get all categories
                CategoryResponse result = apiInstance.GetCategories();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetCategories: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetCategoriesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get all categories
    ApiResponse<CategoryResponse> response = apiInstance.GetCategoriesWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetCategoriesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
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
| **200** | Successful response returns a list of category information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getcategoriesincludepackages"></a>
# **GetCategoriesIncludePackages**
> CategoryResponse GetCategoriesIncludePackages ()

Gets all categories and packages

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
    public class GetCategoriesIncludePackagesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new HeadlessApi(config);

            try
            {
                // Gets all categories and packages
                CategoryResponse result = apiInstance.GetCategoriesIncludePackages();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetCategoriesIncludePackages: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetCategoriesIncludePackagesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Gets all categories and packages
    ApiResponse<CategoryResponse> response = apiInstance.GetCategoriesIncludePackagesWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetCategoriesIncludePackagesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
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
| **200** | Successful response returns a list of category information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getcategory"></a>
# **GetCategory**
> SingleCategoryResponse GetCategory (string categoryId)

Get specific category

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
    public class GetCategoryExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new HeadlessApi(config);
            var categoryId = 127244343;  // string | The ID or slug of the category to fetch.

            try
            {
                // Get specific category
                SingleCategoryResponse result = apiInstance.GetCategory(categoryId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetCategory: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetCategoryWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get specific category
    ApiResponse<SingleCategoryResponse> response = apiInstance.GetCategoryWithHttpInfo(categoryId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetCategoryWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **categoryId** | **string** | The ID or slug of the category to fetch. |  |

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
| **200** | Successful response returns the category without package information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getcategoryincludedynamicpackages"></a>
# **GetCategoryIncludeDynamicPackages**
> SingleCategoryResponse GetCategoryIncludeDynamicPackages (string categoryId, string basketIdent)

Gets a specific category including packages, populating a dynamic category for the given basket.

Gets information about a category and returns the packages in that category. When the category is dynamic and `basketIdent` is provided, the category is populated with the packages associated with that basket.  If a basket identifier is not provided, a dynamic category will be empty as the basket is required to relate packages to the category.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class GetCategoryIncludeDynamicPackagesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new HeadlessApi(config);
            var categoryId = 1234;  // string | The ID or slug of the category to fetch.
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.

            try
            {
                // Gets a specific category including packages, populating a dynamic category for the given basket.
                SingleCategoryResponse result = apiInstance.GetCategoryIncludeDynamicPackages(categoryId, basketIdent);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetCategoryIncludeDynamicPackages: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetCategoryIncludeDynamicPackagesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Gets a specific category including packages, populating a dynamic category for the given basket.
    ApiResponse<SingleCategoryResponse> response = apiInstance.GetCategoryIncludeDynamicPackagesWithHttpInfo(categoryId, basketIdent);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetCategoryIncludeDynamicPackagesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **categoryId** | **string** | The ID or slug of the category to fetch. |  |
| **basketIdent** | **string** | The basket identifier. |  |

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
| **200** | Successful response returns the category with package information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getcategoryincludepackages"></a>
# **GetCategoryIncludePackages**
> SingleCategoryResponse GetCategoryIncludePackages (string categoryId)

Get a category with all packages

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
    public class GetCategoryIncludePackagesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new HeadlessApi(config);
            var categoryId = 127244343;  // string | The ID or slug of the category to fetch.

            try
            {
                // Get a category with all packages
                SingleCategoryResponse result = apiInstance.GetCategoryIncludePackages(categoryId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetCategoryIncludePackages: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetCategoryIncludePackagesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get a category with all packages
    ApiResponse<SingleCategoryResponse> response = apiInstance.GetCategoryIncludePackagesWithHttpInfo(categoryId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetCategoryIncludePackagesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **categoryId** | **string** | The ID or slug of the category to fetch. |  |

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
| **200** | Successful response returns the category with package information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getcustompages"></a>
# **GetCustomPages**
> CMSPagesResponse GetCustomPages ()

Get custom pages defined for the webstore.

Gets a list of custom pages associated with the webstore. These contain a `content` variable with the HTML content of the page.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class GetCustomPagesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new HeadlessApi(config);

            try
            {
                // Get custom pages defined for the webstore.
                CMSPagesResponse result = apiInstance.GetCustomPages();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetCustomPages: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetCustomPagesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get custom pages defined for the webstore.
    ApiResponse<CMSPagesResponse> response = apiInstance.GetCustomPagesWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetCustomPagesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
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
| **200** | Successful response returns the webstore&#39;s pages. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getdynamiccategories"></a>
# **GetDynamicCategories**
> CategoryResponse GetDynamicCategories (string basketIdent)

Get Dynamic Categories

Gets all categories from a webstore including packages. When `basketIdent` is provided, dynamic categories are populated with the packages associated with that basket.  If a basket identifier is not provided, dynamic categories will be empty as the basket is required to relate packages to the category.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class GetDynamicCategoriesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new HeadlessApi(config);
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.

            try
            {
                // Get Dynamic Categories
                CategoryResponse result = apiInstance.GetDynamicCategories(basketIdent);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetDynamicCategories: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetDynamicCategoriesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get Dynamic Categories
    ApiResponse<CategoryResponse> response = apiInstance.GetDynamicCategoriesWithHttpInfo(basketIdent);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetDynamicCategoriesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **basketIdent** | **string** | The basket identifier. |  |

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

<a id="getpackage"></a>
# **GetPackage**
> SinglePackageResponse GetPackage (string packageId)

Get package

Gets a package from a webstore by its ID or slug.  Note: this endpoint does not support packages belonging to dynamic categories. Use the category endpoints with `includePackages=1` and `basketIdent` to fetch dynamic packages.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class GetPackageExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new HeadlessApi(config);
            var packageId = 1272441812;  // string | The package's ID or slug.

            try
            {
                // Get package
                SinglePackageResponse result = apiInstance.GetPackage(packageId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetPackage: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetPackageWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get package
    ApiResponse<SinglePackageResponse> response = apiInstance.GetPackageWithHttpInfo(packageId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetPackageWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **packageId** | **string** | The package&#39;s ID or slug. |  |

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
| **200** | Successful response returns the package information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getpackagesforbasket"></a>
# **GetPackagesForBasket**
> PackageResponse GetPackagesForBasket (string basketIdent)

Get packages available for basket

Gets all packages available to the provided basket.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class GetPackagesForBasketExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new HeadlessApi(config);
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.

            try
            {
                // Get packages available for basket
                PackageResponse result = apiInstance.GetPackagesForBasket(basketIdent);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetPackagesForBasket: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetPackagesForBasketWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get packages available for basket
    ApiResponse<PackageResponse> response = apiInstance.GetPackagesForBasketWithHttpInfo(basketIdent);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetPackagesForBasketWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
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

<a id="getsidebar"></a>
# **GetSidebar**
> ModulesResponse GetSidebar (string token)

Retrieves the available sidebar modules.

Retrieves the available sidebar modules configured for the store.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class GetSidebarExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new HeadlessApi(config);
            var token = some-uuid;  // string | The webstore identifier.

            try
            {
                // Retrieves the available sidebar modules.
                ModulesResponse result = apiInstance.GetSidebar(token);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetSidebar: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetSidebarWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Retrieves the available sidebar modules.
    ApiResponse<ModulesResponse> response = apiInstance.GetSidebarWithHttpInfo(token);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetSidebarWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **token** | **string** | The webstore identifier. |  |

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
| **200** | Successful response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getusertieredcategories"></a>
# **GetUserTieredCategories**
> CategoryResponse GetUserTieredCategories (int usernameId)

Get user's tiered categories

Gets all categories from the webstore, returning active tier information for the given player.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class GetUserTieredCategoriesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            // Configure HTTP basic authorization: basicAuth
            config.Username = "YOUR_USERNAME";
            config.Password = "YOUR_PASSWORD";

            var apiInstance = new HeadlessApi(config);
            var usernameId = 76561198042467022;  // int | 

            try
            {
                // Get user's tiered categories
                CategoryResponse result = apiInstance.GetUserTieredCategories(usernameId);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetUserTieredCategories: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetUserTieredCategoriesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get user's tiered categories
    ApiResponse<CategoryResponse> response = apiInstance.GetUserTieredCategoriesWithHttpInfo(usernameId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetUserTieredCategoriesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **usernameId** | **int** |  |  |

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
| **200** | Successful response returns a list of category information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getwebstore"></a>
# **GetWebstore**
> WebstoreResponse GetWebstore ()

Get the webstore's information

Gets the webstore associated with the provided token

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class GetWebstoreExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new HeadlessApi(config);

            try
            {
                // Get the webstore's information
                WebstoreResponse result = apiInstance.GetWebstore();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.GetWebstore: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetWebstoreWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get the webstore's information
    ApiResponse<WebstoreResponse> response = apiInstance.GetWebstoreWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.GetWebstoreWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
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
| **200** | Successful response returns the webstore&#39;s information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="removecoupon"></a>
# **RemoveCoupon**
> void RemoveCoupon (string basketIdent, ApplyCouponRequest? applyCouponRequest = null)

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
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new HeadlessApi(config);
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.
            var applyCouponRequest = new ApplyCouponRequest?(); // ApplyCouponRequest? | Provide a `coupon_code` to remove from the basket. (optional) 

            try
            {
                // Remove a coupon from the basket.
                apiInstance.RemoveCoupon(basketIdent, applyCouponRequest);
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
    apiInstance.RemoveCouponWithHttpInfo(basketIdent, applyCouponRequest);
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
| **basketIdent** | **string** | The basket identifier. |  |
| **applyCouponRequest** | [**ApplyCouponRequest?**](ApplyCouponRequest?.md) | Provide a &#x60;coupon_code&#x60; to remove from the basket. | [optional]  |

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

<a id="removecreatorcode"></a>
# **RemoveCreatorCode**
> void RemoveCreatorCode (string basketIdent)

Removes the creator code from the basket.

Removes the creator code from the basket.

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
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new HeadlessApi(config);
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.

            try
            {
                // Removes the creator code from the basket.
                apiInstance.RemoveCreatorCode(basketIdent);
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
    // Removes the creator code from the basket.
    apiInstance.RemoveCreatorCodeWithHttpInfo(basketIdent);
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
> void RemoveGiftCard (string basketIdent, RemoveGiftCardRequest? removeGiftCardRequest = null)

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
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            var apiInstance = new HeadlessApi(config);
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.
            var removeGiftCardRequest = new RemoveGiftCardRequest?(); // RemoveGiftCardRequest? | Provide the `card_number` to remove from the basket. (optional) 

            try
            {
                // Remove a gift card from the basket.
                apiInstance.RemoveGiftCard(basketIdent, removeGiftCardRequest);
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
    apiInstance.RemoveGiftCardWithHttpInfo(basketIdent, removeGiftCardRequest);
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

<a id="updatetier"></a>
# **UpdateTier**
> UpdateTierResponse UpdateTier (int tierId, UpdateTierRequest? updateTierRequest = null)

Update user's tier to a new package

Updates a tier to a new package. A recurring payment updated webhook is sent when an update is successful.

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class UpdateTierExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN";
            // Configure HTTP basic authorization: basicAuth
            config.Username = "YOUR_USERNAME";
            config.Password = "YOUR_PASSWORD";

            var apiInstance = new HeadlessApi(config);
            var tierId = 6276316;  // int | The tier identifier
            var updateTierRequest = new UpdateTierRequest?(); // UpdateTierRequest? |  (optional) 

            try
            {
                // Update user's tier to a new package
                UpdateTierResponse result = apiInstance.UpdateTier(tierId, updateTierRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling HeadlessApi.UpdateTier: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateTierWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update user's tier to a new package
    ApiResponse<UpdateTierResponse> response = apiInstance.UpdateTierWithHttpInfo(tierId, updateTierRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling HeadlessApi.UpdateTierWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **tierId** | **int** | The tier identifier |  |
| **updateTierRequest** | [**UpdateTierRequest?**](UpdateTierRequest?.md) |  | [optional]  |

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
| **200** | Successful response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


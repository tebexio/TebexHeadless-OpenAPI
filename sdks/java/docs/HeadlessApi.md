# HeadlessApi

All URIs are relative to *https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**applyCoupon**](HeadlessApi.md#applyCoupon) | **POST** /baskets/{basketIdent}/coupons | Apply a coupon |
| [**applyCreatorCode**](HeadlessApi.md#applyCreatorCode) | **POST** /baskets/{basketIdent}/creator-codes | Apply a creator code |
| [**applyGiftCard**](HeadlessApi.md#applyGiftCard) | **POST** /baskets/{basketIdent}/giftcards | Apply a gift card |
| [**createBasket**](HeadlessApi.md#createBasket) | **POST** /baskets | Create a new basket |
| [**createDynamicPackage**](HeadlessApi.md#createDynamicPackage) | **PUT** /baskets/{basketIdent}/dynamic-packages | Add packages to a dynamic category for a basket. |
| [**getAllPackages**](HeadlessApi.md#getAllPackages) | **GET** /packages | Get all packages |
| [**getAllPackagesWithAuthedIP**](HeadlessApi.md#getAllPackagesWithAuthedIP) | **GET** /packages?ipAddress&#x3D;{ipAddress} | Get packages |
| [**getAllPackagesWithAuthedIPAndBasket**](HeadlessApi.md#getAllPackagesWithAuthedIPAndBasket) | **GET** /packages?ipAddress&#x3D;{ipAddress}&amp;basketIdent&#x3D;{basketIdent} | Get packages available for IP and basket |
| [**getBasket**](HeadlessApi.md#getBasket) | **GET** /baskets/{basketIdent} | Get a basket |
| [**getBasketAuthUrl**](HeadlessApi.md#getBasketAuthUrl) | **GET** /baskets/{basketIdent}/auth?returnUrl&#x3D;{returnUrl} | Get auth links for basket |
| [**getCategories**](HeadlessApi.md#getCategories) | **GET** /categories | Get all categories |
| [**getCategoriesIncludePackages**](HeadlessApi.md#getCategoriesIncludePackages) | **GET** /categories?includePackages&#x3D;1 | Gets all categories and packages |
| [**getCategory**](HeadlessApi.md#getCategory) | **GET** /categories/{categoryId} | Get specific category |
| [**getCategoryIncludeDynamicPackages**](HeadlessApi.md#getCategoryIncludeDynamicPackages) | **GET** /categories/{categoryId}?includePackages&#x3D;1&amp;basketIdent&#x3D;{basketIdent} | Gets a specific category including packages, populating a dynamic category for the given basket. |
| [**getCategoryIncludePackages**](HeadlessApi.md#getCategoryIncludePackages) | **GET** /categories/{categoryId}?includePackages&#x3D;1 | Get a category with all packages |
| [**getCustomPages**](HeadlessApi.md#getCustomPages) | **GET** /pages | Get custom pages defined for the webstore. |
| [**getDynamicCategories**](HeadlessApi.md#getDynamicCategories) | **GET** /categories?includePackages&#x3D;1&amp;basketIdent&#x3D;{basketIdent} | Get Dynamic Categories |
| [**getPackage**](HeadlessApi.md#getPackage) | **GET** /packages/{packageId} | Get package |
| [**getPackagesForBasket**](HeadlessApi.md#getPackagesForBasket) | **GET** /packages?basketIdent&#x3D;{basketIdent} | Get packages available for basket |
| [**getSidebar**](HeadlessApi.md#getSidebar) | **GET** /sidebar | Retrieves the available sidebar modules. |
| [**getUserTieredCategories**](HeadlessApi.md#getUserTieredCategories) | **GET** /categories?usernameId&#x3D;{usernameId}&amp;includePackages&#x3D;1 | Get user&#39;s tiered categories |
| [**getWebstore**](HeadlessApi.md#getWebstore) | **GET** / | Get the webstore&#39;s information |
| [**removeCoupon**](HeadlessApi.md#removeCoupon) | **POST** /baskets/{basketIdent}/coupons/remove | Remove a coupon from the basket. |
| [**removeCreatorCode**](HeadlessApi.md#removeCreatorCode) | **POST** /baskets/{basketIdent}/creator-codes/remove | Removes the creator code from the basket. |
| [**removeGiftCard**](HeadlessApi.md#removeGiftCard) | **POST** /baskets/{basketIdent}/giftcards/remove | Remove a gift card from the basket. |
| [**updateTier**](HeadlessApi.md#updateTier) | **PATCH** /tiers/{tierId} | Update user&#39;s tier to a new package |


<a id="applyCoupon"></a>
# **applyCoupon**
> ApplyCoupon200Response applyCoupon(basketIdent, applyCouponRequest)

Apply a coupon

Applies a coupon to a basket.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    ApplyCouponRequest applyCouponRequest = new ApplyCouponRequest(); // ApplyCouponRequest | Provide a `coupon_code` to apply to the basket.
    try {
      ApplyCoupon200Response result = apiInstance.applyCoupon(basketIdent, applyCouponRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#applyCoupon");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | |
| **applyCouponRequest** | [**ApplyCouponRequest**](ApplyCouponRequest.md)| Provide a &#x60;coupon_code&#x60; to apply to the basket. | [optional] |

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

<a id="applyCreatorCode"></a>
# **applyCreatorCode**
> ApplyCreatorCode200Response applyCreatorCode(basketIdent, applyCreatorCodeRequest)

Apply a creator code

Applies a creator code to a basket.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    ApplyCreatorCodeRequest applyCreatorCodeRequest = new ApplyCreatorCodeRequest(); // ApplyCreatorCodeRequest | Provide a `creator_code` to apply to the basket.
    try {
      ApplyCreatorCode200Response result = apiInstance.applyCreatorCode(basketIdent, applyCreatorCodeRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#applyCreatorCode");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | |
| **applyCreatorCodeRequest** | [**ApplyCreatorCodeRequest**](ApplyCreatorCodeRequest.md)| Provide a &#x60;creator_code&#x60; to apply to the basket. | [optional] |

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

<a id="applyGiftCard"></a>
# **applyGiftCard**
> ApplyGiftCard200Response applyGiftCard(basketIdent, giftCard)

Apply a gift card

Applies a gift card to the basket.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    GiftCard giftCard = new GiftCard(); // GiftCard | Provide a `card_number` to apply to the basket.
    try {
      ApplyGiftCard200Response result = apiInstance.applyGiftCard(basketIdent, giftCard);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#applyGiftCard");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | |
| **giftCard** | [**GiftCard**](GiftCard.md)| Provide a &#x60;card_number&#x60; to apply to the basket. | [optional] |

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

<a id="createBasket"></a>
# **createBasket**
> BasketResponse createBasket(createBasketRequest)

Create a new basket

Creates a new basket for use during checkout.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    CreateBasketRequest createBasketRequest = new CreateBasketRequest(); // CreateBasketRequest | 
    try {
      BasketResponse result = apiInstance.createBasket(createBasketRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#createBasket");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createBasketRequest** | [**CreateBasketRequest**](CreateBasketRequest.md)|  | [optional] |

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

<a id="createDynamicPackage"></a>
# **createDynamicPackage**
> DynamicPackagesResponse createDynamicPackage(basketIdent, dynamicPackagesRequest)

Add packages to a dynamic category for a basket.

Populates a dynamic category with custom packages for the given basket. Dynamic categories are created in the creator panel with the type &#x60;dynamic&#x60;, and are typically populated in response to a &#x60;basket.authenticated&#x60; webhook.  Once created, the packages can be fetched using the category endpoints with both &#x60;includePackages&#x3D;1&#x60; and &#x60;basketIdent&#x60; provided.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    DynamicPackagesRequest dynamicPackagesRequest = new DynamicPackagesRequest(); // DynamicPackagesRequest | 
    try {
      DynamicPackagesResponse result = apiInstance.createDynamicPackage(basketIdent, dynamicPackagesRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#createDynamicPackage");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | |
| **dynamicPackagesRequest** | [**DynamicPackagesRequest**](DynamicPackagesRequest.md)|  | [optional] |

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

<a id="getAllPackages"></a>
# **getAllPackages**
> PackageResponse getAllPackages()

Get all packages

Gets all packages from a webstore.  Note: this endpoint does not support packages belonging to dynamic categories. Use the category endpoints with &#x60;includePackages&#x3D;1&#x60; and &#x60;basketIdent&#x60; to fetch dynamic packages.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    try {
      PackageResponse result = apiInstance.getAllPackages();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getAllPackages");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
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

<a id="getAllPackagesWithAuthedIP"></a>
# **getAllPackagesWithAuthedIP**
> PackageResponse getAllPackagesWithAuthedIP(ipAddress)

Get packages

Gets all packages from a webstore.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.auth.*;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");
    
    // Configure HTTP basic authorization: basicAuth
    HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
    basicAuth.setUsername("YOUR USERNAME");
    basicAuth.setPassword("YOUR PASSWORD");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String ipAddress = "127.0.0.1"; // String | An IP address can be provided with authenticated requests
    try {
      PackageResponse result = apiInstance.getAllPackagesWithAuthedIP(ipAddress);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getAllPackagesWithAuthedIP");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ipAddress** | **String**| An IP address can be provided with authenticated requests | |

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

<a id="getAllPackagesWithAuthedIPAndBasket"></a>
# **getAllPackagesWithAuthedIPAndBasket**
> PackageResponse getAllPackagesWithAuthedIPAndBasket(basketIdent, ipAddress)

Get packages available for IP and basket

Gets all packages from a webstore.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.auth.*;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");
    
    // Configure HTTP basic authorization: basicAuth
    HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
    basicAuth.setUsername("YOUR USERNAME");
    basicAuth.setPassword("YOUR PASSWORD");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    String ipAddress = "127.0.0.1"; // String | An IP address can be provided with authenticated requests.
    try {
      PackageResponse result = apiInstance.getAllPackagesWithAuthedIPAndBasket(basketIdent, ipAddress);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getAllPackagesWithAuthedIPAndBasket");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | |
| **ipAddress** | **String**| An IP address can be provided with authenticated requests. | |

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

<a id="getBasket"></a>
# **getBasket**
> BasketResponse getBasket(basketIdent)

Get a basket

Gets a basket associated with the provided identifier.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    try {
      BasketResponse result = apiInstance.getBasket(basketIdent);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getBasket");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | |

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

<a id="getBasketAuthUrl"></a>
# **getBasketAuthUrl**
> List&lt;BasketAuthResponseInner&gt; getBasketAuthUrl(basketIdent, returnUrl)

Get auth links for basket

Fetches a basket&#39;s auth URL. The player should be directed here in order for them to authorize their account. When complete, they will be returned to the provided &#x60;returnUrl&#x60; and the basket will be authorized from that moment onwards.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    String returnUrl = "https://example.tebex.io/"; // String | The URL you would like to redirect the user to after successful basket authentication.
    try {
      List<BasketAuthResponseInner> result = apiInstance.getBasketAuthUrl(basketIdent, returnUrl);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getBasketAuthUrl");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | |
| **returnUrl** | **String**| The URL you would like to redirect the user to after successful basket authentication. | |

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

<a id="getCategories"></a>
# **getCategories**
> CategoryResponse getCategories()

Get all categories

Gets all categories from a webstore. This does not include package information. To include package information, add &#x60;?includePackages&#x3D;1&#x60; to the URL.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    try {
      CategoryResponse result = apiInstance.getCategories();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getCategories");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
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

<a id="getCategoriesIncludePackages"></a>
# **getCategoriesIncludePackages**
> CategoryResponse getCategoriesIncludePackages()

Gets all categories and packages

Gets all categories from a webstore including packages.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    try {
      CategoryResponse result = apiInstance.getCategoriesIncludePackages();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getCategoriesIncludePackages");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
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

<a id="getCategory"></a>
# **getCategory**
> SingleCategoryResponse getCategory(categoryId)

Get specific category

Gets information about a category and returns the packages in that category.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String categoryId = "127244343"; // String | The ID or slug of the category to fetch.
    try {
      SingleCategoryResponse result = apiInstance.getCategory(categoryId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getCategory");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **categoryId** | **String**| The ID or slug of the category to fetch. | |

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

<a id="getCategoryIncludeDynamicPackages"></a>
# **getCategoryIncludeDynamicPackages**
> SingleCategoryResponse getCategoryIncludeDynamicPackages(categoryId, basketIdent)

Gets a specific category including packages, populating a dynamic category for the given basket.

Gets information about a category and returns the packages in that category. When the category is dynamic and &#x60;basketIdent&#x60; is provided, the category is populated with the packages associated with that basket.  If a basket identifier is not provided, a dynamic category will be empty as the basket is required to relate packages to the category.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String categoryId = "1234"; // String | The ID or slug of the category to fetch.
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    try {
      SingleCategoryResponse result = apiInstance.getCategoryIncludeDynamicPackages(categoryId, basketIdent);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getCategoryIncludeDynamicPackages");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **categoryId** | **String**| The ID or slug of the category to fetch. | |
| **basketIdent** | **String**| The basket identifier. | |

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

<a id="getCategoryIncludePackages"></a>
# **getCategoryIncludePackages**
> SingleCategoryResponse getCategoryIncludePackages(categoryId)

Get a category with all packages

Gets information about a category and returns the packages in that category.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String categoryId = "127244343"; // String | The ID or slug of the category to fetch.
    try {
      SingleCategoryResponse result = apiInstance.getCategoryIncludePackages(categoryId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getCategoryIncludePackages");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **categoryId** | **String**| The ID or slug of the category to fetch. | |

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

<a id="getCustomPages"></a>
# **getCustomPages**
> CMSPagesResponse getCustomPages()

Get custom pages defined for the webstore.

Gets a list of custom pages associated with the webstore. These contain a &#x60;content&#x60; variable with the HTML content of the page.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    try {
      CMSPagesResponse result = apiInstance.getCustomPages();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getCustomPages");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
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

<a id="getDynamicCategories"></a>
# **getDynamicCategories**
> CategoryResponse getDynamicCategories(basketIdent)

Get Dynamic Categories

Gets all categories from a webstore including packages. When &#x60;basketIdent&#x60; is provided, dynamic categories are populated with the packages associated with that basket.  If a basket identifier is not provided, dynamic categories will be empty as the basket is required to relate packages to the category.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    try {
      CategoryResponse result = apiInstance.getDynamicCategories(basketIdent);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getDynamicCategories");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | |

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

<a id="getPackage"></a>
# **getPackage**
> SinglePackageResponse getPackage(packageId)

Get package

Gets a package from a webstore by its ID or slug.  Note: this endpoint does not support packages belonging to dynamic categories. Use the category endpoints with &#x60;includePackages&#x3D;1&#x60; and &#x60;basketIdent&#x60; to fetch dynamic packages.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String packageId = "1272441812"; // String | The package's ID or slug.
    try {
      SinglePackageResponse result = apiInstance.getPackage(packageId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getPackage");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **packageId** | **String**| The package&#39;s ID or slug. | |

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

<a id="getPackagesForBasket"></a>
# **getPackagesForBasket**
> PackageResponse getPackagesForBasket(basketIdent)

Get packages available for basket

Gets all packages available to the provided basket.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    try {
      PackageResponse result = apiInstance.getPackagesForBasket(basketIdent);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getPackagesForBasket");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | |

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

<a id="getSidebar"></a>
# **getSidebar**
> ModulesResponse getSidebar(token)

Retrieves the available sidebar modules.

Retrieves the available sidebar modules configured for the store.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String token = "some-uuid"; // String | The webstore identifier.
    try {
      ModulesResponse result = apiInstance.getSidebar(token);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getSidebar");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | |

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

<a id="getUserTieredCategories"></a>
# **getUserTieredCategories**
> CategoryResponse getUserTieredCategories(usernameId)

Get user&#39;s tiered categories

Gets all categories from the webstore, returning active tier information for the given player.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.auth.*;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");
    
    // Configure HTTP basic authorization: basicAuth
    HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
    basicAuth.setUsername("YOUR USERNAME");
    basicAuth.setPassword("YOUR PASSWORD");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    Integer usernameId = 76561198042467022; // Integer | 
    try {
      CategoryResponse result = apiInstance.getUserTieredCategories(usernameId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getUserTieredCategories");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **usernameId** | **Integer**|  | |

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

<a id="getWebstore"></a>
# **getWebstore**
> WebstoreResponse getWebstore()

Get the webstore&#39;s information

Gets the webstore associated with the provided token

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    try {
      WebstoreResponse result = apiInstance.getWebstore();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getWebstore");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
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

<a id="removeCoupon"></a>
# **removeCoupon**
> removeCoupon(basketIdent, applyCouponRequest)

Remove a coupon from the basket.

Removes a coupon code from a basket

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    ApplyCouponRequest applyCouponRequest = new ApplyCouponRequest(); // ApplyCouponRequest | Provide a `coupon_code` to remove from the basket.
    try {
      apiInstance.removeCoupon(basketIdent, applyCouponRequest);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#removeCoupon");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | |
| **applyCouponRequest** | [**ApplyCouponRequest**](ApplyCouponRequest.md)| Provide a &#x60;coupon_code&#x60; to remove from the basket. | [optional] |

### Return type

null (empty response body)

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

<a id="removeCreatorCode"></a>
# **removeCreatorCode**
> removeCreatorCode(basketIdent)

Removes the creator code from the basket.

Removes the creator code from the basket.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    try {
      apiInstance.removeCreatorCode(basketIdent);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#removeCreatorCode");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | |

### Return type

null (empty response body)

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

<a id="removeGiftCard"></a>
# **removeGiftCard**
> removeGiftCard(basketIdent, removeGiftCardRequest)

Remove a gift card from the basket.

Removes a gift card from the basket.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    RemoveGiftCardRequest removeGiftCardRequest = new RemoveGiftCardRequest(); // RemoveGiftCardRequest | Provide the `card_number` to remove from the basket.
    try {
      apiInstance.removeGiftCard(basketIdent, removeGiftCardRequest);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#removeGiftCard");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | |
| **removeGiftCardRequest** | [**RemoveGiftCardRequest**](RemoveGiftCardRequest.md)| Provide the &#x60;card_number&#x60; to remove from the basket. | [optional] |

### Return type

null (empty response body)

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

<a id="updateTier"></a>
# **updateTier**
> UpdateTierResponse updateTier(tierId, updateTierRequest)

Update user&#39;s tier to a new package

Updates a tier to a new package. A recurring payment updated webhook is sent when an update is successful.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.auth.*;
import TebexHeadless.models.*;
import TebexHeadless.HeadlessApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");
    
    // Configure HTTP basic authorization: basicAuth
    HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
    basicAuth.setUsername("YOUR USERNAME");
    basicAuth.setPassword("YOUR PASSWORD");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    Integer tierId = 6276316; // Integer | The tier identifier
    UpdateTierRequest updateTierRequest = new UpdateTierRequest(); // UpdateTierRequest | 
    try {
      UpdateTierResponse result = apiInstance.updateTier(tierId, updateTierRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#updateTier");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tierId** | **Integer**| The tier identifier | |
| **updateTierRequest** | [**UpdateTierRequest**](UpdateTierRequest.md)|  | [optional] |

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


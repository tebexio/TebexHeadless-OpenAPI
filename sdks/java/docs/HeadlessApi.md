# HeadlessApi

All URIs are relative to *https://headless.tebex.io/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addBasketPackage**](HeadlessApi.md#addBasketPackage) | **POST** /baskets/{basketIdent}/packages | Add a package to a basket |
| [**applyCoupon**](HeadlessApi.md#applyCoupon) | **POST** /accounts/{token}/baskets/{basketIdent}/coupons | Apply a coupon to a basket. |
| [**applyCreatorCode**](HeadlessApi.md#applyCreatorCode) | **POST** /accounts/{token}/baskets/{basketIdent}/creator-codes | Apply a creator code to a basket. |
| [**applyGiftCard**](HeadlessApi.md#applyGiftCard) | **POST** /accounts/{token}/baskets/{basketIdent}/giftcards | Apply a gift card to a basket. |
| [**createBasket**](HeadlessApi.md#createBasket) | **POST** /accounts/{token}/baskets | Create a new basket |
| [**getAllCategories**](HeadlessApi.md#getAllCategories) | **GET** /accounts/{token}/categories | Gets all categories available in the webstore. |
| [**getAllCategoriesIncludingPackages**](HeadlessApi.md#getAllCategoriesIncludingPackages) | **GET** /accounts/{token}/categories?includePackages&#x3D;1 | Gets a store&#39;s categories including all package information with them. |
| [**getAllPackages**](HeadlessApi.md#getAllPackages) | **GET** /accounts/{token}/packages | Fetch all packages from a webstore |
| [**getAllPackagesWithAuthedIP**](HeadlessApi.md#getAllPackagesWithAuthedIP) | **GET** /accounts/{token}/packages?ipAddress&#x3D;{ipAddress} | Fetch a package from a webstore by its identifier |
| [**getAllPackagesWithAuthedIPAndBasket**](HeadlessApi.md#getAllPackagesWithAuthedIPAndBasket) | **GET** /accounts/{token}/packages?ipAddress&#x3D;{ipAddress}&amp;basketIdent&#x3D;{basketIdent} | Fetch a package from a webstore by its identifier |
| [**getAllPackagesWithBasket**](HeadlessApi.md#getAllPackagesWithBasket) | **GET** /accounts/{token}/packages?basketIdent&#x3D;{basketIdent} | Fetch a package from a webstore by its identifier |
| [**getBasketAuthUrl**](HeadlessApi.md#getBasketAuthUrl) | **GET** /accounts/{token}/baskets/{basketIdent}/auth?returnUrl&#x3D;{returnUrl} | Fetch a basket from a webstore by its identifier |
| [**getBasketById**](HeadlessApi.md#getBasketById) | **GET** /accounts/{token}/baskets/{basketIdent} | Fetch a basket from a webstore by its identifier |
| [**getCategoryById**](HeadlessApi.md#getCategoryById) | **GET** /accounts/{token}/categories/{categoryId} | Gets information about a specific category |
| [**getCategoryIncludingPackages**](HeadlessApi.md#getCategoryIncludingPackages) | **GET** /accounts/{token}/categories/{categoryId}?includePackages&#x3D;1 | Gets information about a specific category, including all the packages in the category |
| [**getPackageById**](HeadlessApi.md#getPackageById) | **GET** /accounts/{token}/packages/{packageId} | Fetch a package from a webstore by its identifier |
| [**getWebstoreById**](HeadlessApi.md#getWebstoreById) | **GET** /accounts/{token} | Fetch a webstore by its identifier |
| [**removeBasketPackage**](HeadlessApi.md#removeBasketPackage) | **POST** /baskets/{basketIdent}/packages/remove | Remove a package from a basket |
| [**removeCoupon**](HeadlessApi.md#removeCoupon) | **POST** /accounts/{token}/baskets/{basketIdent}/coupons/remove | Remove a coupon from the basket. |
| [**removeCreatorCode**](HeadlessApi.md#removeCreatorCode) | **POST** /accounts/{token}/baskets/{basketIdent}/creator-codes/remove | Remove a creator code from the basket. |
| [**removeGiftCard**](HeadlessApi.md#removeGiftCard) | **POST** /accounts/{token}/baskets/{basketIdent}/giftcards/remove | Remove a gift card from the basket. |
| [**updatePackageQuantity**](HeadlessApi.md#updatePackageQuantity) | **PUT** /baskets/{basketIdent}/packages/{packageId} | Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed. |


<a id="addBasketPackage"></a>
# **addBasketPackage**
> Basket addBasketPackage(basketIdent, addBasketPackageRequest)

Add a package to a basket

Add a package with the given ID to the basket.

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
    defaultClient.setBasePath("https://headless.tebex.io/api");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    AddBasketPackageRequest addBasketPackageRequest = new AddBasketPackageRequest(); // AddBasketPackageRequest | 
    try {
      Basket result = apiInstance.addBasketPackage(basketIdent, addBasketPackageRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#addBasketPackage");
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
| **addBasketPackageRequest** | [**AddBasketPackageRequest**](AddBasketPackageRequest.md)|  | [optional] |

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

<a id="applyCoupon"></a>
# **applyCoupon**
> BasketResponse applyCoupon(token, basketIdent, coupon)

Apply a coupon to a basket.

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
    defaultClient.setBasePath("https://headless.tebex.io/api");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    Coupon coupon = new Coupon(); // Coupon | Provide a `coupon_code` to apply to the basket.
    try {
      BasketResponse result = apiInstance.applyCoupon(token, basketIdent, coupon);
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
| **token** | **String**| The webstore identifier. | |
| **basketIdent** | **String**| The basket identifier. | |
| **coupon** | [**Coupon**](Coupon.md)| Provide a &#x60;coupon_code&#x60; to apply to the basket. | [optional] |

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

<a id="applyCreatorCode"></a>
# **applyCreatorCode**
> BasketResponse applyCreatorCode(token, basketIdent, applyCreatorCodeRequest)

Apply a creator code to a basket.

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
    defaultClient.setBasePath("https://headless.tebex.io/api");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    ApplyCreatorCodeRequest applyCreatorCodeRequest = new ApplyCreatorCodeRequest(); // ApplyCreatorCodeRequest | Provide a `creator_code` to apply to the basket.
    try {
      BasketResponse result = apiInstance.applyCreatorCode(token, basketIdent, applyCreatorCodeRequest);
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
| **token** | **String**| The webstore identifier. | |
| **basketIdent** | **String**| The basket identifier. | |
| **applyCreatorCodeRequest** | [**ApplyCreatorCodeRequest**](ApplyCreatorCodeRequest.md)| Provide a &#x60;creator_code&#x60; to apply to the basket. | [optional] |

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

<a id="applyGiftCard"></a>
# **applyGiftCard**
> BasketResponse applyGiftCard(token, basketIdent, giftCard)

Apply a gift card to a basket.

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
    defaultClient.setBasePath("https://headless.tebex.io/api");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    GiftCard giftCard = new GiftCard(); // GiftCard | Provide a `card_number` to apply to the basket.
    try {
      BasketResponse result = apiInstance.applyGiftCard(token, basketIdent, giftCard);
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
| **token** | **String**| The webstore identifier. | |
| **basketIdent** | **String**| The basket identifier. | |
| **giftCard** | [**GiftCard**](GiftCard.md)| Provide a &#x60;card_number&#x60; to apply to the basket. | [optional] |

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

<a id="createBasket"></a>
# **createBasket**
> BasketResponse createBasket(token, createBasketRequest)

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
    defaultClient.setBasePath("https://headless.tebex.io/api");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
    CreateBasketRequest createBasketRequest = new CreateBasketRequest(); // CreateBasketRequest | 
    try {
      BasketResponse result = apiInstance.createBasket(token, createBasketRequest);
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
| **token** | **String**| The webstore identifier. | |
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

<a id="getAllCategories"></a>
# **getAllCategories**
> CategoryResponse getAllCategories(token)

Gets all categories available in the webstore.

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
    defaultClient.setBasePath("https://headless.tebex.io/api");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
    try {
      CategoryResponse result = apiInstance.getAllCategories(token);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getAllCategories");
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

<a id="getAllCategoriesIncludingPackages"></a>
# **getAllCategoriesIncludingPackages**
> CategoryResponse getAllCategoriesIncludingPackages(token)

Gets a store&#39;s categories including all package information with them.

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
    defaultClient.setBasePath("https://headless.tebex.io/api");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
    try {
      CategoryResponse result = apiInstance.getAllCategoriesIncludingPackages(token);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getAllCategoriesIncludingPackages");
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

<a id="getAllPackages"></a>
# **getAllPackages**
> PackageResponse getAllPackages(token)

Fetch all packages from a webstore

Gets all packages from a webstore.

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
    defaultClient.setBasePath("https://headless.tebex.io/api");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
    try {
      PackageResponse result = apiInstance.getAllPackages(token);
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

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | |

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
> PackageResponse getAllPackagesWithAuthedIP(token, ipAddress)

Fetch a package from a webstore by its identifier

Gets all packages from a webstore.

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
    defaultClient.setBasePath("https://headless.tebex.io/api");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
    String ipAddress = "127.0.0.1"; // String | An IP address can be provided with authenticated requests.
    try {
      PackageResponse result = apiInstance.getAllPackagesWithAuthedIP(token, ipAddress);
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
| **token** | **String**| The webstore identifier. | |
| **ipAddress** | **String**| An IP address can be provided with authenticated requests. | |

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

<a id="getAllPackagesWithAuthedIPAndBasket"></a>
# **getAllPackagesWithAuthedIPAndBasket**
> List&lt;PackageResponse&gt; getAllPackagesWithAuthedIPAndBasket(token, basketIdent, ipAddress)

Fetch a package from a webstore by its identifier

Gets all packages from a webstore.

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
    defaultClient.setBasePath("https://headless.tebex.io/api");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    String ipAddress = "127.0.0.1"; // String | An IP address can be provided with authenticated requests.
    try {
      List<PackageResponse> result = apiInstance.getAllPackagesWithAuthedIPAndBasket(token, basketIdent, ipAddress);
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
| **token** | **String**| The webstore identifier. | |
| **basketIdent** | **String**| The basket identifier. | |
| **ipAddress** | **String**| An IP address can be provided with authenticated requests. | |

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

<a id="getAllPackagesWithBasket"></a>
# **getAllPackagesWithBasket**
> PackageResponse getAllPackagesWithBasket(token, basketIdent)

Fetch a package from a webstore by its identifier

Gets all packages from a webstore.

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
    defaultClient.setBasePath("https://headless.tebex.io/api");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    try {
      PackageResponse result = apiInstance.getAllPackagesWithBasket(token, basketIdent);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getAllPackagesWithBasket");
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

<a id="getBasketAuthUrl"></a>
# **getBasketAuthUrl**
> BasketResponse getBasketAuthUrl(token, basketIdent, returnUrl)

Fetch a basket from a webstore by its identifier

Fetches a basket&#39;s auth URL.

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
    defaultClient.setBasePath("https://headless.tebex.io/api");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    String returnUrl = "https://example.tebex.io/"; // String | The URL you would like to redirect the user to after successful basket authentication.
    try {
      BasketResponse result = apiInstance.getBasketAuthUrl(token, basketIdent, returnUrl);
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
| **token** | **String**| The webstore identifier. | |
| **basketIdent** | **String**| The basket identifier. | |
| **returnUrl** | **String**| The URL you would like to redirect the user to after successful basket authentication. | |

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

<a id="getBasketById"></a>
# **getBasketById**
> BasketResponse getBasketById(token, basketIdent)

Fetch a basket from a webstore by its identifier

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
    defaultClient.setBasePath("https://headless.tebex.io/api");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    try {
      BasketResponse result = apiInstance.getBasketById(token, basketIdent);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getBasketById");
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

<a id="getCategoryById"></a>
# **getCategoryById**
> List&lt;CategoryResponse&gt; getCategoryById(token, categoryId)

Gets information about a specific category

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
    defaultClient.setBasePath("https://headless.tebex.io/api");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
    String categoryId = "127244343"; // String | The ID of the category to fetch.
    try {
      List<CategoryResponse> result = apiInstance.getCategoryById(token, categoryId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getCategoryById");
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
| **categoryId** | **String**| The ID of the category to fetch. | |

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

<a id="getCategoryIncludingPackages"></a>
# **getCategoryIncludingPackages**
> CategoryResponse getCategoryIncludingPackages(token, categoryId)

Gets information about a specific category, including all the packages in the category

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
    defaultClient.setBasePath("https://headless.tebex.io/api");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
    String categoryId = "127244343"; // String | The ID of the category to fetch.
    try {
      CategoryResponse result = apiInstance.getCategoryIncludingPackages(token, categoryId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getCategoryIncludingPackages");
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
| **categoryId** | **String**| The ID of the category to fetch. | |

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

<a id="getPackageById"></a>
# **getPackageById**
> PackageResponse getPackageById(token, packageId)

Fetch a package from a webstore by its identifier

Gets a package from a webstore by ID.

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
    defaultClient.setBasePath("https://headless.tebex.io/api");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
    BigDecimal packageId = new BigDecimal("1272441812"); // BigDecimal | The package's ID.
    try {
      PackageResponse result = apiInstance.getPackageById(token, packageId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getPackageById");
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
| **packageId** | **BigDecimal**| The package&#39;s ID. | |

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

<a id="getWebstoreById"></a>
# **getWebstoreById**
> WebstoreResponse getWebstoreById(token)

Fetch a webstore by its identifier

Gets the webstore associated with the provided identifier.

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
    defaultClient.setBasePath("https://headless.tebex.io/api");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String token = "some-uuid"; // String | The webstore identifier.
    try {
      WebstoreResponse result = apiInstance.getWebstoreById(token);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#getWebstoreById");
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

<a id="removeBasketPackage"></a>
# **removeBasketPackage**
> Basket removeBasketPackage(basketIdent, removeBasketPackageRequest)

Remove a package from a basket

Remove the given package ID from the basket.

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
    defaultClient.setBasePath("https://headless.tebex.io/api");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    RemoveBasketPackageRequest removeBasketPackageRequest = new RemoveBasketPackageRequest(); // RemoveBasketPackageRequest | 
    try {
      Basket result = apiInstance.removeBasketPackage(basketIdent, removeBasketPackageRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#removeBasketPackage");
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
| **removeBasketPackageRequest** | [**RemoveBasketPackageRequest**](RemoveBasketPackageRequest.md)|  | [optional] |

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

<a id="removeCoupon"></a>
# **removeCoupon**
> removeCoupon(token, basketIdent)

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
    defaultClient.setBasePath("https://headless.tebex.io/api");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    try {
      apiInstance.removeCoupon(token, basketIdent);
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
| **token** | **String**| The webstore identifier. | |
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
| **200** | Successful response. |  -  |
| **422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

<a id="removeCreatorCode"></a>
# **removeCreatorCode**
> removeCreatorCode(token, basketIdent)

Remove a creator code from the basket.

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
    defaultClient.setBasePath("https://headless.tebex.io/api");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    try {
      apiInstance.removeCreatorCode(token, basketIdent);
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
| **token** | **String**| The webstore identifier. | |
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
> removeGiftCard(token, basketIdent, removeGiftCardRequest)

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
    defaultClient.setBasePath("https://headless.tebex.io/api");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    RemoveGiftCardRequest removeGiftCardRequest = new RemoveGiftCardRequest(); // RemoveGiftCardRequest | Provide the `card_number` to remove from the basket.
    try {
      apiInstance.removeGiftCard(token, basketIdent, removeGiftCardRequest);
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
| **token** | **String**| The webstore identifier. | |
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

<a id="updatePackageQuantity"></a>
# **updatePackageQuantity**
> updatePackageQuantity(basketIdent, packageId, updatePackageQuantityRequest)

Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed.

Sets the quantity of the given item in the basket.

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
    defaultClient.setBasePath("https://headless.tebex.io/api");

    HeadlessApi apiInstance = new HeadlessApi(defaultClient);
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    BigDecimal packageId = new BigDecimal("6276316"); // BigDecimal | The package identifier.
    UpdatePackageQuantityRequest updatePackageQuantityRequest = new UpdatePackageQuantityRequest(); // UpdatePackageQuantityRequest | 
    try {
      apiInstance.updatePackageQuantity(basketIdent, packageId, updatePackageQuantityRequest);
    } catch (ApiException e) {
      System.err.println("Exception when calling HeadlessApi#updatePackageQuantity");
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
| **packageId** | **BigDecimal**| The package identifier. | |
| **updatePackageQuantityRequest** | [**UpdatePackageQuantityRequest**](UpdatePackageQuantityRequest.md)|  | [optional] |

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


# BasketsApi

All URIs are relative to *https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addBasketPackage**](BasketsApi.md#addBasketPackage) | **POST** /{basketIdent}/packages | Add package to basket |
| [**removeBasketPackage**](BasketsApi.md#removeBasketPackage) | **POST** /{basketIdent}/packages/remove | Remove a package from a basket |
| [**updatePackageQuantity**](BasketsApi.md#updatePackageQuantity) | **PUT** /{basketIdent}/packages/{packageId} | Update package quantity |


<a id="addBasketPackage"></a>
# **addBasketPackage**
> BasketResponse addBasketPackage(basketIdent, addBasketPackageRequest)

Add package to basket

Add a package to the basket by its &#x60;ident&#x60; or numeric ID.  - Using &#x60;ident&#x60; is recommended, since it works for every package type. It is required for external packages. - Numeric IDs still work for standard packages.  To add a package belonging to a dynamic category, set &#x60;dynamic&#x60; to &#x60;true&#x60;. Without this property the API will treat the request as a normal package ID.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.BasketsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    BasketsApi apiInstance = new BasketsApi(defaultClient);
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    AddBasketPackageRequest addBasketPackageRequest = new AddBasketPackageRequest(); // AddBasketPackageRequest | 
    try {
      BasketResponse result = apiInstance.addBasketPackage(basketIdent, addBasketPackageRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BasketsApi#addBasketPackage");
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
| **400** | The ident is unknown or does not match a package in this store (\&quot;The selected id is invalid.\&quot;). |  -  |
| **422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. A malformed &#x60;package_id&#x60; fails with \&quot;package_id must be a package ID or ident.\&quot; |  -  |

<a id="removeBasketPackage"></a>
# **removeBasketPackage**
> BasketResponse removeBasketPackage(basketIdent, removeBasketPackageRequest)

Remove a package from a basket

Remove a package from the basket by its &#x60;ident&#x60; or numeric ID.  - Using &#x60;ident&#x60; is recommended, since it works for every package type. Send it back exactly as returned; don&#39;t build or parse it. - Numeric IDs still work for standard packages.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.BasketsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    BasketsApi apiInstance = new BasketsApi(defaultClient);
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    RemoveBasketPackageRequest removeBasketPackageRequest = new RemoveBasketPackageRequest(); // RemoveBasketPackageRequest | 
    try {
      BasketResponse result = apiInstance.removeBasketPackage(basketIdent, removeBasketPackageRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BasketsApi#removeBasketPackage");
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

<a id="updatePackageQuantity"></a>
# **updatePackageQuantity**
> updatePackageQuantity(basketIdent, packageId, updatePackageQuantityRequest)

Update package quantity

Sets the quantity of the given item in the basket. The user must be logged in before the quantity can be changed.  - &#x60;{packageId}&#x60; accepts the package&#39;s &#x60;ident&#x60; or numeric ID. Using &#x60;ident&#x60; is recommended, since it works for every package type. - Numeric IDs still work for standard packages.

### Example
```java
// Import classes:
import TebexHeadless.ApiClient;
import TebexHeadless.ApiException;
import TebexHeadless.Configuration;
import TebexHeadless.models.*;
import TebexHeadless.BasketsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN");

    BasketsApi apiInstance = new BasketsApi(defaultClient);
    String basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
    String packageId = "pkg_12_456"; // String | The package's `ident` (recommended) or numeric ID.
    UpdatePackageQuantityRequest updatePackageQuantityRequest = new UpdatePackageQuantityRequest(); // UpdatePackageQuantityRequest | 
    try {
      apiInstance.updatePackageQuantity(basketIdent, packageId, updatePackageQuantityRequest);
    } catch (ApiException e) {
      System.err.println("Exception when calling BasketsApi#updatePackageQuantity");
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
| **packageId** | **String**| The package&#39;s &#x60;ident&#x60; (recommended) or numeric ID. | |
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


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

Add a package with the given ID to the basket.  To add a package belonging to a dynamic category, set &#x60;dynamic&#x60; to &#x60;true&#x60;. Without this property the API will treat the request as a normal package ID.

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
| **422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

<a id="removeBasketPackage"></a>
# **removeBasketPackage**
> BasketResponse removeBasketPackage(basketIdent, removeBasketPackageRequest)

Remove a package from a basket

Remove the given package ID from the basket.

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

Sets the quantity of the given item in the basket. The user must be logged in before the quantity can be changed.

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
    String packageId = "6276316"; // String | The package identifier
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
| **packageId** | **String**| The package identifier | |
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


# BasketsApi

All URIs are relative to *https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addBasketPackage**](BasketsApi.md#addBasketPackage) | **POST** /{basketIdent}/packages | Add package to basket |
| [**removeBasketPackage**](BasketsApi.md#removeBasketPackage) | **POST** /{basketIdent}/packages/remove | Remove a package from a basket |
| [**updatePackageQuantity**](BasketsApi.md#updatePackageQuantity) | **PUT** /{basketIdent}/packages/{packageId} | Update package quantity |


<a name="addBasketPackage"></a>
# **addBasketPackage**
> BasketResponse addBasketPackage(basketIdent, addBasketPackage\_request)

Add package to basket

    Add a package with the given ID to the basket.  To add a package belonging to a dynamic category, set &#x60;dynamic&#x60; to &#x60;true&#x60;. Without this property the API will treat the request as a normal package ID.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | [default to null] |
| **addBasketPackage\_request** | [**addBasketPackage_request**](../Models/addBasketPackage_request.md)|  | [optional] |

### Return type

[**BasketResponse**](../Models/BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="removeBasketPackage"></a>
# **removeBasketPackage**
> BasketResponse removeBasketPackage(basketIdent, removeBasketPackage\_request)

Remove a package from a basket

    Remove the given package ID from the basket.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | [default to null] |
| **removeBasketPackage\_request** | [**removeBasketPackage_request**](../Models/removeBasketPackage_request.md)|  | [optional] |

### Return type

[**BasketResponse**](../Models/BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updatePackageQuantity"></a>
# **updatePackageQuantity**
> updatePackageQuantity(basketIdent, packageId, updatePackageQuantity\_request)

Update package quantity

    Sets the quantity of the given item in the basket. The user must be logged in before the quantity can be changed.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | [default to null] |
| **packageId** | **String**| The package identifier | [default to null] |
| **updatePackageQuantity\_request** | [**updatePackageQuantity_request**](../Models/updatePackageQuantity_request.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


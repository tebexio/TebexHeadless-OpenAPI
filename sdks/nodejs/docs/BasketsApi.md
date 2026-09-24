# TebexHeadlessApi.BasketsApi

All URIs are relative to *https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBasketPackage**](BasketsApi.md#addBasketPackage) | **POST** /{basketIdent}/packages | Add package to basket
[**removeBasketPackage**](BasketsApi.md#removeBasketPackage) | **POST** /{basketIdent}/packages/remove | Remove a package from a basket
[**updatePackageQuantity**](BasketsApi.md#updatePackageQuantity) | **PUT** /{basketIdent}/packages/{packageId} | Update package quantity



## addBasketPackage

> BasketResponse addBasketPackage(basketIdent, opts)

Add package to basket

Add a package with the given ID to the basket.  To add a package belonging to a dynamic category, set &#x60;dynamic&#x60; to &#x60;true&#x60;. Without this property the API will treat the request as a normal package ID.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.BasketsApi();
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
let opts = {
  'addBasketPackageRequest': new TebexHeadlessApi.AddBasketPackageRequest() // AddBasketPackageRequest | 
};
apiInstance.addBasketPackage(basketIdent, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketIdent** | **String**| The basket identifier. | 
 **addBasketPackageRequest** | [**AddBasketPackageRequest**](AddBasketPackageRequest.md)|  | [optional] 

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeBasketPackage

> BasketResponse removeBasketPackage(basketIdent, opts)

Remove a package from a basket

Remove the given package ID from the basket.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.BasketsApi();
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
let opts = {
  'removeBasketPackageRequest': new TebexHeadlessApi.RemoveBasketPackageRequest() // RemoveBasketPackageRequest | 
};
apiInstance.removeBasketPackage(basketIdent, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketIdent** | **String**| The basket identifier. | 
 **removeBasketPackageRequest** | [**RemoveBasketPackageRequest**](RemoveBasketPackageRequest.md)|  | [optional] 

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePackageQuantity

> updatePackageQuantity(basketIdent, packageId, opts)

Update package quantity

Sets the quantity of the given item in the basket. The user must be logged in before the quantity can be changed.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.BasketsApi();
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
let packageId = "6276316"; // String | The package identifier
let opts = {
  'updatePackageQuantityRequest': new TebexHeadlessApi.UpdatePackageQuantityRequest() // UpdatePackageQuantityRequest | 
};
apiInstance.updatePackageQuantity(basketIdent, packageId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketIdent** | **String**| The basket identifier. | 
 **packageId** | **String**| The package identifier | 
 **updatePackageQuantityRequest** | [**UpdatePackageQuantityRequest**](UpdatePackageQuantityRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


# TebexHeadlessApi.HeadlessApi

All URIs are relative to *https://headless.tebex.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBasketPackage**](HeadlessApi.md#addBasketPackage) | **POST** /baskets/{basketIdent}/packages | Add a package to a basket
[**applyCoupon**](HeadlessApi.md#applyCoupon) | **POST** /accounts/{token}/baskets/{basketIdent}/coupons | Apply a coupon to a basket.
[**applyCreatorCode**](HeadlessApi.md#applyCreatorCode) | **POST** /accounts/{token}/baskets/{basketIdent}/creator-codes | Apply a creator code to a basket.
[**applyGiftCard**](HeadlessApi.md#applyGiftCard) | **POST** /accounts/{token}/baskets/{basketIdent}/giftcards | Apply a gift card to a basket.
[**createBasket**](HeadlessApi.md#createBasket) | **POST** /accounts/{token}/baskets | Create a new basket
[**getAllCategories**](HeadlessApi.md#getAllCategories) | **GET** /accounts/{token}/categories | Gets all categories available in the webstore.
[**getAllCategoriesIncludingPackages**](HeadlessApi.md#getAllCategoriesIncludingPackages) | **GET** /accounts/{token}/categories?includePackages&#x3D;1 | Gets a store&#39;s categories including all package information with them.
[**getAllPackages**](HeadlessApi.md#getAllPackages) | **GET** /accounts/{token}/packages | Fetch all packages from a webstore
[**getAllPackagesWithAuthedIP**](HeadlessApi.md#getAllPackagesWithAuthedIP) | **GET** /accounts/{token}/packages?ipAddress&#x3D;{ipAddress} | Fetch a package from a webstore by its identifier
[**getAllPackagesWithAuthedIPAndBasket**](HeadlessApi.md#getAllPackagesWithAuthedIPAndBasket) | **GET** /accounts/{token}/packages?ipAddress&#x3D;{ipAddress}&amp;basketIdent&#x3D;{basketIdent} | Fetch a package from a webstore by its identifier
[**getAllPackagesWithBasket**](HeadlessApi.md#getAllPackagesWithBasket) | **GET** /accounts/{token}/packages?basketIdent&#x3D;{basketIdent} | Fetch a package from a webstore by its identifier
[**getBasketAuthUrl**](HeadlessApi.md#getBasketAuthUrl) | **GET** /accounts/{token}/baskets/{basketIdent}/auth?returnUrl&#x3D;{returnUrl} | Fetch a basket from a webstore by its identifier
[**getBasketById**](HeadlessApi.md#getBasketById) | **GET** /accounts/{token}/baskets/{basketIdent} | Fetch a basket from a webstore by its identifier
[**getCategoryById**](HeadlessApi.md#getCategoryById) | **GET** /accounts/{token}/categories/{categoryId} | Gets information about a specific category
[**getCategoryIncludingPackages**](HeadlessApi.md#getCategoryIncludingPackages) | **GET** /accounts/{token}/categories/{categoryId}?includePackages&#x3D;1 | Gets information about a specific category, including all the packages in the category
[**getPackageById**](HeadlessApi.md#getPackageById) | **GET** /accounts/{token}/packages/{packageId} | Fetch a package from a webstore by its identifier
[**getWebstoreById**](HeadlessApi.md#getWebstoreById) | **GET** /accounts/{token} | Fetch a webstore by its identifier
[**removeBasketPackage**](HeadlessApi.md#removeBasketPackage) | **POST** /baskets/{basketIdent}/packages/remove | Remove a package from a basket
[**removeCoupon**](HeadlessApi.md#removeCoupon) | **POST** /accounts/{token}/baskets/{basketIdent}/coupons/remove | Remove a coupon from the basket.
[**removeCreatorCode**](HeadlessApi.md#removeCreatorCode) | **POST** /accounts/{token}/baskets/{basketIdent}/creator-codes/remove | Remove a creator code from the basket.
[**removeGiftCard**](HeadlessApi.md#removeGiftCard) | **POST** /accounts/{token}/baskets/{basketIdent}/giftcards/remove | Remove a gift card from the basket.
[**updatePackageQuantity**](HeadlessApi.md#updatePackageQuantity) | **PUT** /baskets/{basketIdent}/packages/{packageId} | Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed.



## addBasketPackage

> Basket addBasketPackage(basketIdent, opts)

Add a package to a basket

Add a package with the given ID to the basket.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
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

[**Basket**](Basket.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## applyCoupon

> BasketResponse applyCoupon(token, basketIdent, opts)

Apply a coupon to a basket.

Applies a creator code to a basket.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
let opts = {
  'coupon': new TebexHeadlessApi.Coupon() // Coupon | Provide a `coupon_code` to apply to the basket.
};
apiInstance.applyCoupon(token, basketIdent, opts, (error, data, response) => {
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
 **token** | **String**| The webstore identifier. | 
 **basketIdent** | **String**| The basket identifier. | 
 **coupon** | [**Coupon**](Coupon.md)| Provide a &#x60;coupon_code&#x60; to apply to the basket. | [optional] 

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## applyCreatorCode

> BasketResponse applyCreatorCode(token, basketIdent, opts)

Apply a creator code to a basket.

Applies a creator code to a basket.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
let opts = {
  'applyCreatorCodeRequest': new TebexHeadlessApi.ApplyCreatorCodeRequest() // ApplyCreatorCodeRequest | Provide a `creator_code` to apply to the basket.
};
apiInstance.applyCreatorCode(token, basketIdent, opts, (error, data, response) => {
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
 **token** | **String**| The webstore identifier. | 
 **basketIdent** | **String**| The basket identifier. | 
 **applyCreatorCodeRequest** | [**ApplyCreatorCodeRequest**](ApplyCreatorCodeRequest.md)| Provide a &#x60;creator_code&#x60; to apply to the basket. | [optional] 

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## applyGiftCard

> BasketResponse applyGiftCard(token, basketIdent, opts)

Apply a gift card to a basket.

Applies a creator code to a basket.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
let opts = {
  'giftCard': new TebexHeadlessApi.GiftCard() // GiftCard | Provide a `card_number` to apply to the basket.
};
apiInstance.applyGiftCard(token, basketIdent, opts, (error, data, response) => {
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
 **token** | **String**| The webstore identifier. | 
 **basketIdent** | **String**| The basket identifier. | 
 **giftCard** | [**GiftCard**](GiftCard.md)| Provide a &#x60;card_number&#x60; to apply to the basket. | [optional] 

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createBasket

> BasketResponse createBasket(token, opts)

Create a new basket

Creates a new basket for use during checkout.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
let opts = {
  'createBasketRequest': new TebexHeadlessApi.CreateBasketRequest() // CreateBasketRequest | 
};
apiInstance.createBasket(token, opts, (error, data, response) => {
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
 **token** | **String**| The webstore identifier. | 
 **createBasketRequest** | [**CreateBasketRequest**](CreateBasketRequest.md)|  | [optional] 

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAllCategories

> CategoryResponse getAllCategories(token)

Gets all categories available in the webstore.

Gets all categories from a webstore. This does not include package information. To include package information, add &#x60;?includePackages&#x3D;1&#x60; to the URL.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
apiInstance.getAllCategories(token, (error, data, response) => {
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
 **token** | **String**| The webstore identifier. | 

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllCategoriesIncludingPackages

> CategoryResponse getAllCategoriesIncludingPackages(token)

Gets a store&#39;s categories including all package information with them.

Gets all categories from a webstore including packages.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
apiInstance.getAllCategoriesIncludingPackages(token, (error, data, response) => {
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
 **token** | **String**| The webstore identifier. | 

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllPackages

> PackageResponse getAllPackages(token)

Fetch all packages from a webstore

Gets all packages from a webstore.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
apiInstance.getAllPackages(token, (error, data, response) => {
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
 **token** | **String**| The webstore identifier. | 

### Return type

[**PackageResponse**](PackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllPackagesWithAuthedIP

> PackageResponse getAllPackagesWithAuthedIP(token, ipAddress)

Fetch a package from a webstore by its identifier

Gets all packages from a webstore.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
let ipAddress = "127.0.0.1"; // String | An IP address can be provided with authenticated requests.
apiInstance.getAllPackagesWithAuthedIP(token, ipAddress, (error, data, response) => {
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
 **token** | **String**| The webstore identifier. | 
 **ipAddress** | **String**| An IP address can be provided with authenticated requests. | 

### Return type

[**PackageResponse**](PackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllPackagesWithAuthedIPAndBasket

> [PackageResponse] getAllPackagesWithAuthedIPAndBasket(token, basketIdent, ipAddress)

Fetch a package from a webstore by its identifier

Gets all packages from a webstore.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
let ipAddress = "127.0.0.1"; // String | An IP address can be provided with authenticated requests.
apiInstance.getAllPackagesWithAuthedIPAndBasket(token, basketIdent, ipAddress, (error, data, response) => {
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
 **token** | **String**| The webstore identifier. | 
 **basketIdent** | **String**| The basket identifier. | 
 **ipAddress** | **String**| An IP address can be provided with authenticated requests. | 

### Return type

[**[PackageResponse]**](PackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllPackagesWithBasket

> PackageResponse getAllPackagesWithBasket(token, basketIdent)

Fetch a package from a webstore by its identifier

Gets all packages from a webstore.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
apiInstance.getAllPackagesWithBasket(token, basketIdent, (error, data, response) => {
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
 **token** | **String**| The webstore identifier. | 
 **basketIdent** | **String**| The basket identifier. | 

### Return type

[**PackageResponse**](PackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBasketAuthUrl

> BasketResponse getBasketAuthUrl(token, basketIdent, returnUrl)

Fetch a basket from a webstore by its identifier

Fetches a basket&#39;s auth URL.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
let returnUrl = "https://example.tebex.io/"; // String | The URL you would like to redirect the user to after successful basket authentication.
apiInstance.getBasketAuthUrl(token, basketIdent, returnUrl, (error, data, response) => {
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
 **token** | **String**| The webstore identifier. | 
 **basketIdent** | **String**| The basket identifier. | 
 **returnUrl** | **String**| The URL you would like to redirect the user to after successful basket authentication. | 

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBasketById

> BasketResponse getBasketById(token, basketIdent)

Fetch a basket from a webstore by its identifier

Gets a basket associated with the provided identifier.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
apiInstance.getBasketById(token, basketIdent, (error, data, response) => {
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
 **token** | **String**| The webstore identifier. | 
 **basketIdent** | **String**| The basket identifier. | 

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCategoryById

> [CategoryResponse] getCategoryById(token, categoryId)

Gets information about a specific category

Gets information about a category and returns the packages in that category.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
let categoryId = "127244343"; // String | The ID of the category to fetch.
apiInstance.getCategoryById(token, categoryId, (error, data, response) => {
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
 **token** | **String**| The webstore identifier. | 
 **categoryId** | **String**| The ID of the category to fetch. | 

### Return type

[**[CategoryResponse]**](CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCategoryIncludingPackages

> CategoryResponse getCategoryIncludingPackages(token, categoryId)

Gets information about a specific category, including all the packages in the category

Gets information about a category and returns the packages in that category.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
let categoryId = "127244343"; // String | The ID of the category to fetch.
apiInstance.getCategoryIncludingPackages(token, categoryId, (error, data, response) => {
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
 **token** | **String**| The webstore identifier. | 
 **categoryId** | **String**| The ID of the category to fetch. | 

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPackageById

> PackageResponse getPackageById(token, packageId)

Fetch a package from a webstore by its identifier

Gets a package from a webstore by ID.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
let packageId = 1272441812; // Number | The package's ID.
apiInstance.getPackageById(token, packageId, (error, data, response) => {
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
 **token** | **String**| The webstore identifier. | 
 **packageId** | **Number**| The package&#39;s ID. | 

### Return type

[**PackageResponse**](PackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebstoreById

> WebstoreResponse getWebstoreById(token)

Fetch a webstore by its identifier

Gets the webstore associated with the provided identifier.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let token = "some-uuid"; // String | The webstore identifier.
apiInstance.getWebstoreById(token, (error, data, response) => {
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
 **token** | **String**| The webstore identifier. | 

### Return type

[**WebstoreResponse**](WebstoreResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeBasketPackage

> Basket removeBasketPackage(basketIdent, opts)

Remove a package from a basket

Remove the given package ID from the basket.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
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

[**Basket**](Basket.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeCoupon

> removeCoupon(token, basketIdent)

Remove a coupon from the basket.

Removes a coupon code from a basket

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
apiInstance.removeCoupon(token, basketIdent, (error, data, response) => {
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
 **token** | **String**| The webstore identifier. | 
 **basketIdent** | **String**| The basket identifier. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeCreatorCode

> removeCreatorCode(token, basketIdent)

Remove a creator code from the basket.

Applies a creator code to a basket.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
apiInstance.removeCreatorCode(token, basketIdent, (error, data, response) => {
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
 **token** | **String**| The webstore identifier. | 
 **basketIdent** | **String**| The basket identifier. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeGiftCard

> removeGiftCard(token, basketIdent, opts)

Remove a gift card from the basket.

Removes a gift card from the basket.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let token = "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb"; // String | The webstore identifier.
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
let opts = {
  'removeGiftCardRequest': new TebexHeadlessApi.RemoveGiftCardRequest() // RemoveGiftCardRequest | Provide the `card_number` to remove from the basket.
};
apiInstance.removeGiftCard(token, basketIdent, opts, (error, data, response) => {
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
 **token** | **String**| The webstore identifier. | 
 **basketIdent** | **String**| The basket identifier. | 
 **removeGiftCardRequest** | [**RemoveGiftCardRequest**](RemoveGiftCardRequest.md)| Provide the &#x60;card_number&#x60; to remove from the basket. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## updatePackageQuantity

> updatePackageQuantity(basketIdent, packageId, opts)

Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed.

Sets the quantity of the given item in the basket.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
let packageId = 6276316; // Number | The package identifier.
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
 **packageId** | **Number**| The package identifier. | 
 **updatePackageQuantityRequest** | [**UpdatePackageQuantityRequest**](UpdatePackageQuantityRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


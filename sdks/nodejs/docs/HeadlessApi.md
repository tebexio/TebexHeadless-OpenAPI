# TebexHeadlessApi.HeadlessApi

All URIs are relative to *https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applyCoupon**](HeadlessApi.md#applyCoupon) | **POST** /baskets/{basketIdent}/coupons | Apply a coupon
[**applyCreatorCode**](HeadlessApi.md#applyCreatorCode) | **POST** /baskets/{basketIdent}/creator-codes | Apply a creator code
[**applyGiftCard**](HeadlessApi.md#applyGiftCard) | **POST** /baskets/{basketIdent}/giftcards | Apply a gift card
[**createBasket**](HeadlessApi.md#createBasket) | **POST** /baskets | Create a new basket
[**createDynamicPackage**](HeadlessApi.md#createDynamicPackage) | **PUT** /baskets/{basketIdent}/dynamic-packages | Add packages to a dynamic category for a basket.
[**getAllPackages**](HeadlessApi.md#getAllPackages) | **GET** /packages | Get all packages
[**getAllPackagesWithAuthedIP**](HeadlessApi.md#getAllPackagesWithAuthedIP) | **GET** /packages?ipAddress&#x3D;{ipAddress} | Get packages
[**getAllPackagesWithAuthedIPAndBasket**](HeadlessApi.md#getAllPackagesWithAuthedIPAndBasket) | **GET** /packages?ipAddress&#x3D;{ipAddress}&amp;basketIdent&#x3D;{basketIdent} | Get packages available for IP and basket
[**getBasket**](HeadlessApi.md#getBasket) | **GET** /baskets/{basketIdent} | Get a basket
[**getBasketAuthUrl**](HeadlessApi.md#getBasketAuthUrl) | **GET** /baskets/{basketIdent}/auth?returnUrl&#x3D;{returnUrl} | Get auth links for basket
[**getCategories**](HeadlessApi.md#getCategories) | **GET** /categories | Get all categories
[**getCategoriesIncludePackages**](HeadlessApi.md#getCategoriesIncludePackages) | **GET** /categories?includePackages&#x3D;1 | Gets all categories and packages
[**getCategory**](HeadlessApi.md#getCategory) | **GET** /categories/{categoryId} | Get specific category
[**getCategoryIncludeDynamicPackages**](HeadlessApi.md#getCategoryIncludeDynamicPackages) | **GET** /categories/{categoryId}?includePackages&#x3D;1&amp;basketIdent&#x3D;{basketIdent} | Gets a specific category including packages, populating a dynamic category for the given basket.
[**getCategoryIncludePackages**](HeadlessApi.md#getCategoryIncludePackages) | **GET** /categories/{categoryId}?includePackages&#x3D;1 | Get a category with all packages
[**getCustomPages**](HeadlessApi.md#getCustomPages) | **GET** /pages | Get custom pages defined for the webstore.
[**getDynamicCategories**](HeadlessApi.md#getDynamicCategories) | **GET** /categories?includePackages&#x3D;1&amp;basketIdent&#x3D;{basketIdent} | Get Dynamic Categories
[**getPackage**](HeadlessApi.md#getPackage) | **GET** /packages/{packageId} | Get package
[**getPackagesForBasket**](HeadlessApi.md#getPackagesForBasket) | **GET** /packages?basketIdent&#x3D;{basketIdent} | Get packages available for basket
[**getSidebar**](HeadlessApi.md#getSidebar) | **GET** /sidebar | Retrieves the available sidebar modules.
[**getUserTieredCategories**](HeadlessApi.md#getUserTieredCategories) | **GET** /categories?usernameId&#x3D;{usernameId}&amp;includePackages&#x3D;1 | Get user&#39;s tiered categories
[**getWebstore**](HeadlessApi.md#getWebstore) | **GET** / | Get the webstore&#39;s information
[**removeCoupon**](HeadlessApi.md#removeCoupon) | **POST** /baskets/{basketIdent}/coupons/remove | Remove a coupon from the basket.
[**removeCreatorCode**](HeadlessApi.md#removeCreatorCode) | **POST** /baskets/{basketIdent}/creator-codes/remove | Removes the creator code from the basket.
[**removeGiftCard**](HeadlessApi.md#removeGiftCard) | **POST** /baskets/{basketIdent}/giftcards/remove | Remove a gift card from the basket.
[**updateTier**](HeadlessApi.md#updateTier) | **PATCH** /tiers/{tierId} | Update user&#39;s tier to a new package



## applyCoupon

> ApplyCoupon200Response applyCoupon(basketIdent, opts)

Apply a coupon

Applies a coupon to a basket.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
let opts = {
  'applyCouponRequest': new TebexHeadlessApi.ApplyCouponRequest() // ApplyCouponRequest | Provide a `coupon_code` to apply to the basket.
};
apiInstance.applyCoupon(basketIdent, opts, (error, data, response) => {
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
 **applyCouponRequest** | [**ApplyCouponRequest**](ApplyCouponRequest.md)| Provide a &#x60;coupon_code&#x60; to apply to the basket. | [optional] 

### Return type

[**ApplyCoupon200Response**](ApplyCoupon200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## applyCreatorCode

> ApplyCreatorCode200Response applyCreatorCode(basketIdent, opts)

Apply a creator code

Applies a creator code to a basket.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
let opts = {
  'applyCreatorCodeRequest': new TebexHeadlessApi.ApplyCreatorCodeRequest() // ApplyCreatorCodeRequest | Provide a `creator_code` to apply to the basket.
};
apiInstance.applyCreatorCode(basketIdent, opts, (error, data, response) => {
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
 **applyCreatorCodeRequest** | [**ApplyCreatorCodeRequest**](ApplyCreatorCodeRequest.md)| Provide a &#x60;creator_code&#x60; to apply to the basket. | [optional] 

### Return type

[**ApplyCreatorCode200Response**](ApplyCreatorCode200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## applyGiftCard

> ApplyGiftCard200Response applyGiftCard(basketIdent, opts)

Apply a gift card

Applies a gift card to the basket.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
let opts = {
  'giftCard': new TebexHeadlessApi.GiftCard() // GiftCard | Provide a `card_number` to apply to the basket.
};
apiInstance.applyGiftCard(basketIdent, opts, (error, data, response) => {
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
 **giftCard** | [**GiftCard**](GiftCard.md)| Provide a &#x60;card_number&#x60; to apply to the basket. | [optional] 

### Return type

[**ApplyGiftCard200Response**](ApplyGiftCard200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createBasket

> BasketResponse createBasket(opts)

Create a new basket

Creates a new basket for use during checkout.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let opts = {
  'createBasketRequest': new TebexHeadlessApi.CreateBasketRequest() // CreateBasketRequest | 
};
apiInstance.createBasket(opts, (error, data, response) => {
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
 **createBasketRequest** | [**CreateBasketRequest**](CreateBasketRequest.md)|  | [optional] 

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDynamicPackage

> DynamicPackagesResponse createDynamicPackage(basketIdent, opts)

Add packages to a dynamic category for a basket.

Populates a dynamic category with custom packages for the given basket. Dynamic categories are created in the creator panel with the type &#x60;dynamic&#x60;, and are typically populated in response to a &#x60;basket.authenticated&#x60; webhook.  Once created, the packages can be fetched using the category endpoints with both &#x60;includePackages&#x3D;1&#x60; and &#x60;basketIdent&#x60; provided.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
let opts = {
  'dynamicPackagesRequest': new TebexHeadlessApi.DynamicPackagesRequest() // DynamicPackagesRequest | 
};
apiInstance.createDynamicPackage(basketIdent, opts, (error, data, response) => {
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
 **dynamicPackagesRequest** | [**DynamicPackagesRequest**](DynamicPackagesRequest.md)|  | [optional] 

### Return type

[**DynamicPackagesResponse**](DynamicPackagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAllPackages

> PackageResponse getAllPackages()

Get all packages

Gets all packages from a webstore.  Note: this endpoint does not support packages belonging to dynamic categories. Use the category endpoints with &#x60;includePackages&#x3D;1&#x60; and &#x60;basketIdent&#x60; to fetch dynamic packages.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
apiInstance.getAllPackages((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## getAllPackagesWithAuthedIP

> PackageResponse getAllPackagesWithAuthedIP(ipAddress)

Get packages

Gets all packages from a webstore.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';
let defaultClient = TebexHeadlessApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let ipAddress = "127.0.0.1"; // String | An IP address can be provided with authenticated requests
apiInstance.getAllPackagesWithAuthedIP(ipAddress, (error, data, response) => {
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
 **ipAddress** | **String**| An IP address can be provided with authenticated requests | 

### Return type

[**PackageResponse**](PackageResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllPackagesWithAuthedIPAndBasket

> PackageResponse getAllPackagesWithAuthedIPAndBasket(basketIdent, ipAddress)

Get packages available for IP and basket

Gets all packages from a webstore.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';
let defaultClient = TebexHeadlessApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
let ipAddress = "127.0.0.1"; // String | An IP address can be provided with authenticated requests.
apiInstance.getAllPackagesWithAuthedIPAndBasket(basketIdent, ipAddress, (error, data, response) => {
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
 **ipAddress** | **String**| An IP address can be provided with authenticated requests. | 

### Return type

[**PackageResponse**](PackageResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBasket

> BasketResponse getBasket(basketIdent)

Get a basket

Gets a basket associated with the provided identifier.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
apiInstance.getBasket(basketIdent, (error, data, response) => {
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

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBasketAuthUrl

> [BasketAuthResponseInner] getBasketAuthUrl(basketIdent, returnUrl)

Get auth links for basket

Fetches a basket&#39;s auth URL. The player should be directed here in order for them to authorize their account. When complete, they will be returned to the provided &#x60;returnUrl&#x60; and the basket will be authorized from that moment onwards.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
let returnUrl = "https://example.tebex.io/"; // String | The URL you would like to redirect the user to after successful basket authentication.
apiInstance.getBasketAuthUrl(basketIdent, returnUrl, (error, data, response) => {
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
 **returnUrl** | **String**| The URL you would like to redirect the user to after successful basket authentication. | 

### Return type

[**[BasketAuthResponseInner]**](BasketAuthResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCategories

> CategoryResponse getCategories()

Get all categories

Gets all categories from a webstore. This does not include package information. To include package information, add &#x60;?includePackages&#x3D;1&#x60; to the URL.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
apiInstance.getCategories((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## getCategoriesIncludePackages

> CategoryResponse getCategoriesIncludePackages()

Gets all categories and packages

Gets all categories from a webstore including packages.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
apiInstance.getCategoriesIncludePackages((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## getCategory

> SingleCategoryResponse getCategory(categoryId)

Get specific category

Gets information about a category and returns the packages in that category.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let categoryId = "127244343"; // String | The ID or slug of the category to fetch.
apiInstance.getCategory(categoryId, (error, data, response) => {
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
 **categoryId** | **String**| The ID or slug of the category to fetch. | 

### Return type

[**SingleCategoryResponse**](SingleCategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCategoryIncludeDynamicPackages

> SingleCategoryResponse getCategoryIncludeDynamicPackages(categoryId, basketIdent)

Gets a specific category including packages, populating a dynamic category for the given basket.

Gets information about a category and returns the packages in that category. When the category is dynamic and &#x60;basketIdent&#x60; is provided, the category is populated with the packages associated with that basket.  If a basket identifier is not provided, a dynamic category will be empty as the basket is required to relate packages to the category.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let categoryId = "1234"; // String | The ID or slug of the category to fetch.
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
apiInstance.getCategoryIncludeDynamicPackages(categoryId, basketIdent, (error, data, response) => {
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
 **categoryId** | **String**| The ID or slug of the category to fetch. | 
 **basketIdent** | **String**| The basket identifier. | 

### Return type

[**SingleCategoryResponse**](SingleCategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCategoryIncludePackages

> SingleCategoryResponse getCategoryIncludePackages(categoryId)

Get a category with all packages

Gets information about a category and returns the packages in that category.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let categoryId = "127244343"; // String | The ID or slug of the category to fetch.
apiInstance.getCategoryIncludePackages(categoryId, (error, data, response) => {
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
 **categoryId** | **String**| The ID or slug of the category to fetch. | 

### Return type

[**SingleCategoryResponse**](SingleCategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomPages

> CMSPagesResponse getCustomPages()

Get custom pages defined for the webstore.

Gets a list of custom pages associated with the webstore. These contain a &#x60;content&#x60; variable with the HTML content of the page.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
apiInstance.getCustomPages((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## getDynamicCategories

> CategoryResponse getDynamicCategories(basketIdent)

Get Dynamic Categories

Gets all categories from a webstore including packages. When &#x60;basketIdent&#x60; is provided, dynamic categories are populated with the packages associated with that basket.  If a basket identifier is not provided, dynamic categories will be empty as the basket is required to relate packages to the category.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
apiInstance.getDynamicCategories(basketIdent, (error, data, response) => {
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

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPackage

> SinglePackageResponse getPackage(packageId)

Get package

Gets a package from a webstore by its ID or slug.  Note: this endpoint does not support packages belonging to dynamic categories. Use the category endpoints with &#x60;includePackages&#x3D;1&#x60; and &#x60;basketIdent&#x60; to fetch dynamic packages.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let packageId = "1272441812"; // String | The package's ID or slug.
apiInstance.getPackage(packageId, (error, data, response) => {
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
 **packageId** | **String**| The package&#39;s ID or slug. | 

### Return type

[**SinglePackageResponse**](SinglePackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPackagesForBasket

> PackageResponse getPackagesForBasket(basketIdent)

Get packages available for basket

Gets all packages available to the provided basket.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
apiInstance.getPackagesForBasket(basketIdent, (error, data, response) => {
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

### Return type

[**PackageResponse**](PackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSidebar

> ModulesResponse getSidebar(token)

Retrieves the available sidebar modules.

Retrieves the available sidebar modules configured for the store.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let token = "some-uuid"; // String | The webstore identifier.
apiInstance.getSidebar(token, (error, data, response) => {
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

[**ModulesResponse**](ModulesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserTieredCategories

> CategoryResponse getUserTieredCategories(usernameId)

Get user&#39;s tiered categories

Gets all categories from the webstore, returning active tier information for the given player.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';
let defaultClient = TebexHeadlessApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let usernameId = 76561198042467022; // Number | 
apiInstance.getUserTieredCategories(usernameId, (error, data, response) => {
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
 **usernameId** | **Number**|  | 

### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebstore

> WebstoreResponse getWebstore()

Get the webstore&#39;s information

Gets the webstore associated with the provided token

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
apiInstance.getWebstore((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## removeCoupon

> removeCoupon(basketIdent, opts)

Remove a coupon from the basket.

Removes a coupon code from a basket

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
let opts = {
  'applyCouponRequest': new TebexHeadlessApi.ApplyCouponRequest() // ApplyCouponRequest | Provide a `coupon_code` to remove from the basket.
};
apiInstance.removeCoupon(basketIdent, opts, (error, data, response) => {
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
 **applyCouponRequest** | [**ApplyCouponRequest**](ApplyCouponRequest.md)| Provide a &#x60;coupon_code&#x60; to remove from the basket. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## removeCreatorCode

> removeCreatorCode(basketIdent)

Removes the creator code from the basket.

Removes the creator code from the basket.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
apiInstance.removeCreatorCode(basketIdent, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## removeGiftCard

> removeGiftCard(basketIdent, opts)

Remove a gift card from the basket.

Removes a gift card from the basket.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let basketIdent = "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c"; // String | The basket identifier.
let opts = {
  'removeGiftCardRequest': new TebexHeadlessApi.RemoveGiftCardRequest() // RemoveGiftCardRequest | Provide the `card_number` to remove from the basket.
};
apiInstance.removeGiftCard(basketIdent, opts, (error, data, response) => {
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
 **removeGiftCardRequest** | [**RemoveGiftCardRequest**](RemoveGiftCardRequest.md)| Provide the &#x60;card_number&#x60; to remove from the basket. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## updateTier

> UpdateTierResponse updateTier(tierId, opts)

Update user&#39;s tier to a new package

Updates a tier to a new package. A recurring payment updated webhook is sent when an update is successful.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';
let defaultClient = TebexHeadlessApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let tierId = 6276316; // Number | The tier identifier
let opts = {
  'updateTierRequest': new TebexHeadlessApi.UpdateTierRequest() // UpdateTierRequest | 
};
apiInstance.updateTier(tierId, opts, (error, data, response) => {
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
 **tierId** | **Number**| The tier identifier | 
 **updateTierRequest** | [**UpdateTierRequest**](UpdateTierRequest.md)|  | [optional] 

### Return type

[**UpdateTierResponse**](UpdateTierResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


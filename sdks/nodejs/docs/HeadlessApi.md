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
[**getCommunityGoal**](HeadlessApi.md#getCommunityGoal) | **GET** /community-goals/{communityGoalId} | Get a community goal.
[**getCommunityGoals**](HeadlessApi.md#getCommunityGoals) | **GET** /community-goals | Get the webstore&#39;s community goals.
[**getCustomPages**](HeadlessApi.md#getCustomPages) | **GET** /pages | Get custom pages defined for the webstore.
[**getDynamicCategories**](HeadlessApi.md#getDynamicCategories) | **GET** /categories?includePackages&#x3D;1&amp;basketIdent&#x3D;{basketIdent} | Get Dynamic Categories
[**getPackage**](HeadlessApi.md#getPackage) | **GET** /packages/{packageId} | Get package
[**getPackagesForBasket**](HeadlessApi.md#getPackagesForBasket) | **GET** /packages?basketIdent&#x3D;{basketIdent} | Get packages available for basket
[**getRecentPayments**](HeadlessApi.md#getRecentPayments) | **GET** /recent-payments | Get the webstore&#39;s recent payments.
[**getSales**](HeadlessApi.md#getSales) | **GET** /sales | Get the webstore&#39;s active sales.
[**getSidebar**](HeadlessApi.md#getSidebar) | **GET** /sidebar | Retrieves the available sidebar modules.
[**getTopCustomer**](HeadlessApi.md#getTopCustomer) | **GET** /top-customers | Get the webstore&#39;s top customer.
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

Populates a dynamic category with custom packages for the given basket. Dynamic categories are created in the creator panel with the type &#x60;dynamic&#x60;, and are typically populated in response to a &#x60;basket.authenticated&#x60; webhook.  Requires basic auth: the username is the webstore identifier and the password is the account&#39;s checkout API key.  Once created, the packages can be fetched using the category endpoints with both &#x60;includePackages&#x3D;1&#x60; and &#x60;basketIdent&#x60; provided.

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

[basicAuth](../README.md#basicAuth)

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


## getCommunityGoal

> CommunityGoalResponse getCommunityGoal(communityGoalId)

Get a community goal.

Gets a single community goal by its ID.  Requires basic auth: the username is the webstore identifier and the password is the account&#39;s checkout API key.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';
let defaultClient = TebexHeadlessApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let communityGoalId = 1; // Number | The community goal ID.
apiInstance.getCommunityGoal(communityGoalId, (error, data, response) => {
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
 **communityGoalId** | **Number**| The community goal ID. | 

### Return type

[**CommunityGoalResponse**](CommunityGoalResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCommunityGoals

> CommunityGoalsResponse getCommunityGoals(opts)

Get the webstore&#39;s community goals.

Lists the store&#39;s community goals. This does not depend on the sidebar&#39;s Community Goal module being configured.  Requires basic auth: the username is the webstore identifier and the password is the account&#39;s checkout API key.  If there are no matching goals, &#x60;data&#x60; is an empty array.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';
let defaultClient = TebexHeadlessApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let opts = {
  'status': ["null"] // [String] | Only return goals with these statuses, e.g. `status[]=active&status[]=completed`. A single `status=active` is also accepted. With no filter, all goals are returned.
};
apiInstance.getCommunityGoals(opts, (error, data, response) => {
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
 **status** | [**[String]**](String.md)| Only return goals with these statuses, e.g. &#x60;status[]&#x3D;active&amp;status[]&#x3D;completed&#x60;. A single &#x60;status&#x3D;active&#x60; is also accepted. With no filter, all goals are returned. | [optional] 

### Return type

[**CommunityGoalsResponse**](CommunityGoalsResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

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

Gets a package from a webstore by its &#x60;ident&#x60; or numeric ID.  - Using &#x60;ident&#x60; is recommended, since it works for every package type. Send it back exactly as returned; don&#39;t build or parse it. - &#x60;id&#x60; stays numeric for standard packages. For external packages &#x60;id&#x60; is synthetic, so always use &#x60;ident&#x60;.  Note: this endpoint does not support packages belonging to dynamic categories. Use the category endpoints with &#x60;includePackages&#x3D;1&#x60; and &#x60;basketIdent&#x60; to fetch dynamic packages.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let packageId = "1272441812"; // String | The package's `ident` (recommended, e.g. `pkg_12_456`) or numeric ID.
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
 **packageId** | **String**| The package&#39;s &#x60;ident&#x60; (recommended, e.g. &#x60;pkg_12_456&#x60;) or numeric ID. | 

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


## getRecentPayments

> RecentPaymentsResponse getRecentPayments(opts)

Get the webstore&#39;s recent payments.

Lists the store&#39;s most recent payments, newest first. This does not depend on the sidebar&#39;s Recent Payments module being configured.  Requires basic auth: the username is the webstore identifier and the password is the account&#39;s checkout API key.  - Free, manual, zero-price and incomplete payments are never included. - Responses are cached for 10 minutes. - If there are no payments, &#x60;data&#x60; is an empty array.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let opts = {
  'limit': 5 // Number | The number of payments to return, from 1 to 50.
};
apiInstance.getRecentPayments(opts, (error, data, response) => {
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
 **limit** | **Number**| The number of payments to return, from 1 to 50. | [optional] [default to 5]

### Return type

[**RecentPaymentsResponse**](RecentPaymentsResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSales

> SalesResponse getSales()

Get the webstore&#39;s active sales.

Lists the store&#39;s currently active sales, in the same order as the control panel. No authentication is required.  - Only sales whose start/end window includes the current time are returned. Expired sales, future sales and Lighthouse sales are left out. - Hidden packages and categories (disabled, removed, unpublished, or inside a disabled category) are left out of every array. - If there are no active sales, &#x60;data&#x60; is an empty array.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
apiInstance.getSales((error, data, response) => {
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

[**SalesResponse**](SalesResponse.md)

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


## getTopCustomer

> TopCustomerResponse getTopCustomer(opts)

Get the webstore&#39;s top customer.

Gets the customer who spent the most in the given period. This does not depend on the sidebar&#39;s Top Customer module being configured.  Requires basic auth: the username is the webstore identifier and the password is the account&#39;s checkout API key.  - &#x60;total&#x60; is in the account&#39;s currency, net of tax, and matches the revenue statistics in the control panel. - Free, manual, zero-price and incomplete payments are never counted. - Responses are cached for 10 minutes. - If there is no top customer for the period, &#x60;data&#x60; is null.

### Example

```javascript
import TebexHeadlessApi from 'tebex_headless_api';
let defaultClient = TebexHeadlessApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new TebexHeadlessApi.HeadlessApi();
let opts = {
  'period': "'monthly'" // String | The period to rank customers over. `none` covers all time.
};
apiInstance.getTopCustomer(opts, (error, data, response) => {
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
 **period** | **String**| The period to rank customers over. &#x60;none&#x60; covers all time. | [optional] [default to &#39;monthly&#39;]

### Return type

[**TopCustomerResponse**](TopCustomerResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

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


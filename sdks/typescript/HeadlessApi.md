# .HeadlessApi

All URIs are relative to *https://headless.tebex.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBasketPackage**](HeadlessApi.md#addBasketPackage) | **POST** /baskets/{basketIdent}/packages | Add a package to a basket
[**applyCoupon**](HeadlessApi.md#applyCoupon) | **POST** /accounts/{token}/baskets/{basketIdent}/coupons | Apply a coupon to a basket.
[**applyCreatorCode**](HeadlessApi.md#applyCreatorCode) | **POST** /accounts/{token}/baskets/{basketIdent}/creator-codes | Apply a creator code to a basket.
[**applyGiftCard**](HeadlessApi.md#applyGiftCard) | **POST** /accounts/{token}/baskets/{basketIdent}/giftcards | Apply a gift card to a basket.
[**createBasket**](HeadlessApi.md#createBasket) | **POST** /accounts/{token}/baskets | Create a new basket
[**getAllCategories**](HeadlessApi.md#getAllCategories) | **GET** /accounts/{token}/categories | Gets all categories available in the webstore.
[**getAllCategoriesIncludingPackages**](HeadlessApi.md#getAllCategoriesIncludingPackages) | **GET** /accounts/{token}/categories?includePackages&#x3D;1 | Gets a store\&#39;s categories including all package information with them.
[**getAllPackages**](HeadlessApi.md#getAllPackages) | **GET** /accounts/{token}/packages | Fetch all packages from a webstore
[**getAllPackagesWithAuthedIP**](HeadlessApi.md#getAllPackagesWithAuthedIP) | **GET** /accounts/{token}/packages?ipAddress&#x3D;{ipAddress} | Fetch a package from a webstore by its identifier
[**getAllPackagesWithAuthedIPAndBasket**](HeadlessApi.md#getAllPackagesWithAuthedIPAndBasket) | **GET** /accounts/{token}/packages?ipAddress&#x3D;{ipAddress}&amp;basketIdent&#x3D;{basketIdent} | Fetch a package from a webstore by its identifier
[**getAllPackagesWithBasket**](HeadlessApi.md#getAllPackagesWithBasket) | **GET** /accounts/{token}/packages?basketIdent&#x3D;{basketIdent} | Fetch a package from a webstore by its identifier
[**getBasketAuthUrl**](HeadlessApi.md#getBasketAuthUrl) | **GET** /accounts/{token}/baskets/{basketIdent}/auth?returnUrl&#x3D;{returnUrl} | Get authentication links for a basket.
[**getBasketById**](HeadlessApi.md#getBasketById) | **GET** /accounts/{token}/baskets/{basketIdent} | Fetch a basket from a webstore by its identifier
[**getCMSPages**](HeadlessApi.md#getCMSPages) | **GET** /accounts/{token}/pages | Fetch the custom pages associated with the store.
[**getCategoryById**](HeadlessApi.md#getCategoryById) | **GET** /accounts/{token}/categories/{categoryId} | Gets information about a specific category
[**getCategoryIncludingPackages**](HeadlessApi.md#getCategoryIncludingPackages) | **GET** /accounts/{token}/categories/{categoryId}?includePackages&#x3D;1 | Gets information about a specific category, including all the packages in the category
[**getPackageById**](HeadlessApi.md#getPackageById) | **GET** /accounts/{token}/packages/{packageId} | Fetch a package from a webstore by its identifier
[**getTieredCategoriesForUser**](HeadlessApi.md#getTieredCategoriesForUser) | **GET** /accounts/{token}/categories?usernameId&#x3D;{usernameId} | Gets a store\&#39;s categories including all package information with them.
[**getWebstoreById**](HeadlessApi.md#getWebstoreById) | **GET** /accounts/{token} | Fetch a webstore by its identifier
[**removeBasketPackage**](HeadlessApi.md#removeBasketPackage) | **POST** /baskets/{basketIdent}/packages/remove | Remove a package from a basket
[**removeCoupon**](HeadlessApi.md#removeCoupon) | **POST** /accounts/{token}/baskets/{basketIdent}/coupons/remove | Remove a coupon from the basket.
[**removeCreatorCode**](HeadlessApi.md#removeCreatorCode) | **POST** /accounts/{token}/baskets/{basketIdent}/creator-codes/remove | Remove a creator code from the basket.
[**removeGiftCard**](HeadlessApi.md#removeGiftCard) | **POST** /accounts/{token}/baskets/{basketIdent}/giftcards/remove | Remove a gift card from the basket.
[**updatePackageQuantity**](HeadlessApi.md#updatePackageQuantity) | **PUT** /baskets/{basketIdent}/packages/{packageId} | Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed.
[**updateTier**](HeadlessApi.md#updateTier) | **PATCH** /accounts/{token}/tiers/{tierId} | Updates the given teir to the provided package.


# **addBasketPackage**
> Basket addBasketPackage()

Add a package with the given ID to the basket.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiAddBasketPackageRequest = {
  // string | The basket identifier.
  basketIdent: "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c",
  // AddBasketPackageRequest (optional)
  addBasketPackageRequest: {
    packageId: "6276316",
    quantity: 1,
  },
};

apiInstance.addBasketPackage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addBasketPackageRequest** | **AddBasketPackageRequest**|  |
 **basketIdent** | [**string**] | The basket identifier. | defaults to undefined


### Return type

**Basket**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response. |  -  |
**422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **applyCoupon**
> BasketResponse applyCoupon()

Applies a creator code to a basket.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiApplyCouponRequest = {
  // string | The webstore identifier.
  token: "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb",
  // string | The basket identifier.
  basketIdent: "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c",
  // Coupon | Provide a `coupon_code` to apply to the basket. (optional)
  coupon: {
    couponCode: "Academy10",
  },
};

apiInstance.applyCoupon(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon** | **Coupon**| Provide a &#x60;coupon_code&#x60; to apply to the basket. |
 **token** | [**string**] | The webstore identifier. | defaults to undefined
 **basketIdent** | [**string**] | The basket identifier. | defaults to undefined


### Return type

**BasketResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns the basket. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **applyCreatorCode**
> BasketResponse applyCreatorCode()

Applies a creator code to a basket.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiApplyCreatorCodeRequest = {
  // string | The webstore identifier.
  token: "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb",
  // string | The basket identifier.
  basketIdent: "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c",
  // ApplyCreatorCodeRequest | Provide a `creator_code` to apply to the basket. (optional)
  applyCreatorCodeRequest: {
    creatorCode: "Academy10",
  },
};

apiInstance.applyCreatorCode(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applyCreatorCodeRequest** | **ApplyCreatorCodeRequest**| Provide a &#x60;creator_code&#x60; to apply to the basket. |
 **token** | [**string**] | The webstore identifier. | defaults to undefined
 **basketIdent** | [**string**] | The basket identifier. | defaults to undefined


### Return type

**BasketResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns the basket. |  -  |
**422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **applyGiftCard**
> BasketResponse applyGiftCard()

Applies a creator code to a basket.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiApplyGiftCardRequest = {
  // string | The webstore identifier.
  token: "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb",
  // string | The basket identifier.
  basketIdent: "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c",
  // GiftCard | Provide a `card_number` to apply to the basket. (optional)
  giftCard: {
    cardNumber: "0127 0244 7210 1111",
  },
};

apiInstance.applyGiftCard(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **giftCard** | **GiftCard**| Provide a &#x60;card_number&#x60; to apply to the basket. |
 **token** | [**string**] | The webstore identifier. | defaults to undefined
 **basketIdent** | [**string**] | The basket identifier. | defaults to undefined


### Return type

**BasketResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns the basket. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createBasket**
> BasketResponse createBasket()

Creates a new basket for use during checkout.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiCreateBasketRequest = {
  // string | The webstore identifier.
  token: "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb",
  // CreateBasketRequest (optional)
  createBasketRequest: {
    completeUrl: "https://example.tebex.io/thank-you",
    cancelUrl: "https://tebex.io/",
    custom: {},
    completeAutoRedirect: true,
  },
};

apiInstance.createBasket(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBasketRequest** | **CreateBasketRequest**|  |
 **token** | [**string**] | The webstore identifier. | defaults to undefined


### Return type

**BasketResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns the basket information. |  -  |
**422** | The provided webstore ID is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllCategories**
> CategoryResponse getAllCategories()

Gets all categories from a webstore. This does not include package information. To include package information, add `?includePackages=1` to the URL.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiGetAllCategoriesRequest = {
  // string | The webstore identifier.
  token: "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb",
};

apiInstance.getAllCategories(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**string**] | The webstore identifier. | defaults to undefined


### Return type

**CategoryResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns a list of category information. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllCategoriesIncludingPackages**
> CategoryResponse getAllCategoriesIncludingPackages()

Gets all categories from a webstore including packages.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiGetAllCategoriesIncludingPackagesRequest = {
  // string | The webstore identifier.
  token: "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb",
};

apiInstance.getAllCategoriesIncludingPackages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**string**] | The webstore identifier. | defaults to undefined


### Return type

**CategoryResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns a list of category information. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllPackages**
> PackageResponse getAllPackages()

Gets all packages from a webstore.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiGetAllPackagesRequest = {
  // string | The webstore identifier.
  token: "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb",
};

apiInstance.getAllPackages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**string**] | The webstore identifier. | defaults to undefined


### Return type

**PackageResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns a list of package information. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllPackagesWithAuthedIP**
> PackageResponse getAllPackagesWithAuthedIP()

Gets all packages from a webstore.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiGetAllPackagesWithAuthedIPRequest = {
  // string | The webstore identifier.
  token: "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb",
  // string | An IP address can be provided with authenticated requests.
  ipAddress: "127.0.0.1",
};

apiInstance.getAllPackagesWithAuthedIP(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**string**] | The webstore identifier. | defaults to undefined
 **ipAddress** | [**string**] | An IP address can be provided with authenticated requests. | defaults to undefined


### Return type

**PackageResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns a list of package information. |  -  |
**422** | The provided request is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllPackagesWithAuthedIPAndBasket**
> PackageResponse getAllPackagesWithAuthedIPAndBasket()

Gets all packages from a webstore.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiGetAllPackagesWithAuthedIPAndBasketRequest = {
  // string | The webstore identifier.
  token: "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb",
  // string | The basket identifier.
  basketIdent: "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c",
  // string | An IP address can be provided with authenticated requests.
  ipAddress: "127.0.0.1",
};

apiInstance.getAllPackagesWithAuthedIPAndBasket(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**string**] | The webstore identifier. | defaults to undefined
 **basketIdent** | [**string**] | The basket identifier. | defaults to undefined
 **ipAddress** | [**string**] | An IP address can be provided with authenticated requests. | defaults to undefined


### Return type

**PackageResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns a list of package information. |  -  |
**422** | The provided request is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllPackagesWithBasket**
> PackageResponse getAllPackagesWithBasket()

Gets all packages from a webstore.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiGetAllPackagesWithBasketRequest = {
  // string | The webstore identifier.
  token: "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb",
  // string | The basket identifier.
  basketIdent: "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c",
};

apiInstance.getAllPackagesWithBasket(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**string**] | The webstore identifier. | defaults to undefined
 **basketIdent** | [**string**] | The basket identifier. | defaults to undefined


### Return type

**PackageResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns a list of package information. |  -  |
**422** | The provided request is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBasketAuthUrl**
> Array<BasketAuthResponseInner> getBasketAuthUrl()

Fetches a basket\'s auth URL.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiGetBasketAuthUrlRequest = {
  // string | The webstore identifier.
  token: "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb",
  // string | The basket identifier.
  basketIdent: "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c",
  // string | The URL you would like to redirect the user to after successful basket authentication.
  returnUrl: "https://example.tebex.io/",
};

apiInstance.getBasketAuthUrl(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**string**] | The webstore identifier. | defaults to undefined
 **basketIdent** | [**string**] | The basket identifier. | defaults to undefined
 **returnUrl** | [**string**] | The URL you would like to redirect the user to after successful basket authentication. | defaults to undefined


### Return type

**Array<BasketAuthResponseInner>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns the basket auth information. |  -  |
**422** | The provided webstore ID or basket ID is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBasketById**
> BasketResponse getBasketById()

Gets a basket associated with the provided identifier.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiGetBasketByIdRequest = {
  // string | The webstore identifier.
  token: "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb",
  // string | The basket identifier.
  basketIdent: "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c",
};

apiInstance.getBasketById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**string**] | The webstore identifier. | defaults to undefined
 **basketIdent** | [**string**] | The basket identifier. | defaults to undefined


### Return type

**BasketResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns the basket information. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCMSPages**
> CMSPagesResponse getCMSPages()

Gets a list of custom pages associated with the webstore. These contain a `content` variable with the HTML content of the page.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiGetCMSPagesRequest = {
  // string | The webstore identifier.
  token: "some-uuid",
};

apiInstance.getCMSPages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**string**] | The webstore identifier. | defaults to undefined


### Return type

**CMSPagesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns the webstore\&#39;s pages. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCategoryById**
> CategoryResponse getCategoryById()

Gets information about a category and returns the packages in that category.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiGetCategoryByIdRequest = {
  // string | The webstore identifier.
  token: "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb",
  // string | The ID of the category to fetch.
  categoryId: "127244343",
};

apiInstance.getCategoryById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**string**] | The webstore identifier. | defaults to undefined
 **categoryId** | [**string**] | The ID of the category to fetch. | defaults to undefined


### Return type

**CategoryResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns the category without package information. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCategoryIncludingPackages**
> CategoryResponse getCategoryIncludingPackages()

Gets information about a category and returns the packages in that category.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiGetCategoryIncludingPackagesRequest = {
  // string | The webstore identifier.
  token: "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb",
  // string | The ID of the category to fetch.
  categoryId: "127244343",
};

apiInstance.getCategoryIncludingPackages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**string**] | The webstore identifier. | defaults to undefined
 **categoryId** | [**string**] | The ID of the category to fetch. | defaults to undefined


### Return type

**CategoryResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns the category with package information. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPackageById**
> PackageResponse getPackageById()

Gets a package from a webstore by ID.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiGetPackageByIdRequest = {
  // string | The webstore identifier.
  token: "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb",
  // number | The package\'s ID.
  packageId: 1272441812,
};

apiInstance.getPackageById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**string**] | The webstore identifier. | defaults to undefined
 **packageId** | [**number**] | The package\&#39;s ID. | defaults to undefined


### Return type

**PackageResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns the package information. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTieredCategoriesForUser**
> CategoryResponse getTieredCategoriesForUser()

Gets all categories from the webstore, returning active tier information for the given player.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiGetTieredCategoriesForUserRequest = {
  // string | The webstore identifier.
  token: "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb",
  // number
  usernameId: 76561198042467022,
};

apiInstance.getTieredCategoriesForUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**string**] | The webstore identifier. | defaults to undefined
 **usernameId** | [**number**] |  | defaults to undefined


### Return type

**CategoryResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns a list of category information. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWebstoreById**
> WebstoreResponse getWebstoreById()

Gets the webstore associated with the provided identifier.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiGetWebstoreByIdRequest = {
  // string | The webstore identifier.
  token: "some-uuid",
};

apiInstance.getWebstoreById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**string**] | The webstore identifier. | defaults to undefined


### Return type

**WebstoreResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns the webstore\&#39;s information. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeBasketPackage**
> Basket removeBasketPackage()

Remove the given package ID from the basket.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiRemoveBasketPackageRequest = {
  // string | The basket identifier.
  basketIdent: "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c",
  // RemoveBasketPackageRequest (optional)
  removeBasketPackageRequest: {
    packageId: "6276316",
  },
};

apiInstance.removeBasketPackage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **removeBasketPackageRequest** | **RemoveBasketPackageRequest**|  |
 **basketIdent** | [**string**] | The basket identifier. | defaults to undefined


### Return type

**Basket**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response returns the basket. |  -  |
**422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeCoupon**
> void removeCoupon()

Removes a coupon code from a basket

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiRemoveCouponRequest = {
  // string | The webstore identifier.
  token: "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb",
  // string | The basket identifier.
  basketIdent: "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c",
};

apiInstance.removeCoupon(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**string**] | The webstore identifier. | defaults to undefined
 **basketIdent** | [**string**] | The basket identifier. | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response. |  -  |
**422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeCreatorCode**
> void removeCreatorCode()

Applies a creator code to a basket.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiRemoveCreatorCodeRequest = {
  // string | The webstore identifier.
  token: "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb",
  // string | The basket identifier.
  basketIdent: "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c",
};

apiInstance.removeCreatorCode(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**string**] | The webstore identifier. | defaults to undefined
 **basketIdent** | [**string**] | The basket identifier. | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Creator code removed successfully. |  -  |
**422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeGiftCard**
> void removeGiftCard()

Removes a gift card from the basket.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiRemoveGiftCardRequest = {
  // string | The webstore identifier.
  token: "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb",
  // string | The basket identifier.
  basketIdent: "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c",
  // RemoveGiftCardRequest | Provide the `card_number` to remove from the basket. (optional)
  removeGiftCardRequest: {
    cardNumber: "0127 0244 7210 1111",
  },
};

apiInstance.removeGiftCard(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **removeGiftCardRequest** | **RemoveGiftCardRequest**| Provide the &#x60;card_number&#x60; to remove from the basket. |
 **token** | [**string**] | The webstore identifier. | defaults to undefined
 **basketIdent** | [**string**] | The basket identifier. | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gift card removed successfully. |  -  |
**422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePackageQuantity**
> void updatePackageQuantity()

Sets the quantity of the given item in the basket.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiUpdatePackageQuantityRequest = {
  // string | The basket identifier.
  basketIdent: "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c",
  // number | The package identifier.
  packageId: 6276316,
  // UpdatePackageQuantityRequest (optional)
  updatePackageQuantityRequest: {
    quantity: 1,
  },
};

apiInstance.updatePackageQuantity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatePackageQuantityRequest** | **UpdatePackageQuantityRequest**|  |
 **basketIdent** | [**string**] | The basket identifier. | defaults to undefined
 **packageId** | [**number**] | The package identifier. | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response. |  -  |
**422** | The provided request is invalid. The error response will include detail as to which parameter failed validation. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTier**
> UpdateTierResponse updateTier()

Updates a tier to a new package.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HeadlessApi(configuration);

let body:.HeadlessApiUpdateTierRequest = {
  // string | The webstore identifier.
  token: "some-uuid",
  // number | The tier identifier
  tierId: 6276316,
  // UpdateTierRequest (optional)
  updateTierRequest: {
    packageId: 123456789,
  },
};

apiInstance.updateTier(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateTierRequest** | **UpdateTierRequest**|  |
 **token** | [**string**] | The webstore identifier. | defaults to undefined
 **tierId** | [**number**] | The tier identifier | defaults to undefined


### Return type

**UpdateTierResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)



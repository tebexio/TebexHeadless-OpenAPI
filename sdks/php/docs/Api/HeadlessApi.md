# TebexHeadless\HeadlessApi

All URIs are relative to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**applyCoupon()**](HeadlessApi.md#applyCoupon) | **POST** /baskets/{basketIdent}/coupons | Apply a coupon |
| [**applyCreatorCode()**](HeadlessApi.md#applyCreatorCode) | **POST** /baskets/{basketIdent}/creator-codes | Apply a creator code |
| [**applyGiftCard()**](HeadlessApi.md#applyGiftCard) | **POST** /baskets/{basketIdent}/giftcards | Apply a gift card |
| [**createBasket()**](HeadlessApi.md#createBasket) | **POST** /baskets | Create a new basket |
| [**createDynamicPackage()**](HeadlessApi.md#createDynamicPackage) | **PUT** /baskets/{basketIdent}/dynamic-packages | Add packages to a dynamic category for a basket. |
| [**getAllPackages()**](HeadlessApi.md#getAllPackages) | **GET** /packages | Get all packages |
| [**getAllPackagesWithAuthedIP()**](HeadlessApi.md#getAllPackagesWithAuthedIP) | **GET** /packages?ipAddress&#x3D;{ipAddress} | Get packages |
| [**getAllPackagesWithAuthedIPAndBasket()**](HeadlessApi.md#getAllPackagesWithAuthedIPAndBasket) | **GET** /packages?ipAddress&#x3D;{ipAddress}&amp;basketIdent&#x3D;{basketIdent} | Get packages available for IP and basket |
| [**getBasket()**](HeadlessApi.md#getBasket) | **GET** /baskets/{basketIdent} | Get a basket |
| [**getBasketAuthUrl()**](HeadlessApi.md#getBasketAuthUrl) | **GET** /baskets/{basketIdent}/auth?returnUrl&#x3D;{returnUrl} | Get auth links for basket |
| [**getCategories()**](HeadlessApi.md#getCategories) | **GET** /categories | Get all categories |
| [**getCategoriesIncludePackages()**](HeadlessApi.md#getCategoriesIncludePackages) | **GET** /categories?includePackages&#x3D;1 | Gets all categories and packages |
| [**getCategory()**](HeadlessApi.md#getCategory) | **GET** /categories/{categoryId} | Get specific category |
| [**getCategoryIncludeDynamicPackages()**](HeadlessApi.md#getCategoryIncludeDynamicPackages) | **GET** /categories/{categoryId}?includePackages&#x3D;1&amp;basketIdent&#x3D;{basketIdent} | Gets a specific category including packages, populating a dynamic category for the given basket. |
| [**getCategoryIncludePackages()**](HeadlessApi.md#getCategoryIncludePackages) | **GET** /categories/{categoryId}?includePackages&#x3D;1 | Get a category with all packages |
| [**getCustomPages()**](HeadlessApi.md#getCustomPages) | **GET** /pages | Get custom pages defined for the webstore. |
| [**getDynamicCategories()**](HeadlessApi.md#getDynamicCategories) | **GET** /categories?includePackages&#x3D;1&amp;basketIdent&#x3D;{basketIdent} | Get Dynamic Categories |
| [**getPackage()**](HeadlessApi.md#getPackage) | **GET** /packages/{packageId} | Get package |
| [**getPackagesForBasket()**](HeadlessApi.md#getPackagesForBasket) | **GET** /packages?basketIdent&#x3D;{basketIdent} | Get packages available for basket |
| [**getSidebar()**](HeadlessApi.md#getSidebar) | **GET** /sidebar | Retrieves the available sidebar modules. |
| [**getUserTieredCategories()**](HeadlessApi.md#getUserTieredCategories) | **GET** /categories?usernameId&#x3D;{usernameId}&amp;includePackages&#x3D;1 | Get user&#39;s tiered categories |
| [**getWebstore()**](HeadlessApi.md#getWebstore) | **GET** / | Get the webstore&#39;s information |
| [**removeCoupon()**](HeadlessApi.md#removeCoupon) | **POST** /baskets/{basketIdent}/coupons/remove | Remove a coupon from the basket. |
| [**removeCreatorCode()**](HeadlessApi.md#removeCreatorCode) | **POST** /baskets/{basketIdent}/creator-codes/remove | Removes the creator code from the basket. |
| [**removeGiftCard()**](HeadlessApi.md#removeGiftCard) | **POST** /baskets/{basketIdent}/giftcards/remove | Remove a gift card from the basket. |
| [**updateTier()**](HeadlessApi.md#updateTier) | **PATCH** /tiers/{tierId} | Update user&#39;s tier to a new package |


## `applyCoupon()`

```php
applyCoupon($basket_ident, $apply_coupon_request): \TebexHeadless\Model\ApplyCoupon200Response
```

Apply a coupon

Applies a coupon to a basket.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.
$apply_coupon_request = new \TebexHeadless\Model\ApplyCouponRequest(); // \TebexHeadless\Model\ApplyCouponRequest | Provide a `coupon_code` to apply to the basket.

try {
    $result = $apiInstance->applyCoupon($basket_ident, $apply_coupon_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->applyCoupon: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **basket_ident** | **string**| The basket identifier. | |
| **apply_coupon_request** | [**\TebexHeadless\Model\ApplyCouponRequest**](../Model/ApplyCouponRequest.md)| Provide a &#x60;coupon_code&#x60; to apply to the basket. | [optional] |

### Return type

[**\TebexHeadless\Model\ApplyCoupon200Response**](../Model/ApplyCoupon200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `applyCreatorCode()`

```php
applyCreatorCode($basket_ident, $apply_creator_code_request): \TebexHeadless\Model\ApplyCreatorCode200Response
```

Apply a creator code

Applies a creator code to a basket.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.
$apply_creator_code_request = new \TebexHeadless\Model\ApplyCreatorCodeRequest(); // \TebexHeadless\Model\ApplyCreatorCodeRequest | Provide a `creator_code` to apply to the basket.

try {
    $result = $apiInstance->applyCreatorCode($basket_ident, $apply_creator_code_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->applyCreatorCode: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **basket_ident** | **string**| The basket identifier. | |
| **apply_creator_code_request** | [**\TebexHeadless\Model\ApplyCreatorCodeRequest**](../Model/ApplyCreatorCodeRequest.md)| Provide a &#x60;creator_code&#x60; to apply to the basket. | [optional] |

### Return type

[**\TebexHeadless\Model\ApplyCreatorCode200Response**](../Model/ApplyCreatorCode200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `applyGiftCard()`

```php
applyGiftCard($basket_ident, $gift_card): \TebexHeadless\Model\ApplyGiftCard200Response
```

Apply a gift card

Applies a gift card to the basket.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.
$gift_card = new \TebexHeadless\Model\GiftCard(); // \TebexHeadless\Model\GiftCard | Provide a `card_number` to apply to the basket.

try {
    $result = $apiInstance->applyGiftCard($basket_ident, $gift_card);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->applyGiftCard: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **basket_ident** | **string**| The basket identifier. | |
| **gift_card** | [**\TebexHeadless\Model\GiftCard**](../Model/GiftCard.md)| Provide a &#x60;card_number&#x60; to apply to the basket. | [optional] |

### Return type

[**\TebexHeadless\Model\ApplyGiftCard200Response**](../Model/ApplyGiftCard200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createBasket()`

```php
createBasket($create_basket_request): \TebexHeadless\Model\BasketResponse
```

Create a new basket

Creates a new basket for use during checkout.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_basket_request = new \TebexHeadless\Model\CreateBasketRequest(); // \TebexHeadless\Model\CreateBasketRequest

try {
    $result = $apiInstance->createBasket($create_basket_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->createBasket: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_basket_request** | [**\TebexHeadless\Model\CreateBasketRequest**](../Model/CreateBasketRequest.md)|  | [optional] |

### Return type

[**\TebexHeadless\Model\BasketResponse**](../Model/BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createDynamicPackage()`

```php
createDynamicPackage($basket_ident, $dynamic_packages_request): \TebexHeadless\Model\DynamicPackagesResponse
```

Add packages to a dynamic category for a basket.

Populates a dynamic category with custom packages for the given basket. Dynamic categories are created in the creator panel with the type `dynamic`, and are typically populated in response to a `basket.authenticated` webhook.  Once created, the packages can be fetched using the category endpoints with both `includePackages=1` and `basketIdent` provided.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.
$dynamic_packages_request = new \TebexHeadless\Model\DynamicPackagesRequest(); // \TebexHeadless\Model\DynamicPackagesRequest

try {
    $result = $apiInstance->createDynamicPackage($basket_ident, $dynamic_packages_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->createDynamicPackage: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **basket_ident** | **string**| The basket identifier. | |
| **dynamic_packages_request** | [**\TebexHeadless\Model\DynamicPackagesRequest**](../Model/DynamicPackagesRequest.md)|  | [optional] |

### Return type

[**\TebexHeadless\Model\DynamicPackagesResponse**](../Model/DynamicPackagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getAllPackages()`

```php
getAllPackages(): \TebexHeadless\Model\PackageResponse
```

Get all packages

Gets all packages from a webstore.  Note: this endpoint does not support packages belonging to dynamic categories. Use the category endpoints with `includePackages=1` and `basketIdent` to fetch dynamic packages.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getAllPackages();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getAllPackages: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\TebexHeadless\Model\PackageResponse**](../Model/PackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getAllPackagesWithAuthedIP()`

```php
getAllPackagesWithAuthedIP($ip_address): \TebexHeadless\Model\PackageResponse
```

Get packages

Gets all packages from a webstore.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = TebexHeadless\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$ip_address = 127.0.0.1; // string | An IP address can be provided with authenticated requests

try {
    $result = $apiInstance->getAllPackagesWithAuthedIP($ip_address);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getAllPackagesWithAuthedIP: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **ip_address** | **string**| An IP address can be provided with authenticated requests | |

### Return type

[**\TebexHeadless\Model\PackageResponse**](../Model/PackageResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getAllPackagesWithAuthedIPAndBasket()`

```php
getAllPackagesWithAuthedIPAndBasket($basket_ident, $ip_address): \TebexHeadless\Model\PackageResponse
```

Get packages available for IP and basket

Gets all packages from a webstore.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = TebexHeadless\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.
$ip_address = 127.0.0.1; // string | An IP address can be provided with authenticated requests.

try {
    $result = $apiInstance->getAllPackagesWithAuthedIPAndBasket($basket_ident, $ip_address);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getAllPackagesWithAuthedIPAndBasket: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **basket_ident** | **string**| The basket identifier. | |
| **ip_address** | **string**| An IP address can be provided with authenticated requests. | |

### Return type

[**\TebexHeadless\Model\PackageResponse**](../Model/PackageResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getBasket()`

```php
getBasket($basket_ident): \TebexHeadless\Model\BasketResponse
```

Get a basket

Gets a basket associated with the provided identifier.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.

try {
    $result = $apiInstance->getBasket($basket_ident);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getBasket: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **basket_ident** | **string**| The basket identifier. | |

### Return type

[**\TebexHeadless\Model\BasketResponse**](../Model/BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getBasketAuthUrl()`

```php
getBasketAuthUrl($basket_ident, $return_url): \TebexHeadless\Model\BasketAuthResponseInner[]
```

Get auth links for basket

Fetches a basket's auth URL. The player should be directed here in order for them to authorize their account. When complete, they will be returned to the provided `returnUrl` and the basket will be authorized from that moment onwards.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.
$return_url = https://example.tebex.io/; // string | The URL you would like to redirect the user to after successful basket authentication.

try {
    $result = $apiInstance->getBasketAuthUrl($basket_ident, $return_url);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getBasketAuthUrl: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **basket_ident** | **string**| The basket identifier. | |
| **return_url** | **string**| The URL you would like to redirect the user to after successful basket authentication. | |

### Return type

[**\TebexHeadless\Model\BasketAuthResponseInner[]**](../Model/BasketAuthResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getCategories()`

```php
getCategories(): \TebexHeadless\Model\CategoryResponse
```

Get all categories

Gets all categories from a webstore. This does not include package information. To include package information, add `?includePackages=1` to the URL.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getCategories();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getCategories: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\TebexHeadless\Model\CategoryResponse**](../Model/CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getCategoriesIncludePackages()`

```php
getCategoriesIncludePackages(): \TebexHeadless\Model\CategoryResponse
```

Gets all categories and packages

Gets all categories from a webstore including packages.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getCategoriesIncludePackages();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getCategoriesIncludePackages: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\TebexHeadless\Model\CategoryResponse**](../Model/CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getCategory()`

```php
getCategory($category_id): \TebexHeadless\Model\SingleCategoryResponse
```

Get specific category

Gets information about a category and returns the packages in that category.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$category_id = 127244343; // string | The ID or slug of the category to fetch.

try {
    $result = $apiInstance->getCategory($category_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getCategory: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **category_id** | **string**| The ID or slug of the category to fetch. | |

### Return type

[**\TebexHeadless\Model\SingleCategoryResponse**](../Model/SingleCategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getCategoryIncludeDynamicPackages()`

```php
getCategoryIncludeDynamicPackages($category_id, $basket_ident): \TebexHeadless\Model\SingleCategoryResponse
```

Gets a specific category including packages, populating a dynamic category for the given basket.

Gets information about a category and returns the packages in that category. When the category is dynamic and `basketIdent` is provided, the category is populated with the packages associated with that basket.  If a basket identifier is not provided, a dynamic category will be empty as the basket is required to relate packages to the category.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$category_id = 1234; // string | The ID or slug of the category to fetch.
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.

try {
    $result = $apiInstance->getCategoryIncludeDynamicPackages($category_id, $basket_ident);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getCategoryIncludeDynamicPackages: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **category_id** | **string**| The ID or slug of the category to fetch. | |
| **basket_ident** | **string**| The basket identifier. | |

### Return type

[**\TebexHeadless\Model\SingleCategoryResponse**](../Model/SingleCategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getCategoryIncludePackages()`

```php
getCategoryIncludePackages($category_id): \TebexHeadless\Model\SingleCategoryResponse
```

Get a category with all packages

Gets information about a category and returns the packages in that category.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$category_id = 127244343; // string | The ID or slug of the category to fetch.

try {
    $result = $apiInstance->getCategoryIncludePackages($category_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getCategoryIncludePackages: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **category_id** | **string**| The ID or slug of the category to fetch. | |

### Return type

[**\TebexHeadless\Model\SingleCategoryResponse**](../Model/SingleCategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getCustomPages()`

```php
getCustomPages(): \TebexHeadless\Model\CMSPagesResponse
```

Get custom pages defined for the webstore.

Gets a list of custom pages associated with the webstore. These contain a `content` variable with the HTML content of the page.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getCustomPages();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getCustomPages: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\TebexHeadless\Model\CMSPagesResponse**](../Model/CMSPagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getDynamicCategories()`

```php
getDynamicCategories($basket_ident): \TebexHeadless\Model\CategoryResponse
```

Get Dynamic Categories

Gets all categories from a webstore including packages. When `basketIdent` is provided, dynamic categories are populated with the packages associated with that basket.  If a basket identifier is not provided, dynamic categories will be empty as the basket is required to relate packages to the category.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.

try {
    $result = $apiInstance->getDynamicCategories($basket_ident);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getDynamicCategories: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **basket_ident** | **string**| The basket identifier. | |

### Return type

[**\TebexHeadless\Model\CategoryResponse**](../Model/CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getPackage()`

```php
getPackage($package_id): \TebexHeadless\Model\SinglePackageResponse
```

Get package

Gets a package from a webstore by its ID or slug.  Note: this endpoint does not support packages belonging to dynamic categories. Use the category endpoints with `includePackages=1` and `basketIdent` to fetch dynamic packages.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$package_id = 1272441812; // string | The package's ID or slug.

try {
    $result = $apiInstance->getPackage($package_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getPackage: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **package_id** | **string**| The package&#39;s ID or slug. | |

### Return type

[**\TebexHeadless\Model\SinglePackageResponse**](../Model/SinglePackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getPackagesForBasket()`

```php
getPackagesForBasket($basket_ident): \TebexHeadless\Model\PackageResponse
```

Get packages available for basket

Gets all packages available to the provided basket.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.

try {
    $result = $apiInstance->getPackagesForBasket($basket_ident);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getPackagesForBasket: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **basket_ident** | **string**| The basket identifier. | |

### Return type

[**\TebexHeadless\Model\PackageResponse**](../Model/PackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSidebar()`

```php
getSidebar($token): \TebexHeadless\Model\ModulesResponse
```

Retrieves the available sidebar modules.

Retrieves the available sidebar modules configured for the store.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$token = some-uuid; // string | The webstore identifier.

try {
    $result = $apiInstance->getSidebar($token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getSidebar: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **token** | **string**| The webstore identifier. | |

### Return type

[**\TebexHeadless\Model\ModulesResponse**](../Model/ModulesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserTieredCategories()`

```php
getUserTieredCategories($username_id): \TebexHeadless\Model\CategoryResponse
```

Get user's tiered categories

Gets all categories from the webstore, returning active tier information for the given player.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = TebexHeadless\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$username_id = 76561198042467022; // int

try {
    $result = $apiInstance->getUserTieredCategories($username_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getUserTieredCategories: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **username_id** | **int**|  | |

### Return type

[**\TebexHeadless\Model\CategoryResponse**](../Model/CategoryResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getWebstore()`

```php
getWebstore(): \TebexHeadless\Model\WebstoreResponse
```

Get the webstore's information

Gets the webstore associated with the provided token

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getWebstore();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getWebstore: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\TebexHeadless\Model\WebstoreResponse**](../Model/WebstoreResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `removeCoupon()`

```php
removeCoupon($basket_ident, $apply_coupon_request)
```

Remove a coupon from the basket.

Removes a coupon code from a basket

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.
$apply_coupon_request = new \TebexHeadless\Model\ApplyCouponRequest(); // \TebexHeadless\Model\ApplyCouponRequest | Provide a `coupon_code` to remove from the basket.

try {
    $apiInstance->removeCoupon($basket_ident, $apply_coupon_request);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->removeCoupon: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **basket_ident** | **string**| The basket identifier. | |
| **apply_coupon_request** | [**\TebexHeadless\Model\ApplyCouponRequest**](../Model/ApplyCouponRequest.md)| Provide a &#x60;coupon_code&#x60; to remove from the basket. | [optional] |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `removeCreatorCode()`

```php
removeCreatorCode($basket_ident)
```

Removes the creator code from the basket.

Removes the creator code from the basket.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.

try {
    $apiInstance->removeCreatorCode($basket_ident);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->removeCreatorCode: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **basket_ident** | **string**| The basket identifier. | |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `removeGiftCard()`

```php
removeGiftCard($basket_ident, $remove_gift_card_request)
```

Remove a gift card from the basket.

Removes a gift card from the basket.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.
$remove_gift_card_request = new \TebexHeadless\Model\RemoveGiftCardRequest(); // \TebexHeadless\Model\RemoveGiftCardRequest | Provide the `card_number` to remove from the basket.

try {
    $apiInstance->removeGiftCard($basket_ident, $remove_gift_card_request);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->removeGiftCard: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **basket_ident** | **string**| The basket identifier. | |
| **remove_gift_card_request** | [**\TebexHeadless\Model\RemoveGiftCardRequest**](../Model/RemoveGiftCardRequest.md)| Provide the &#x60;card_number&#x60; to remove from the basket. | [optional] |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateTier()`

```php
updateTier($tier_id, $update_tier_request): \TebexHeadless\Model\UpdateTierResponse
```

Update user's tier to a new package

Updates a tier to a new package. A recurring payment updated webhook is sent when an update is successful.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure HTTP basic authorization: basicAuth
$config = TebexHeadless\Configuration::getDefaultConfiguration()
              ->setUsername('YOUR_USERNAME')
              ->setPassword('YOUR_PASSWORD');


$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$tier_id = 6276316; // int | The tier identifier
$update_tier_request = new \TebexHeadless\Model\UpdateTierRequest(); // \TebexHeadless\Model\UpdateTierRequest

try {
    $result = $apiInstance->updateTier($tier_id, $update_tier_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->updateTier: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **tier_id** | **int**| The tier identifier | |
| **update_tier_request** | [**\TebexHeadless\Model\UpdateTierRequest**](../Model/UpdateTierRequest.md)|  | [optional] |

### Return type

[**\TebexHeadless\Model\UpdateTierResponse**](../Model/UpdateTierResponse.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

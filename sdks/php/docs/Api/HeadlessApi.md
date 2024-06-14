# TebexHeadless\HeadlessApi

All URIs are relative to https://headless.tebex.io/api, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**addBasketPackage()**](HeadlessApi.md#addBasketPackage) | **POST** /baskets/{basketIdent}/packages | Add a package to a basket |
| [**applyCoupon()**](HeadlessApi.md#applyCoupon) | **POST** /accounts/{token}/baskets/{basketIdent}/coupons | Apply a coupon to a basket. |
| [**applyCreatorCode()**](HeadlessApi.md#applyCreatorCode) | **POST** /accounts/{token}/baskets/{basketIdent}/creator-codes | Apply a creator code to a basket. |
| [**applyGiftCard()**](HeadlessApi.md#applyGiftCard) | **POST** /accounts/{token}/baskets/{basketIdent}/giftcards | Apply a gift card to a basket. |
| [**createBasket()**](HeadlessApi.md#createBasket) | **POST** /accounts/{token}/baskets | Create a new basket |
| [**getAllCategories()**](HeadlessApi.md#getAllCategories) | **GET** /accounts/{token}/categories | Gets all categories available in the webstore. |
| [**getAllCategoriesIncludingPackages()**](HeadlessApi.md#getAllCategoriesIncludingPackages) | **GET** /accounts/{token}/categories?includePackages&#x3D;1 | Gets a store&#39;s categories including all package information with them. |
| [**getAllPackages()**](HeadlessApi.md#getAllPackages) | **GET** /accounts/{token}/packages | Fetch all packages from a webstore |
| [**getAllPackagesWithAuthedIP()**](HeadlessApi.md#getAllPackagesWithAuthedIP) | **GET** /accounts/{token}/packages?ipAddress&#x3D;{ipAddress} | Fetch a package from a webstore by its identifier |
| [**getAllPackagesWithAuthedIPAndBasket()**](HeadlessApi.md#getAllPackagesWithAuthedIPAndBasket) | **GET** /accounts/{token}/packages?ipAddress&#x3D;{ipAddress}&amp;basketIdent&#x3D;{basketIdent} | Fetch a package from a webstore by its identifier |
| [**getAllPackagesWithBasket()**](HeadlessApi.md#getAllPackagesWithBasket) | **GET** /accounts/{token}/packages?basketIdent&#x3D;{basketIdent} | Fetch a package from a webstore by its identifier |
| [**getBasketAuthUrl()**](HeadlessApi.md#getBasketAuthUrl) | **GET** /accounts/{token}/baskets/{basketIdent}/auth?returnUrl&#x3D;{returnUrl} | Fetch a basket from a webstore by its identifier |
| [**getBasketById()**](HeadlessApi.md#getBasketById) | **GET** /accounts/{token}/baskets/{basketIdent} | Fetch a basket from a webstore by its identifier |
| [**getCategoryById()**](HeadlessApi.md#getCategoryById) | **GET** /accounts/{token}/categories/{categoryId} | Gets information about a specific category |
| [**getCategoryIncludingPackages()**](HeadlessApi.md#getCategoryIncludingPackages) | **GET** /accounts/{token}/categories/{categoryId}?includePackages&#x3D;1 | Gets information about a specific category, including all the packages in the category |
| [**getPackageById()**](HeadlessApi.md#getPackageById) | **GET** /accounts/{token}/packages/{packageId} | Fetch a package from a webstore by its identifier |
| [**getWebstoreById()**](HeadlessApi.md#getWebstoreById) | **GET** /accounts/{token} | Fetch a webstore by its identifier |
| [**removeBasketPackage()**](HeadlessApi.md#removeBasketPackage) | **POST** /baskets/{basketIdent}/packages/remove | Remove a package from a basket |
| [**removeCoupon()**](HeadlessApi.md#removeCoupon) | **POST** /accounts/{token}/baskets/{basketIdent}/coupons/remove | Remove a coupon from the basket. |
| [**removeCreatorCode()**](HeadlessApi.md#removeCreatorCode) | **POST** /accounts/{token}/baskets/{basketIdent}/creator-codes/remove | Remove a creator code from the basket. |
| [**removeGiftCard()**](HeadlessApi.md#removeGiftCard) | **POST** /accounts/{token}/baskets/{basketIdent}/giftcards/remove | Remove a gift card from the basket. |
| [**updatePackageQuantity()**](HeadlessApi.md#updatePackageQuantity) | **PUT** /baskets/{basketIdent}/packages/{packageId} | Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed. |


## `addBasketPackage()`

```php
addBasketPackage($basket_ident, $add_basket_package_request): \TebexHeadless\Model\Basket
```

Add a package to a basket

Add a package with the given ID to the basket.

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
$add_basket_package_request = new \TebexHeadless\Model\AddBasketPackageRequest(); // \TebexHeadless\Model\AddBasketPackageRequest

try {
    $result = $apiInstance->addBasketPackage($basket_ident, $add_basket_package_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->addBasketPackage: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **basket_ident** | **string**| The basket identifier. | |
| **add_basket_package_request** | [**\TebexHeadless\Model\AddBasketPackageRequest**](../Model/AddBasketPackageRequest.md)|  | [optional] |

### Return type

[**\TebexHeadless\Model\Basket**](../Model/Basket.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `applyCoupon()`

```php
applyCoupon($token, $basket_ident, $coupon): \TebexHeadless\Model\BasketResponse
```

Apply a coupon to a basket.

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
$token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb; // string | The webstore identifier.
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.
$coupon = new \TebexHeadless\Model\Coupon(); // \TebexHeadless\Model\Coupon | Provide a `coupon_code` to apply to the basket.

try {
    $result = $apiInstance->applyCoupon($token, $basket_ident, $coupon);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->applyCoupon: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **token** | **string**| The webstore identifier. | |
| **basket_ident** | **string**| The basket identifier. | |
| **coupon** | [**\TebexHeadless\Model\Coupon**](../Model/Coupon.md)| Provide a &#x60;coupon_code&#x60; to apply to the basket. | [optional] |

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

## `applyCreatorCode()`

```php
applyCreatorCode($token, $basket_ident, $apply_creator_code_request): \TebexHeadless\Model\BasketResponse
```

Apply a creator code to a basket.

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
$token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb; // string | The webstore identifier.
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.
$apply_creator_code_request = new \TebexHeadless\Model\ApplyCreatorCodeRequest(); // \TebexHeadless\Model\ApplyCreatorCodeRequest | Provide a `creator_code` to apply to the basket.

try {
    $result = $apiInstance->applyCreatorCode($token, $basket_ident, $apply_creator_code_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->applyCreatorCode: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **token** | **string**| The webstore identifier. | |
| **basket_ident** | **string**| The basket identifier. | |
| **apply_creator_code_request** | [**\TebexHeadless\Model\ApplyCreatorCodeRequest**](../Model/ApplyCreatorCodeRequest.md)| Provide a &#x60;creator_code&#x60; to apply to the basket. | [optional] |

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

## `applyGiftCard()`

```php
applyGiftCard($token, $basket_ident, $gift_card): \TebexHeadless\Model\BasketResponse
```

Apply a gift card to a basket.

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
$token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb; // string | The webstore identifier.
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.
$gift_card = new \TebexHeadless\Model\GiftCard(); // \TebexHeadless\Model\GiftCard | Provide a `card_number` to apply to the basket.

try {
    $result = $apiInstance->applyGiftCard($token, $basket_ident, $gift_card);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->applyGiftCard: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **token** | **string**| The webstore identifier. | |
| **basket_ident** | **string**| The basket identifier. | |
| **gift_card** | [**\TebexHeadless\Model\GiftCard**](../Model/GiftCard.md)| Provide a &#x60;card_number&#x60; to apply to the basket. | [optional] |

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

## `createBasket()`

```php
createBasket($token, $create_basket_request): \TebexHeadless\Model\BasketResponse
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
$token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb; // string | The webstore identifier.
$create_basket_request = new \TebexHeadless\Model\CreateBasketRequest(); // \TebexHeadless\Model\CreateBasketRequest

try {
    $result = $apiInstance->createBasket($token, $create_basket_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->createBasket: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **token** | **string**| The webstore identifier. | |
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

## `getAllCategories()`

```php
getAllCategories($token): \TebexHeadless\Model\CategoryResponse
```

Gets all categories available in the webstore.

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
$token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb; // string | The webstore identifier.

try {
    $result = $apiInstance->getAllCategories($token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getAllCategories: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **token** | **string**| The webstore identifier. | |

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

## `getAllCategoriesIncludingPackages()`

```php
getAllCategoriesIncludingPackages($token): \TebexHeadless\Model\CategoryResponse
```

Gets a store's categories including all package information with them.

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
$token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb; // string | The webstore identifier.

try {
    $result = $apiInstance->getAllCategoriesIncludingPackages($token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getAllCategoriesIncludingPackages: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **token** | **string**| The webstore identifier. | |

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

## `getAllPackages()`

```php
getAllPackages($token): \TebexHeadless\Model\PackageResponse
```

Fetch all packages from a webstore

Gets all packages from a webstore.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb; // string | The webstore identifier.

try {
    $result = $apiInstance->getAllPackages($token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getAllPackages: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **token** | **string**| The webstore identifier. | |

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
getAllPackagesWithAuthedIP($token, $ip_address): \TebexHeadless\Model\PackageResponse
```

Fetch a package from a webstore by its identifier

Gets all packages from a webstore.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb; // string | The webstore identifier.
$ip_address = 127.0.0.1; // string | An IP address can be provided with authenticated requests.

try {
    $result = $apiInstance->getAllPackagesWithAuthedIP($token, $ip_address);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getAllPackagesWithAuthedIP: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **token** | **string**| The webstore identifier. | |
| **ip_address** | **string**| An IP address can be provided with authenticated requests. | |

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

## `getAllPackagesWithAuthedIPAndBasket()`

```php
getAllPackagesWithAuthedIPAndBasket($token, $basket_ident, $ip_address): \TebexHeadless\Model\PackageResponse[]
```

Fetch a package from a webstore by its identifier

Gets all packages from a webstore.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb; // string | The webstore identifier.
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.
$ip_address = 127.0.0.1; // string | An IP address can be provided with authenticated requests.

try {
    $result = $apiInstance->getAllPackagesWithAuthedIPAndBasket($token, $basket_ident, $ip_address);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getAllPackagesWithAuthedIPAndBasket: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **token** | **string**| The webstore identifier. | |
| **basket_ident** | **string**| The basket identifier. | |
| **ip_address** | **string**| An IP address can be provided with authenticated requests. | |

### Return type

[**\TebexHeadless\Model\PackageResponse[]**](../Model/PackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getAllPackagesWithBasket()`

```php
getAllPackagesWithBasket($token, $basket_ident): \TebexHeadless\Model\PackageResponse
```

Fetch a package from a webstore by its identifier

Gets all packages from a webstore.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb; // string | The webstore identifier.
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.

try {
    $result = $apiInstance->getAllPackagesWithBasket($token, $basket_ident);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getAllPackagesWithBasket: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **token** | **string**| The webstore identifier. | |
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

## `getBasketAuthUrl()`

```php
getBasketAuthUrl($token, $basket_ident, $return_url): \TebexHeadless\Model\BasketResponse
```

Fetch a basket from a webstore by its identifier

Fetches a basket's auth URL.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb; // string | The webstore identifier.
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.
$return_url = https://example.tebex.io/; // string | The URL you would like to redirect the user to after successful basket authentication.

try {
    $result = $apiInstance->getBasketAuthUrl($token, $basket_ident, $return_url);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getBasketAuthUrl: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **token** | **string**| The webstore identifier. | |
| **basket_ident** | **string**| The basket identifier. | |
| **return_url** | **string**| The URL you would like to redirect the user to after successful basket authentication. | |

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

## `getBasketById()`

```php
getBasketById($token, $basket_ident): \TebexHeadless\Model\BasketResponse
```

Fetch a basket from a webstore by its identifier

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
$token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb; // string | The webstore identifier.
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.

try {
    $result = $apiInstance->getBasketById($token, $basket_ident);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getBasketById: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **token** | **string**| The webstore identifier. | |
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

## `getCategoryById()`

```php
getCategoryById($token, $category_id): \TebexHeadless\Model\CategoryResponse[]
```

Gets information about a specific category

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
$token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb; // string | The webstore identifier.
$category_id = 127244343; // string | The ID of the category to fetch.

try {
    $result = $apiInstance->getCategoryById($token, $category_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getCategoryById: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **token** | **string**| The webstore identifier. | |
| **category_id** | **string**| The ID of the category to fetch. | |

### Return type

[**\TebexHeadless\Model\CategoryResponse[]**](../Model/CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getCategoryIncludingPackages()`

```php
getCategoryIncludingPackages($token, $category_id): \TebexHeadless\Model\CategoryResponse
```

Gets information about a specific category, including all the packages in the category

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
$token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb; // string | The webstore identifier.
$category_id = 127244343; // string | The ID of the category to fetch.

try {
    $result = $apiInstance->getCategoryIncludingPackages($token, $category_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getCategoryIncludingPackages: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **token** | **string**| The webstore identifier. | |
| **category_id** | **string**| The ID of the category to fetch. | |

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

## `getPackageById()`

```php
getPackageById($token, $package_id): \TebexHeadless\Model\PackageResponse
```

Fetch a package from a webstore by its identifier

Gets a package from a webstore by ID.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\HeadlessApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb; // string | The webstore identifier.
$package_id = 1272441812; // float | The package's ID.

try {
    $result = $apiInstance->getPackageById($token, $package_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getPackageById: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **token** | **string**| The webstore identifier. | |
| **package_id** | **float**| The package&#39;s ID. | |

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

## `getWebstoreById()`

```php
getWebstoreById($token): \TebexHeadless\Model\WebstoreResponse
```

Fetch a webstore by its identifier

Gets the webstore associated with the provided identifier.

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
    $result = $apiInstance->getWebstoreById($token);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->getWebstoreById: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **token** | **string**| The webstore identifier. | |

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

## `removeBasketPackage()`

```php
removeBasketPackage($basket_ident, $remove_basket_package_request): \TebexHeadless\Model\Basket
```

Remove a package from a basket

Remove the given package ID from the basket.

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
$remove_basket_package_request = new \TebexHeadless\Model\RemoveBasketPackageRequest(); // \TebexHeadless\Model\RemoveBasketPackageRequest

try {
    $result = $apiInstance->removeBasketPackage($basket_ident, $remove_basket_package_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->removeBasketPackage: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **basket_ident** | **string**| The basket identifier. | |
| **remove_basket_package_request** | [**\TebexHeadless\Model\RemoveBasketPackageRequest**](../Model/RemoveBasketPackageRequest.md)|  | [optional] |

### Return type

[**\TebexHeadless\Model\Basket**](../Model/Basket.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `removeCoupon()`

```php
removeCoupon($token, $basket_ident)
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
$token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb; // string | The webstore identifier.
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.

try {
    $apiInstance->removeCoupon($token, $basket_ident);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->removeCoupon: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **token** | **string**| The webstore identifier. | |
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

## `removeCreatorCode()`

```php
removeCreatorCode($token, $basket_ident)
```

Remove a creator code from the basket.

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
$token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb; // string | The webstore identifier.
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.

try {
    $apiInstance->removeCreatorCode($token, $basket_ident);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->removeCreatorCode: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **token** | **string**| The webstore identifier. | |
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
removeGiftCard($token, $basket_ident, $remove_gift_card_request)
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
$token = t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb; // string | The webstore identifier.
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.
$remove_gift_card_request = new \TebexHeadless\Model\RemoveGiftCardRequest(); // \TebexHeadless\Model\RemoveGiftCardRequest | Provide the `card_number` to remove from the basket.

try {
    $apiInstance->removeGiftCard($token, $basket_ident, $remove_gift_card_request);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->removeGiftCard: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **token** | **string**| The webstore identifier. | |
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

## `updatePackageQuantity()`

```php
updatePackageQuantity($basket_ident, $package_id, $update_package_quantity_request)
```

Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed.

Sets the quantity of the given item in the basket.

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
$package_id = 6276316; // float | The package identifier.
$update_package_quantity_request = new \TebexHeadless\Model\UpdatePackageQuantityRequest(); // \TebexHeadless\Model\UpdatePackageQuantityRequest

try {
    $apiInstance->updatePackageQuantity($basket_ident, $package_id, $update_package_quantity_request);
} catch (Exception $e) {
    echo 'Exception when calling HeadlessApi->updatePackageQuantity: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **basket_ident** | **string**| The basket identifier. | |
| **package_id** | **float**| The package identifier. | |
| **update_package_quantity_request** | [**\TebexHeadless\Model\UpdatePackageQuantityRequest**](../Model/UpdatePackageQuantityRequest.md)|  | [optional] |

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

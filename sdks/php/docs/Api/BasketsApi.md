# TebexHeadless\BasketsApi

All URIs are relative to https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**addBasketPackage()**](BasketsApi.md#addBasketPackage) | **POST** /{basketIdent}/packages | Add package to basket |
| [**removeBasketPackage()**](BasketsApi.md#removeBasketPackage) | **POST** /{basketIdent}/packages/remove | Remove a package from a basket |
| [**updatePackageQuantity()**](BasketsApi.md#updatePackageQuantity) | **PUT** /{basketIdent}/packages/{packageId} | Update package quantity |


## `addBasketPackage()`

```php
addBasketPackage($basket_ident, $add_basket_package_request): \TebexHeadless\Model\BasketResponse
```
### URI(s):
- https://headless.tebex.io/api/baskets Basket-only API, account token not required
Add package to basket

Add a package with the given ID to the basket.  To add a package belonging to a dynamic category, set `dynamic` to `true`. Without this property the API will treat the request as a normal package ID.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\BasketsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.
$add_basket_package_request = new \TebexHeadless\Model\AddBasketPackageRequest(); // \TebexHeadless\Model\AddBasketPackageRequest

$hostIndex = 0;
$variables = [
];

try {
    $result = $apiInstance->addBasketPackage($basket_ident, $add_basket_package_request, $hostIndex, $variables);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BasketsApi->addBasketPackage: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **basket_ident** | **string**| The basket identifier. | |
| **add_basket_package_request** | [**\TebexHeadless\Model\AddBasketPackageRequest**](../Model/AddBasketPackageRequest.md)|  | [optional] |
| hostIndex | null|int | Host index. Defaults to null. If null, then the library will use $this->hostIndex instead | [optional] |
| variables | array | Associative array of variables to pass to the host. Defaults to empty array. | [optional] |

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

## `removeBasketPackage()`

```php
removeBasketPackage($basket_ident, $remove_basket_package_request): \TebexHeadless\Model\BasketResponse
```
### URI(s):
- https://headless.tebex.io/api/baskets Basket-only API, account token not required
Remove a package from a basket

Remove the given package ID from the basket.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\BasketsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.
$remove_basket_package_request = new \TebexHeadless\Model\RemoveBasketPackageRequest(); // \TebexHeadless\Model\RemoveBasketPackageRequest

$hostIndex = 0;
$variables = [
];

try {
    $result = $apiInstance->removeBasketPackage($basket_ident, $remove_basket_package_request, $hostIndex, $variables);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BasketsApi->removeBasketPackage: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **basket_ident** | **string**| The basket identifier. | |
| **remove_basket_package_request** | [**\TebexHeadless\Model\RemoveBasketPackageRequest**](../Model/RemoveBasketPackageRequest.md)|  | [optional] |
| hostIndex | null|int | Host index. Defaults to null. If null, then the library will use $this->hostIndex instead | [optional] |
| variables | array | Associative array of variables to pass to the host. Defaults to empty array. | [optional] |

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

## `updatePackageQuantity()`

```php
updatePackageQuantity($basket_ident, $package_id, $update_package_quantity_request)
```
### URI(s):
- https://headless.tebex.io/api/baskets Basket-only API, account token not required
Update package quantity

Sets the quantity of the given item in the basket. The user must be logged in before the quantity can be changed.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new TebexHeadless\Api\BasketsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$basket_ident = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c; // string | The basket identifier.
$package_id = 6276316; // string | The package identifier
$update_package_quantity_request = new \TebexHeadless\Model\UpdatePackageQuantityRequest(); // \TebexHeadless\Model\UpdatePackageQuantityRequest

$hostIndex = 0;
$variables = [
];

try {
    $apiInstance->updatePackageQuantity($basket_ident, $package_id, $update_package_quantity_request, $hostIndex, $variables);
} catch (Exception $e) {
    echo 'Exception when calling BasketsApi->updatePackageQuantity: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **basket_ident** | **string**| The basket identifier. | |
| **package_id** | **string**| The package identifier | |
| **update_package_quantity_request** | [**\TebexHeadless\Model\UpdatePackageQuantityRequest**](../Model/UpdatePackageQuantityRequest.md)|  | [optional] |
| hostIndex | null|int | Host index. Defaults to null. If null, then the library will use $this->hostIndex instead | [optional] |
| variables | array | Associative array of variables to pass to the host. Defaults to empty array. | [optional] |

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

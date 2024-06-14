# TebexHeadless

The headless API is designed for implementing your own store frontend with the data of your store. You are able to call the Headless API directly from a web browser (such as within an SPA), or from a backend server, such as for in-game GUIs.


## Installation & Usage

### Requirements

PHP 7.4 and later.
Should also work with PHP 8.0.

### Composer

To install the bindings via [Composer](https://getcomposer.org/), add the following to `composer.json`:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/GIT_USER_ID/GIT_REPO_ID.git"
    }
  ],
  "require": {
    "GIT_USER_ID/GIT_REPO_ID": "*@dev"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/TebexHeadless/vendor/autoload.php');
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

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

## API Endpoints

All URIs are relative to *https://headless.tebex.io/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*HeadlessApi* | [**addBasketPackage**](docs/Api/HeadlessApi.md#addbasketpackage) | **POST** /baskets/{basketIdent}/packages | Add a package to a basket
*HeadlessApi* | [**applyCoupon**](docs/Api/HeadlessApi.md#applycoupon) | **POST** /accounts/{token}/baskets/{basketIdent}/coupons | Apply a coupon to a basket.
*HeadlessApi* | [**applyCreatorCode**](docs/Api/HeadlessApi.md#applycreatorcode) | **POST** /accounts/{token}/baskets/{basketIdent}/creator-codes | Apply a creator code to a basket.
*HeadlessApi* | [**applyGiftCard**](docs/Api/HeadlessApi.md#applygiftcard) | **POST** /accounts/{token}/baskets/{basketIdent}/giftcards | Apply a gift card to a basket.
*HeadlessApi* | [**createBasket**](docs/Api/HeadlessApi.md#createbasket) | **POST** /accounts/{token}/baskets | Create a new basket
*HeadlessApi* | [**getAllCategories**](docs/Api/HeadlessApi.md#getallcategories) | **GET** /accounts/{token}/categories | Gets all categories available in the webstore.
*HeadlessApi* | [**getAllCategoriesIncludingPackages**](docs/Api/HeadlessApi.md#getallcategoriesincludingpackages) | **GET** /accounts/{token}/categories?includePackages&#x3D;1 | Gets a store&#39;s categories including all package information with them.
*HeadlessApi* | [**getAllPackages**](docs/Api/HeadlessApi.md#getallpackages) | **GET** /accounts/{token}/packages | Fetch all packages from a webstore
*HeadlessApi* | [**getAllPackagesWithAuthedIP**](docs/Api/HeadlessApi.md#getallpackageswithauthedip) | **GET** /accounts/{token}/packages?ipAddress&#x3D;{ipAddress} | Fetch a package from a webstore by its identifier
*HeadlessApi* | [**getAllPackagesWithAuthedIPAndBasket**](docs/Api/HeadlessApi.md#getallpackageswithauthedipandbasket) | **GET** /accounts/{token}/packages?ipAddress&#x3D;{ipAddress}&amp;basketIdent&#x3D;{basketIdent} | Fetch a package from a webstore by its identifier
*HeadlessApi* | [**getAllPackagesWithBasket**](docs/Api/HeadlessApi.md#getallpackageswithbasket) | **GET** /accounts/{token}/packages?basketIdent&#x3D;{basketIdent} | Fetch a package from a webstore by its identifier
*HeadlessApi* | [**getBasketAuthUrl**](docs/Api/HeadlessApi.md#getbasketauthurl) | **GET** /accounts/{token}/baskets/{basketIdent}/auth?returnUrl&#x3D;{returnUrl} | Fetch a basket from a webstore by its identifier
*HeadlessApi* | [**getBasketById**](docs/Api/HeadlessApi.md#getbasketbyid) | **GET** /accounts/{token}/baskets/{basketIdent} | Fetch a basket from a webstore by its identifier
*HeadlessApi* | [**getCategoryById**](docs/Api/HeadlessApi.md#getcategorybyid) | **GET** /accounts/{token}/categories/{categoryId} | Gets information about a specific category
*HeadlessApi* | [**getCategoryIncludingPackages**](docs/Api/HeadlessApi.md#getcategoryincludingpackages) | **GET** /accounts/{token}/categories/{categoryId}?includePackages&#x3D;1 | Gets information about a specific category, including all the packages in the category
*HeadlessApi* | [**getPackageById**](docs/Api/HeadlessApi.md#getpackagebyid) | **GET** /accounts/{token}/packages/{packageId} | Fetch a package from a webstore by its identifier
*HeadlessApi* | [**getWebstoreById**](docs/Api/HeadlessApi.md#getwebstorebyid) | **GET** /accounts/{token} | Fetch a webstore by its identifier
*HeadlessApi* | [**removeBasketPackage**](docs/Api/HeadlessApi.md#removebasketpackage) | **POST** /baskets/{basketIdent}/packages/remove | Remove a package from a basket
*HeadlessApi* | [**removeCoupon**](docs/Api/HeadlessApi.md#removecoupon) | **POST** /accounts/{token}/baskets/{basketIdent}/coupons/remove | Remove a coupon from the basket.
*HeadlessApi* | [**removeCreatorCode**](docs/Api/HeadlessApi.md#removecreatorcode) | **POST** /accounts/{token}/baskets/{basketIdent}/creator-codes/remove | Remove a creator code from the basket.
*HeadlessApi* | [**removeGiftCard**](docs/Api/HeadlessApi.md#removegiftcard) | **POST** /accounts/{token}/baskets/{basketIdent}/giftcards/remove | Remove a gift card from the basket.
*HeadlessApi* | [**updatePackageQuantity**](docs/Api/HeadlessApi.md#updatepackagequantity) | **PUT** /baskets/{basketIdent}/packages/{packageId} | Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed.

## Models

- [AddBasketPackageRequest](docs/Model/AddBasketPackageRequest.md)
- [ApplyCreatorCodeRequest](docs/Model/ApplyCreatorCodeRequest.md)
- [Basket](docs/Model/Basket.md)
- [BasketLinks](docs/Model/BasketLinks.md)
- [BasketPackage](docs/Model/BasketPackage.md)
- [BasketResponse](docs/Model/BasketResponse.md)
- [Category](docs/Model/Category.md)
- [CategoryResponse](docs/Model/CategoryResponse.md)
- [Coupon](docs/Model/Coupon.md)
- [CreateBasketRequest](docs/Model/CreateBasketRequest.md)
- [ErrorResponse](docs/Model/ErrorResponse.md)
- [GiftCard](docs/Model/GiftCard.md)
- [Package](docs/Model/Package.md)
- [PackageCategory](docs/Model/PackageCategory.md)
- [PackageResponse](docs/Model/PackageResponse.md)
- [RemoveBasketPackageRequest](docs/Model/RemoveBasketPackageRequest.md)
- [RemoveGiftCardRequest](docs/Model/RemoveGiftCardRequest.md)
- [RevenueShare](docs/Model/RevenueShare.md)
- [UpdatePackageQuantityRequest](docs/Model/UpdatePackageQuantityRequest.md)
- [Webstore](docs/Model/Webstore.md)
- [WebstoreResponse](docs/Model/WebstoreResponse.md)
- [WebstoreResponseData](docs/Model/WebstoreResponseData.md)

## Authorization
Endpoints do not require authorization.

## Tests

To run the tests, use:

```bash
composer install
vendor/bin/phpunit
```

## Author

tebex-integrations@overwolf.com

## About this package

This PHP package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0.0`
    - Generator version: `7.5.0`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`

# TebexHeadless

The headless API is designed for implementing your own store frontend with the data of your store. You are able to call the Headless API directly from a web browser (such as within an SPA), from a backend server, or in-game GUIs.


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




$apiInstance = new TebexHeadless\Api\BasketsApi(
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
    echo 'Exception when calling BasketsApi->addBasketPackage: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to *https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*BasketsApi* | [**addBasketPackage**](docs/Api/BasketsApi.md#addbasketpackage) | **POST** /{basketIdent}/packages | Add package to basket
*BasketsApi* | [**removeBasketPackage**](docs/Api/BasketsApi.md#removebasketpackage) | **POST** /{basketIdent}/packages/remove | Remove a package from a basket
*BasketsApi* | [**updatePackageQuantity**](docs/Api/BasketsApi.md#updatepackagequantity) | **PUT** /{basketIdent}/packages/{packageId} | Update package quantity
*HeadlessApi* | [**applyCoupon**](docs/Api/HeadlessApi.md#applycoupon) | **POST** /baskets/{basketIdent}/coupons | Apply a coupon
*HeadlessApi* | [**applyCreatorCode**](docs/Api/HeadlessApi.md#applycreatorcode) | **POST** /baskets/{basketIdent}/creator-codes | Apply a creator code
*HeadlessApi* | [**applyGiftCard**](docs/Api/HeadlessApi.md#applygiftcard) | **POST** /baskets/{basketIdent}/giftcards | Apply a gift card
*HeadlessApi* | [**createBasket**](docs/Api/HeadlessApi.md#createbasket) | **POST** /baskets | Create a new basket
*HeadlessApi* | [**createDynamicPackage**](docs/Api/HeadlessApi.md#createdynamicpackage) | **PUT** /baskets/{basketIdent}/dynamic-packages | Add packages to a dynamic category for a basket.
*HeadlessApi* | [**getAllPackages**](docs/Api/HeadlessApi.md#getallpackages) | **GET** /packages | Get all packages
*HeadlessApi* | [**getAllPackagesWithAuthedIP**](docs/Api/HeadlessApi.md#getallpackageswithauthedip) | **GET** /packages?ipAddress&#x3D;{ipAddress} | Get packages
*HeadlessApi* | [**getAllPackagesWithAuthedIPAndBasket**](docs/Api/HeadlessApi.md#getallpackageswithauthedipandbasket) | **GET** /packages?ipAddress&#x3D;{ipAddress}&amp;basketIdent&#x3D;{basketIdent} | Get packages available for IP and basket
*HeadlessApi* | [**getBasket**](docs/Api/HeadlessApi.md#getbasket) | **GET** /baskets/{basketIdent} | Get a basket
*HeadlessApi* | [**getBasketAuthUrl**](docs/Api/HeadlessApi.md#getbasketauthurl) | **GET** /baskets/{basketIdent}/auth?returnUrl&#x3D;{returnUrl} | Get auth links for basket
*HeadlessApi* | [**getCategories**](docs/Api/HeadlessApi.md#getcategories) | **GET** /categories | Get all categories
*HeadlessApi* | [**getCategoriesIncludePackages**](docs/Api/HeadlessApi.md#getcategoriesincludepackages) | **GET** /categories?includePackages&#x3D;1 | Gets all categories and packages
*HeadlessApi* | [**getCategory**](docs/Api/HeadlessApi.md#getcategory) | **GET** /categories/{categoryId} | Get specific category
*HeadlessApi* | [**getCategoryIncludeDynamicPackages**](docs/Api/HeadlessApi.md#getcategoryincludedynamicpackages) | **GET** /categories/{categoryId}?includePackages&#x3D;1&amp;basketIdent&#x3D;{basketIdent} | Gets a specific category including packages, populating a dynamic category for the given basket.
*HeadlessApi* | [**getCategoryIncludePackages**](docs/Api/HeadlessApi.md#getcategoryincludepackages) | **GET** /categories/{categoryId}?includePackages&#x3D;1 | Get a category with all packages
*HeadlessApi* | [**getCustomPages**](docs/Api/HeadlessApi.md#getcustompages) | **GET** /pages | Get custom pages defined for the webstore.
*HeadlessApi* | [**getDynamicCategories**](docs/Api/HeadlessApi.md#getdynamiccategories) | **GET** /categories?includePackages&#x3D;1&amp;basketIdent&#x3D;{basketIdent} | Get Dynamic Categories
*HeadlessApi* | [**getPackage**](docs/Api/HeadlessApi.md#getpackage) | **GET** /packages/{packageId} | Get package
*HeadlessApi* | [**getPackagesForBasket**](docs/Api/HeadlessApi.md#getpackagesforbasket) | **GET** /packages?basketIdent&#x3D;{basketIdent} | Get packages available for basket
*HeadlessApi* | [**getSidebar**](docs/Api/HeadlessApi.md#getsidebar) | **GET** /sidebar | Retrieves the available sidebar modules.
*HeadlessApi* | [**getUserTieredCategories**](docs/Api/HeadlessApi.md#getusertieredcategories) | **GET** /categories?usernameId&#x3D;{usernameId}&amp;includePackages&#x3D;1 | Get user&#39;s tiered categories
*HeadlessApi* | [**getWebstore**](docs/Api/HeadlessApi.md#getwebstore) | **GET** / | Get the webstore&#39;s information
*HeadlessApi* | [**removeCoupon**](docs/Api/HeadlessApi.md#removecoupon) | **POST** /baskets/{basketIdent}/coupons/remove | Remove a coupon from the basket.
*HeadlessApi* | [**removeCreatorCode**](docs/Api/HeadlessApi.md#removecreatorcode) | **POST** /baskets/{basketIdent}/creator-codes/remove | Removes the creator code from the basket.
*HeadlessApi* | [**removeGiftCard**](docs/Api/HeadlessApi.md#removegiftcard) | **POST** /baskets/{basketIdent}/giftcards/remove | Remove a gift card from the basket.
*HeadlessApi* | [**updateTier**](docs/Api/HeadlessApi.md#updatetier) | **PATCH** /tiers/{tierId} | Update user&#39;s tier to a new package

## Models

- [AddBasketPackageRequest](docs/Model/AddBasketPackageRequest.md)
- [ApplyCoupon200Response](docs/Model/ApplyCoupon200Response.md)
- [ApplyCouponRequest](docs/Model/ApplyCouponRequest.md)
- [ApplyCreatorCode200Response](docs/Model/ApplyCreatorCode200Response.md)
- [ApplyCreatorCodeRequest](docs/Model/ApplyCreatorCodeRequest.md)
- [ApplyGiftCard200Response](docs/Model/ApplyGiftCard200Response.md)
- [Basket](docs/Model/Basket.md)
- [BasketAuthResponseInner](docs/Model/BasketAuthResponseInner.md)
- [BasketLinks](docs/Model/BasketLinks.md)
- [BasketPackage](docs/Model/BasketPackage.md)
- [BasketPackageInBasket](docs/Model/BasketPackageInBasket.md)
- [BasketResponse](docs/Model/BasketResponse.md)
- [CMSPage](docs/Model/CMSPage.md)
- [CMSPagesResponse](docs/Model/CMSPagesResponse.md)
- [Category](docs/Model/Category.md)
- [CategoryResponse](docs/Model/CategoryResponse.md)
- [CommunityGoalData](docs/Model/CommunityGoalData.md)
- [CommunityGoalModule](docs/Model/CommunityGoalModule.md)
- [Coupon](docs/Model/Coupon.md)
- [CreateBasketRequest](docs/Model/CreateBasketRequest.md)
- [DynamicPackageInput](docs/Model/DynamicPackageInput.md)
- [DynamicPackagesRequest](docs/Model/DynamicPackagesRequest.md)
- [DynamicPackagesResponse](docs/Model/DynamicPackagesResponse.md)
- [ErrorResponse](docs/Model/ErrorResponse.md)
- [FeaturedPackageData](docs/Model/FeaturedPackageData.md)
- [FeaturedPackageModule](docs/Model/FeaturedPackageModule.md)
- [GiftCard](docs/Model/GiftCard.md)
- [GiftcardBalanceData](docs/Model/GiftcardBalanceData.md)
- [GiftcardBalanceModule](docs/Model/GiftcardBalanceModule.md)
- [Module](docs/Model/Module.md)
- [ModuleBase](docs/Model/ModuleBase.md)
- [ModulesResponse](docs/Model/ModulesResponse.md)
- [Package](docs/Model/Package.md)
- [PackageCategory](docs/Model/PackageCategory.md)
- [PackageMedia](docs/Model/PackageMedia.md)
- [PackageResponse](docs/Model/PackageResponse.md)
- [PaymentGoalData](docs/Model/PaymentGoalData.md)
- [PaymentGoalModule](docs/Model/PaymentGoalModule.md)
- [Players](docs/Model/Players.md)
- [RecentPayment](docs/Model/RecentPayment.md)
- [RecentPaymentPackage](docs/Model/RecentPaymentPackage.md)
- [RecentPaymentsData](docs/Model/RecentPaymentsData.md)
- [RecentPaymentsModule](docs/Model/RecentPaymentsModule.md)
- [RemoveBasketPackageRequest](docs/Model/RemoveBasketPackageRequest.md)
- [RemoveGiftCardRequest](docs/Model/RemoveGiftCardRequest.md)
- [RevenueShare](docs/Model/RevenueShare.md)
- [ServerStatusData](docs/Model/ServerStatusData.md)
- [ServerStatusModule](docs/Model/ServerStatusModule.md)
- [SingleCategoryResponse](docs/Model/SingleCategoryResponse.md)
- [SinglePackageResponse](docs/Model/SinglePackageResponse.md)
- [TextboxData](docs/Model/TextboxData.md)
- [TextboxModule](docs/Model/TextboxModule.md)
- [Tier](docs/Model/Tier.md)
- [TierPendingDowngradePackage](docs/Model/TierPendingDowngradePackage.md)
- [TierStatus](docs/Model/TierStatus.md)
- [TopCustomerData](docs/Model/TopCustomerData.md)
- [TopCustomerModule](docs/Model/TopCustomerModule.md)
- [UpdatePackageQuantityRequest](docs/Model/UpdatePackageQuantityRequest.md)
- [UpdateTierRequest](docs/Model/UpdateTierRequest.md)
- [UpdateTierResponse](docs/Model/UpdateTierResponse.md)
- [Webstore](docs/Model/Webstore.md)
- [WebstoreResponse](docs/Model/WebstoreResponse.md)

## Authorization

Authentication schemes defined for the API:
### basicAuth

- **Type**: HTTP basic authentication

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

- API version: `2.0.1`
    - Generator version: `7.5.0`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`

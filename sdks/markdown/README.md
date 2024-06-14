# Documentation for Tebex Headless API

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://headless.tebex.io/api*

| Class | Method | HTTP request | Description |
|------------ | ------------- | ------------- | -------------|
| *HeadlessApi* | [**addBasketPackage**](Apis/HeadlessApi.md#addbasketpackage) | **POST** /baskets/{basketIdent}/packages | Add a package to a basket |
*HeadlessApi* | [**applyCoupon**](Apis/HeadlessApi.md#applycoupon) | **POST** /accounts/{token}/baskets/{basketIdent}/coupons | Apply a coupon to a basket. |
*HeadlessApi* | [**applyCreatorCode**](Apis/HeadlessApi.md#applycreatorcode) | **POST** /accounts/{token}/baskets/{basketIdent}/creator-codes | Apply a creator code to a basket. |
*HeadlessApi* | [**applyGiftCard**](Apis/HeadlessApi.md#applygiftcard) | **POST** /accounts/{token}/baskets/{basketIdent}/giftcards | Apply a gift card to a basket. |
*HeadlessApi* | [**createBasket**](Apis/HeadlessApi.md#createbasket) | **POST** /accounts/{token}/baskets | Create a new basket |
*HeadlessApi* | [**getAllCategories**](Apis/HeadlessApi.md#getallcategories) | **GET** /accounts/{token}/categories | Gets all categories available in the webstore. |
*HeadlessApi* | [**getAllCategoriesIncludingPackages**](Apis/HeadlessApi.md#getallcategoriesincludingpackages) | **GET** /accounts/{token}/categories?includePackages&#x3D;1 | Gets a store's categories including all package information with them. |
*HeadlessApi* | [**getAllPackages**](Apis/HeadlessApi.md#getallpackages) | **GET** /accounts/{token}/packages | Fetch all packages from a webstore |
*HeadlessApi* | [**getAllPackagesWithAuthedIP**](Apis/HeadlessApi.md#getallpackageswithauthedip) | **GET** /accounts/{token}/packages?ipAddress&#x3D;{ipAddress} | Fetch a package from a webstore by its identifier |
*HeadlessApi* | [**getAllPackagesWithAuthedIPAndBasket**](Apis/HeadlessApi.md#getallpackageswithauthedipandbasket) | **GET** /accounts/{token}/packages?ipAddress&#x3D;{ipAddress}&amp;basketIdent&#x3D;{basketIdent} | Fetch a package from a webstore by its identifier |
*HeadlessApi* | [**getAllPackagesWithBasket**](Apis/HeadlessApi.md#getallpackageswithbasket) | **GET** /accounts/{token}/packages?basketIdent&#x3D;{basketIdent} | Fetch a package from a webstore by its identifier |
*HeadlessApi* | [**getBasketAuthUrl**](Apis/HeadlessApi.md#getbasketauthurl) | **GET** /accounts/{token}/baskets/{basketIdent}/auth?returnUrl&#x3D;{returnUrl} | Fetch a basket from a webstore by its identifier |
*HeadlessApi* | [**getBasketById**](Apis/HeadlessApi.md#getbasketbyid) | **GET** /accounts/{token}/baskets/{basketIdent} | Fetch a basket from a webstore by its identifier |
*HeadlessApi* | [**getCategoryById**](Apis/HeadlessApi.md#getcategorybyid) | **GET** /accounts/{token}/categories/{categoryId} | Gets information about a specific category |
*HeadlessApi* | [**getCategoryIncludingPackages**](Apis/HeadlessApi.md#getcategoryincludingpackages) | **GET** /accounts/{token}/categories/{categoryId}?includePackages&#x3D;1 | Gets information about a specific category, including all the packages in the category |
*HeadlessApi* | [**getPackageById**](Apis/HeadlessApi.md#getpackagebyid) | **GET** /accounts/{token}/packages/{packageId} | Fetch a package from a webstore by its identifier |
*HeadlessApi* | [**getWebstoreById**](Apis/HeadlessApi.md#getwebstorebyid) | **GET** /accounts/{token} | Fetch a webstore by its identifier |
*HeadlessApi* | [**removeBasketPackage**](Apis/HeadlessApi.md#removebasketpackage) | **POST** /baskets/{basketIdent}/packages/remove | Remove a package from a basket |
*HeadlessApi* | [**removeCoupon**](Apis/HeadlessApi.md#removecoupon) | **POST** /accounts/{token}/baskets/{basketIdent}/coupons/remove | Remove a coupon from the basket. |
*HeadlessApi* | [**removeCreatorCode**](Apis/HeadlessApi.md#removecreatorcode) | **POST** /accounts/{token}/baskets/{basketIdent}/creator-codes/remove | Remove a creator code from the basket. |
*HeadlessApi* | [**removeGiftCard**](Apis/HeadlessApi.md#removegiftcard) | **POST** /accounts/{token}/baskets/{basketIdent}/giftcards/remove | Remove a gift card from the basket. |
*HeadlessApi* | [**updatePackageQuantity**](Apis/HeadlessApi.md#updatepackagequantity) | **PUT** /baskets/{basketIdent}/packages/{packageId} | Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed. |


<a name="documentation-for-models"></a>
## Documentation for Models

 - [Basket](./Models/Basket.md)
 - [BasketLinks](./Models/BasketLinks.md)
 - [BasketPackage](./Models/BasketPackage.md)
 - [BasketResponse](./Models/BasketResponse.md)
 - [Category](./Models/Category.md)
 - [CategoryResponse](./Models/CategoryResponse.md)
 - [Coupon](./Models/Coupon.md)
 - [ErrorResponse](./Models/ErrorResponse.md)
 - [GiftCard](./Models/GiftCard.md)
 - [Package](./Models/Package.md)
 - [PackageResponse](./Models/PackageResponse.md)
 - [Package_category](./Models/Package_category.md)
 - [RevenueShare](./Models/RevenueShare.md)
 - [Webstore](./Models/Webstore.md)
 - [WebstoreResponse](./Models/WebstoreResponse.md)
 - [WebstoreResponse_data](./Models/WebstoreResponse_data.md)
 - [addBasketPackage_request](./Models/addBasketPackage_request.md)
 - [applyCreatorCode_request](./Models/applyCreatorCode_request.md)
 - [createBasket_request](./Models/createBasket_request.md)
 - [removeBasketPackage_request](./Models/removeBasketPackage_request.md)
 - [removeGiftCard_request](./Models/removeGiftCard_request.md)
 - [updatePackageQuantity_request](./Models/updatePackageQuantity_request.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

All endpoints do not require authorization.

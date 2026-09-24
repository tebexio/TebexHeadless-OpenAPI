# Documentation for Tebex Headless API

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN*

| Class | Method | HTTP request | Description |
|------------ | ------------- | ------------- | -------------|
| *BasketsApi* | [**addBasketPackage**](Apis/BasketsApi.md#addbasketpackage) | **POST** /{basketIdent}/packages | Add package to basket |
*BasketsApi* | [**removeBasketPackage**](Apis/BasketsApi.md#removebasketpackage) | **POST** /{basketIdent}/packages/remove | Remove a package from a basket |
*BasketsApi* | [**updatePackageQuantity**](Apis/BasketsApi.md#updatepackagequantity) | **PUT** /{basketIdent}/packages/{packageId} | Update package quantity |
| *HeadlessApi* | [**applyCoupon**](Apis/HeadlessApi.md#applycoupon) | **POST** /baskets/{basketIdent}/coupons | Apply a coupon |
*HeadlessApi* | [**applyCreatorCode**](Apis/HeadlessApi.md#applycreatorcode) | **POST** /baskets/{basketIdent}/creator-codes | Apply a creator code |
*HeadlessApi* | [**applyGiftCard**](Apis/HeadlessApi.md#applygiftcard) | **POST** /baskets/{basketIdent}/giftcards | Apply a gift card |
*HeadlessApi* | [**createBasket**](Apis/HeadlessApi.md#createbasket) | **POST** /baskets | Create a new basket |
*HeadlessApi* | [**createDynamicPackage**](Apis/HeadlessApi.md#createdynamicpackage) | **PUT** /baskets/{basketIdent}/dynamic-packages | Add packages to a dynamic category for a basket. |
*HeadlessApi* | [**getAllPackages**](Apis/HeadlessApi.md#getallpackages) | **GET** /packages | Get all packages |
*HeadlessApi* | [**getAllPackagesWithAuthedIP**](Apis/HeadlessApi.md#getallpackageswithauthedip) | **GET** /packages?ipAddress&#x3D;{ipAddress} | Get packages |
*HeadlessApi* | [**getAllPackagesWithAuthedIPAndBasket**](Apis/HeadlessApi.md#getallpackageswithauthedipandbasket) | **GET** /packages?ipAddress&#x3D;{ipAddress}&amp;basketIdent&#x3D;{basketIdent} | Get packages available for IP and basket |
*HeadlessApi* | [**getBasket**](Apis/HeadlessApi.md#getbasket) | **GET** /baskets/{basketIdent} | Get a basket |
*HeadlessApi* | [**getBasketAuthUrl**](Apis/HeadlessApi.md#getbasketauthurl) | **GET** /baskets/{basketIdent}/auth?returnUrl&#x3D;{returnUrl} | Get auth links for basket |
*HeadlessApi* | [**getCategories**](Apis/HeadlessApi.md#getcategories) | **GET** /categories | Get all categories |
*HeadlessApi* | [**getCategoriesIncludePackages**](Apis/HeadlessApi.md#getcategoriesincludepackages) | **GET** /categories?includePackages&#x3D;1 | Gets all categories and packages |
*HeadlessApi* | [**getCategory**](Apis/HeadlessApi.md#getcategory) | **GET** /categories/{categoryId} | Get specific category |
*HeadlessApi* | [**getCategoryIncludeDynamicPackages**](Apis/HeadlessApi.md#getcategoryincludedynamicpackages) | **GET** /categories/{categoryId}?includePackages&#x3D;1&amp;basketIdent&#x3D;{basketIdent} | Gets a specific category including packages, populating a dynamic category for the given basket. |
*HeadlessApi* | [**getCategoryIncludePackages**](Apis/HeadlessApi.md#getcategoryincludepackages) | **GET** /categories/{categoryId}?includePackages&#x3D;1 | Get a category with all packages |
*HeadlessApi* | [**getCustomPages**](Apis/HeadlessApi.md#getcustompages) | **GET** /pages | Get custom pages defined for the webstore. |
*HeadlessApi* | [**getDynamicCategories**](Apis/HeadlessApi.md#getdynamiccategories) | **GET** /categories?includePackages&#x3D;1&amp;basketIdent&#x3D;{basketIdent} | Get Dynamic Categories |
*HeadlessApi* | [**getPackage**](Apis/HeadlessApi.md#getpackage) | **GET** /packages/{packageId} | Get package |
*HeadlessApi* | [**getPackagesForBasket**](Apis/HeadlessApi.md#getpackagesforbasket) | **GET** /packages?basketIdent&#x3D;{basketIdent} | Get packages available for basket |
*HeadlessApi* | [**getSidebar**](Apis/HeadlessApi.md#getsidebar) | **GET** /sidebar | Retrieves the available sidebar modules. |
*HeadlessApi* | [**getUserTieredCategories**](Apis/HeadlessApi.md#getusertieredcategories) | **GET** /categories?usernameId&#x3D;{usernameId}&amp;includePackages&#x3D;1 | Get user's tiered categories |
*HeadlessApi* | [**getWebstore**](Apis/HeadlessApi.md#getwebstore) | **GET** / | Get the webstore's information |
*HeadlessApi* | [**removeCoupon**](Apis/HeadlessApi.md#removecoupon) | **POST** /baskets/{basketIdent}/coupons/remove | Remove a coupon from the basket. |
*HeadlessApi* | [**removeCreatorCode**](Apis/HeadlessApi.md#removecreatorcode) | **POST** /baskets/{basketIdent}/creator-codes/remove | Removes the creator code from the basket. |
*HeadlessApi* | [**removeGiftCard**](Apis/HeadlessApi.md#removegiftcard) | **POST** /baskets/{basketIdent}/giftcards/remove | Remove a gift card from the basket. |
*HeadlessApi* | [**updateTier**](Apis/HeadlessApi.md#updatetier) | **PATCH** /tiers/{tierId} | Update user's tier to a new package |


<a name="documentation-for-models"></a>
## Documentation for Models

 - [ApplyCouponRequest](./Models/ApplyCouponRequest.md)
 - [Basket](./Models/Basket.md)
 - [BasketAuthResponse_inner](./Models/BasketAuthResponse_inner.md)
 - [BasketLinks](./Models/BasketLinks.md)
 - [BasketPackage](./Models/BasketPackage.md)
 - [BasketPackage_in_basket](./Models/BasketPackage_in_basket.md)
 - [BasketResponse](./Models/BasketResponse.md)
 - [CMSPage](./Models/CMSPage.md)
 - [CMSPagesResponse](./Models/CMSPagesResponse.md)
 - [Category](./Models/Category.md)
 - [CategoryResponse](./Models/CategoryResponse.md)
 - [CommunityGoalData](./Models/CommunityGoalData.md)
 - [CommunityGoalModule](./Models/CommunityGoalModule.md)
 - [Coupon](./Models/Coupon.md)
 - [DynamicPackageInput](./Models/DynamicPackageInput.md)
 - [DynamicPackagesRequest](./Models/DynamicPackagesRequest.md)
 - [DynamicPackagesResponse](./Models/DynamicPackagesResponse.md)
 - [ErrorResponse](./Models/ErrorResponse.md)
 - [FeaturedPackageData](./Models/FeaturedPackageData.md)
 - [FeaturedPackageModule](./Models/FeaturedPackageModule.md)
 - [GiftCard](./Models/GiftCard.md)
 - [GiftcardBalanceData](./Models/GiftcardBalanceData.md)
 - [GiftcardBalanceModule](./Models/GiftcardBalanceModule.md)
 - [Module](./Models/Module.md)
 - [ModuleBase](./Models/ModuleBase.md)
 - [ModulesResponse](./Models/ModulesResponse.md)
 - [Package](./Models/Package.md)
 - [PackageMedia](./Models/PackageMedia.md)
 - [PackageResponse](./Models/PackageResponse.md)
 - [Package_category](./Models/Package_category.md)
 - [PaymentGoalData](./Models/PaymentGoalData.md)
 - [PaymentGoalModule](./Models/PaymentGoalModule.md)
 - [Players](./Models/Players.md)
 - [RecentPayment](./Models/RecentPayment.md)
 - [RecentPayment_package](./Models/RecentPayment_package.md)
 - [RecentPaymentsData](./Models/RecentPaymentsData.md)
 - [RecentPaymentsModule](./Models/RecentPaymentsModule.md)
 - [RevenueShare](./Models/RevenueShare.md)
 - [ServerStatusData](./Models/ServerStatusData.md)
 - [ServerStatusModule](./Models/ServerStatusModule.md)
 - [SingleCategoryResponse](./Models/SingleCategoryResponse.md)
 - [SinglePackageResponse](./Models/SinglePackageResponse.md)
 - [TextboxData](./Models/TextboxData.md)
 - [TextboxModule](./Models/TextboxModule.md)
 - [Tier](./Models/Tier.md)
 - [Tier_pending_downgrade_package](./Models/Tier_pending_downgrade_package.md)
 - [Tier_status](./Models/Tier_status.md)
 - [TopCustomerData](./Models/TopCustomerData.md)
 - [TopCustomerModule](./Models/TopCustomerModule.md)
 - [UpdateTierResponse](./Models/UpdateTierResponse.md)
 - [Webstore](./Models/Webstore.md)
 - [WebstoreResponse](./Models/WebstoreResponse.md)
 - [addBasketPackage_request](./Models/addBasketPackage_request.md)
 - [applyCoupon_200_response](./Models/applyCoupon_200_response.md)
 - [applyCreatorCode_200_response](./Models/applyCreatorCode_200_response.md)
 - [applyCreatorCode_request](./Models/applyCreatorCode_request.md)
 - [applyGiftCard_200_response](./Models/applyGiftCard_200_response.md)
 - [createBasket_request](./Models/createBasket_request.md)
 - [removeBasketPackage_request](./Models/removeBasketPackage_request.md)
 - [removeGiftCard_request](./Models/removeGiftCard_request.md)
 - [updatePackageQuantity_request](./Models/updatePackageQuantity_request.md)
 - [updateTier_request](./Models/updateTier_request.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="basicAuth"></a>
### basicAuth

- **Type**: HTTP basic authentication


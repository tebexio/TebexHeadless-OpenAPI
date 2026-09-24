# HeadlessApi

All URIs are relative to *https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**applyCoupon**](HeadlessApi.md#applyCoupon) | **POST** /baskets/{basketIdent}/coupons | Apply a coupon |
| [**applyCreatorCode**](HeadlessApi.md#applyCreatorCode) | **POST** /baskets/{basketIdent}/creator-codes | Apply a creator code |
| [**applyGiftCard**](HeadlessApi.md#applyGiftCard) | **POST** /baskets/{basketIdent}/giftcards | Apply a gift card |
| [**createBasket**](HeadlessApi.md#createBasket) | **POST** /baskets | Create a new basket |
| [**createDynamicPackage**](HeadlessApi.md#createDynamicPackage) | **PUT** /baskets/{basketIdent}/dynamic-packages | Add packages to a dynamic category for a basket. |
| [**getAllPackages**](HeadlessApi.md#getAllPackages) | **GET** /packages | Get all packages |
| [**getAllPackagesWithAuthedIP**](HeadlessApi.md#getAllPackagesWithAuthedIP) | **GET** /packages?ipAddress&#x3D;{ipAddress} | Get packages |
| [**getAllPackagesWithAuthedIPAndBasket**](HeadlessApi.md#getAllPackagesWithAuthedIPAndBasket) | **GET** /packages?ipAddress&#x3D;{ipAddress}&amp;basketIdent&#x3D;{basketIdent} | Get packages available for IP and basket |
| [**getBasket**](HeadlessApi.md#getBasket) | **GET** /baskets/{basketIdent} | Get a basket |
| [**getBasketAuthUrl**](HeadlessApi.md#getBasketAuthUrl) | **GET** /baskets/{basketIdent}/auth?returnUrl&#x3D;{returnUrl} | Get auth links for basket |
| [**getCategories**](HeadlessApi.md#getCategories) | **GET** /categories | Get all categories |
| [**getCategoriesIncludePackages**](HeadlessApi.md#getCategoriesIncludePackages) | **GET** /categories?includePackages&#x3D;1 | Gets all categories and packages |
| [**getCategory**](HeadlessApi.md#getCategory) | **GET** /categories/{categoryId} | Get specific category |
| [**getCategoryIncludeDynamicPackages**](HeadlessApi.md#getCategoryIncludeDynamicPackages) | **GET** /categories/{categoryId}?includePackages&#x3D;1&amp;basketIdent&#x3D;{basketIdent} | Gets a specific category including packages, populating a dynamic category for the given basket. |
| [**getCategoryIncludePackages**](HeadlessApi.md#getCategoryIncludePackages) | **GET** /categories/{categoryId}?includePackages&#x3D;1 | Get a category with all packages |
| [**getCustomPages**](HeadlessApi.md#getCustomPages) | **GET** /pages | Get custom pages defined for the webstore. |
| [**getDynamicCategories**](HeadlessApi.md#getDynamicCategories) | **GET** /categories?includePackages&#x3D;1&amp;basketIdent&#x3D;{basketIdent} | Get Dynamic Categories |
| [**getPackage**](HeadlessApi.md#getPackage) | **GET** /packages/{packageId} | Get package |
| [**getPackagesForBasket**](HeadlessApi.md#getPackagesForBasket) | **GET** /packages?basketIdent&#x3D;{basketIdent} | Get packages available for basket |
| [**getSidebar**](HeadlessApi.md#getSidebar) | **GET** /sidebar | Retrieves the available sidebar modules. |
| [**getUserTieredCategories**](HeadlessApi.md#getUserTieredCategories) | **GET** /categories?usernameId&#x3D;{usernameId}&amp;includePackages&#x3D;1 | Get user&#39;s tiered categories |
| [**getWebstore**](HeadlessApi.md#getWebstore) | **GET** / | Get the webstore&#39;s information |
| [**removeCoupon**](HeadlessApi.md#removeCoupon) | **POST** /baskets/{basketIdent}/coupons/remove | Remove a coupon from the basket. |
| [**removeCreatorCode**](HeadlessApi.md#removeCreatorCode) | **POST** /baskets/{basketIdent}/creator-codes/remove | Removes the creator code from the basket. |
| [**removeGiftCard**](HeadlessApi.md#removeGiftCard) | **POST** /baskets/{basketIdent}/giftcards/remove | Remove a gift card from the basket. |
| [**updateTier**](HeadlessApi.md#updateTier) | **PATCH** /tiers/{tierId} | Update user&#39;s tier to a new package |


<a name="applyCoupon"></a>
# **applyCoupon**
> applyCoupon_200_response applyCoupon(basketIdent, ApplyCouponRequest)

Apply a coupon

    Applies a coupon to a basket.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | [default to null] |
| **ApplyCouponRequest** | [**ApplyCouponRequest**](../Models/ApplyCouponRequest.md)| Provide a &#x60;coupon_code&#x60; to apply to the basket. | [optional] |

### Return type

[**applyCoupon_200_response**](../Models/applyCoupon_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="applyCreatorCode"></a>
# **applyCreatorCode**
> applyCreatorCode_200_response applyCreatorCode(basketIdent, applyCreatorCode\_request)

Apply a creator code

    Applies a creator code to a basket.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | [default to null] |
| **applyCreatorCode\_request** | [**applyCreatorCode_request**](../Models/applyCreatorCode_request.md)| Provide a &#x60;creator_code&#x60; to apply to the basket. | [optional] |

### Return type

[**applyCreatorCode_200_response**](../Models/applyCreatorCode_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="applyGiftCard"></a>
# **applyGiftCard**
> applyGiftCard_200_response applyGiftCard(basketIdent, GiftCard)

Apply a gift card

    Applies a gift card to the basket.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | [default to null] |
| **GiftCard** | [**GiftCard**](../Models/GiftCard.md)| Provide a &#x60;card_number&#x60; to apply to the basket. | [optional] |

### Return type

[**applyGiftCard_200_response**](../Models/applyGiftCard_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createBasket"></a>
# **createBasket**
> BasketResponse createBasket(createBasket\_request)

Create a new basket

    Creates a new basket for use during checkout.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createBasket\_request** | [**createBasket_request**](../Models/createBasket_request.md)|  | [optional] |

### Return type

[**BasketResponse**](../Models/BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createDynamicPackage"></a>
# **createDynamicPackage**
> DynamicPackagesResponse createDynamicPackage(basketIdent, DynamicPackagesRequest)

Add packages to a dynamic category for a basket.

    Populates a dynamic category with custom packages for the given basket. Dynamic categories are created in the creator panel with the type &#x60;dynamic&#x60;, and are typically populated in response to a &#x60;basket.authenticated&#x60; webhook.  Once created, the packages can be fetched using the category endpoints with both &#x60;includePackages&#x3D;1&#x60; and &#x60;basketIdent&#x60; provided.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | [default to null] |
| **DynamicPackagesRequest** | [**DynamicPackagesRequest**](../Models/DynamicPackagesRequest.md)|  | [optional] |

### Return type

[**DynamicPackagesResponse**](../Models/DynamicPackagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getAllPackages"></a>
# **getAllPackages**
> PackageResponse getAllPackages()

Get all packages

    Gets all packages from a webstore.  Note: this endpoint does not support packages belonging to dynamic categories. Use the category endpoints with &#x60;includePackages&#x3D;1&#x60; and &#x60;basketIdent&#x60; to fetch dynamic packages.

### Parameters
This endpoint does not need any parameter.

### Return type

[**PackageResponse**](../Models/PackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAllPackagesWithAuthedIP"></a>
# **getAllPackagesWithAuthedIP**
> PackageResponse getAllPackagesWithAuthedIP(ipAddress)

Get packages

    Gets all packages from a webstore.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ipAddress** | **String**| An IP address can be provided with authenticated requests | [default to null] |

### Return type

[**PackageResponse**](../Models/PackageResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAllPackagesWithAuthedIPAndBasket"></a>
# **getAllPackagesWithAuthedIPAndBasket**
> PackageResponse getAllPackagesWithAuthedIPAndBasket(basketIdent, ipAddress)

Get packages available for IP and basket

    Gets all packages from a webstore.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | [default to null] |
| **ipAddress** | **String**| An IP address can be provided with authenticated requests. | [default to null] |

### Return type

[**PackageResponse**](../Models/PackageResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getBasket"></a>
# **getBasket**
> BasketResponse getBasket(basketIdent)

Get a basket

    Gets a basket associated with the provided identifier.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | [default to null] |

### Return type

[**BasketResponse**](../Models/BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getBasketAuthUrl"></a>
# **getBasketAuthUrl**
> List getBasketAuthUrl(basketIdent, returnUrl)

Get auth links for basket

    Fetches a basket&#39;s auth URL. The player should be directed here in order for them to authorize their account. When complete, they will be returned to the provided &#x60;returnUrl&#x60; and the basket will be authorized from that moment onwards.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | [default to null] |
| **returnUrl** | **String**| The URL you would like to redirect the user to after successful basket authentication. | [default to null] |

### Return type

[**List**](../Models/BasketAuthResponse_inner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCategories"></a>
# **getCategories**
> CategoryResponse getCategories()

Get all categories

    Gets all categories from a webstore. This does not include package information. To include package information, add &#x60;?includePackages&#x3D;1&#x60; to the URL.

### Parameters
This endpoint does not need any parameter.

### Return type

[**CategoryResponse**](../Models/CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCategoriesIncludePackages"></a>
# **getCategoriesIncludePackages**
> CategoryResponse getCategoriesIncludePackages()

Gets all categories and packages

    Gets all categories from a webstore including packages.

### Parameters
This endpoint does not need any parameter.

### Return type

[**CategoryResponse**](../Models/CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCategory"></a>
# **getCategory**
> SingleCategoryResponse getCategory(categoryId)

Get specific category

    Gets information about a category and returns the packages in that category.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **categoryId** | **String**| The ID or slug of the category to fetch. | [default to null] |

### Return type

[**SingleCategoryResponse**](../Models/SingleCategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCategoryIncludeDynamicPackages"></a>
# **getCategoryIncludeDynamicPackages**
> SingleCategoryResponse getCategoryIncludeDynamicPackages(categoryId, basketIdent)

Gets a specific category including packages, populating a dynamic category for the given basket.

    Gets information about a category and returns the packages in that category. When the category is dynamic and &#x60;basketIdent&#x60; is provided, the category is populated with the packages associated with that basket.  If a basket identifier is not provided, a dynamic category will be empty as the basket is required to relate packages to the category.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **categoryId** | **String**| The ID or slug of the category to fetch. | [default to null] |
| **basketIdent** | **String**| The basket identifier. | [default to null] |

### Return type

[**SingleCategoryResponse**](../Models/SingleCategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCategoryIncludePackages"></a>
# **getCategoryIncludePackages**
> SingleCategoryResponse getCategoryIncludePackages(categoryId)

Get a category with all packages

    Gets information about a category and returns the packages in that category.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **categoryId** | **String**| The ID or slug of the category to fetch. | [default to null] |

### Return type

[**SingleCategoryResponse**](../Models/SingleCategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCustomPages"></a>
# **getCustomPages**
> CMSPagesResponse getCustomPages()

Get custom pages defined for the webstore.

    Gets a list of custom pages associated with the webstore. These contain a &#x60;content&#x60; variable with the HTML content of the page.

### Parameters
This endpoint does not need any parameter.

### Return type

[**CMSPagesResponse**](../Models/CMSPagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDynamicCategories"></a>
# **getDynamicCategories**
> CategoryResponse getDynamicCategories(basketIdent)

Get Dynamic Categories

    Gets all categories from a webstore including packages. When &#x60;basketIdent&#x60; is provided, dynamic categories are populated with the packages associated with that basket.  If a basket identifier is not provided, dynamic categories will be empty as the basket is required to relate packages to the category.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | [default to null] |

### Return type

[**CategoryResponse**](../Models/CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPackage"></a>
# **getPackage**
> SinglePackageResponse getPackage(packageId)

Get package

    Gets a package from a webstore by its ID or slug.  Note: this endpoint does not support packages belonging to dynamic categories. Use the category endpoints with &#x60;includePackages&#x3D;1&#x60; and &#x60;basketIdent&#x60; to fetch dynamic packages.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **packageId** | **String**| The package&#39;s ID or slug. | [default to null] |

### Return type

[**SinglePackageResponse**](../Models/SinglePackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPackagesForBasket"></a>
# **getPackagesForBasket**
> PackageResponse getPackagesForBasket(basketIdent)

Get packages available for basket

    Gets all packages available to the provided basket.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | [default to null] |

### Return type

[**PackageResponse**](../Models/PackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getSidebar"></a>
# **getSidebar**
> ModulesResponse getSidebar(token)

Retrieves the available sidebar modules.

    Retrieves the available sidebar modules configured for the store.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | [default to null] |

### Return type

[**ModulesResponse**](../Models/ModulesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUserTieredCategories"></a>
# **getUserTieredCategories**
> CategoryResponse getUserTieredCategories(usernameId)

Get user&#39;s tiered categories

    Gets all categories from the webstore, returning active tier information for the given player.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **usernameId** | **Integer**|  | [default to null] |

### Return type

[**CategoryResponse**](../Models/CategoryResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWebstore"></a>
# **getWebstore**
> WebstoreResponse getWebstore()

Get the webstore&#39;s information

    Gets the webstore associated with the provided token

### Parameters
This endpoint does not need any parameter.

### Return type

[**WebstoreResponse**](../Models/WebstoreResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="removeCoupon"></a>
# **removeCoupon**
> removeCoupon(basketIdent, ApplyCouponRequest)

Remove a coupon from the basket.

    Removes a coupon code from a basket

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | [default to null] |
| **ApplyCouponRequest** | [**ApplyCouponRequest**](../Models/ApplyCouponRequest.md)| Provide a &#x60;coupon_code&#x60; to remove from the basket. | [optional] |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="removeCreatorCode"></a>
# **removeCreatorCode**
> removeCreatorCode(basketIdent)

Removes the creator code from the basket.

    Removes the creator code from the basket.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | [default to null] |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="removeGiftCard"></a>
# **removeGiftCard**
> removeGiftCard(basketIdent, removeGiftCard\_request)

Remove a gift card from the basket.

    Removes a gift card from the basket.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | [default to null] |
| **removeGiftCard\_request** | [**removeGiftCard_request**](../Models/removeGiftCard_request.md)| Provide the &#x60;card_number&#x60; to remove from the basket. | [optional] |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="updateTier"></a>
# **updateTier**
> UpdateTierResponse updateTier(tierId, updateTier\_request)

Update user&#39;s tier to a new package

    Updates a tier to a new package. A recurring payment updated webhook is sent when an update is successful.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tierId** | **Integer**| The tier identifier | [default to null] |
| **updateTier\_request** | [**updateTier_request**](../Models/updateTier_request.md)|  | [optional] |

### Return type

[**UpdateTierResponse**](../Models/UpdateTierResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


# HeadlessApi

All URIs are relative to *https://headless.tebex.io/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addBasketPackage**](HeadlessApi.md#addBasketPackage) | **POST** /baskets/{basketIdent}/packages | Add a package to a basket |
| [**applyCoupon**](HeadlessApi.md#applyCoupon) | **POST** /accounts/{token}/baskets/{basketIdent}/coupons | Apply a coupon to a basket. |
| [**applyCreatorCode**](HeadlessApi.md#applyCreatorCode) | **POST** /accounts/{token}/baskets/{basketIdent}/creator-codes | Apply a creator code to a basket. |
| [**applyGiftCard**](HeadlessApi.md#applyGiftCard) | **POST** /accounts/{token}/baskets/{basketIdent}/giftcards | Apply a gift card to a basket. |
| [**createBasket**](HeadlessApi.md#createBasket) | **POST** /accounts/{token}/baskets | Create a new basket |
| [**getAllCategories**](HeadlessApi.md#getAllCategories) | **GET** /accounts/{token}/categories | Gets all categories available in the webstore. |
| [**getAllCategoriesIncludingPackages**](HeadlessApi.md#getAllCategoriesIncludingPackages) | **GET** /accounts/{token}/categories?includePackages&#x3D;1 | Gets a store&#39;s categories including all package information with them. |
| [**getAllPackages**](HeadlessApi.md#getAllPackages) | **GET** /accounts/{token}/packages | Fetch all packages from a webstore |
| [**getAllPackagesWithAuthedIP**](HeadlessApi.md#getAllPackagesWithAuthedIP) | **GET** /accounts/{token}/packages?ipAddress&#x3D;{ipAddress} | Fetch a package from a webstore by its identifier |
| [**getAllPackagesWithAuthedIPAndBasket**](HeadlessApi.md#getAllPackagesWithAuthedIPAndBasket) | **GET** /accounts/{token}/packages?ipAddress&#x3D;{ipAddress}&amp;basketIdent&#x3D;{basketIdent} | Fetch a package from a webstore by its identifier |
| [**getAllPackagesWithBasket**](HeadlessApi.md#getAllPackagesWithBasket) | **GET** /accounts/{token}/packages?basketIdent&#x3D;{basketIdent} | Fetch a package from a webstore by its identifier |
| [**getBasketAuthUrl**](HeadlessApi.md#getBasketAuthUrl) | **GET** /accounts/{token}/baskets/{basketIdent}/auth?returnUrl&#x3D;{returnUrl} | Fetch a basket from a webstore by its identifier |
| [**getBasketById**](HeadlessApi.md#getBasketById) | **GET** /accounts/{token}/baskets/{basketIdent} | Fetch a basket from a webstore by its identifier |
| [**getCMSPages**](HeadlessApi.md#getCMSPages) | **GET** /accounts/{token}/pages | Fetch the custom pages associated with the store. |
| [**getCategoryById**](HeadlessApi.md#getCategoryById) | **GET** /accounts/{token}/categories/{categoryId} | Gets information about a specific category |
| [**getCategoryIncludingPackages**](HeadlessApi.md#getCategoryIncludingPackages) | **GET** /accounts/{token}/categories/{categoryId}?includePackages&#x3D;1 | Gets information about a specific category, including all the packages in the category |
| [**getPackageById**](HeadlessApi.md#getPackageById) | **GET** /accounts/{token}/packages/{packageId} | Fetch a package from a webstore by its identifier |
| [**getWebstoreById**](HeadlessApi.md#getWebstoreById) | **GET** /accounts/{token} | Fetch a webstore by its identifier |
| [**removeBasketPackage**](HeadlessApi.md#removeBasketPackage) | **POST** /baskets/{basketIdent}/packages/remove | Remove a package from a basket |
| [**removeCoupon**](HeadlessApi.md#removeCoupon) | **POST** /accounts/{token}/baskets/{basketIdent}/coupons/remove | Remove a coupon from the basket. |
| [**removeCreatorCode**](HeadlessApi.md#removeCreatorCode) | **POST** /accounts/{token}/baskets/{basketIdent}/creator-codes/remove | Remove a creator code from the basket. |
| [**removeGiftCard**](HeadlessApi.md#removeGiftCard) | **POST** /accounts/{token}/baskets/{basketIdent}/giftcards/remove | Remove a gift card from the basket. |
| [**updatePackageQuantity**](HeadlessApi.md#updatePackageQuantity) | **PUT** /baskets/{basketIdent}/packages/{packageId} | Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed. |
| [**updateTier**](HeadlessApi.md#updateTier) | **PATCH** /accounts/{token}/tiers/{tierId} | TODO |


<a name="addBasketPackage"></a>
# **addBasketPackage**
> Basket addBasketPackage(basketIdent, addBasketPackage\_request)

Add a package to a basket

    Add a package with the given ID to the basket.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | [default to null] |
| **addBasketPackage\_request** | [**addBasketPackage_request**](../Models/addBasketPackage_request.md)|  | [optional] |

### Return type

[**Basket**](../Models/Basket.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="applyCoupon"></a>
# **applyCoupon**
> BasketResponse applyCoupon(token, basketIdent, Coupon)

Apply a coupon to a basket.

    Applies a creator code to a basket.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | [default to null] |
| **basketIdent** | **String**| The basket identifier. | [default to null] |
| **Coupon** | [**Coupon**](../Models/Coupon.md)| Provide a &#x60;coupon_code&#x60; to apply to the basket. | [optional] |

### Return type

[**BasketResponse**](../Models/BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="applyCreatorCode"></a>
# **applyCreatorCode**
> BasketResponse applyCreatorCode(token, basketIdent, applyCreatorCode\_request)

Apply a creator code to a basket.

    Applies a creator code to a basket.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | [default to null] |
| **basketIdent** | **String**| The basket identifier. | [default to null] |
| **applyCreatorCode\_request** | [**applyCreatorCode_request**](../Models/applyCreatorCode_request.md)| Provide a &#x60;creator_code&#x60; to apply to the basket. | [optional] |

### Return type

[**BasketResponse**](../Models/BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="applyGiftCard"></a>
# **applyGiftCard**
> BasketResponse applyGiftCard(token, basketIdent, GiftCard)

Apply a gift card to a basket.

    Applies a creator code to a basket.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | [default to null] |
| **basketIdent** | **String**| The basket identifier. | [default to null] |
| **GiftCard** | [**GiftCard**](../Models/GiftCard.md)| Provide a &#x60;card_number&#x60; to apply to the basket. | [optional] |

### Return type

[**BasketResponse**](../Models/BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createBasket"></a>
# **createBasket**
> BasketResponse createBasket(token, createBasket\_request)

Create a new basket

    Creates a new basket for use during checkout.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | [default to null] |
| **createBasket\_request** | [**createBasket_request**](../Models/createBasket_request.md)|  | [optional] |

### Return type

[**BasketResponse**](../Models/BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getAllCategories"></a>
# **getAllCategories**
> CategoryResponse getAllCategories(token)

Gets all categories available in the webstore.

    Gets all categories from a webstore. This does not include package information. To include package information, add &#x60;?includePackages&#x3D;1&#x60; to the URL.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | [default to null] |

### Return type

[**CategoryResponse**](../Models/CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAllCategoriesIncludingPackages"></a>
# **getAllCategoriesIncludingPackages**
> CategoryResponse getAllCategoriesIncludingPackages(token)

Gets a store&#39;s categories including all package information with them.

    Gets all categories from a webstore including packages.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | [default to null] |

### Return type

[**CategoryResponse**](../Models/CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAllPackages"></a>
# **getAllPackages**
> PackageResponse getAllPackages(token)

Fetch all packages from a webstore

    Gets all packages from a webstore.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | [default to null] |

### Return type

[**PackageResponse**](../Models/PackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAllPackagesWithAuthedIP"></a>
# **getAllPackagesWithAuthedIP**
> PackageResponse getAllPackagesWithAuthedIP(token, ipAddress)

Fetch a package from a webstore by its identifier

    Gets all packages from a webstore.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | [default to null] |
| **ipAddress** | **String**| An IP address can be provided with authenticated requests. | [default to null] |

### Return type

[**PackageResponse**](../Models/PackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAllPackagesWithAuthedIPAndBasket"></a>
# **getAllPackagesWithAuthedIPAndBasket**
> PackageResponse getAllPackagesWithAuthedIPAndBasket(token, basketIdent, ipAddress)

Fetch a package from a webstore by its identifier

    Gets all packages from a webstore.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | [default to null] |
| **basketIdent** | **String**| The basket identifier. | [default to null] |
| **ipAddress** | **String**| An IP address can be provided with authenticated requests. | [default to null] |

### Return type

[**PackageResponse**](../Models/PackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAllPackagesWithBasket"></a>
# **getAllPackagesWithBasket**
> PackageResponse getAllPackagesWithBasket(token, basketIdent)

Fetch a package from a webstore by its identifier

    Gets all packages from a webstore.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | [default to null] |
| **basketIdent** | **String**| The basket identifier. | [default to null] |

### Return type

[**PackageResponse**](../Models/PackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getBasketAuthUrl"></a>
# **getBasketAuthUrl**
> BasketResponse getBasketAuthUrl(token, basketIdent, returnUrl)

Fetch a basket from a webstore by its identifier

    Fetches a basket&#39;s auth URL.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | [default to null] |
| **basketIdent** | **String**| The basket identifier. | [default to null] |
| **returnUrl** | **String**| The URL you would like to redirect the user to after successful basket authentication. | [default to null] |

### Return type

[**BasketResponse**](../Models/BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getBasketById"></a>
# **getBasketById**
> BasketResponse getBasketById(token, basketIdent)

Fetch a basket from a webstore by its identifier

    Gets a basket associated with the provided identifier.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | [default to null] |
| **basketIdent** | **String**| The basket identifier. | [default to null] |

### Return type

[**BasketResponse**](../Models/BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCMSPages"></a>
# **getCMSPages**
> CMSPagesResponse getCMSPages(token)

Fetch the custom pages associated with the store.

    Gets a list of custom pages associated with the webstore. These contain a &#x60;content&#x60; variable with the HTML content of the page.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | [default to null] |

### Return type

[**CMSPagesResponse**](../Models/CMSPagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCategoryById"></a>
# **getCategoryById**
> CategoryResponse getCategoryById(token, categoryId)

Gets information about a specific category

    Gets information about a category and returns the packages in that category.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | [default to null] |
| **categoryId** | **String**| The ID of the category to fetch. | [default to null] |

### Return type

[**CategoryResponse**](../Models/CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCategoryIncludingPackages"></a>
# **getCategoryIncludingPackages**
> CategoryResponse getCategoryIncludingPackages(token, categoryId)

Gets information about a specific category, including all the packages in the category

    Gets information about a category and returns the packages in that category.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | [default to null] |
| **categoryId** | **String**| The ID of the category to fetch. | [default to null] |

### Return type

[**CategoryResponse**](../Models/CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPackageById"></a>
# **getPackageById**
> PackageResponse getPackageById(token, packageId)

Fetch a package from a webstore by its identifier

    Gets a package from a webstore by ID.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | [default to null] |
| **packageId** | **BigDecimal**| The package&#39;s ID. | [default to null] |

### Return type

[**PackageResponse**](../Models/PackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWebstoreById"></a>
# **getWebstoreById**
> WebstoreResponse getWebstoreById(token)

Fetch a webstore by its identifier

    Gets the webstore associated with the provided identifier.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | [default to null] |

### Return type

[**WebstoreResponse**](../Models/WebstoreResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="removeBasketPackage"></a>
# **removeBasketPackage**
> Basket removeBasketPackage(basketIdent, removeBasketPackage\_request)

Remove a package from a basket

    Remove the given package ID from the basket.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | [default to null] |
| **removeBasketPackage\_request** | [**removeBasketPackage_request**](../Models/removeBasketPackage_request.md)|  | [optional] |

### Return type

[**Basket**](../Models/Basket.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="removeCoupon"></a>
# **removeCoupon**
> removeCoupon(token, basketIdent)

Remove a coupon from the basket.

    Removes a coupon code from a basket

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | [default to null] |
| **basketIdent** | **String**| The basket identifier. | [default to null] |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="removeCreatorCode"></a>
# **removeCreatorCode**
> removeCreatorCode(token, basketIdent)

Remove a creator code from the basket.

    Applies a creator code to a basket.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | [default to null] |
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
> removeGiftCard(token, basketIdent, removeGiftCard\_request)

Remove a gift card from the basket.

    Removes a gift card from the basket.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | [default to null] |
| **basketIdent** | **String**| The basket identifier. | [default to null] |
| **removeGiftCard\_request** | [**removeGiftCard_request**](../Models/removeGiftCard_request.md)| Provide the &#x60;card_number&#x60; to remove from the basket. | [optional] |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="updatePackageQuantity"></a>
# **updatePackageQuantity**
> updatePackageQuantity(basketIdent, packageId, updatePackageQuantity\_request)

Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed.

    Sets the quantity of the given item in the basket.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **basketIdent** | **String**| The basket identifier. | [default to null] |
| **packageId** | **BigDecimal**| The package identifier. | [default to null] |
| **updatePackageQuantity\_request** | [**updatePackageQuantity_request**](../Models/updatePackageQuantity_request.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="updateTier"></a>
# **updateTier**
> CMSPagesResponse updateTier(token, tierId, updateTier\_request)

TODO

    Updates a tier.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **token** | **String**| The webstore identifier. | [default to null] |
| **tierId** | **String**| The tier identifier | [default to null] |
| **updateTier\_request** | [**updateTier_request**](../Models/updateTier_request.md)|  | [optional] |

### Return type

[**CMSPagesResponse**](../Models/CMSPagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


# TebexHeadless\HeadlessAPI

All URIs are relative to *https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApplyCoupon**](HeadlessAPI.md#ApplyCoupon) | **Post** /baskets/{basketIdent}/coupons | Apply a coupon
[**ApplyCreatorCode**](HeadlessAPI.md#ApplyCreatorCode) | **Post** /baskets/{basketIdent}/creator-codes | Apply a creator code
[**ApplyGiftCard**](HeadlessAPI.md#ApplyGiftCard) | **Post** /baskets/{basketIdent}/giftcards | Apply a gift card
[**CreateBasket**](HeadlessAPI.md#CreateBasket) | **Post** /baskets | Create a new basket
[**CreateDynamicPackage**](HeadlessAPI.md#CreateDynamicPackage) | **Put** /baskets/{basketIdent}/dynamic-packages | Add packages to a dynamic category for a basket.
[**GetAllPackages**](HeadlessAPI.md#GetAllPackages) | **Get** /packages | Get all packages
[**GetAllPackagesWithAuthedIP**](HeadlessAPI.md#GetAllPackagesWithAuthedIP) | **Get** /packages?ipAddress&#x3D;{ipAddress} | Get packages
[**GetAllPackagesWithAuthedIPAndBasket**](HeadlessAPI.md#GetAllPackagesWithAuthedIPAndBasket) | **Get** /packages?ipAddress&#x3D;{ipAddress}&amp;basketIdent&#x3D;{basketIdent} | Get packages available for IP and basket
[**GetBasket**](HeadlessAPI.md#GetBasket) | **Get** /baskets/{basketIdent} | Get a basket
[**GetBasketAuthUrl**](HeadlessAPI.md#GetBasketAuthUrl) | **Get** /baskets/{basketIdent}/auth?returnUrl&#x3D;{returnUrl} | Get auth links for basket
[**GetCategories**](HeadlessAPI.md#GetCategories) | **Get** /categories | Get all categories
[**GetCategoriesIncludePackages**](HeadlessAPI.md#GetCategoriesIncludePackages) | **Get** /categories?includePackages&#x3D;1 | Gets all categories and packages
[**GetCategory**](HeadlessAPI.md#GetCategory) | **Get** /categories/{categoryId} | Get specific category
[**GetCategoryIncludeDynamicPackages**](HeadlessAPI.md#GetCategoryIncludeDynamicPackages) | **Get** /categories/{categoryId}?includePackages&#x3D;1&amp;basketIdent&#x3D;{basketIdent} | Gets a specific category including packages, populating a dynamic category for the given basket.
[**GetCategoryIncludePackages**](HeadlessAPI.md#GetCategoryIncludePackages) | **Get** /categories/{categoryId}?includePackages&#x3D;1 | Get a category with all packages
[**GetCommunityGoal**](HeadlessAPI.md#GetCommunityGoal) | **Get** /community-goals/{communityGoalId} | Get a community goal.
[**GetCommunityGoals**](HeadlessAPI.md#GetCommunityGoals) | **Get** /community-goals | Get the webstore&#39;s community goals.
[**GetCustomPages**](HeadlessAPI.md#GetCustomPages) | **Get** /pages | Get custom pages defined for the webstore.
[**GetDynamicCategories**](HeadlessAPI.md#GetDynamicCategories) | **Get** /categories?includePackages&#x3D;1&amp;basketIdent&#x3D;{basketIdent} | Get Dynamic Categories
[**GetPackage**](HeadlessAPI.md#GetPackage) | **Get** /packages/{packageId} | Get package
[**GetPackagesForBasket**](HeadlessAPI.md#GetPackagesForBasket) | **Get** /packages?basketIdent&#x3D;{basketIdent} | Get packages available for basket
[**GetRecentPayments**](HeadlessAPI.md#GetRecentPayments) | **Get** /recent-payments | Get the webstore&#39;s recent payments.
[**GetSales**](HeadlessAPI.md#GetSales) | **Get** /sales | Get the webstore&#39;s active sales.
[**GetSidebar**](HeadlessAPI.md#GetSidebar) | **Get** /sidebar | Retrieves the available sidebar modules.
[**GetTopCustomer**](HeadlessAPI.md#GetTopCustomer) | **Get** /top-customers | Get the webstore&#39;s top customer.
[**GetUserTieredCategories**](HeadlessAPI.md#GetUserTieredCategories) | **Get** /categories?usernameId&#x3D;{usernameId}&amp;includePackages&#x3D;1 | Get user&#39;s tiered categories
[**GetWebstore**](HeadlessAPI.md#GetWebstore) | **Get** / | Get the webstore&#39;s information
[**RemoveCoupon**](HeadlessAPI.md#RemoveCoupon) | **Post** /baskets/{basketIdent}/coupons/remove | Remove a coupon from the basket.
[**RemoveCreatorCode**](HeadlessAPI.md#RemoveCreatorCode) | **Post** /baskets/{basketIdent}/creator-codes/remove | Removes the creator code from the basket.
[**RemoveGiftCard**](HeadlessAPI.md#RemoveGiftCard) | **Post** /baskets/{basketIdent}/giftcards/remove | Remove a gift card from the basket.
[**UpdateTier**](HeadlessAPI.md#UpdateTier) | **Patch** /tiers/{tierId} | Update user&#39;s tier to a new package



## ApplyCoupon

> ApplyCoupon200Response ApplyCoupon(ctx, basketIdent).ApplyCouponRequest(applyCouponRequest).Execute()

Apply a coupon



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	basketIdent := "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c" // string | The basket identifier.
	applyCouponRequest := *openapiclient.NewApplyCouponRequest() // ApplyCouponRequest | Provide a `coupon_code` to apply to the basket. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.ApplyCoupon(context.Background(), basketIdent).ApplyCouponRequest(applyCouponRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.ApplyCoupon``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApplyCoupon`: ApplyCoupon200Response
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.ApplyCoupon`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**basketIdent** | **string** | The basket identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiApplyCouponRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **applyCouponRequest** | [**ApplyCouponRequest**](ApplyCouponRequest.md) | Provide a &#x60;coupon_code&#x60; to apply to the basket. | 

### Return type

[**ApplyCoupon200Response**](ApplyCoupon200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApplyCreatorCode

> ApplyCreatorCode200Response ApplyCreatorCode(ctx, basketIdent).ApplyCreatorCodeRequest(applyCreatorCodeRequest).Execute()

Apply a creator code



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	basketIdent := "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c" // string | The basket identifier.
	applyCreatorCodeRequest := *openapiclient.NewApplyCreatorCodeRequest() // ApplyCreatorCodeRequest | Provide a `creator_code` to apply to the basket. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.ApplyCreatorCode(context.Background(), basketIdent).ApplyCreatorCodeRequest(applyCreatorCodeRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.ApplyCreatorCode``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApplyCreatorCode`: ApplyCreatorCode200Response
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.ApplyCreatorCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**basketIdent** | **string** | The basket identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiApplyCreatorCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **applyCreatorCodeRequest** | [**ApplyCreatorCodeRequest**](ApplyCreatorCodeRequest.md) | Provide a &#x60;creator_code&#x60; to apply to the basket. | 

### Return type

[**ApplyCreatorCode200Response**](ApplyCreatorCode200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApplyGiftCard

> ApplyGiftCard200Response ApplyGiftCard(ctx, basketIdent).GiftCard(giftCard).Execute()

Apply a gift card



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	basketIdent := "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c" // string | The basket identifier.
	giftCard := *openapiclient.NewGiftCard() // GiftCard | Provide a `card_number` to apply to the basket. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.ApplyGiftCard(context.Background(), basketIdent).GiftCard(giftCard).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.ApplyGiftCard``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApplyGiftCard`: ApplyGiftCard200Response
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.ApplyGiftCard`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**basketIdent** | **string** | The basket identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiApplyGiftCardRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **giftCard** | [**GiftCard**](GiftCard.md) | Provide a &#x60;card_number&#x60; to apply to the basket. | 

### Return type

[**ApplyGiftCard200Response**](ApplyGiftCard200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateBasket

> BasketResponse CreateBasket(ctx).CreateBasketRequest(createBasketRequest).Execute()

Create a new basket



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	createBasketRequest := *openapiclient.NewCreateBasketRequest() // CreateBasketRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.CreateBasket(context.Background()).CreateBasketRequest(createBasketRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.CreateBasket``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateBasket`: BasketResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.CreateBasket`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateBasketRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBasketRequest** | [**CreateBasketRequest**](CreateBasketRequest.md) |  | 

### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateDynamicPackage

> DynamicPackagesResponse CreateDynamicPackage(ctx, basketIdent).DynamicPackagesRequest(dynamicPackagesRequest).Execute()

Add packages to a dynamic category for a basket.



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	basketIdent := "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c" // string | The basket identifier.
	dynamicPackagesRequest := *openapiclient.NewDynamicPackagesRequest("dvcbln-d7f6355161726d63e6dbe235ca25d2641184295b", "TestUser", int32(1234), []openapiclient.DynamicPackageInput{*openapiclient.NewDynamicPackageInput("Package Name 1", float32(10.0), "package-name-1")}) // DynamicPackagesRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.CreateDynamicPackage(context.Background(), basketIdent).DynamicPackagesRequest(dynamicPackagesRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.CreateDynamicPackage``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateDynamicPackage`: DynamicPackagesResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.CreateDynamicPackage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**basketIdent** | **string** | The basket identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateDynamicPackageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **dynamicPackagesRequest** | [**DynamicPackagesRequest**](DynamicPackagesRequest.md) |  | 

### Return type

[**DynamicPackagesResponse**](DynamicPackagesResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAllPackages

> PackageResponse GetAllPackages(ctx).Execute()

Get all packages



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetAllPackages(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetAllPackages``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAllPackages`: PackageResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetAllPackages`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetAllPackagesRequest struct via the builder pattern


### Return type

[**PackageResponse**](PackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAllPackagesWithAuthedIP

> PackageResponse GetAllPackagesWithAuthedIP(ctx, ipAddress).Execute()

Get packages



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	ipAddress := "127.0.0.1" // string | An IP address can be provided with authenticated requests

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetAllPackagesWithAuthedIP(context.Background(), ipAddress).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetAllPackagesWithAuthedIP``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAllPackagesWithAuthedIP`: PackageResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetAllPackagesWithAuthedIP`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ipAddress** | **string** | An IP address can be provided with authenticated requests | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAllPackagesWithAuthedIPRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**PackageResponse**](PackageResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAllPackagesWithAuthedIPAndBasket

> PackageResponse GetAllPackagesWithAuthedIPAndBasket(ctx, basketIdent, ipAddress).Execute()

Get packages available for IP and basket



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	basketIdent := "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c" // string | The basket identifier.
	ipAddress := "127.0.0.1" // string | An IP address can be provided with authenticated requests.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetAllPackagesWithAuthedIPAndBasket(context.Background(), basketIdent, ipAddress).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetAllPackagesWithAuthedIPAndBasket``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAllPackagesWithAuthedIPAndBasket`: PackageResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetAllPackagesWithAuthedIPAndBasket`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**basketIdent** | **string** | The basket identifier. | 
**ipAddress** | **string** | An IP address can be provided with authenticated requests. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAllPackagesWithAuthedIPAndBasketRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**PackageResponse**](PackageResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBasket

> BasketResponse GetBasket(ctx, basketIdent).Execute()

Get a basket



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	basketIdent := "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c" // string | The basket identifier.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetBasket(context.Background(), basketIdent).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetBasket``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetBasket`: BasketResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetBasket`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**basketIdent** | **string** | The basket identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBasketRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**BasketResponse**](BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBasketAuthUrl

> []BasketAuthResponseInner GetBasketAuthUrl(ctx, basketIdent, returnUrl).Execute()

Get auth links for basket



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	basketIdent := "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c" // string | The basket identifier.
	returnUrl := "https://example.tebex.io/" // string | The URL you would like to redirect the user to after successful basket authentication.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetBasketAuthUrl(context.Background(), basketIdent, returnUrl).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetBasketAuthUrl``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetBasketAuthUrl`: []BasketAuthResponseInner
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetBasketAuthUrl`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**basketIdent** | **string** | The basket identifier. | 
**returnUrl** | **string** | The URL you would like to redirect the user to after successful basket authentication. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBasketAuthUrlRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**[]BasketAuthResponseInner**](BasketAuthResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCategories

> CategoryResponse GetCategories(ctx).Execute()

Get all categories



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetCategories(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetCategories``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetCategories`: CategoryResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetCategories`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetCategoriesRequest struct via the builder pattern


### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCategoriesIncludePackages

> CategoryResponse GetCategoriesIncludePackages(ctx).Execute()

Gets all categories and packages



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetCategoriesIncludePackages(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetCategoriesIncludePackages``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetCategoriesIncludePackages`: CategoryResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetCategoriesIncludePackages`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetCategoriesIncludePackagesRequest struct via the builder pattern


### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCategory

> SingleCategoryResponse GetCategory(ctx, categoryId).Execute()

Get specific category



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	categoryId := "127244343" // string | The ID or slug of the category to fetch.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetCategory(context.Background(), categoryId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetCategory``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetCategory`: SingleCategoryResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetCategory`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**categoryId** | **string** | The ID or slug of the category to fetch. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCategoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SingleCategoryResponse**](SingleCategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCategoryIncludeDynamicPackages

> SingleCategoryResponse GetCategoryIncludeDynamicPackages(ctx, categoryId, basketIdent).Execute()

Gets a specific category including packages, populating a dynamic category for the given basket.



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	categoryId := "1234" // string | The ID or slug of the category to fetch.
	basketIdent := "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c" // string | The basket identifier.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetCategoryIncludeDynamicPackages(context.Background(), categoryId, basketIdent).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetCategoryIncludeDynamicPackages``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetCategoryIncludeDynamicPackages`: SingleCategoryResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetCategoryIncludeDynamicPackages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**categoryId** | **string** | The ID or slug of the category to fetch. | 
**basketIdent** | **string** | The basket identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCategoryIncludeDynamicPackagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**SingleCategoryResponse**](SingleCategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCategoryIncludePackages

> SingleCategoryResponse GetCategoryIncludePackages(ctx, categoryId).Execute()

Get a category with all packages



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	categoryId := "127244343" // string | The ID or slug of the category to fetch.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetCategoryIncludePackages(context.Background(), categoryId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetCategoryIncludePackages``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetCategoryIncludePackages`: SingleCategoryResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetCategoryIncludePackages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**categoryId** | **string** | The ID or slug of the category to fetch. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCategoryIncludePackagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SingleCategoryResponse**](SingleCategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCommunityGoal

> CommunityGoalResponse GetCommunityGoal(ctx, communityGoalId).Execute()

Get a community goal.



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	communityGoalId := int32(1) // int32 | The community goal ID.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetCommunityGoal(context.Background(), communityGoalId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetCommunityGoal``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetCommunityGoal`: CommunityGoalResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetCommunityGoal`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**communityGoalId** | **int32** | The community goal ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCommunityGoalRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CommunityGoalResponse**](CommunityGoalResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCommunityGoals

> CommunityGoalsResponse GetCommunityGoals(ctx).Status(status).Execute()

Get the webstore's community goals.



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	status := []string{"Status_example"} // []string | Only return goals with these statuses, e.g. `status[]=active&status[]=completed`. A single `status=active` is also accepted. With no filter, all goals are returned. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetCommunityGoals(context.Background()).Status(status).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetCommunityGoals``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetCommunityGoals`: CommunityGoalsResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetCommunityGoals`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCommunityGoalsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **[]string** | Only return goals with these statuses, e.g. &#x60;status[]&#x3D;active&amp;status[]&#x3D;completed&#x60;. A single &#x60;status&#x3D;active&#x60; is also accepted. With no filter, all goals are returned. | 

### Return type

[**CommunityGoalsResponse**](CommunityGoalsResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCustomPages

> CMSPagesResponse GetCustomPages(ctx).Execute()

Get custom pages defined for the webstore.



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetCustomPages(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetCustomPages``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetCustomPages`: CMSPagesResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetCustomPages`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetCustomPagesRequest struct via the builder pattern


### Return type

[**CMSPagesResponse**](CMSPagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDynamicCategories

> CategoryResponse GetDynamicCategories(ctx, basketIdent).Execute()

Get Dynamic Categories



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	basketIdent := "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c" // string | The basket identifier.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetDynamicCategories(context.Background(), basketIdent).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetDynamicCategories``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetDynamicCategories`: CategoryResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetDynamicCategories`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**basketIdent** | **string** | The basket identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDynamicCategoriesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPackage

> SinglePackageResponse GetPackage(ctx, packageId).Execute()

Get package



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	packageId := "1272441812" // string | The package's `ident` (recommended, e.g. `pkg_12_456`) or numeric ID.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetPackage(context.Background(), packageId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetPackage``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPackage`: SinglePackageResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetPackage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**packageId** | **string** | The package&#39;s &#x60;ident&#x60; (recommended, e.g. &#x60;pkg_12_456&#x60;) or numeric ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPackageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SinglePackageResponse**](SinglePackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPackagesForBasket

> PackageResponse GetPackagesForBasket(ctx, basketIdent).Execute()

Get packages available for basket



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	basketIdent := "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c" // string | The basket identifier.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetPackagesForBasket(context.Background(), basketIdent).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetPackagesForBasket``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPackagesForBasket`: PackageResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetPackagesForBasket`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**basketIdent** | **string** | The basket identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPackagesForBasketRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**PackageResponse**](PackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRecentPayments

> RecentPaymentsResponse GetRecentPayments(ctx).Limit(limit).Execute()

Get the webstore's recent payments.



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	limit := int32(56) // int32 | The number of payments to return, from 1 to 50. (optional) (default to 5)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetRecentPayments(context.Background()).Limit(limit).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetRecentPayments``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetRecentPayments`: RecentPaymentsResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetRecentPayments`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRecentPaymentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | The number of payments to return, from 1 to 50. | [default to 5]

### Return type

[**RecentPaymentsResponse**](RecentPaymentsResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSales

> SalesResponse GetSales(ctx).Execute()

Get the webstore's active sales.



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetSales(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetSales``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSales`: SalesResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetSales`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetSalesRequest struct via the builder pattern


### Return type

[**SalesResponse**](SalesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSidebar

> ModulesResponse GetSidebar(ctx, token).Execute()

Retrieves the available sidebar modules.



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	token := "some-uuid" // string | The webstore identifier.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetSidebar(context.Background(), token).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetSidebar``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSidebar`: ModulesResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetSidebar`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**token** | **string** | The webstore identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSidebarRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ModulesResponse**](ModulesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTopCustomer

> TopCustomerResponse GetTopCustomer(ctx).Period(period).Execute()

Get the webstore's top customer.



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	period := "period_example" // string | The period to rank customers over. `none` covers all time. (optional) (default to "monthly")

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetTopCustomer(context.Background()).Period(period).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetTopCustomer``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTopCustomer`: TopCustomerResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetTopCustomer`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTopCustomerRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **period** | **string** | The period to rank customers over. &#x60;none&#x60; covers all time. | [default to &quot;monthly&quot;]

### Return type

[**TopCustomerResponse**](TopCustomerResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserTieredCategories

> CategoryResponse GetUserTieredCategories(ctx, usernameId).Execute()

Get user's tiered categories



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	usernameId := int32(76561198042467022) // int32 | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetUserTieredCategories(context.Background(), usernameId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetUserTieredCategories``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUserTieredCategories`: CategoryResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetUserTieredCategories`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**usernameId** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetUserTieredCategoriesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CategoryResponse**](CategoryResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetWebstore

> WebstoreResponse GetWebstore(ctx).Execute()

Get the webstore's information



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetWebstore(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetWebstore``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetWebstore`: WebstoreResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetWebstore`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetWebstoreRequest struct via the builder pattern


### Return type

[**WebstoreResponse**](WebstoreResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveCoupon

> RemoveCoupon(ctx, basketIdent).ApplyCouponRequest(applyCouponRequest).Execute()

Remove a coupon from the basket.



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	basketIdent := "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c" // string | The basket identifier.
	applyCouponRequest := *openapiclient.NewApplyCouponRequest() // ApplyCouponRequest | Provide a `coupon_code` to remove from the basket. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.HeadlessAPI.RemoveCoupon(context.Background(), basketIdent).ApplyCouponRequest(applyCouponRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.RemoveCoupon``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**basketIdent** | **string** | The basket identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveCouponRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **applyCouponRequest** | [**ApplyCouponRequest**](ApplyCouponRequest.md) | Provide a &#x60;coupon_code&#x60; to remove from the basket. | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveCreatorCode

> RemoveCreatorCode(ctx, basketIdent).Execute()

Removes the creator code from the basket.



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	basketIdent := "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c" // string | The basket identifier.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.HeadlessAPI.RemoveCreatorCode(context.Background(), basketIdent).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.RemoveCreatorCode``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**basketIdent** | **string** | The basket identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveCreatorCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveGiftCard

> RemoveGiftCard(ctx, basketIdent).RemoveGiftCardRequest(removeGiftCardRequest).Execute()

Remove a gift card from the basket.



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	basketIdent := "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c" // string | The basket identifier.
	removeGiftCardRequest := *openapiclient.NewRemoveGiftCardRequest() // RemoveGiftCardRequest | Provide the `card_number` to remove from the basket. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.HeadlessAPI.RemoveGiftCard(context.Background(), basketIdent).RemoveGiftCardRequest(removeGiftCardRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.RemoveGiftCard``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**basketIdent** | **string** | The basket identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveGiftCardRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **removeGiftCardRequest** | [**RemoveGiftCardRequest**](RemoveGiftCardRequest.md) | Provide the &#x60;card_number&#x60; to remove from the basket. | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateTier

> UpdateTierResponse UpdateTier(ctx, tierId).UpdateTierRequest(updateTierRequest).Execute()

Update user's tier to a new package



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	tierId := int32(6276316) // int32 | The tier identifier
	updateTierRequest := *openapiclient.NewUpdateTierRequest() // UpdateTierRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.UpdateTier(context.Background(), tierId).UpdateTierRequest(updateTierRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.UpdateTier``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateTier`: UpdateTierResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.UpdateTier`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**tierId** | **int32** | The tier identifier | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateTierRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateTierRequest** | [**UpdateTierRequest**](UpdateTierRequest.md) |  | 

### Return type

[**UpdateTierResponse**](UpdateTierResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


# TebexHeadless\HeadlessAPI

All URIs are relative to *https://headless.tebex.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AddBasketPackage**](HeadlessAPI.md#AddBasketPackage) | **Post** /baskets/{basketIdent}/packages | Add a package to a basket
[**ApplyCoupon**](HeadlessAPI.md#ApplyCoupon) | **Post** /accounts/{token}/baskets/{basketIdent}/coupons | Apply a coupon to a basket.
[**ApplyCreatorCode**](HeadlessAPI.md#ApplyCreatorCode) | **Post** /accounts/{token}/baskets/{basketIdent}/creator-codes | Apply a creator code to a basket.
[**ApplyGiftCard**](HeadlessAPI.md#ApplyGiftCard) | **Post** /accounts/{token}/baskets/{basketIdent}/giftcards | Apply a gift card to a basket.
[**CreateBasket**](HeadlessAPI.md#CreateBasket) | **Post** /accounts/{token}/baskets | Create a new basket
[**GetAllCategories**](HeadlessAPI.md#GetAllCategories) | **Get** /accounts/{token}/categories | Gets all categories available in the webstore.
[**GetAllCategoriesIncludingPackages**](HeadlessAPI.md#GetAllCategoriesIncludingPackages) | **Get** /accounts/{token}/categories?includePackages&#x3D;1 | Gets a store&#39;s categories including all package information with them.
[**GetAllPackages**](HeadlessAPI.md#GetAllPackages) | **Get** /accounts/{token}/packages | Fetch all packages from a webstore
[**GetAllPackagesWithAuthedIP**](HeadlessAPI.md#GetAllPackagesWithAuthedIP) | **Get** /accounts/{token}/packages?ipAddress&#x3D;{ipAddress} | Fetch a package from a webstore by its identifier
[**GetAllPackagesWithAuthedIPAndBasket**](HeadlessAPI.md#GetAllPackagesWithAuthedIPAndBasket) | **Get** /accounts/{token}/packages?ipAddress&#x3D;{ipAddress}&amp;basketIdent&#x3D;{basketIdent} | Fetch a package from a webstore by its identifier
[**GetAllPackagesWithBasket**](HeadlessAPI.md#GetAllPackagesWithBasket) | **Get** /accounts/{token}/packages?basketIdent&#x3D;{basketIdent} | Fetch a package from a webstore by its identifier
[**GetBasketAuthUrl**](HeadlessAPI.md#GetBasketAuthUrl) | **Get** /accounts/{token}/baskets/{basketIdent}/auth?returnUrl&#x3D;{returnUrl} | Fetch a basket from a webstore by its identifier
[**GetBasketById**](HeadlessAPI.md#GetBasketById) | **Get** /accounts/{token}/baskets/{basketIdent} | Fetch a basket from a webstore by its identifier
[**GetCategoryById**](HeadlessAPI.md#GetCategoryById) | **Get** /accounts/{token}/categories/{categoryId} | Gets information about a specific category
[**GetCategoryIncludingPackages**](HeadlessAPI.md#GetCategoryIncludingPackages) | **Get** /accounts/{token}/categories/{categoryId}?includePackages&#x3D;1 | Gets information about a specific category, including all the packages in the category
[**GetPackageById**](HeadlessAPI.md#GetPackageById) | **Get** /accounts/{token}/packages/{packageId} | Fetch a package from a webstore by its identifier
[**GetWebstoreById**](HeadlessAPI.md#GetWebstoreById) | **Get** /accounts/{token} | Fetch a webstore by its identifier
[**RemoveBasketPackage**](HeadlessAPI.md#RemoveBasketPackage) | **Post** /baskets/{basketIdent}/packages/remove | Remove a package from a basket
[**RemoveCoupon**](HeadlessAPI.md#RemoveCoupon) | **Post** /accounts/{token}/baskets/{basketIdent}/coupons/remove | Remove a coupon from the basket.
[**RemoveCreatorCode**](HeadlessAPI.md#RemoveCreatorCode) | **Post** /accounts/{token}/baskets/{basketIdent}/creator-codes/remove | Remove a creator code from the basket.
[**RemoveGiftCard**](HeadlessAPI.md#RemoveGiftCard) | **Post** /accounts/{token}/baskets/{basketIdent}/giftcards/remove | Remove a gift card from the basket.
[**UpdatePackageQuantity**](HeadlessAPI.md#UpdatePackageQuantity) | **Put** /baskets/{basketIdent}/packages/{packageId} | Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed.



## AddBasketPackage

> Basket AddBasketPackage(ctx, basketIdent).AddBasketPackageRequest(addBasketPackageRequest).Execute()

Add a package to a basket



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
	addBasketPackageRequest := *openapiclient.NewAddBasketPackageRequest() // AddBasketPackageRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.AddBasketPackage(context.Background(), basketIdent).AddBasketPackageRequest(addBasketPackageRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.AddBasketPackage``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AddBasketPackage`: Basket
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.AddBasketPackage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**basketIdent** | **string** | The basket identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiAddBasketPackageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **addBasketPackageRequest** | [**AddBasketPackageRequest**](AddBasketPackageRequest.md) |  | 

### Return type

[**Basket**](Basket.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApplyCoupon

> BasketResponse ApplyCoupon(ctx, token, basketIdent).Coupon(coupon).Execute()

Apply a coupon to a basket.



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
	token := "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb" // string | The webstore identifier.
	basketIdent := "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c" // string | The basket identifier.
	coupon := *openapiclient.NewCoupon() // Coupon | Provide a `coupon_code` to apply to the basket. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.ApplyCoupon(context.Background(), token, basketIdent).Coupon(coupon).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.ApplyCoupon``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApplyCoupon`: BasketResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.ApplyCoupon`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**token** | **string** | The webstore identifier. | 
**basketIdent** | **string** | The basket identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiApplyCouponRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **coupon** | [**Coupon**](Coupon.md) | Provide a &#x60;coupon_code&#x60; to apply to the basket. | 

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


## ApplyCreatorCode

> BasketResponse ApplyCreatorCode(ctx, token, basketIdent).ApplyCreatorCodeRequest(applyCreatorCodeRequest).Execute()

Apply a creator code to a basket.



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
	token := "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb" // string | The webstore identifier.
	basketIdent := "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c" // string | The basket identifier.
	applyCreatorCodeRequest := *openapiclient.NewApplyCreatorCodeRequest() // ApplyCreatorCodeRequest | Provide a `creator_code` to apply to the basket. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.ApplyCreatorCode(context.Background(), token, basketIdent).ApplyCreatorCodeRequest(applyCreatorCodeRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.ApplyCreatorCode``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApplyCreatorCode`: BasketResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.ApplyCreatorCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**token** | **string** | The webstore identifier. | 
**basketIdent** | **string** | The basket identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiApplyCreatorCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **applyCreatorCodeRequest** | [**ApplyCreatorCodeRequest**](ApplyCreatorCodeRequest.md) | Provide a &#x60;creator_code&#x60; to apply to the basket. | 

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


## ApplyGiftCard

> BasketResponse ApplyGiftCard(ctx, token, basketIdent).GiftCard(giftCard).Execute()

Apply a gift card to a basket.



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
	token := "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb" // string | The webstore identifier.
	basketIdent := "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c" // string | The basket identifier.
	giftCard := *openapiclient.NewGiftCard() // GiftCard | Provide a `card_number` to apply to the basket. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.ApplyGiftCard(context.Background(), token, basketIdent).GiftCard(giftCard).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.ApplyGiftCard``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApplyGiftCard`: BasketResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.ApplyGiftCard`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**token** | **string** | The webstore identifier. | 
**basketIdent** | **string** | The basket identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiApplyGiftCardRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **giftCard** | [**GiftCard**](GiftCard.md) | Provide a &#x60;card_number&#x60; to apply to the basket. | 

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


## CreateBasket

> BasketResponse CreateBasket(ctx, token).CreateBasketRequest(createBasketRequest).Execute()

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
	token := "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb" // string | The webstore identifier.
	createBasketRequest := *openapiclient.NewCreateBasketRequest() // CreateBasketRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.CreateBasket(context.Background(), token).CreateBasketRequest(createBasketRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.CreateBasket``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateBasket`: BasketResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.CreateBasket`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**token** | **string** | The webstore identifier. | 

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


## GetAllCategories

> CategoryResponse GetAllCategories(ctx, token).Execute()

Gets all categories available in the webstore.



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
	token := "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb" // string | The webstore identifier.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetAllCategories(context.Background(), token).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetAllCategories``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAllCategories`: CategoryResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetAllCategories`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**token** | **string** | The webstore identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAllCategoriesRequest struct via the builder pattern


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


## GetAllCategoriesIncludingPackages

> CategoryResponse GetAllCategoriesIncludingPackages(ctx, token).Execute()

Gets a store's categories including all package information with them.



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
	token := "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb" // string | The webstore identifier.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetAllCategoriesIncludingPackages(context.Background(), token).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetAllCategoriesIncludingPackages``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAllCategoriesIncludingPackages`: CategoryResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetAllCategoriesIncludingPackages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**token** | **string** | The webstore identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAllCategoriesIncludingPackagesRequest struct via the builder pattern


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


## GetAllPackages

> PackageResponse GetAllPackages(ctx, token).Execute()

Fetch all packages from a webstore



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
	token := "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb" // string | The webstore identifier.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetAllPackages(context.Background(), token).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetAllPackages``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAllPackages`: PackageResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetAllPackages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**token** | **string** | The webstore identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAllPackagesRequest struct via the builder pattern


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


## GetAllPackagesWithAuthedIP

> PackageResponse GetAllPackagesWithAuthedIP(ctx, token, ipAddress).Execute()

Fetch a package from a webstore by its identifier



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
	token := "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb" // string | The webstore identifier.
	ipAddress := "127.0.0.1" // string | An IP address can be provided with authenticated requests.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetAllPackagesWithAuthedIP(context.Background(), token, ipAddress).Execute()
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
**token** | **string** | The webstore identifier. | 
**ipAddress** | **string** | An IP address can be provided with authenticated requests. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAllPackagesWithAuthedIPRequest struct via the builder pattern


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


## GetAllPackagesWithAuthedIPAndBasket

> []PackageResponse GetAllPackagesWithAuthedIPAndBasket(ctx, token, basketIdent, ipAddress).Execute()

Fetch a package from a webstore by its identifier



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
	token := "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb" // string | The webstore identifier.
	basketIdent := "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c" // string | The basket identifier.
	ipAddress := "127.0.0.1" // string | An IP address can be provided with authenticated requests.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetAllPackagesWithAuthedIPAndBasket(context.Background(), token, basketIdent, ipAddress).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetAllPackagesWithAuthedIPAndBasket``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAllPackagesWithAuthedIPAndBasket`: []PackageResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetAllPackagesWithAuthedIPAndBasket`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**token** | **string** | The webstore identifier. | 
**basketIdent** | **string** | The basket identifier. | 
**ipAddress** | **string** | An IP address can be provided with authenticated requests. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAllPackagesWithAuthedIPAndBasketRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




### Return type

[**[]PackageResponse**](PackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAllPackagesWithBasket

> PackageResponse GetAllPackagesWithBasket(ctx, token, basketIdent).Execute()

Fetch a package from a webstore by its identifier



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
	token := "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb" // string | The webstore identifier.
	basketIdent := "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c" // string | The basket identifier.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetAllPackagesWithBasket(context.Background(), token, basketIdent).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetAllPackagesWithBasket``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAllPackagesWithBasket`: PackageResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetAllPackagesWithBasket`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**token** | **string** | The webstore identifier. | 
**basketIdent** | **string** | The basket identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAllPackagesWithBasketRequest struct via the builder pattern


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


## GetBasketAuthUrl

> BasketResponse GetBasketAuthUrl(ctx, token, basketIdent, returnUrl).Execute()

Fetch a basket from a webstore by its identifier



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
	token := "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb" // string | The webstore identifier.
	basketIdent := "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c" // string | The basket identifier.
	returnUrl := "https://example.tebex.io/" // string | The URL you would like to redirect the user to after successful basket authentication.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetBasketAuthUrl(context.Background(), token, basketIdent, returnUrl).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetBasketAuthUrl``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetBasketAuthUrl`: BasketResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetBasketAuthUrl`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**token** | **string** | The webstore identifier. | 
**basketIdent** | **string** | The basket identifier. | 
**returnUrl** | **string** | The URL you would like to redirect the user to after successful basket authentication. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBasketAuthUrlRequest struct via the builder pattern


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


## GetBasketById

> BasketResponse GetBasketById(ctx, token, basketIdent).Execute()

Fetch a basket from a webstore by its identifier



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
	token := "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb" // string | The webstore identifier.
	basketIdent := "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c" // string | The basket identifier.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetBasketById(context.Background(), token, basketIdent).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetBasketById``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetBasketById`: BasketResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetBasketById`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**token** | **string** | The webstore identifier. | 
**basketIdent** | **string** | The basket identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBasketByIdRequest struct via the builder pattern


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


## GetCategoryById

> []CategoryResponse GetCategoryById(ctx, token, categoryId).Execute()

Gets information about a specific category



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
	token := "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb" // string | The webstore identifier.
	categoryId := "127244343" // string | The ID of the category to fetch.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetCategoryById(context.Background(), token, categoryId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetCategoryById``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetCategoryById`: []CategoryResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetCategoryById`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**token** | **string** | The webstore identifier. | 
**categoryId** | **string** | The ID of the category to fetch. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCategoryByIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**[]CategoryResponse**](CategoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCategoryIncludingPackages

> CategoryResponse GetCategoryIncludingPackages(ctx, token, categoryId).Execute()

Gets information about a specific category, including all the packages in the category



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
	token := "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb" // string | The webstore identifier.
	categoryId := "127244343" // string | The ID of the category to fetch.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetCategoryIncludingPackages(context.Background(), token, categoryId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetCategoryIncludingPackages``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetCategoryIncludingPackages`: CategoryResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetCategoryIncludingPackages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**token** | **string** | The webstore identifier. | 
**categoryId** | **string** | The ID of the category to fetch. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCategoryIncludingPackagesRequest struct via the builder pattern


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


## GetPackageById

> PackageResponse GetPackageById(ctx, token, packageId).Execute()

Fetch a package from a webstore by its identifier



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
	token := "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb" // string | The webstore identifier.
	packageId := float32(1272441812) // float32 | The package's ID.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.GetPackageById(context.Background(), token, packageId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetPackageById``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPackageById`: PackageResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetPackageById`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**token** | **string** | The webstore identifier. | 
**packageId** | **float32** | The package&#39;s ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPackageByIdRequest struct via the builder pattern


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


## GetWebstoreById

> WebstoreResponse GetWebstoreById(ctx, token).Execute()

Fetch a webstore by its identifier



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
	resp, r, err := apiClient.HeadlessAPI.GetWebstoreById(context.Background(), token).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.GetWebstoreById``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetWebstoreById`: WebstoreResponse
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.GetWebstoreById`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**token** | **string** | The webstore identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetWebstoreByIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


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


## RemoveBasketPackage

> Basket RemoveBasketPackage(ctx, basketIdent).RemoveBasketPackageRequest(removeBasketPackageRequest).Execute()

Remove a package from a basket



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
	removeBasketPackageRequest := *openapiclient.NewRemoveBasketPackageRequest() // RemoveBasketPackageRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.HeadlessAPI.RemoveBasketPackage(context.Background(), basketIdent).RemoveBasketPackageRequest(removeBasketPackageRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.RemoveBasketPackage``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RemoveBasketPackage`: Basket
	fmt.Fprintf(os.Stdout, "Response from `HeadlessAPI.RemoveBasketPackage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**basketIdent** | **string** | The basket identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveBasketPackageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **removeBasketPackageRequest** | [**RemoveBasketPackageRequest**](RemoveBasketPackageRequest.md) |  | 

### Return type

[**Basket**](Basket.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveCoupon

> RemoveCoupon(ctx, token, basketIdent).Execute()

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
	token := "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb" // string | The webstore identifier.
	basketIdent := "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c" // string | The basket identifier.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.HeadlessAPI.RemoveCoupon(context.Background(), token, basketIdent).Execute()
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
**token** | **string** | The webstore identifier. | 
**basketIdent** | **string** | The basket identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveCouponRequest struct via the builder pattern


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


## RemoveCreatorCode

> RemoveCreatorCode(ctx, token, basketIdent).Execute()

Remove a creator code from the basket.



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
	token := "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb" // string | The webstore identifier.
	basketIdent := "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c" // string | The basket identifier.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.HeadlessAPI.RemoveCreatorCode(context.Background(), token, basketIdent).Execute()
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
**token** | **string** | The webstore identifier. | 
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

> RemoveGiftCard(ctx, token, basketIdent).RemoveGiftCardRequest(removeGiftCardRequest).Execute()

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
	token := "t66x-7cd928b1e9312709e6810edac6dc1fd1eefc57cb" // string | The webstore identifier.
	basketIdent := "c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c" // string | The basket identifier.
	removeGiftCardRequest := *openapiclient.NewRemoveGiftCardRequest() // RemoveGiftCardRequest | Provide the `card_number` to remove from the basket. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.HeadlessAPI.RemoveGiftCard(context.Background(), token, basketIdent).RemoveGiftCardRequest(removeGiftCardRequest).Execute()
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
**token** | **string** | The webstore identifier. | 
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


## UpdatePackageQuantity

> UpdatePackageQuantity(ctx, basketIdent, packageId).UpdatePackageQuantityRequest(updatePackageQuantityRequest).Execute()

Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed.



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
	packageId := float32(6276316) // float32 | The package identifier.
	updatePackageQuantityRequest := *openapiclient.NewUpdatePackageQuantityRequest() // UpdatePackageQuantityRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.HeadlessAPI.UpdatePackageQuantity(context.Background(), basketIdent, packageId).UpdatePackageQuantityRequest(updatePackageQuantityRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `HeadlessAPI.UpdatePackageQuantity``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**basketIdent** | **string** | The basket identifier. | 
**packageId** | **float32** | The package identifier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdatePackageQuantityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **updatePackageQuantityRequest** | [**UpdatePackageQuantityRequest**](UpdatePackageQuantityRequest.md) |  | 

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


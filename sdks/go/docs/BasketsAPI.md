# TebexHeadless\BasketsAPI

All URIs are relative to *https://headless.tebex.io/api/accounts/YOUR_PUBLIC_TOKEN*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AddBasketPackage**](BasketsAPI.md#AddBasketPackage) | **Post** /{basketIdent}/packages | Add package to basket
[**RemoveBasketPackage**](BasketsAPI.md#RemoveBasketPackage) | **Post** /{basketIdent}/packages/remove | Remove a package from a basket
[**UpdatePackageQuantity**](BasketsAPI.md#UpdatePackageQuantity) | **Put** /{basketIdent}/packages/{packageId} | Update package quantity



## AddBasketPackage

> BasketResponse AddBasketPackage(ctx, basketIdent).AddBasketPackageRequest(addBasketPackageRequest).Execute()

Add package to basket



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
	addBasketPackageRequest := *openapiclient.NewAddBasketPackageRequest("6276316", int32(1)) // AddBasketPackageRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BasketsAPI.AddBasketPackage(context.Background(), basketIdent).AddBasketPackageRequest(addBasketPackageRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BasketsAPI.AddBasketPackage``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AddBasketPackage`: BasketResponse
	fmt.Fprintf(os.Stdout, "Response from `BasketsAPI.AddBasketPackage`: %v\n", resp)
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

[**BasketResponse**](BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveBasketPackage

> BasketResponse RemoveBasketPackage(ctx, basketIdent).RemoveBasketPackageRequest(removeBasketPackageRequest).Execute()

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
	resp, r, err := apiClient.BasketsAPI.RemoveBasketPackage(context.Background(), basketIdent).RemoveBasketPackageRequest(removeBasketPackageRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BasketsAPI.RemoveBasketPackage``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RemoveBasketPackage`: BasketResponse
	fmt.Fprintf(os.Stdout, "Response from `BasketsAPI.RemoveBasketPackage`: %v\n", resp)
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

[**BasketResponse**](BasketResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdatePackageQuantity

> UpdatePackageQuantity(ctx, basketIdent, packageId).UpdatePackageQuantityRequest(updatePackageQuantityRequest).Execute()

Update package quantity



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
	packageId := "6276316" // string | The package identifier
	updatePackageQuantityRequest := *openapiclient.NewUpdatePackageQuantityRequest() // UpdatePackageQuantityRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.BasketsAPI.UpdatePackageQuantity(context.Background(), basketIdent, packageId).UpdatePackageQuantityRequest(updatePackageQuantityRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BasketsAPI.UpdatePackageQuantity``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**basketIdent** | **string** | The basket identifier. | 
**packageId** | **string** | The package identifier | 

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


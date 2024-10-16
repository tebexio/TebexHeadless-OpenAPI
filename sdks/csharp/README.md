# TebexHeadless - the C# library for the Tebex Headless API

The headless API is designed for implementing your own store frontend with the data of your store. You are able to call the Headless API directly from a web browser (such as within an SPA), or from a backend server, such as for in-game GUIs.

This C# SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- SDK version: 1.0.0
- Generator version: 7.5.0
- Build package: org.openapitools.codegen.languages.CSharpClientCodegen

<a id="frameworks-supported"></a>
## Frameworks supported

<a id="dependencies"></a>
## Dependencies

- [RestSharp](https://www.nuget.org/packages/RestSharp) - 106.13.0 or later
- [Json.NET](https://www.nuget.org/packages/Newtonsoft.Json/) - 13.0.2 or later
- [JsonSubTypes](https://www.nuget.org/packages/JsonSubTypes/) - 1.8.0 or later
- [System.ComponentModel.Annotations](https://www.nuget.org/packages/System.ComponentModel.Annotations) - 5.0.0 or later

The DLLs included in the package may not be the latest version. We recommend using [NuGet](https://docs.nuget.org/consume/installing-nuget) to obtain the latest version of the packages:
```
Install-Package RestSharp
Install-Package Newtonsoft.Json
Install-Package JsonSubTypes
Install-Package System.ComponentModel.Annotations
```

NOTE: RestSharp versions greater than 105.1.0 have a bug which causes file uploads to fail. See [RestSharp#742](https://github.com/restsharp/RestSharp/issues/742).
NOTE: RestSharp for .Net Core creates a new socket for each api call, which can lead to a socket exhaustion problem. See [RestSharp#1406](https://github.com/restsharp/RestSharp/issues/1406).

<a id="installation"></a>
## Installation
Run the following command to generate the DLL
- [Mac/Linux] `/bin/sh build.sh`
- [Windows] `build.bat`

Then include the DLL (under the `bin` folder) in the C# project, and use the namespaces:
```csharp
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;
```
<a id="packaging"></a>
## Packaging

A `.nuspec` is included with the project. You can follow the Nuget quickstart to [create](https://docs.microsoft.com/en-us/nuget/quickstart/create-and-publish-a-package#create-the-package) and [publish](https://docs.microsoft.com/en-us/nuget/quickstart/create-and-publish-a-package#publish-the-package) packages.

This `.nuspec` uses placeholders from the `.csproj`, so build the `.csproj` directly:

```
nuget pack -Build -OutputDirectory out TebexHeadless.csproj
```

Then, publish to a [local feed](https://docs.microsoft.com/en-us/nuget/hosting-packages/local-feeds) or [other host](https://docs.microsoft.com/en-us/nuget/hosting-packages/overview) and consume the new package via Nuget as usual.

<a id="usage"></a>
## Usage

To use the API client with a HTTP proxy, setup a `System.Net.WebProxy`
```csharp
Configuration c = new Configuration();
System.Net.WebProxy webProxy = new System.Net.WebProxy("http://myProxyUrl:80/");
webProxy.Credentials = System.Net.CredentialCache.DefaultCredentials;
c.Proxy = webProxy;
```

<a id="getting-started"></a>
## Getting Started

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using TebexHeadless.TebexHeadless;
using TebexHeadless.Client;
using TebexHeadless.Model;

namespace Example
{
    public class Example
    {
        public static void Main()
        {

            Configuration config = new Configuration();
            config.BasePath = "https://headless.tebex.io/api";
            var apiInstance = new HeadlessApi(config);
            var basketIdent = c00244-d2ac2e77418a55b25292a6bc7a719ad9c529ba2c;  // string | The basket identifier.
            var addBasketPackageRequest = new AddBasketPackageRequest?(); // AddBasketPackageRequest? |  (optional) 

            try
            {
                // Add a package to a basket
                Basket result = apiInstance.AddBasketPackage(basketIdent, addBasketPackageRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling HeadlessApi.AddBasketPackage: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }

        }
    }
}
```

<a id="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://headless.tebex.io/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*HeadlessApi* | [**AddBasketPackage**](docs/HeadlessApi.md#addbasketpackage) | **POST** /baskets/{basketIdent}/packages | Add a package to a basket
*HeadlessApi* | [**ApplyCoupon**](docs/HeadlessApi.md#applycoupon) | **POST** /accounts/{token}/baskets/{basketIdent}/coupons | Apply a coupon to a basket.
*HeadlessApi* | [**ApplyCreatorCode**](docs/HeadlessApi.md#applycreatorcode) | **POST** /accounts/{token}/baskets/{basketIdent}/creator-codes | Apply a creator code to a basket.
*HeadlessApi* | [**ApplyGiftCard**](docs/HeadlessApi.md#applygiftcard) | **POST** /accounts/{token}/baskets/{basketIdent}/giftcards | Apply a gift card to a basket.
*HeadlessApi* | [**CreateBasket**](docs/HeadlessApi.md#createbasket) | **POST** /accounts/{token}/baskets | Create a new basket
*HeadlessApi* | [**GetAllCategories**](docs/HeadlessApi.md#getallcategories) | **GET** /accounts/{token}/categories | Gets all categories available in the webstore.
*HeadlessApi* | [**GetAllCategoriesIncludingPackages**](docs/HeadlessApi.md#getallcategoriesincludingpackages) | **GET** /accounts/{token}/categories?includePackages&#x3D;1 | Gets a store's categories including all package information with them.
*HeadlessApi* | [**GetAllPackages**](docs/HeadlessApi.md#getallpackages) | **GET** /accounts/{token}/packages | Fetch all packages from a webstore
*HeadlessApi* | [**GetAllPackagesWithAuthedIP**](docs/HeadlessApi.md#getallpackageswithauthedip) | **GET** /accounts/{token}/packages?ipAddress&#x3D;{ipAddress} | Fetch a package from a webstore by its identifier
*HeadlessApi* | [**GetAllPackagesWithAuthedIPAndBasket**](docs/HeadlessApi.md#getallpackageswithauthedipandbasket) | **GET** /accounts/{token}/packages?ipAddress&#x3D;{ipAddress}&amp;basketIdent&#x3D;{basketIdent} | Fetch a package from a webstore by its identifier
*HeadlessApi* | [**GetAllPackagesWithBasket**](docs/HeadlessApi.md#getallpackageswithbasket) | **GET** /accounts/{token}/packages?basketIdent&#x3D;{basketIdent} | Fetch a package from a webstore by its identifier
*HeadlessApi* | [**GetBasketAuthUrl**](docs/HeadlessApi.md#getbasketauthurl) | **GET** /accounts/{token}/baskets/{basketIdent}/auth?returnUrl&#x3D;{returnUrl} | Fetch a basket from a webstore by its identifier
*HeadlessApi* | [**GetBasketById**](docs/HeadlessApi.md#getbasketbyid) | **GET** /accounts/{token}/baskets/{basketIdent} | Fetch a basket from a webstore by its identifier
*HeadlessApi* | [**GetCMSPages**](docs/HeadlessApi.md#getcmspages) | **GET** /accounts/{token}/pages | Fetch the custom pages associated with the store.
*HeadlessApi* | [**GetCategoryById**](docs/HeadlessApi.md#getcategorybyid) | **GET** /accounts/{token}/categories/{categoryId} | Gets information about a specific category
*HeadlessApi* | [**GetCategoryIncludingPackages**](docs/HeadlessApi.md#getcategoryincludingpackages) | **GET** /accounts/{token}/categories/{categoryId}?includePackages&#x3D;1 | Gets information about a specific category, including all the packages in the category
*HeadlessApi* | [**GetPackageById**](docs/HeadlessApi.md#getpackagebyid) | **GET** /accounts/{token}/packages/{packageId} | Fetch a package from a webstore by its identifier
*HeadlessApi* | [**GetWebstoreById**](docs/HeadlessApi.md#getwebstorebyid) | **GET** /accounts/{token} | Fetch a webstore by its identifier
*HeadlessApi* | [**RemoveBasketPackage**](docs/HeadlessApi.md#removebasketpackage) | **POST** /baskets/{basketIdent}/packages/remove | Remove a package from a basket
*HeadlessApi* | [**RemoveCoupon**](docs/HeadlessApi.md#removecoupon) | **POST** /accounts/{token}/baskets/{basketIdent}/coupons/remove | Remove a coupon from the basket.
*HeadlessApi* | [**RemoveCreatorCode**](docs/HeadlessApi.md#removecreatorcode) | **POST** /accounts/{token}/baskets/{basketIdent}/creator-codes/remove | Remove a creator code from the basket.
*HeadlessApi* | [**RemoveGiftCard**](docs/HeadlessApi.md#removegiftcard) | **POST** /accounts/{token}/baskets/{basketIdent}/giftcards/remove | Remove a gift card from the basket.
*HeadlessApi* | [**UpdatePackageQuantity**](docs/HeadlessApi.md#updatepackagequantity) | **PUT** /baskets/{basketIdent}/packages/{packageId} | Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed.
*HeadlessApi* | [**UpdateTier**](docs/HeadlessApi.md#updatetier) | **PATCH** /accounts/{token}/tiers/{tierId} | TODO


<a id="documentation-for-models"></a>
## Documentation for Models

 - [Model.AddBasketPackageRequest](docs/AddBasketPackageRequest.md)
 - [Model.ApplyCreatorCodeRequest](docs/ApplyCreatorCodeRequest.md)
 - [Model.Basket](docs/Basket.md)
 - [Model.BasketLinks](docs/BasketLinks.md)
 - [Model.BasketPackage](docs/BasketPackage.md)
 - [Model.BasketResponse](docs/BasketResponse.md)
 - [Model.CMSPage](docs/CMSPage.md)
 - [Model.CMSPagesResponse](docs/CMSPagesResponse.md)
 - [Model.Category](docs/Category.md)
 - [Model.CategoryResponse](docs/CategoryResponse.md)
 - [Model.Coupon](docs/Coupon.md)
 - [Model.CreateBasketRequest](docs/CreateBasketRequest.md)
 - [Model.ErrorResponse](docs/ErrorResponse.md)
 - [Model.GiftCard](docs/GiftCard.md)
 - [Model.Package](docs/Package.md)
 - [Model.PackageCategory](docs/PackageCategory.md)
 - [Model.PackageResponse](docs/PackageResponse.md)
 - [Model.RemoveBasketPackageRequest](docs/RemoveBasketPackageRequest.md)
 - [Model.RemoveGiftCardRequest](docs/RemoveGiftCardRequest.md)
 - [Model.RevenueShare](docs/RevenueShare.md)
 - [Model.UpdatePackageQuantityRequest](docs/UpdatePackageQuantityRequest.md)
 - [Model.UpdateTierRequest](docs/UpdateTierRequest.md)
 - [Model.UpdateTierResponse](docs/UpdateTierResponse.md)
 - [Model.Webstore](docs/Webstore.md)
 - [Model.WebstoreResponse](docs/WebstoreResponse.md)
 - [Model.WebstoreResponseData](docs/WebstoreResponseData.md)


<a id="documentation-for-authorization"></a>
## Documentation for Authorization

Endpoints do not require authorization.


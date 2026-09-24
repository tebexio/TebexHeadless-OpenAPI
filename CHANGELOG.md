2.0.1
-----
**Fixed**

- getCategory (`/categories/{categoryId}`): the path parameter was wrongly declared as basketIdent. It is now categoryId (string, ID or slug).
- updatePackageQuantity (`/{basketIdent}/packages/{packageId}`): the packageId path parameter was never declared. It is now required.
- Single-object responses: these endpoints return a single object wrapped in data, not a list.
  - getCategory, getCategoryIncludePackages and getCategoryIncludeDynamicPackages now return the new SingleCategoryResponse instead of CategoryResponse.
  - getPackage now returns the new SinglePackageResponse instead of PackageResponse.
- Basket package add/remove: `/{basketIdent}/packages` and `/{basketIdent}/packages/remove` now return BasketResponse (basket wrapped in data) instead of a bare Basket.
- Auth: getAllPackagesWithAuthedIP and getAllPackagesWithAuthedIPAndBasket now declare basicAuth security.
- Server variable: the default for token changed from "" to "YOUR_PUBLIC_TOKEN".

**Added**

- Schemas: SingleCategoryResponse and SinglePackageResponse, each with data holding a Category or Package.
- Webstore: new boolean fields `supports_usernames` and `supports_gifting`.
- Package:
  - `ident` (string), for example `pkg_3081120_7088903`.
  - `vip_status` (nullable string)
- BasketPackage: new boolean field `is_recurring`.

2.0.0
-----
- See https://github.com/tebexio/TebexHeadless-OpenAPI/releases/tag/v2.0.0
   
1.2.0
-----
- Added sidebar modules with GET /account/{token}/sidebar
- Added `media` to packages with `video` and `image` types
- Schema spec updated to 3.1.0
- Fixed some typos

1.1.0
-----
- Added support for Tiers / Tiered Categories
    - `active_tier` for Categories
    - `prorate_price` for Packages
    - getTieredCategoriesForUser()
    - updateTier()
    - Added `Tier` model

1.0.0
-----
Initial release.

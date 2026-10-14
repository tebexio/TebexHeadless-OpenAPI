2.1.0
-----
**Added**

- getSales (`/sales`): lists the store's currently active sales. No authentication is required. Returns 404 for an invalid store identifier.
  - Only sales whose start/end window includes the current time are returned. Expired, future and Lighthouse sales are left out.
  - Hidden packages and categories are left out of every array.
- Schemas: SalesResponse, Sale, SaleDiscount, SaleAppliesTo, SaleReference and SaleRequirement.
- Storefront block endpoints. These need basic auth (username is the webstore identifier, password is the checkout API key) and do not depend on any sidebar module being configured. Free, manual, zero-price and incomplete payments are never included.
  - getRecentPayments (`/recent-payments`): recent payments, newest first. `limit` 1–50, default 5. Cached for 10 minutes.
  - getTopCustomer (`/top-customers`): top spender for `period` (hourly, daily, weekly, monthly, yearly, none; default monthly). `data` is null when there is none. Cached for 10 minutes.
  - getCommunityGoals (`/community-goals`): community goals, optionally filtered by `status[]` (active, completed, disabled).
  - getCommunityGoal (`/community-goals/{communityGoalId}`): a single community goal. 404 if it does not exist.
- Schemas: RecentPaymentsResponse, RecentPaymentEntry, TopCustomerResponse, TopCustomer, CommunityGoalsResponse, CommunityGoalResponse and CommunityGoal.

**Changed**

- Package idents: `ident` is returned on every package (standard, dynamic and external) in the form `{prefix}_{categoryId}_{id}`, with prefix `pkg` (standard), `dyn` (dynamic) or `ext` (external, provider id URL-encoded). Treat it as opaque: store it and send it back as-is.
  - Package `id` is synthetic for external packages; use `ident`.
- getPackage (`/packages/{packageId}`): `packageId` accepts an ident (recommended) or a numeric ID.
- addBasketPackage (`/{basketIdent}/packages`): `package_id` accepts an ident (recommended, required for external packages) or a numeric ID. Numeric IDs still work for standard packages.
  - A malformed value fails with 422 "package_id must be a package ID or ident."
  - An unknown or mismatched ident returns 400 "The selected id is invalid."
- createDynamicPackage (`/baskets/{basketIdent}/dynamic-packages`):
  - DynamicPackagesRequest has a new required `basket_id` (string, the basket's ident). Without it the API returns 422 "The basket id field is required."
  - Now declares basicAuth security, which the API already required.
  - Documents the 422 responses for missing auth and for a `category_id` that isn't a dynamic category. The DynamicPackagesResponse example message is now "Dynamic packages updated successfully."
- removeBasketPackage (`/{basketIdent}/packages/remove`) and updatePackageQuantity (`/{basketIdent}/packages/{packageId}`): `package_id` / `packageId` accept an ident (recommended) or a numeric ID. Numeric IDs still work for standard packages.

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

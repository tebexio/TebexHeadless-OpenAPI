package funcs

import TebexHeadless "github.com/tebexio/TebexHeadless"

// BuildRegistry returns every SDK operation, keyed by operationId. Each entry is
// {OperationId, Spec{HttpMethod, Endpoint, IsWrappedData, Expected}, Do}, where Do
// is a named function declared in its own file in this package.
func BuildRegistry() map[string]SdkOperation {
	entries := []SdkOperation{
		// ---- Read-only (GET) ----
		{"getWebstore", Spec{"GET", "/accounts/{token}", TebexHeadless.Webstore{}}, getWebstoreById},
		{"getCustomPages", Spec{"GET", "/accounts/{token}/pages", TebexHeadless.CMSPage{}}, getCMSPages},
		{"getCategories", Spec{"GET", "/accounts/{token}/categories", TebexHeadless.Category{}}, getAllCategories},
		{"getCategoriesIncludePackages", Spec{"GET", "/accounts/{token}/categories?includePackages=1", TebexHeadless.Category{}}, getAllCategoriesIncludingPackages},
		{"getCategory", Spec{"GET", "/accounts/{token}/categories/{categoryId}", TebexHeadless.Category{}}, getCategoryById},
		{"getCategoryIncludePackages", Spec{"GET", "/accounts/{token}/categories/{categoryId}?includePackages=1", TebexHeadless.Category{}}, getCategoryIncludingPackages},
		{"getUserTieredCategories", Spec{"GET", "/accounts/{token}/categories?usernameId={usernameId}&includePackages=1", TebexHeadless.Category{}}, getTieredCategoriesForUser},
		{"getAllPackages", Spec{"GET", "/accounts/{token}/packages", TebexHeadless.Package{}}, getAllPackages},
		{"getPackage", Spec{"GET", "/accounts/{token}/packages/{packageId}", TebexHeadless.Package{}}, getPackageById},
		{"getAllPackagesWithAuthedIP", Spec{"GET", "/accounts/{token}/packages?ipAddress={ipAddress}", TebexHeadless.Package{}}, getAllPackagesWithAuthedIP},
		{"getPackagesForBasket", Spec{"GET", "/accounts/{token}/packages?basketIdent={basketIdent}", TebexHeadless.Package{}}, getAllPackagesWithBasket},
		{"getAllPackagesWithAuthedIPAndBasket", Spec{"GET", "/accounts/{token}/packages?ipAddress={ipAddress}&basketIdent={basketIdent}", TebexHeadless.Package{}}, getAllPackagesWithAuthedIPAndBasket},
		{"getBasket", Spec{"GET", "/accounts/{token}/baskets/{basketIdent}", TebexHeadless.Basket{}}, getBasketById},
		{"getBasketAuthUrl", Spec{"GET", "/accounts/{token}/baskets/{basketIdent}/auth?returnUrl={returnUrl}", TebexHeadless.BasketAuthResponseInner{}}, getBasketAuthUrl},
		{"getDynamicCategories", Spec{"GET", "/accounts/{token}/categories?includePackages=1&basketIdent={basketIdent}", TebexHeadless.Category{}}, getAllCategoriesIncludingDynamicPackages},
		{"getCategoryIncludeDynamicPackages", Spec{"GET", "/accounts/{token}/categories/{categoryId}?includePackages=1&basketIdent={basketIdent}", TebexHeadless.Category{}}, getCategoryIncludingDynamicPackages},
		// getSidebar returns ModulesResponse whose data is a oneOf Module union with
		// no json tags, so reflection key-diffing is unreliable; assert status only (nil).
		{"getSidebar", Spec{"GET", "/accounts/{token}/sidebar", nil}, getSidebar},

		// ---- Mutating (POST/PUT/PATCH) ----
		{"createBasket", Spec{"POST", "/accounts/{token}/baskets", TebexHeadless.Basket{}}, createBasket},
		{"createDynamicPackage", Spec{"POST", "/accounts/{token}/baskets/{basketIdent}/dynamic-packages", TebexHeadless.DynamicPackagesResponse{}}, addDynamicPackages},
		{"addBasketPackage", Spec{"POST", "/baskets/{basketIdent}/packages", TebexHeadless.Basket{}}, addBasketPackage},
		{"updatePackageQuantity", Spec{"PUT", "/baskets/{basketIdent}/packages/{packageId}", nil}, updatePackageQuantity},
		{"applyCreatorCode", Spec{"POST", "/accounts/{token}/baskets/{basketIdent}/creator-codes", TebexHeadless.ApplyCreatorCode200Response{}}, applyCreatorCode},
		{"removeCreatorCode", Spec{"POST", "/accounts/{token}/baskets/{basketIdent}/creator-codes/remove", nil}, removeCreatorCode},
		{"applyGiftCard", Spec{"POST", "/accounts/{token}/baskets/{basketIdent}/giftcards", TebexHeadless.ApplyGiftCard200Response{}}, applyGiftCard},
		{"removeGiftCard", Spec{"POST", "/accounts/{token}/baskets/{basketIdent}/giftcards/remove", nil}, removeGiftCard},
		{"applyCoupon", Spec{"POST", "/accounts/{token}/baskets/{basketIdent}/coupons", TebexHeadless.ApplyCoupon200Response{}}, applyCoupon},
		{"removeCoupon", Spec{"POST", "/accounts/{token}/baskets/{basketIdent}/coupons/remove", nil}, removeCoupon},
		{"removeBasketPackage", Spec{"POST", "/baskets/{basketIdent}/packages/remove", TebexHeadless.Basket{}}, removeBasketPackage},
		{"updateTier", Spec{"PATCH", "/accounts/{token}/tiers/{tierId}", TebexHeadless.UpdateTierResponse{}}, updateTier},
	}

	m := make(map[string]SdkOperation, len(entries))
	for _, e := range entries {
		m[e.OperationId] = e
	}
	return m
}

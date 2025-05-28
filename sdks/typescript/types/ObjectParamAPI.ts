import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AddBasketPackageRequest } from '../models/AddBasketPackageRequest';
import { ApplyCreatorCodeRequest } from '../models/ApplyCreatorCodeRequest';
import { Basket } from '../models/Basket';
import { BasketAuthResponseInner } from '../models/BasketAuthResponseInner';
import { BasketLinks } from '../models/BasketLinks';
import { BasketPackage } from '../models/BasketPackage';
import { BasketResponse } from '../models/BasketResponse';
import { CMSPage } from '../models/CMSPage';
import { CMSPagesResponse } from '../models/CMSPagesResponse';
import { Category } from '../models/Category';
import { CategoryResponse } from '../models/CategoryResponse';
import { Coupon } from '../models/Coupon';
import { CreateBasketRequest } from '../models/CreateBasketRequest';
import { ErrorResponse } from '../models/ErrorResponse';
import { GiftCard } from '../models/GiftCard';
import { Package } from '../models/Package';
import { PackageCategory } from '../models/PackageCategory';
import { PackageResponse } from '../models/PackageResponse';
import { RemoveBasketPackageRequest } from '../models/RemoveBasketPackageRequest';
import { RemoveGiftCardRequest } from '../models/RemoveGiftCardRequest';
import { RevenueShare } from '../models/RevenueShare';
import { Tier } from '../models/Tier';
import { TierPendingDowngradePackage } from '../models/TierPendingDowngradePackage';
import { TierStatus } from '../models/TierStatus';
import { UpdatePackageQuantityRequest } from '../models/UpdatePackageQuantityRequest';
import { UpdateTierRequest } from '../models/UpdateTierRequest';
import { UpdateTierResponse } from '../models/UpdateTierResponse';
import { Webstore } from '../models/Webstore';
import { WebstoreResponse } from '../models/WebstoreResponse';

import { ObservableHeadlessApi } from "./ObservableAPI";
import { HeadlessApiRequestFactory, HeadlessApiResponseProcessor} from "../apis/HeadlessApi";

export interface HeadlessApiAddBasketPackageRequest {
    /**
     * The basket identifier.
     * @type string
     * @memberof HeadlessApiaddBasketPackage
     */
    basketIdent: string
    /**
     * 
     * @type AddBasketPackageRequest
     * @memberof HeadlessApiaddBasketPackage
     */
    addBasketPackageRequest?: AddBasketPackageRequest
}

export interface HeadlessApiApplyCouponRequest {
    /**
     * The webstore identifier.
     * @type string
     * @memberof HeadlessApiapplyCoupon
     */
    token: string
    /**
     * The basket identifier.
     * @type string
     * @memberof HeadlessApiapplyCoupon
     */
    basketIdent: string
    /**
     * Provide a &#x60;coupon_code&#x60; to apply to the basket.
     * @type Coupon
     * @memberof HeadlessApiapplyCoupon
     */
    coupon?: Coupon
}

export interface HeadlessApiApplyCreatorCodeRequest {
    /**
     * The webstore identifier.
     * @type string
     * @memberof HeadlessApiapplyCreatorCode
     */
    token: string
    /**
     * The basket identifier.
     * @type string
     * @memberof HeadlessApiapplyCreatorCode
     */
    basketIdent: string
    /**
     * Provide a &#x60;creator_code&#x60; to apply to the basket.
     * @type ApplyCreatorCodeRequest
     * @memberof HeadlessApiapplyCreatorCode
     */
    applyCreatorCodeRequest?: ApplyCreatorCodeRequest
}

export interface HeadlessApiApplyGiftCardRequest {
    /**
     * The webstore identifier.
     * @type string
     * @memberof HeadlessApiapplyGiftCard
     */
    token: string
    /**
     * The basket identifier.
     * @type string
     * @memberof HeadlessApiapplyGiftCard
     */
    basketIdent: string
    /**
     * Provide a &#x60;card_number&#x60; to apply to the basket.
     * @type GiftCard
     * @memberof HeadlessApiapplyGiftCard
     */
    giftCard?: GiftCard
}

export interface HeadlessApiCreateBasketRequest {
    /**
     * The webstore identifier.
     * @type string
     * @memberof HeadlessApicreateBasket
     */
    token: string
    /**
     * 
     * @type CreateBasketRequest
     * @memberof HeadlessApicreateBasket
     */
    createBasketRequest?: CreateBasketRequest
}

export interface HeadlessApiGetAllCategoriesRequest {
    /**
     * The webstore identifier.
     * @type string
     * @memberof HeadlessApigetAllCategories
     */
    token: string
}

export interface HeadlessApiGetAllCategoriesIncludingPackagesRequest {
    /**
     * The webstore identifier.
     * @type string
     * @memberof HeadlessApigetAllCategoriesIncludingPackages
     */
    token: string
}

export interface HeadlessApiGetAllPackagesRequest {
    /**
     * The webstore identifier.
     * @type string
     * @memberof HeadlessApigetAllPackages
     */
    token: string
}

export interface HeadlessApiGetAllPackagesWithAuthedIPRequest {
    /**
     * The webstore identifier.
     * @type string
     * @memberof HeadlessApigetAllPackagesWithAuthedIP
     */
    token: string
    /**
     * An IP address can be provided with authenticated requests.
     * @type string
     * @memberof HeadlessApigetAllPackagesWithAuthedIP
     */
    ipAddress: string
}

export interface HeadlessApiGetAllPackagesWithAuthedIPAndBasketRequest {
    /**
     * The webstore identifier.
     * @type string
     * @memberof HeadlessApigetAllPackagesWithAuthedIPAndBasket
     */
    token: string
    /**
     * The basket identifier.
     * @type string
     * @memberof HeadlessApigetAllPackagesWithAuthedIPAndBasket
     */
    basketIdent: string
    /**
     * An IP address can be provided with authenticated requests.
     * @type string
     * @memberof HeadlessApigetAllPackagesWithAuthedIPAndBasket
     */
    ipAddress: string
}

export interface HeadlessApiGetAllPackagesWithBasketRequest {
    /**
     * The webstore identifier.
     * @type string
     * @memberof HeadlessApigetAllPackagesWithBasket
     */
    token: string
    /**
     * The basket identifier.
     * @type string
     * @memberof HeadlessApigetAllPackagesWithBasket
     */
    basketIdent: string
}

export interface HeadlessApiGetBasketAuthUrlRequest {
    /**
     * The webstore identifier.
     * @type string
     * @memberof HeadlessApigetBasketAuthUrl
     */
    token: string
    /**
     * The basket identifier.
     * @type string
     * @memberof HeadlessApigetBasketAuthUrl
     */
    basketIdent: string
    /**
     * The URL you would like to redirect the user to after successful basket authentication.
     * @type string
     * @memberof HeadlessApigetBasketAuthUrl
     */
    returnUrl: string
}

export interface HeadlessApiGetBasketByIdRequest {
    /**
     * The webstore identifier.
     * @type string
     * @memberof HeadlessApigetBasketById
     */
    token: string
    /**
     * The basket identifier.
     * @type string
     * @memberof HeadlessApigetBasketById
     */
    basketIdent: string
}

export interface HeadlessApiGetCMSPagesRequest {
    /**
     * The webstore identifier.
     * @type string
     * @memberof HeadlessApigetCMSPages
     */
    token: string
}

export interface HeadlessApiGetCategoryByIdRequest {
    /**
     * The webstore identifier.
     * @type string
     * @memberof HeadlessApigetCategoryById
     */
    token: string
    /**
     * The ID of the category to fetch.
     * @type string
     * @memberof HeadlessApigetCategoryById
     */
    categoryId: string
}

export interface HeadlessApiGetCategoryIncludingPackagesRequest {
    /**
     * The webstore identifier.
     * @type string
     * @memberof HeadlessApigetCategoryIncludingPackages
     */
    token: string
    /**
     * The ID of the category to fetch.
     * @type string
     * @memberof HeadlessApigetCategoryIncludingPackages
     */
    categoryId: string
}

export interface HeadlessApiGetPackageByIdRequest {
    /**
     * The webstore identifier.
     * @type string
     * @memberof HeadlessApigetPackageById
     */
    token: string
    /**
     * The package\&#39;s ID.
     * @type number
     * @memberof HeadlessApigetPackageById
     */
    packageId: number
}

export interface HeadlessApiGetTieredCategoriesForUserRequest {
    /**
     * The webstore identifier.
     * @type string
     * @memberof HeadlessApigetTieredCategoriesForUser
     */
    token: string
    /**
     * 
     * @type number
     * @memberof HeadlessApigetTieredCategoriesForUser
     */
    usernameId: number
}

export interface HeadlessApiGetWebstoreByIdRequest {
    /**
     * The webstore identifier.
     * @type string
     * @memberof HeadlessApigetWebstoreById
     */
    token: string
}

export interface HeadlessApiRemoveBasketPackageRequest {
    /**
     * The basket identifier.
     * @type string
     * @memberof HeadlessApiremoveBasketPackage
     */
    basketIdent: string
    /**
     * 
     * @type RemoveBasketPackageRequest
     * @memberof HeadlessApiremoveBasketPackage
     */
    removeBasketPackageRequest?: RemoveBasketPackageRequest
}

export interface HeadlessApiRemoveCouponRequest {
    /**
     * The webstore identifier.
     * @type string
     * @memberof HeadlessApiremoveCoupon
     */
    token: string
    /**
     * The basket identifier.
     * @type string
     * @memberof HeadlessApiremoveCoupon
     */
    basketIdent: string
}

export interface HeadlessApiRemoveCreatorCodeRequest {
    /**
     * The webstore identifier.
     * @type string
     * @memberof HeadlessApiremoveCreatorCode
     */
    token: string
    /**
     * The basket identifier.
     * @type string
     * @memberof HeadlessApiremoveCreatorCode
     */
    basketIdent: string
}

export interface HeadlessApiRemoveGiftCardRequest {
    /**
     * The webstore identifier.
     * @type string
     * @memberof HeadlessApiremoveGiftCard
     */
    token: string
    /**
     * The basket identifier.
     * @type string
     * @memberof HeadlessApiremoveGiftCard
     */
    basketIdent: string
    /**
     * Provide the &#x60;card_number&#x60; to remove from the basket.
     * @type RemoveGiftCardRequest
     * @memberof HeadlessApiremoveGiftCard
     */
    removeGiftCardRequest?: RemoveGiftCardRequest
}

export interface HeadlessApiUpdatePackageQuantityRequest {
    /**
     * The basket identifier.
     * @type string
     * @memberof HeadlessApiupdatePackageQuantity
     */
    basketIdent: string
    /**
     * The package identifier.
     * @type number
     * @memberof HeadlessApiupdatePackageQuantity
     */
    packageId: number
    /**
     * 
     * @type UpdatePackageQuantityRequest
     * @memberof HeadlessApiupdatePackageQuantity
     */
    updatePackageQuantityRequest?: UpdatePackageQuantityRequest
}

export interface HeadlessApiUpdateTierRequest {
    /**
     * The webstore identifier.
     * @type string
     * @memberof HeadlessApiupdateTier
     */
    token: string
    /**
     * The tier identifier
     * @type number
     * @memberof HeadlessApiupdateTier
     */
    tierId: number
    /**
     * 
     * @type UpdateTierRequest
     * @memberof HeadlessApiupdateTier
     */
    updateTierRequest?: UpdateTierRequest
}

export class ObjectHeadlessApi {
    private api: ObservableHeadlessApi

    public constructor(configuration: Configuration, requestFactory?: HeadlessApiRequestFactory, responseProcessor?: HeadlessApiResponseProcessor) {
        this.api = new ObservableHeadlessApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a package with the given ID to the basket.
     * Add a package to a basket
     * @param param the request object
     */
    public addBasketPackageWithHttpInfo(param: HeadlessApiAddBasketPackageRequest, options?: Configuration): Promise<HttpInfo<Basket>> {
        return this.api.addBasketPackageWithHttpInfo(param.basketIdent, param.addBasketPackageRequest,  options).toPromise();
    }

    /**
     * Add a package with the given ID to the basket.
     * Add a package to a basket
     * @param param the request object
     */
    public addBasketPackage(param: HeadlessApiAddBasketPackageRequest, options?: Configuration): Promise<Basket> {
        return this.api.addBasketPackage(param.basketIdent, param.addBasketPackageRequest,  options).toPromise();
    }

    /**
     * Applies a creator code to a basket.
     * Apply a coupon to a basket.
     * @param param the request object
     */
    public applyCouponWithHttpInfo(param: HeadlessApiApplyCouponRequest, options?: Configuration): Promise<HttpInfo<BasketResponse>> {
        return this.api.applyCouponWithHttpInfo(param.token, param.basketIdent, param.coupon,  options).toPromise();
    }

    /**
     * Applies a creator code to a basket.
     * Apply a coupon to a basket.
     * @param param the request object
     */
    public applyCoupon(param: HeadlessApiApplyCouponRequest, options?: Configuration): Promise<BasketResponse> {
        return this.api.applyCoupon(param.token, param.basketIdent, param.coupon,  options).toPromise();
    }

    /**
     * Applies a creator code to a basket.
     * Apply a creator code to a basket.
     * @param param the request object
     */
    public applyCreatorCodeWithHttpInfo(param: HeadlessApiApplyCreatorCodeRequest, options?: Configuration): Promise<HttpInfo<BasketResponse>> {
        return this.api.applyCreatorCodeWithHttpInfo(param.token, param.basketIdent, param.applyCreatorCodeRequest,  options).toPromise();
    }

    /**
     * Applies a creator code to a basket.
     * Apply a creator code to a basket.
     * @param param the request object
     */
    public applyCreatorCode(param: HeadlessApiApplyCreatorCodeRequest, options?: Configuration): Promise<BasketResponse> {
        return this.api.applyCreatorCode(param.token, param.basketIdent, param.applyCreatorCodeRequest,  options).toPromise();
    }

    /**
     * Applies a creator code to a basket.
     * Apply a gift card to a basket.
     * @param param the request object
     */
    public applyGiftCardWithHttpInfo(param: HeadlessApiApplyGiftCardRequest, options?: Configuration): Promise<HttpInfo<BasketResponse>> {
        return this.api.applyGiftCardWithHttpInfo(param.token, param.basketIdent, param.giftCard,  options).toPromise();
    }

    /**
     * Applies a creator code to a basket.
     * Apply a gift card to a basket.
     * @param param the request object
     */
    public applyGiftCard(param: HeadlessApiApplyGiftCardRequest, options?: Configuration): Promise<BasketResponse> {
        return this.api.applyGiftCard(param.token, param.basketIdent, param.giftCard,  options).toPromise();
    }

    /**
     * Creates a new basket for use during checkout.
     * Create a new basket
     * @param param the request object
     */
    public createBasketWithHttpInfo(param: HeadlessApiCreateBasketRequest, options?: Configuration): Promise<HttpInfo<BasketResponse>> {
        return this.api.createBasketWithHttpInfo(param.token, param.createBasketRequest,  options).toPromise();
    }

    /**
     * Creates a new basket for use during checkout.
     * Create a new basket
     * @param param the request object
     */
    public createBasket(param: HeadlessApiCreateBasketRequest, options?: Configuration): Promise<BasketResponse> {
        return this.api.createBasket(param.token, param.createBasketRequest,  options).toPromise();
    }

    /**
     * Gets all categories from a webstore. This does not include package information. To include package information, add `?includePackages=1` to the URL.
     * Gets all categories available in the webstore.
     * @param param the request object
     */
    public getAllCategoriesWithHttpInfo(param: HeadlessApiGetAllCategoriesRequest, options?: Configuration): Promise<HttpInfo<CategoryResponse>> {
        return this.api.getAllCategoriesWithHttpInfo(param.token,  options).toPromise();
    }

    /**
     * Gets all categories from a webstore. This does not include package information. To include package information, add `?includePackages=1` to the URL.
     * Gets all categories available in the webstore.
     * @param param the request object
     */
    public getAllCategories(param: HeadlessApiGetAllCategoriesRequest, options?: Configuration): Promise<CategoryResponse> {
        return this.api.getAllCategories(param.token,  options).toPromise();
    }

    /**
     * Gets all categories from a webstore including packages.
     * Gets a store\'s categories including all package information with them.
     * @param param the request object
     */
    public getAllCategoriesIncludingPackagesWithHttpInfo(param: HeadlessApiGetAllCategoriesIncludingPackagesRequest, options?: Configuration): Promise<HttpInfo<CategoryResponse>> {
        return this.api.getAllCategoriesIncludingPackagesWithHttpInfo(param.token,  options).toPromise();
    }

    /**
     * Gets all categories from a webstore including packages.
     * Gets a store\'s categories including all package information with them.
     * @param param the request object
     */
    public getAllCategoriesIncludingPackages(param: HeadlessApiGetAllCategoriesIncludingPackagesRequest, options?: Configuration): Promise<CategoryResponse> {
        return this.api.getAllCategoriesIncludingPackages(param.token,  options).toPromise();
    }

    /**
     * Gets all packages from a webstore.
     * Fetch all packages from a webstore
     * @param param the request object
     */
    public getAllPackagesWithHttpInfo(param: HeadlessApiGetAllPackagesRequest, options?: Configuration): Promise<HttpInfo<PackageResponse>> {
        return this.api.getAllPackagesWithHttpInfo(param.token,  options).toPromise();
    }

    /**
     * Gets all packages from a webstore.
     * Fetch all packages from a webstore
     * @param param the request object
     */
    public getAllPackages(param: HeadlessApiGetAllPackagesRequest, options?: Configuration): Promise<PackageResponse> {
        return this.api.getAllPackages(param.token,  options).toPromise();
    }

    /**
     * Gets all packages from a webstore.
     * Fetch a package from a webstore by its identifier
     * @param param the request object
     */
    public getAllPackagesWithAuthedIPWithHttpInfo(param: HeadlessApiGetAllPackagesWithAuthedIPRequest, options?: Configuration): Promise<HttpInfo<PackageResponse>> {
        return this.api.getAllPackagesWithAuthedIPWithHttpInfo(param.token, param.ipAddress,  options).toPromise();
    }

    /**
     * Gets all packages from a webstore.
     * Fetch a package from a webstore by its identifier
     * @param param the request object
     */
    public getAllPackagesWithAuthedIP(param: HeadlessApiGetAllPackagesWithAuthedIPRequest, options?: Configuration): Promise<PackageResponse> {
        return this.api.getAllPackagesWithAuthedIP(param.token, param.ipAddress,  options).toPromise();
    }

    /**
     * Gets all packages from a webstore.
     * Fetch a package from a webstore by its identifier
     * @param param the request object
     */
    public getAllPackagesWithAuthedIPAndBasketWithHttpInfo(param: HeadlessApiGetAllPackagesWithAuthedIPAndBasketRequest, options?: Configuration): Promise<HttpInfo<PackageResponse>> {
        return this.api.getAllPackagesWithAuthedIPAndBasketWithHttpInfo(param.token, param.basketIdent, param.ipAddress,  options).toPromise();
    }

    /**
     * Gets all packages from a webstore.
     * Fetch a package from a webstore by its identifier
     * @param param the request object
     */
    public getAllPackagesWithAuthedIPAndBasket(param: HeadlessApiGetAllPackagesWithAuthedIPAndBasketRequest, options?: Configuration): Promise<PackageResponse> {
        return this.api.getAllPackagesWithAuthedIPAndBasket(param.token, param.basketIdent, param.ipAddress,  options).toPromise();
    }

    /**
     * Gets all packages from a webstore.
     * Fetch a package from a webstore by its identifier
     * @param param the request object
     */
    public getAllPackagesWithBasketWithHttpInfo(param: HeadlessApiGetAllPackagesWithBasketRequest, options?: Configuration): Promise<HttpInfo<PackageResponse>> {
        return this.api.getAllPackagesWithBasketWithHttpInfo(param.token, param.basketIdent,  options).toPromise();
    }

    /**
     * Gets all packages from a webstore.
     * Fetch a package from a webstore by its identifier
     * @param param the request object
     */
    public getAllPackagesWithBasket(param: HeadlessApiGetAllPackagesWithBasketRequest, options?: Configuration): Promise<PackageResponse> {
        return this.api.getAllPackagesWithBasket(param.token, param.basketIdent,  options).toPromise();
    }

    /**
     * Fetches a basket\'s auth URL.
     * Get authentication links for a basket.
     * @param param the request object
     */
    public getBasketAuthUrlWithHttpInfo(param: HeadlessApiGetBasketAuthUrlRequest, options?: Configuration): Promise<HttpInfo<Array<BasketAuthResponseInner>>> {
        return this.api.getBasketAuthUrlWithHttpInfo(param.token, param.basketIdent, param.returnUrl,  options).toPromise();
    }

    /**
     * Fetches a basket\'s auth URL.
     * Get authentication links for a basket.
     * @param param the request object
     */
    public getBasketAuthUrl(param: HeadlessApiGetBasketAuthUrlRequest, options?: Configuration): Promise<Array<BasketAuthResponseInner>> {
        return this.api.getBasketAuthUrl(param.token, param.basketIdent, param.returnUrl,  options).toPromise();
    }

    /**
     * Gets a basket associated with the provided identifier.
     * Fetch a basket from a webstore by its identifier
     * @param param the request object
     */
    public getBasketByIdWithHttpInfo(param: HeadlessApiGetBasketByIdRequest, options?: Configuration): Promise<HttpInfo<BasketResponse>> {
        return this.api.getBasketByIdWithHttpInfo(param.token, param.basketIdent,  options).toPromise();
    }

    /**
     * Gets a basket associated with the provided identifier.
     * Fetch a basket from a webstore by its identifier
     * @param param the request object
     */
    public getBasketById(param: HeadlessApiGetBasketByIdRequest, options?: Configuration): Promise<BasketResponse> {
        return this.api.getBasketById(param.token, param.basketIdent,  options).toPromise();
    }

    /**
     * Gets a list of custom pages associated with the webstore. These contain a `content` variable with the HTML content of the page.
     * Fetch the custom pages associated with the store.
     * @param param the request object
     */
    public getCMSPagesWithHttpInfo(param: HeadlessApiGetCMSPagesRequest, options?: Configuration): Promise<HttpInfo<CMSPagesResponse>> {
        return this.api.getCMSPagesWithHttpInfo(param.token,  options).toPromise();
    }

    /**
     * Gets a list of custom pages associated with the webstore. These contain a `content` variable with the HTML content of the page.
     * Fetch the custom pages associated with the store.
     * @param param the request object
     */
    public getCMSPages(param: HeadlessApiGetCMSPagesRequest, options?: Configuration): Promise<CMSPagesResponse> {
        return this.api.getCMSPages(param.token,  options).toPromise();
    }

    /**
     * Gets information about a category and returns the packages in that category.
     * Gets information about a specific category
     * @param param the request object
     */
    public getCategoryByIdWithHttpInfo(param: HeadlessApiGetCategoryByIdRequest, options?: Configuration): Promise<HttpInfo<CategoryResponse>> {
        return this.api.getCategoryByIdWithHttpInfo(param.token, param.categoryId,  options).toPromise();
    }

    /**
     * Gets information about a category and returns the packages in that category.
     * Gets information about a specific category
     * @param param the request object
     */
    public getCategoryById(param: HeadlessApiGetCategoryByIdRequest, options?: Configuration): Promise<CategoryResponse> {
        return this.api.getCategoryById(param.token, param.categoryId,  options).toPromise();
    }

    /**
     * Gets information about a category and returns the packages in that category.
     * Gets information about a specific category, including all the packages in the category
     * @param param the request object
     */
    public getCategoryIncludingPackagesWithHttpInfo(param: HeadlessApiGetCategoryIncludingPackagesRequest, options?: Configuration): Promise<HttpInfo<CategoryResponse>> {
        return this.api.getCategoryIncludingPackagesWithHttpInfo(param.token, param.categoryId,  options).toPromise();
    }

    /**
     * Gets information about a category and returns the packages in that category.
     * Gets information about a specific category, including all the packages in the category
     * @param param the request object
     */
    public getCategoryIncludingPackages(param: HeadlessApiGetCategoryIncludingPackagesRequest, options?: Configuration): Promise<CategoryResponse> {
        return this.api.getCategoryIncludingPackages(param.token, param.categoryId,  options).toPromise();
    }

    /**
     * Gets a package from a webstore by ID.
     * Fetch a package from a webstore by its identifier
     * @param param the request object
     */
    public getPackageByIdWithHttpInfo(param: HeadlessApiGetPackageByIdRequest, options?: Configuration): Promise<HttpInfo<PackageResponse>> {
        return this.api.getPackageByIdWithHttpInfo(param.token, param.packageId,  options).toPromise();
    }

    /**
     * Gets a package from a webstore by ID.
     * Fetch a package from a webstore by its identifier
     * @param param the request object
     */
    public getPackageById(param: HeadlessApiGetPackageByIdRequest, options?: Configuration): Promise<PackageResponse> {
        return this.api.getPackageById(param.token, param.packageId,  options).toPromise();
    }

    /**
     * Gets all categories from the webstore, returning active tier information for the given player.
     * Gets a store\'s categories including all package information with them.
     * @param param the request object
     */
    public getTieredCategoriesForUserWithHttpInfo(param: HeadlessApiGetTieredCategoriesForUserRequest, options?: Configuration): Promise<HttpInfo<CategoryResponse>> {
        return this.api.getTieredCategoriesForUserWithHttpInfo(param.token, param.usernameId,  options).toPromise();
    }

    /**
     * Gets all categories from the webstore, returning active tier information for the given player.
     * Gets a store\'s categories including all package information with them.
     * @param param the request object
     */
    public getTieredCategoriesForUser(param: HeadlessApiGetTieredCategoriesForUserRequest, options?: Configuration): Promise<CategoryResponse> {
        return this.api.getTieredCategoriesForUser(param.token, param.usernameId,  options).toPromise();
    }

    /**
     * Gets the webstore associated with the provided identifier.
     * Fetch a webstore by its identifier
     * @param param the request object
     */
    public getWebstoreByIdWithHttpInfo(param: HeadlessApiGetWebstoreByIdRequest, options?: Configuration): Promise<HttpInfo<WebstoreResponse>> {
        return this.api.getWebstoreByIdWithHttpInfo(param.token,  options).toPromise();
    }

    /**
     * Gets the webstore associated with the provided identifier.
     * Fetch a webstore by its identifier
     * @param param the request object
     */
    public getWebstoreById(param: HeadlessApiGetWebstoreByIdRequest, options?: Configuration): Promise<WebstoreResponse> {
        return this.api.getWebstoreById(param.token,  options).toPromise();
    }

    /**
     * Remove the given package ID from the basket.
     * Remove a package from a basket
     * @param param the request object
     */
    public removeBasketPackageWithHttpInfo(param: HeadlessApiRemoveBasketPackageRequest, options?: Configuration): Promise<HttpInfo<Basket>> {
        return this.api.removeBasketPackageWithHttpInfo(param.basketIdent, param.removeBasketPackageRequest,  options).toPromise();
    }

    /**
     * Remove the given package ID from the basket.
     * Remove a package from a basket
     * @param param the request object
     */
    public removeBasketPackage(param: HeadlessApiRemoveBasketPackageRequest, options?: Configuration): Promise<Basket> {
        return this.api.removeBasketPackage(param.basketIdent, param.removeBasketPackageRequest,  options).toPromise();
    }

    /**
     * Removes a coupon code from a basket
     * Remove a coupon from the basket.
     * @param param the request object
     */
    public removeCouponWithHttpInfo(param: HeadlessApiRemoveCouponRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.removeCouponWithHttpInfo(param.token, param.basketIdent,  options).toPromise();
    }

    /**
     * Removes a coupon code from a basket
     * Remove a coupon from the basket.
     * @param param the request object
     */
    public removeCoupon(param: HeadlessApiRemoveCouponRequest, options?: Configuration): Promise<void> {
        return this.api.removeCoupon(param.token, param.basketIdent,  options).toPromise();
    }

    /**
     * Applies a creator code to a basket.
     * Remove a creator code from the basket.
     * @param param the request object
     */
    public removeCreatorCodeWithHttpInfo(param: HeadlessApiRemoveCreatorCodeRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.removeCreatorCodeWithHttpInfo(param.token, param.basketIdent,  options).toPromise();
    }

    /**
     * Applies a creator code to a basket.
     * Remove a creator code from the basket.
     * @param param the request object
     */
    public removeCreatorCode(param: HeadlessApiRemoveCreatorCodeRequest, options?: Configuration): Promise<void> {
        return this.api.removeCreatorCode(param.token, param.basketIdent,  options).toPromise();
    }

    /**
     * Removes a gift card from the basket.
     * Remove a gift card from the basket.
     * @param param the request object
     */
    public removeGiftCardWithHttpInfo(param: HeadlessApiRemoveGiftCardRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.removeGiftCardWithHttpInfo(param.token, param.basketIdent, param.removeGiftCardRequest,  options).toPromise();
    }

    /**
     * Removes a gift card from the basket.
     * Remove a gift card from the basket.
     * @param param the request object
     */
    public removeGiftCard(param: HeadlessApiRemoveGiftCardRequest, options?: Configuration): Promise<void> {
        return this.api.removeGiftCard(param.token, param.basketIdent, param.removeGiftCardRequest,  options).toPromise();
    }

    /**
     * Sets the quantity of the given item in the basket.
     * Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed.
     * @param param the request object
     */
    public updatePackageQuantityWithHttpInfo(param: HeadlessApiUpdatePackageQuantityRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updatePackageQuantityWithHttpInfo(param.basketIdent, param.packageId, param.updatePackageQuantityRequest,  options).toPromise();
    }

    /**
     * Sets the quantity of the given item in the basket.
     * Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed.
     * @param param the request object
     */
    public updatePackageQuantity(param: HeadlessApiUpdatePackageQuantityRequest, options?: Configuration): Promise<void> {
        return this.api.updatePackageQuantity(param.basketIdent, param.packageId, param.updatePackageQuantityRequest,  options).toPromise();
    }

    /**
     * Updates a tier to a new package.
     * Updates the given teir to the provided package.
     * @param param the request object
     */
    public updateTierWithHttpInfo(param: HeadlessApiUpdateTierRequest, options?: Configuration): Promise<HttpInfo<UpdateTierResponse>> {
        return this.api.updateTierWithHttpInfo(param.token, param.tierId, param.updateTierRequest,  options).toPromise();
    }

    /**
     * Updates a tier to a new package.
     * Updates the given teir to the provided package.
     * @param param the request object
     */
    public updateTier(param: HeadlessApiUpdateTierRequest, options?: Configuration): Promise<UpdateTierResponse> {
        return this.api.updateTier(param.token, param.tierId, param.updateTierRequest,  options).toPromise();
    }

}

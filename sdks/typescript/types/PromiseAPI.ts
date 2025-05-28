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
import { ObservableHeadlessApi } from './ObservableAPI';

import { HeadlessApiRequestFactory, HeadlessApiResponseProcessor} from "../apis/HeadlessApi";
export class PromiseHeadlessApi {
    private api: ObservableHeadlessApi

    public constructor(
        configuration: Configuration,
        requestFactory?: HeadlessApiRequestFactory,
        responseProcessor?: HeadlessApiResponseProcessor
    ) {
        this.api = new ObservableHeadlessApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a package with the given ID to the basket.
     * Add a package to a basket
     * @param basketIdent The basket identifier.
     * @param addBasketPackageRequest 
     */
    public addBasketPackageWithHttpInfo(basketIdent: string, addBasketPackageRequest?: AddBasketPackageRequest, _options?: Configuration): Promise<HttpInfo<Basket>> {
        const result = this.api.addBasketPackageWithHttpInfo(basketIdent, addBasketPackageRequest, _options);
        return result.toPromise();
    }

    /**
     * Add a package with the given ID to the basket.
     * Add a package to a basket
     * @param basketIdent The basket identifier.
     * @param addBasketPackageRequest 
     */
    public addBasketPackage(basketIdent: string, addBasketPackageRequest?: AddBasketPackageRequest, _options?: Configuration): Promise<Basket> {
        const result = this.api.addBasketPackage(basketIdent, addBasketPackageRequest, _options);
        return result.toPromise();
    }

    /**
     * Applies a creator code to a basket.
     * Apply a coupon to a basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param coupon Provide a &#x60;coupon_code&#x60; to apply to the basket.
     */
    public applyCouponWithHttpInfo(token: string, basketIdent: string, coupon?: Coupon, _options?: Configuration): Promise<HttpInfo<BasketResponse>> {
        const result = this.api.applyCouponWithHttpInfo(token, basketIdent, coupon, _options);
        return result.toPromise();
    }

    /**
     * Applies a creator code to a basket.
     * Apply a coupon to a basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param coupon Provide a &#x60;coupon_code&#x60; to apply to the basket.
     */
    public applyCoupon(token: string, basketIdent: string, coupon?: Coupon, _options?: Configuration): Promise<BasketResponse> {
        const result = this.api.applyCoupon(token, basketIdent, coupon, _options);
        return result.toPromise();
    }

    /**
     * Applies a creator code to a basket.
     * Apply a creator code to a basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param applyCreatorCodeRequest Provide a &#x60;creator_code&#x60; to apply to the basket.
     */
    public applyCreatorCodeWithHttpInfo(token: string, basketIdent: string, applyCreatorCodeRequest?: ApplyCreatorCodeRequest, _options?: Configuration): Promise<HttpInfo<BasketResponse>> {
        const result = this.api.applyCreatorCodeWithHttpInfo(token, basketIdent, applyCreatorCodeRequest, _options);
        return result.toPromise();
    }

    /**
     * Applies a creator code to a basket.
     * Apply a creator code to a basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param applyCreatorCodeRequest Provide a &#x60;creator_code&#x60; to apply to the basket.
     */
    public applyCreatorCode(token: string, basketIdent: string, applyCreatorCodeRequest?: ApplyCreatorCodeRequest, _options?: Configuration): Promise<BasketResponse> {
        const result = this.api.applyCreatorCode(token, basketIdent, applyCreatorCodeRequest, _options);
        return result.toPromise();
    }

    /**
     * Applies a creator code to a basket.
     * Apply a gift card to a basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param giftCard Provide a &#x60;card_number&#x60; to apply to the basket.
     */
    public applyGiftCardWithHttpInfo(token: string, basketIdent: string, giftCard?: GiftCard, _options?: Configuration): Promise<HttpInfo<BasketResponse>> {
        const result = this.api.applyGiftCardWithHttpInfo(token, basketIdent, giftCard, _options);
        return result.toPromise();
    }

    /**
     * Applies a creator code to a basket.
     * Apply a gift card to a basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param giftCard Provide a &#x60;card_number&#x60; to apply to the basket.
     */
    public applyGiftCard(token: string, basketIdent: string, giftCard?: GiftCard, _options?: Configuration): Promise<BasketResponse> {
        const result = this.api.applyGiftCard(token, basketIdent, giftCard, _options);
        return result.toPromise();
    }

    /**
     * Creates a new basket for use during checkout.
     * Create a new basket
     * @param token The webstore identifier.
     * @param createBasketRequest 
     */
    public createBasketWithHttpInfo(token: string, createBasketRequest?: CreateBasketRequest, _options?: Configuration): Promise<HttpInfo<BasketResponse>> {
        const result = this.api.createBasketWithHttpInfo(token, createBasketRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a new basket for use during checkout.
     * Create a new basket
     * @param token The webstore identifier.
     * @param createBasketRequest 
     */
    public createBasket(token: string, createBasketRequest?: CreateBasketRequest, _options?: Configuration): Promise<BasketResponse> {
        const result = this.api.createBasket(token, createBasketRequest, _options);
        return result.toPromise();
    }

    /**
     * Gets all categories from a webstore. This does not include package information. To include package information, add `?includePackages=1` to the URL.
     * Gets all categories available in the webstore.
     * @param token The webstore identifier.
     */
    public getAllCategoriesWithHttpInfo(token: string, _options?: Configuration): Promise<HttpInfo<CategoryResponse>> {
        const result = this.api.getAllCategoriesWithHttpInfo(token, _options);
        return result.toPromise();
    }

    /**
     * Gets all categories from a webstore. This does not include package information. To include package information, add `?includePackages=1` to the URL.
     * Gets all categories available in the webstore.
     * @param token The webstore identifier.
     */
    public getAllCategories(token: string, _options?: Configuration): Promise<CategoryResponse> {
        const result = this.api.getAllCategories(token, _options);
        return result.toPromise();
    }

    /**
     * Gets all categories from a webstore including packages.
     * Gets a store\'s categories including all package information with them.
     * @param token The webstore identifier.
     */
    public getAllCategoriesIncludingPackagesWithHttpInfo(token: string, _options?: Configuration): Promise<HttpInfo<CategoryResponse>> {
        const result = this.api.getAllCategoriesIncludingPackagesWithHttpInfo(token, _options);
        return result.toPromise();
    }

    /**
     * Gets all categories from a webstore including packages.
     * Gets a store\'s categories including all package information with them.
     * @param token The webstore identifier.
     */
    public getAllCategoriesIncludingPackages(token: string, _options?: Configuration): Promise<CategoryResponse> {
        const result = this.api.getAllCategoriesIncludingPackages(token, _options);
        return result.toPromise();
    }

    /**
     * Gets all packages from a webstore.
     * Fetch all packages from a webstore
     * @param token The webstore identifier.
     */
    public getAllPackagesWithHttpInfo(token: string, _options?: Configuration): Promise<HttpInfo<PackageResponse>> {
        const result = this.api.getAllPackagesWithHttpInfo(token, _options);
        return result.toPromise();
    }

    /**
     * Gets all packages from a webstore.
     * Fetch all packages from a webstore
     * @param token The webstore identifier.
     */
    public getAllPackages(token: string, _options?: Configuration): Promise<PackageResponse> {
        const result = this.api.getAllPackages(token, _options);
        return result.toPromise();
    }

    /**
     * Gets all packages from a webstore.
     * Fetch a package from a webstore by its identifier
     * @param token The webstore identifier.
     * @param ipAddress An IP address can be provided with authenticated requests.
     */
    public getAllPackagesWithAuthedIPWithHttpInfo(token: string, ipAddress: string, _options?: Configuration): Promise<HttpInfo<PackageResponse>> {
        const result = this.api.getAllPackagesWithAuthedIPWithHttpInfo(token, ipAddress, _options);
        return result.toPromise();
    }

    /**
     * Gets all packages from a webstore.
     * Fetch a package from a webstore by its identifier
     * @param token The webstore identifier.
     * @param ipAddress An IP address can be provided with authenticated requests.
     */
    public getAllPackagesWithAuthedIP(token: string, ipAddress: string, _options?: Configuration): Promise<PackageResponse> {
        const result = this.api.getAllPackagesWithAuthedIP(token, ipAddress, _options);
        return result.toPromise();
    }

    /**
     * Gets all packages from a webstore.
     * Fetch a package from a webstore by its identifier
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param ipAddress An IP address can be provided with authenticated requests.
     */
    public getAllPackagesWithAuthedIPAndBasketWithHttpInfo(token: string, basketIdent: string, ipAddress: string, _options?: Configuration): Promise<HttpInfo<PackageResponse>> {
        const result = this.api.getAllPackagesWithAuthedIPAndBasketWithHttpInfo(token, basketIdent, ipAddress, _options);
        return result.toPromise();
    }

    /**
     * Gets all packages from a webstore.
     * Fetch a package from a webstore by its identifier
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param ipAddress An IP address can be provided with authenticated requests.
     */
    public getAllPackagesWithAuthedIPAndBasket(token: string, basketIdent: string, ipAddress: string, _options?: Configuration): Promise<PackageResponse> {
        const result = this.api.getAllPackagesWithAuthedIPAndBasket(token, basketIdent, ipAddress, _options);
        return result.toPromise();
    }

    /**
     * Gets all packages from a webstore.
     * Fetch a package from a webstore by its identifier
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     */
    public getAllPackagesWithBasketWithHttpInfo(token: string, basketIdent: string, _options?: Configuration): Promise<HttpInfo<PackageResponse>> {
        const result = this.api.getAllPackagesWithBasketWithHttpInfo(token, basketIdent, _options);
        return result.toPromise();
    }

    /**
     * Gets all packages from a webstore.
     * Fetch a package from a webstore by its identifier
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     */
    public getAllPackagesWithBasket(token: string, basketIdent: string, _options?: Configuration): Promise<PackageResponse> {
        const result = this.api.getAllPackagesWithBasket(token, basketIdent, _options);
        return result.toPromise();
    }

    /**
     * Fetches a basket\'s auth URL.
     * Get authentication links for a basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param returnUrl The URL you would like to redirect the user to after successful basket authentication.
     */
    public getBasketAuthUrlWithHttpInfo(token: string, basketIdent: string, returnUrl: string, _options?: Configuration): Promise<HttpInfo<Array<BasketAuthResponseInner>>> {
        const result = this.api.getBasketAuthUrlWithHttpInfo(token, basketIdent, returnUrl, _options);
        return result.toPromise();
    }

    /**
     * Fetches a basket\'s auth URL.
     * Get authentication links for a basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param returnUrl The URL you would like to redirect the user to after successful basket authentication.
     */
    public getBasketAuthUrl(token: string, basketIdent: string, returnUrl: string, _options?: Configuration): Promise<Array<BasketAuthResponseInner>> {
        const result = this.api.getBasketAuthUrl(token, basketIdent, returnUrl, _options);
        return result.toPromise();
    }

    /**
     * Gets a basket associated with the provided identifier.
     * Fetch a basket from a webstore by its identifier
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     */
    public getBasketByIdWithHttpInfo(token: string, basketIdent: string, _options?: Configuration): Promise<HttpInfo<BasketResponse>> {
        const result = this.api.getBasketByIdWithHttpInfo(token, basketIdent, _options);
        return result.toPromise();
    }

    /**
     * Gets a basket associated with the provided identifier.
     * Fetch a basket from a webstore by its identifier
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     */
    public getBasketById(token: string, basketIdent: string, _options?: Configuration): Promise<BasketResponse> {
        const result = this.api.getBasketById(token, basketIdent, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of custom pages associated with the webstore. These contain a `content` variable with the HTML content of the page.
     * Fetch the custom pages associated with the store.
     * @param token The webstore identifier.
     */
    public getCMSPagesWithHttpInfo(token: string, _options?: Configuration): Promise<HttpInfo<CMSPagesResponse>> {
        const result = this.api.getCMSPagesWithHttpInfo(token, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of custom pages associated with the webstore. These contain a `content` variable with the HTML content of the page.
     * Fetch the custom pages associated with the store.
     * @param token The webstore identifier.
     */
    public getCMSPages(token: string, _options?: Configuration): Promise<CMSPagesResponse> {
        const result = this.api.getCMSPages(token, _options);
        return result.toPromise();
    }

    /**
     * Gets information about a category and returns the packages in that category.
     * Gets information about a specific category
     * @param token The webstore identifier.
     * @param categoryId The ID of the category to fetch.
     */
    public getCategoryByIdWithHttpInfo(token: string, categoryId: string, _options?: Configuration): Promise<HttpInfo<CategoryResponse>> {
        const result = this.api.getCategoryByIdWithHttpInfo(token, categoryId, _options);
        return result.toPromise();
    }

    /**
     * Gets information about a category and returns the packages in that category.
     * Gets information about a specific category
     * @param token The webstore identifier.
     * @param categoryId The ID of the category to fetch.
     */
    public getCategoryById(token: string, categoryId: string, _options?: Configuration): Promise<CategoryResponse> {
        const result = this.api.getCategoryById(token, categoryId, _options);
        return result.toPromise();
    }

    /**
     * Gets information about a category and returns the packages in that category.
     * Gets information about a specific category, including all the packages in the category
     * @param token The webstore identifier.
     * @param categoryId The ID of the category to fetch.
     */
    public getCategoryIncludingPackagesWithHttpInfo(token: string, categoryId: string, _options?: Configuration): Promise<HttpInfo<CategoryResponse>> {
        const result = this.api.getCategoryIncludingPackagesWithHttpInfo(token, categoryId, _options);
        return result.toPromise();
    }

    /**
     * Gets information about a category and returns the packages in that category.
     * Gets information about a specific category, including all the packages in the category
     * @param token The webstore identifier.
     * @param categoryId The ID of the category to fetch.
     */
    public getCategoryIncludingPackages(token: string, categoryId: string, _options?: Configuration): Promise<CategoryResponse> {
        const result = this.api.getCategoryIncludingPackages(token, categoryId, _options);
        return result.toPromise();
    }

    /**
     * Gets a package from a webstore by ID.
     * Fetch a package from a webstore by its identifier
     * @param token The webstore identifier.
     * @param packageId The package\&#39;s ID.
     */
    public getPackageByIdWithHttpInfo(token: string, packageId: number, _options?: Configuration): Promise<HttpInfo<PackageResponse>> {
        const result = this.api.getPackageByIdWithHttpInfo(token, packageId, _options);
        return result.toPromise();
    }

    /**
     * Gets a package from a webstore by ID.
     * Fetch a package from a webstore by its identifier
     * @param token The webstore identifier.
     * @param packageId The package\&#39;s ID.
     */
    public getPackageById(token: string, packageId: number, _options?: Configuration): Promise<PackageResponse> {
        const result = this.api.getPackageById(token, packageId, _options);
        return result.toPromise();
    }

    /**
     * Gets all categories from the webstore, returning active tier information for the given player.
     * Gets a store\'s categories including all package information with them.
     * @param token The webstore identifier.
     * @param usernameId 
     */
    public getTieredCategoriesForUserWithHttpInfo(token: string, usernameId: number, _options?: Configuration): Promise<HttpInfo<CategoryResponse>> {
        const result = this.api.getTieredCategoriesForUserWithHttpInfo(token, usernameId, _options);
        return result.toPromise();
    }

    /**
     * Gets all categories from the webstore, returning active tier information for the given player.
     * Gets a store\'s categories including all package information with them.
     * @param token The webstore identifier.
     * @param usernameId 
     */
    public getTieredCategoriesForUser(token: string, usernameId: number, _options?: Configuration): Promise<CategoryResponse> {
        const result = this.api.getTieredCategoriesForUser(token, usernameId, _options);
        return result.toPromise();
    }

    /**
     * Gets the webstore associated with the provided identifier.
     * Fetch a webstore by its identifier
     * @param token The webstore identifier.
     */
    public getWebstoreByIdWithHttpInfo(token: string, _options?: Configuration): Promise<HttpInfo<WebstoreResponse>> {
        const result = this.api.getWebstoreByIdWithHttpInfo(token, _options);
        return result.toPromise();
    }

    /**
     * Gets the webstore associated with the provided identifier.
     * Fetch a webstore by its identifier
     * @param token The webstore identifier.
     */
    public getWebstoreById(token: string, _options?: Configuration): Promise<WebstoreResponse> {
        const result = this.api.getWebstoreById(token, _options);
        return result.toPromise();
    }

    /**
     * Remove the given package ID from the basket.
     * Remove a package from a basket
     * @param basketIdent The basket identifier.
     * @param removeBasketPackageRequest 
     */
    public removeBasketPackageWithHttpInfo(basketIdent: string, removeBasketPackageRequest?: RemoveBasketPackageRequest, _options?: Configuration): Promise<HttpInfo<Basket>> {
        const result = this.api.removeBasketPackageWithHttpInfo(basketIdent, removeBasketPackageRequest, _options);
        return result.toPromise();
    }

    /**
     * Remove the given package ID from the basket.
     * Remove a package from a basket
     * @param basketIdent The basket identifier.
     * @param removeBasketPackageRequest 
     */
    public removeBasketPackage(basketIdent: string, removeBasketPackageRequest?: RemoveBasketPackageRequest, _options?: Configuration): Promise<Basket> {
        const result = this.api.removeBasketPackage(basketIdent, removeBasketPackageRequest, _options);
        return result.toPromise();
    }

    /**
     * Removes a coupon code from a basket
     * Remove a coupon from the basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     */
    public removeCouponWithHttpInfo(token: string, basketIdent: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.removeCouponWithHttpInfo(token, basketIdent, _options);
        return result.toPromise();
    }

    /**
     * Removes a coupon code from a basket
     * Remove a coupon from the basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     */
    public removeCoupon(token: string, basketIdent: string, _options?: Configuration): Promise<void> {
        const result = this.api.removeCoupon(token, basketIdent, _options);
        return result.toPromise();
    }

    /**
     * Applies a creator code to a basket.
     * Remove a creator code from the basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     */
    public removeCreatorCodeWithHttpInfo(token: string, basketIdent: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.removeCreatorCodeWithHttpInfo(token, basketIdent, _options);
        return result.toPromise();
    }

    /**
     * Applies a creator code to a basket.
     * Remove a creator code from the basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     */
    public removeCreatorCode(token: string, basketIdent: string, _options?: Configuration): Promise<void> {
        const result = this.api.removeCreatorCode(token, basketIdent, _options);
        return result.toPromise();
    }

    /**
     * Removes a gift card from the basket.
     * Remove a gift card from the basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param removeGiftCardRequest Provide the &#x60;card_number&#x60; to remove from the basket.
     */
    public removeGiftCardWithHttpInfo(token: string, basketIdent: string, removeGiftCardRequest?: RemoveGiftCardRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.removeGiftCardWithHttpInfo(token, basketIdent, removeGiftCardRequest, _options);
        return result.toPromise();
    }

    /**
     * Removes a gift card from the basket.
     * Remove a gift card from the basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param removeGiftCardRequest Provide the &#x60;card_number&#x60; to remove from the basket.
     */
    public removeGiftCard(token: string, basketIdent: string, removeGiftCardRequest?: RemoveGiftCardRequest, _options?: Configuration): Promise<void> {
        const result = this.api.removeGiftCard(token, basketIdent, removeGiftCardRequest, _options);
        return result.toPromise();
    }

    /**
     * Sets the quantity of the given item in the basket.
     * Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed.
     * @param basketIdent The basket identifier.
     * @param packageId The package identifier.
     * @param updatePackageQuantityRequest 
     */
    public updatePackageQuantityWithHttpInfo(basketIdent: string, packageId: number, updatePackageQuantityRequest?: UpdatePackageQuantityRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updatePackageQuantityWithHttpInfo(basketIdent, packageId, updatePackageQuantityRequest, _options);
        return result.toPromise();
    }

    /**
     * Sets the quantity of the given item in the basket.
     * Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed.
     * @param basketIdent The basket identifier.
     * @param packageId The package identifier.
     * @param updatePackageQuantityRequest 
     */
    public updatePackageQuantity(basketIdent: string, packageId: number, updatePackageQuantityRequest?: UpdatePackageQuantityRequest, _options?: Configuration): Promise<void> {
        const result = this.api.updatePackageQuantity(basketIdent, packageId, updatePackageQuantityRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates a tier to a new package.
     * Updates the given teir to the provided package.
     * @param token The webstore identifier.
     * @param tierId The tier identifier
     * @param updateTierRequest 
     */
    public updateTierWithHttpInfo(token: string, tierId: number, updateTierRequest?: UpdateTierRequest, _options?: Configuration): Promise<HttpInfo<UpdateTierResponse>> {
        const result = this.api.updateTierWithHttpInfo(token, tierId, updateTierRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates a tier to a new package.
     * Updates the given teir to the provided package.
     * @param token The webstore identifier.
     * @param tierId The tier identifier
     * @param updateTierRequest 
     */
    public updateTier(token: string, tierId: number, updateTierRequest?: UpdateTierRequest, _options?: Configuration): Promise<UpdateTierResponse> {
        const result = this.api.updateTier(token, tierId, updateTierRequest, _options);
        return result.toPromise();
    }


}




// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AddBasketPackageRequest } from '../models/AddBasketPackageRequest';
import { ApplyCreatorCodeRequest } from '../models/ApplyCreatorCodeRequest';
import { Basket } from '../models/Basket';
import { BasketAuthResponseInner } from '../models/BasketAuthResponseInner';
import { BasketResponse } from '../models/BasketResponse';
import { CMSPagesResponse } from '../models/CMSPagesResponse';
import { CategoryResponse } from '../models/CategoryResponse';
import { Coupon } from '../models/Coupon';
import { CreateBasketRequest } from '../models/CreateBasketRequest';
import { GiftCard } from '../models/GiftCard';
import { PackageResponse } from '../models/PackageResponse';
import { RemoveBasketPackageRequest } from '../models/RemoveBasketPackageRequest';
import { RemoveGiftCardRequest } from '../models/RemoveGiftCardRequest';
import { UpdatePackageQuantityRequest } from '../models/UpdatePackageQuantityRequest';
import { UpdateTierRequest } from '../models/UpdateTierRequest';
import { UpdateTierResponse } from '../models/UpdateTierResponse';
import { WebstoreResponse } from '../models/WebstoreResponse';

/**
 * no description
 */
export class HeadlessApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Add a package with the given ID to the basket.
     * Add a package to a basket
     * @param basketIdent The basket identifier.
     * @param addBasketPackageRequest 
     */
    public async addBasketPackage(basketIdent: string, addBasketPackageRequest?: AddBasketPackageRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'basketIdent' is not null or undefined
        if (basketIdent === null || basketIdent === undefined) {
            throw new RequiredError("HeadlessApi", "addBasketPackage", "basketIdent");
        }



        // Path Params
        const localVarPath = '/baskets/{basketIdent}/packages'
            .replace('{' + 'basketIdent' + '}', encodeURIComponent(String(basketIdent)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(addBasketPackageRequest, "AddBasketPackageRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Applies a creator code to a basket.
     * Apply a coupon to a basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param coupon Provide a &#x60;coupon_code&#x60; to apply to the basket.
     */
    public async applyCoupon(token: string, basketIdent: string, coupon?: Coupon, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("HeadlessApi", "applyCoupon", "token");
        }


        // verify required parameter 'basketIdent' is not null or undefined
        if (basketIdent === null || basketIdent === undefined) {
            throw new RequiredError("HeadlessApi", "applyCoupon", "basketIdent");
        }



        // Path Params
        const localVarPath = '/accounts/{token}/baskets/{basketIdent}/coupons'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)))
            .replace('{' + 'basketIdent' + '}', encodeURIComponent(String(basketIdent)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(coupon, "Coupon", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Applies a creator code to a basket.
     * Apply a creator code to a basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param applyCreatorCodeRequest Provide a &#x60;creator_code&#x60; to apply to the basket.
     */
    public async applyCreatorCode(token: string, basketIdent: string, applyCreatorCodeRequest?: ApplyCreatorCodeRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("HeadlessApi", "applyCreatorCode", "token");
        }


        // verify required parameter 'basketIdent' is not null or undefined
        if (basketIdent === null || basketIdent === undefined) {
            throw new RequiredError("HeadlessApi", "applyCreatorCode", "basketIdent");
        }



        // Path Params
        const localVarPath = '/accounts/{token}/baskets/{basketIdent}/creator-codes'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)))
            .replace('{' + 'basketIdent' + '}', encodeURIComponent(String(basketIdent)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(applyCreatorCodeRequest, "ApplyCreatorCodeRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Applies a creator code to a basket.
     * Apply a gift card to a basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param giftCard Provide a &#x60;card_number&#x60; to apply to the basket.
     */
    public async applyGiftCard(token: string, basketIdent: string, giftCard?: GiftCard, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("HeadlessApi", "applyGiftCard", "token");
        }


        // verify required parameter 'basketIdent' is not null or undefined
        if (basketIdent === null || basketIdent === undefined) {
            throw new RequiredError("HeadlessApi", "applyGiftCard", "basketIdent");
        }



        // Path Params
        const localVarPath = '/accounts/{token}/baskets/{basketIdent}/giftcards'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)))
            .replace('{' + 'basketIdent' + '}', encodeURIComponent(String(basketIdent)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(giftCard, "GiftCard", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates a new basket for use during checkout.
     * Create a new basket
     * @param token The webstore identifier.
     * @param createBasketRequest 
     */
    public async createBasket(token: string, createBasketRequest?: CreateBasketRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("HeadlessApi", "createBasket", "token");
        }



        // Path Params
        const localVarPath = '/accounts/{token}/baskets'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createBasketRequest, "CreateBasketRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets all categories from a webstore. This does not include package information. To include package information, add `?includePackages=1` to the URL.
     * Gets all categories available in the webstore.
     * @param token The webstore identifier.
     */
    public async getAllCategories(token: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("HeadlessApi", "getAllCategories", "token");
        }


        // Path Params
        const localVarPath = '/accounts/{token}/categories'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets all categories from a webstore including packages.
     * Gets a store\'s categories including all package information with them.
     * @param token The webstore identifier.
     */
    public async getAllCategoriesIncludingPackages(token: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("HeadlessApi", "getAllCategoriesIncludingPackages", "token");
        }


        // Path Params
        const localVarPath = '/accounts/{token}/categories?includePackages=1'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets all packages from a webstore.
     * Fetch all packages from a webstore
     * @param token The webstore identifier.
     */
    public async getAllPackages(token: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("HeadlessApi", "getAllPackages", "token");
        }


        // Path Params
        const localVarPath = '/accounts/{token}/packages'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets all packages from a webstore.
     * Fetch a package from a webstore by its identifier
     * @param token The webstore identifier.
     * @param ipAddress An IP address can be provided with authenticated requests.
     */
    public async getAllPackagesWithAuthedIP(token: string, ipAddress: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("HeadlessApi", "getAllPackagesWithAuthedIP", "token");
        }


        // verify required parameter 'ipAddress' is not null or undefined
        if (ipAddress === null || ipAddress === undefined) {
            throw new RequiredError("HeadlessApi", "getAllPackagesWithAuthedIP", "ipAddress");
        }


        // Path Params
        const localVarPath = '/accounts/{token}/packages?ipAddress={ipAddress}'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)))
            .replace('{' + 'ipAddress' + '}', encodeURIComponent(String(ipAddress)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets all packages from a webstore.
     * Fetch a package from a webstore by its identifier
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param ipAddress An IP address can be provided with authenticated requests.
     */
    public async getAllPackagesWithAuthedIPAndBasket(token: string, basketIdent: string, ipAddress: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("HeadlessApi", "getAllPackagesWithAuthedIPAndBasket", "token");
        }


        // verify required parameter 'basketIdent' is not null or undefined
        if (basketIdent === null || basketIdent === undefined) {
            throw new RequiredError("HeadlessApi", "getAllPackagesWithAuthedIPAndBasket", "basketIdent");
        }


        // verify required parameter 'ipAddress' is not null or undefined
        if (ipAddress === null || ipAddress === undefined) {
            throw new RequiredError("HeadlessApi", "getAllPackagesWithAuthedIPAndBasket", "ipAddress");
        }


        // Path Params
        const localVarPath = '/accounts/{token}/packages?ipAddress={ipAddress}&basketIdent={basketIdent}'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)))
            .replace('{' + 'basketIdent' + '}', encodeURIComponent(String(basketIdent)))
            .replace('{' + 'ipAddress' + '}', encodeURIComponent(String(ipAddress)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets all packages from a webstore.
     * Fetch a package from a webstore by its identifier
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     */
    public async getAllPackagesWithBasket(token: string, basketIdent: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("HeadlessApi", "getAllPackagesWithBasket", "token");
        }


        // verify required parameter 'basketIdent' is not null or undefined
        if (basketIdent === null || basketIdent === undefined) {
            throw new RequiredError("HeadlessApi", "getAllPackagesWithBasket", "basketIdent");
        }


        // Path Params
        const localVarPath = '/accounts/{token}/packages?basketIdent={basketIdent}'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)))
            .replace('{' + 'basketIdent' + '}', encodeURIComponent(String(basketIdent)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Fetches a basket\'s auth URL.
     * Get authentication links for a basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param returnUrl The URL you would like to redirect the user to after successful basket authentication.
     */
    public async getBasketAuthUrl(token: string, basketIdent: string, returnUrl: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("HeadlessApi", "getBasketAuthUrl", "token");
        }


        // verify required parameter 'basketIdent' is not null or undefined
        if (basketIdent === null || basketIdent === undefined) {
            throw new RequiredError("HeadlessApi", "getBasketAuthUrl", "basketIdent");
        }


        // verify required parameter 'returnUrl' is not null or undefined
        if (returnUrl === null || returnUrl === undefined) {
            throw new RequiredError("HeadlessApi", "getBasketAuthUrl", "returnUrl");
        }


        // Path Params
        const localVarPath = '/accounts/{token}/baskets/{basketIdent}/auth?returnUrl={returnUrl}'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)))
            .replace('{' + 'basketIdent' + '}', encodeURIComponent(String(basketIdent)))
            .replace('{' + 'returnUrl' + '}', encodeURIComponent(String(returnUrl)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets a basket associated with the provided identifier.
     * Fetch a basket from a webstore by its identifier
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     */
    public async getBasketById(token: string, basketIdent: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("HeadlessApi", "getBasketById", "token");
        }


        // verify required parameter 'basketIdent' is not null or undefined
        if (basketIdent === null || basketIdent === undefined) {
            throw new RequiredError("HeadlessApi", "getBasketById", "basketIdent");
        }


        // Path Params
        const localVarPath = '/accounts/{token}/baskets/{basketIdent}'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)))
            .replace('{' + 'basketIdent' + '}', encodeURIComponent(String(basketIdent)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets a list of custom pages associated with the webstore. These contain a `content` variable with the HTML content of the page.
     * Fetch the custom pages associated with the store.
     * @param token The webstore identifier.
     */
    public async getCMSPages(token: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("HeadlessApi", "getCMSPages", "token");
        }


        // Path Params
        const localVarPath = '/accounts/{token}/pages'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets information about a category and returns the packages in that category.
     * Gets information about a specific category
     * @param token The webstore identifier.
     * @param categoryId The ID of the category to fetch.
     */
    public async getCategoryById(token: string, categoryId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("HeadlessApi", "getCategoryById", "token");
        }


        // verify required parameter 'categoryId' is not null or undefined
        if (categoryId === null || categoryId === undefined) {
            throw new RequiredError("HeadlessApi", "getCategoryById", "categoryId");
        }


        // Path Params
        const localVarPath = '/accounts/{token}/categories/{categoryId}'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)))
            .replace('{' + 'categoryId' + '}', encodeURIComponent(String(categoryId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets information about a category and returns the packages in that category.
     * Gets information about a specific category, including all the packages in the category
     * @param token The webstore identifier.
     * @param categoryId The ID of the category to fetch.
     */
    public async getCategoryIncludingPackages(token: string, categoryId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("HeadlessApi", "getCategoryIncludingPackages", "token");
        }


        // verify required parameter 'categoryId' is not null or undefined
        if (categoryId === null || categoryId === undefined) {
            throw new RequiredError("HeadlessApi", "getCategoryIncludingPackages", "categoryId");
        }


        // Path Params
        const localVarPath = '/accounts/{token}/categories/{categoryId}?includePackages=1'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)))
            .replace('{' + 'categoryId' + '}', encodeURIComponent(String(categoryId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets a package from a webstore by ID.
     * Fetch a package from a webstore by its identifier
     * @param token The webstore identifier.
     * @param packageId The package\&#39;s ID.
     */
    public async getPackageById(token: string, packageId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("HeadlessApi", "getPackageById", "token");
        }


        // verify required parameter 'packageId' is not null or undefined
        if (packageId === null || packageId === undefined) {
            throw new RequiredError("HeadlessApi", "getPackageById", "packageId");
        }


        // Path Params
        const localVarPath = '/accounts/{token}/packages/{packageId}'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)))
            .replace('{' + 'packageId' + '}', encodeURIComponent(String(packageId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets all categories from the webstore, returning active tier information for the given player.
     * Gets a store\'s categories including all package information with them.
     * @param token The webstore identifier.
     * @param usernameId 
     */
    public async getTieredCategoriesForUser(token: string, usernameId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("HeadlessApi", "getTieredCategoriesForUser", "token");
        }


        // verify required parameter 'usernameId' is not null or undefined
        if (usernameId === null || usernameId === undefined) {
            throw new RequiredError("HeadlessApi", "getTieredCategoriesForUser", "usernameId");
        }


        // Path Params
        const localVarPath = '/accounts/{token}/categories?usernameId={usernameId}'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)))
            .replace('{' + 'usernameId' + '}', encodeURIComponent(String(usernameId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the webstore associated with the provided identifier.
     * Fetch a webstore by its identifier
     * @param token The webstore identifier.
     */
    public async getWebstoreById(token: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("HeadlessApi", "getWebstoreById", "token");
        }


        // Path Params
        const localVarPath = '/accounts/{token}'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Remove the given package ID from the basket.
     * Remove a package from a basket
     * @param basketIdent The basket identifier.
     * @param removeBasketPackageRequest 
     */
    public async removeBasketPackage(basketIdent: string, removeBasketPackageRequest?: RemoveBasketPackageRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'basketIdent' is not null or undefined
        if (basketIdent === null || basketIdent === undefined) {
            throw new RequiredError("HeadlessApi", "removeBasketPackage", "basketIdent");
        }



        // Path Params
        const localVarPath = '/baskets/{basketIdent}/packages/remove'
            .replace('{' + 'basketIdent' + '}', encodeURIComponent(String(basketIdent)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(removeBasketPackageRequest, "RemoveBasketPackageRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Removes a coupon code from a basket
     * Remove a coupon from the basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     */
    public async removeCoupon(token: string, basketIdent: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("HeadlessApi", "removeCoupon", "token");
        }


        // verify required parameter 'basketIdent' is not null or undefined
        if (basketIdent === null || basketIdent === undefined) {
            throw new RequiredError("HeadlessApi", "removeCoupon", "basketIdent");
        }


        // Path Params
        const localVarPath = '/accounts/{token}/baskets/{basketIdent}/coupons/remove'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)))
            .replace('{' + 'basketIdent' + '}', encodeURIComponent(String(basketIdent)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Applies a creator code to a basket.
     * Remove a creator code from the basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     */
    public async removeCreatorCode(token: string, basketIdent: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("HeadlessApi", "removeCreatorCode", "token");
        }


        // verify required parameter 'basketIdent' is not null or undefined
        if (basketIdent === null || basketIdent === undefined) {
            throw new RequiredError("HeadlessApi", "removeCreatorCode", "basketIdent");
        }


        // Path Params
        const localVarPath = '/accounts/{token}/baskets/{basketIdent}/creator-codes/remove'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)))
            .replace('{' + 'basketIdent' + '}', encodeURIComponent(String(basketIdent)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Removes a gift card from the basket.
     * Remove a gift card from the basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param removeGiftCardRequest Provide the &#x60;card_number&#x60; to remove from the basket.
     */
    public async removeGiftCard(token: string, basketIdent: string, removeGiftCardRequest?: RemoveGiftCardRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("HeadlessApi", "removeGiftCard", "token");
        }


        // verify required parameter 'basketIdent' is not null or undefined
        if (basketIdent === null || basketIdent === undefined) {
            throw new RequiredError("HeadlessApi", "removeGiftCard", "basketIdent");
        }



        // Path Params
        const localVarPath = '/accounts/{token}/baskets/{basketIdent}/giftcards/remove'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)))
            .replace('{' + 'basketIdent' + '}', encodeURIComponent(String(basketIdent)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(removeGiftCardRequest, "RemoveGiftCardRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Sets the quantity of the given item in the basket.
     * Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed.
     * @param basketIdent The basket identifier.
     * @param packageId The package identifier.
     * @param updatePackageQuantityRequest 
     */
    public async updatePackageQuantity(basketIdent: string, packageId: number, updatePackageQuantityRequest?: UpdatePackageQuantityRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'basketIdent' is not null or undefined
        if (basketIdent === null || basketIdent === undefined) {
            throw new RequiredError("HeadlessApi", "updatePackageQuantity", "basketIdent");
        }


        // verify required parameter 'packageId' is not null or undefined
        if (packageId === null || packageId === undefined) {
            throw new RequiredError("HeadlessApi", "updatePackageQuantity", "packageId");
        }



        // Path Params
        const localVarPath = '/baskets/{basketIdent}/packages/{packageId}'
            .replace('{' + 'basketIdent' + '}', encodeURIComponent(String(basketIdent)))
            .replace('{' + 'packageId' + '}', encodeURIComponent(String(packageId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updatePackageQuantityRequest, "UpdatePackageQuantityRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates a tier to a new package.
     * Updates the given teir to the provided package.
     * @param token The webstore identifier.
     * @param tierId The tier identifier
     * @param updateTierRequest 
     */
    public async updateTier(token: string, tierId: number, updateTierRequest?: UpdateTierRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError("HeadlessApi", "updateTier", "token");
        }


        // verify required parameter 'tierId' is not null or undefined
        if (tierId === null || tierId === undefined) {
            throw new RequiredError("HeadlessApi", "updateTier", "tierId");
        }



        // Path Params
        const localVarPath = '/accounts/{token}/tiers/{tierId}'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)))
            .replace('{' + 'tierId' + '}', encodeURIComponent(String(tierId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateTierRequest, "UpdateTierRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class HeadlessApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addBasketPackage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addBasketPackageWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Basket >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Basket = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Basket", ""
            ) as Basket;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The provided request is invalid. The error response will include detail as to which parameter failed validation.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Basket = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Basket", ""
            ) as Basket;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to applyCoupon
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async applyCouponWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BasketResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BasketResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BasketResponse", ""
            ) as BasketResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BasketResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BasketResponse", ""
            ) as BasketResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to applyCreatorCode
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async applyCreatorCodeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BasketResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BasketResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BasketResponse", ""
            ) as BasketResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The provided request is invalid. The error response will include detail as to which parameter failed validation.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BasketResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BasketResponse", ""
            ) as BasketResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to applyGiftCard
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async applyGiftCardWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BasketResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BasketResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BasketResponse", ""
            ) as BasketResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BasketResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BasketResponse", ""
            ) as BasketResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBasket
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBasketWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BasketResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BasketResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BasketResponse", ""
            ) as BasketResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The provided webstore ID is invalid.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BasketResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BasketResponse", ""
            ) as BasketResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllCategories
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllCategoriesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CategoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryResponse", ""
            ) as CategoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CategoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryResponse", ""
            ) as CategoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllCategoriesIncludingPackages
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllCategoriesIncludingPackagesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CategoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryResponse", ""
            ) as CategoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CategoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryResponse", ""
            ) as CategoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllPackages
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllPackagesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PackageResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PackageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PackageResponse", ""
            ) as PackageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PackageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PackageResponse", ""
            ) as PackageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllPackagesWithAuthedIP
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllPackagesWithAuthedIPWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PackageResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PackageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PackageResponse", ""
            ) as PackageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The provided request is invalid.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PackageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PackageResponse", ""
            ) as PackageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllPackagesWithAuthedIPAndBasket
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllPackagesWithAuthedIPAndBasketWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PackageResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PackageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PackageResponse", ""
            ) as PackageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The provided request is invalid.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PackageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PackageResponse", ""
            ) as PackageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllPackagesWithBasket
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllPackagesWithBasketWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PackageResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PackageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PackageResponse", ""
            ) as PackageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The provided request is invalid.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PackageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PackageResponse", ""
            ) as PackageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBasketAuthUrl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBasketAuthUrlWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<BasketAuthResponseInner> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<BasketAuthResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BasketAuthResponseInner>", ""
            ) as Array<BasketAuthResponseInner>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The provided webstore ID or basket ID is invalid.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<BasketAuthResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BasketAuthResponseInner>", ""
            ) as Array<BasketAuthResponseInner>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBasketById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBasketByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BasketResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BasketResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BasketResponse", ""
            ) as BasketResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BasketResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BasketResponse", ""
            ) as BasketResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCMSPages
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCMSPagesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CMSPagesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CMSPagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CMSPagesResponse", ""
            ) as CMSPagesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CMSPagesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CMSPagesResponse", ""
            ) as CMSPagesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCategoryById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCategoryByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CategoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryResponse", ""
            ) as CategoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CategoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryResponse", ""
            ) as CategoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCategoryIncludingPackages
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCategoryIncludingPackagesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CategoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryResponse", ""
            ) as CategoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CategoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryResponse", ""
            ) as CategoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPackageById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPackageByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PackageResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PackageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PackageResponse", ""
            ) as PackageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PackageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PackageResponse", ""
            ) as PackageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTieredCategoriesForUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTieredCategoriesForUserWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CategoryResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CategoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryResponse", ""
            ) as CategoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CategoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CategoryResponse", ""
            ) as CategoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWebstoreById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWebstoreByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<WebstoreResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebstoreResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebstoreResponse", ""
            ) as WebstoreResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebstoreResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebstoreResponse", ""
            ) as WebstoreResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeBasketPackage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeBasketPackageWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Basket >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Basket = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Basket", ""
            ) as Basket;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The provided request is invalid. The error response will include detail as to which parameter failed validation.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Basket = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Basket", ""
            ) as Basket;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeCoupon
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeCouponWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The provided request is invalid. The error response will include detail as to which parameter failed validation.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeCreatorCode
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeCreatorCodeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The provided request is invalid. The error response will include detail as to which parameter failed validation.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeGiftCard
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeGiftCardWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The provided request is invalid. The error response will include detail as to which parameter failed validation.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePackageQuantity
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePackageQuantityWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The provided request is invalid. The error response will include detail as to which parameter failed validation.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateTier
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateTierWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UpdateTierResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdateTierResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateTierResponse", ""
            ) as UpdateTierResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdateTierResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateTierResponse", ""
            ) as UpdateTierResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}

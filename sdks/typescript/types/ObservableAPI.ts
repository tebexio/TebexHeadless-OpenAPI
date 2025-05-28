import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { HeadlessApiRequestFactory, HeadlessApiResponseProcessor} from "../apis/HeadlessApi";
export class ObservableHeadlessApi {
    private requestFactory: HeadlessApiRequestFactory;
    private responseProcessor: HeadlessApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: HeadlessApiRequestFactory,
        responseProcessor?: HeadlessApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new HeadlessApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new HeadlessApiResponseProcessor();
    }

    /**
     * Add a package with the given ID to the basket.
     * Add a package to a basket
     * @param basketIdent The basket identifier.
     * @param addBasketPackageRequest 
     */
    public addBasketPackageWithHttpInfo(basketIdent: string, addBasketPackageRequest?: AddBasketPackageRequest, _options?: Configuration): Observable<HttpInfo<Basket>> {
        const requestContextPromise = this.requestFactory.addBasketPackage(basketIdent, addBasketPackageRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addBasketPackageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add a package with the given ID to the basket.
     * Add a package to a basket
     * @param basketIdent The basket identifier.
     * @param addBasketPackageRequest 
     */
    public addBasketPackage(basketIdent: string, addBasketPackageRequest?: AddBasketPackageRequest, _options?: Configuration): Observable<Basket> {
        return this.addBasketPackageWithHttpInfo(basketIdent, addBasketPackageRequest, _options).pipe(map((apiResponse: HttpInfo<Basket>) => apiResponse.data));
    }

    /**
     * Applies a creator code to a basket.
     * Apply a coupon to a basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param coupon Provide a &#x60;coupon_code&#x60; to apply to the basket.
     */
    public applyCouponWithHttpInfo(token: string, basketIdent: string, coupon?: Coupon, _options?: Configuration): Observable<HttpInfo<BasketResponse>> {
        const requestContextPromise = this.requestFactory.applyCoupon(token, basketIdent, coupon, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applyCouponWithHttpInfo(rsp)));
            }));
    }

    /**
     * Applies a creator code to a basket.
     * Apply a coupon to a basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param coupon Provide a &#x60;coupon_code&#x60; to apply to the basket.
     */
    public applyCoupon(token: string, basketIdent: string, coupon?: Coupon, _options?: Configuration): Observable<BasketResponse> {
        return this.applyCouponWithHttpInfo(token, basketIdent, coupon, _options).pipe(map((apiResponse: HttpInfo<BasketResponse>) => apiResponse.data));
    }

    /**
     * Applies a creator code to a basket.
     * Apply a creator code to a basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param applyCreatorCodeRequest Provide a &#x60;creator_code&#x60; to apply to the basket.
     */
    public applyCreatorCodeWithHttpInfo(token: string, basketIdent: string, applyCreatorCodeRequest?: ApplyCreatorCodeRequest, _options?: Configuration): Observable<HttpInfo<BasketResponse>> {
        const requestContextPromise = this.requestFactory.applyCreatorCode(token, basketIdent, applyCreatorCodeRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applyCreatorCodeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Applies a creator code to a basket.
     * Apply a creator code to a basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param applyCreatorCodeRequest Provide a &#x60;creator_code&#x60; to apply to the basket.
     */
    public applyCreatorCode(token: string, basketIdent: string, applyCreatorCodeRequest?: ApplyCreatorCodeRequest, _options?: Configuration): Observable<BasketResponse> {
        return this.applyCreatorCodeWithHttpInfo(token, basketIdent, applyCreatorCodeRequest, _options).pipe(map((apiResponse: HttpInfo<BasketResponse>) => apiResponse.data));
    }

    /**
     * Applies a creator code to a basket.
     * Apply a gift card to a basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param giftCard Provide a &#x60;card_number&#x60; to apply to the basket.
     */
    public applyGiftCardWithHttpInfo(token: string, basketIdent: string, giftCard?: GiftCard, _options?: Configuration): Observable<HttpInfo<BasketResponse>> {
        const requestContextPromise = this.requestFactory.applyGiftCard(token, basketIdent, giftCard, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applyGiftCardWithHttpInfo(rsp)));
            }));
    }

    /**
     * Applies a creator code to a basket.
     * Apply a gift card to a basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param giftCard Provide a &#x60;card_number&#x60; to apply to the basket.
     */
    public applyGiftCard(token: string, basketIdent: string, giftCard?: GiftCard, _options?: Configuration): Observable<BasketResponse> {
        return this.applyGiftCardWithHttpInfo(token, basketIdent, giftCard, _options).pipe(map((apiResponse: HttpInfo<BasketResponse>) => apiResponse.data));
    }

    /**
     * Creates a new basket for use during checkout.
     * Create a new basket
     * @param token The webstore identifier.
     * @param createBasketRequest 
     */
    public createBasketWithHttpInfo(token: string, createBasketRequest?: CreateBasketRequest, _options?: Configuration): Observable<HttpInfo<BasketResponse>> {
        const requestContextPromise = this.requestFactory.createBasket(token, createBasketRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBasketWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new basket for use during checkout.
     * Create a new basket
     * @param token The webstore identifier.
     * @param createBasketRequest 
     */
    public createBasket(token: string, createBasketRequest?: CreateBasketRequest, _options?: Configuration): Observable<BasketResponse> {
        return this.createBasketWithHttpInfo(token, createBasketRequest, _options).pipe(map((apiResponse: HttpInfo<BasketResponse>) => apiResponse.data));
    }

    /**
     * Gets all categories from a webstore. This does not include package information. To include package information, add `?includePackages=1` to the URL.
     * Gets all categories available in the webstore.
     * @param token The webstore identifier.
     */
    public getAllCategoriesWithHttpInfo(token: string, _options?: Configuration): Observable<HttpInfo<CategoryResponse>> {
        const requestContextPromise = this.requestFactory.getAllCategories(token, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllCategoriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets all categories from a webstore. This does not include package information. To include package information, add `?includePackages=1` to the URL.
     * Gets all categories available in the webstore.
     * @param token The webstore identifier.
     */
    public getAllCategories(token: string, _options?: Configuration): Observable<CategoryResponse> {
        return this.getAllCategoriesWithHttpInfo(token, _options).pipe(map((apiResponse: HttpInfo<CategoryResponse>) => apiResponse.data));
    }

    /**
     * Gets all categories from a webstore including packages.
     * Gets a store\'s categories including all package information with them.
     * @param token The webstore identifier.
     */
    public getAllCategoriesIncludingPackagesWithHttpInfo(token: string, _options?: Configuration): Observable<HttpInfo<CategoryResponse>> {
        const requestContextPromise = this.requestFactory.getAllCategoriesIncludingPackages(token, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllCategoriesIncludingPackagesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets all categories from a webstore including packages.
     * Gets a store\'s categories including all package information with them.
     * @param token The webstore identifier.
     */
    public getAllCategoriesIncludingPackages(token: string, _options?: Configuration): Observable<CategoryResponse> {
        return this.getAllCategoriesIncludingPackagesWithHttpInfo(token, _options).pipe(map((apiResponse: HttpInfo<CategoryResponse>) => apiResponse.data));
    }

    /**
     * Gets all packages from a webstore.
     * Fetch all packages from a webstore
     * @param token The webstore identifier.
     */
    public getAllPackagesWithHttpInfo(token: string, _options?: Configuration): Observable<HttpInfo<PackageResponse>> {
        const requestContextPromise = this.requestFactory.getAllPackages(token, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllPackagesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets all packages from a webstore.
     * Fetch all packages from a webstore
     * @param token The webstore identifier.
     */
    public getAllPackages(token: string, _options?: Configuration): Observable<PackageResponse> {
        return this.getAllPackagesWithHttpInfo(token, _options).pipe(map((apiResponse: HttpInfo<PackageResponse>) => apiResponse.data));
    }

    /**
     * Gets all packages from a webstore.
     * Fetch a package from a webstore by its identifier
     * @param token The webstore identifier.
     * @param ipAddress An IP address can be provided with authenticated requests.
     */
    public getAllPackagesWithAuthedIPWithHttpInfo(token: string, ipAddress: string, _options?: Configuration): Observable<HttpInfo<PackageResponse>> {
        const requestContextPromise = this.requestFactory.getAllPackagesWithAuthedIP(token, ipAddress, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllPackagesWithAuthedIPWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets all packages from a webstore.
     * Fetch a package from a webstore by its identifier
     * @param token The webstore identifier.
     * @param ipAddress An IP address can be provided with authenticated requests.
     */
    public getAllPackagesWithAuthedIP(token: string, ipAddress: string, _options?: Configuration): Observable<PackageResponse> {
        return this.getAllPackagesWithAuthedIPWithHttpInfo(token, ipAddress, _options).pipe(map((apiResponse: HttpInfo<PackageResponse>) => apiResponse.data));
    }

    /**
     * Gets all packages from a webstore.
     * Fetch a package from a webstore by its identifier
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param ipAddress An IP address can be provided with authenticated requests.
     */
    public getAllPackagesWithAuthedIPAndBasketWithHttpInfo(token: string, basketIdent: string, ipAddress: string, _options?: Configuration): Observable<HttpInfo<PackageResponse>> {
        const requestContextPromise = this.requestFactory.getAllPackagesWithAuthedIPAndBasket(token, basketIdent, ipAddress, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllPackagesWithAuthedIPAndBasketWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets all packages from a webstore.
     * Fetch a package from a webstore by its identifier
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param ipAddress An IP address can be provided with authenticated requests.
     */
    public getAllPackagesWithAuthedIPAndBasket(token: string, basketIdent: string, ipAddress: string, _options?: Configuration): Observable<PackageResponse> {
        return this.getAllPackagesWithAuthedIPAndBasketWithHttpInfo(token, basketIdent, ipAddress, _options).pipe(map((apiResponse: HttpInfo<PackageResponse>) => apiResponse.data));
    }

    /**
     * Gets all packages from a webstore.
     * Fetch a package from a webstore by its identifier
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     */
    public getAllPackagesWithBasketWithHttpInfo(token: string, basketIdent: string, _options?: Configuration): Observable<HttpInfo<PackageResponse>> {
        const requestContextPromise = this.requestFactory.getAllPackagesWithBasket(token, basketIdent, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllPackagesWithBasketWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets all packages from a webstore.
     * Fetch a package from a webstore by its identifier
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     */
    public getAllPackagesWithBasket(token: string, basketIdent: string, _options?: Configuration): Observable<PackageResponse> {
        return this.getAllPackagesWithBasketWithHttpInfo(token, basketIdent, _options).pipe(map((apiResponse: HttpInfo<PackageResponse>) => apiResponse.data));
    }

    /**
     * Fetches a basket\'s auth URL.
     * Get authentication links for a basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param returnUrl The URL you would like to redirect the user to after successful basket authentication.
     */
    public getBasketAuthUrlWithHttpInfo(token: string, basketIdent: string, returnUrl: string, _options?: Configuration): Observable<HttpInfo<Array<BasketAuthResponseInner>>> {
        const requestContextPromise = this.requestFactory.getBasketAuthUrl(token, basketIdent, returnUrl, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBasketAuthUrlWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetches a basket\'s auth URL.
     * Get authentication links for a basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param returnUrl The URL you would like to redirect the user to after successful basket authentication.
     */
    public getBasketAuthUrl(token: string, basketIdent: string, returnUrl: string, _options?: Configuration): Observable<Array<BasketAuthResponseInner>> {
        return this.getBasketAuthUrlWithHttpInfo(token, basketIdent, returnUrl, _options).pipe(map((apiResponse: HttpInfo<Array<BasketAuthResponseInner>>) => apiResponse.data));
    }

    /**
     * Gets a basket associated with the provided identifier.
     * Fetch a basket from a webstore by its identifier
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     */
    public getBasketByIdWithHttpInfo(token: string, basketIdent: string, _options?: Configuration): Observable<HttpInfo<BasketResponse>> {
        const requestContextPromise = this.requestFactory.getBasketById(token, basketIdent, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBasketByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a basket associated with the provided identifier.
     * Fetch a basket from a webstore by its identifier
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     */
    public getBasketById(token: string, basketIdent: string, _options?: Configuration): Observable<BasketResponse> {
        return this.getBasketByIdWithHttpInfo(token, basketIdent, _options).pipe(map((apiResponse: HttpInfo<BasketResponse>) => apiResponse.data));
    }

    /**
     * Gets a list of custom pages associated with the webstore. These contain a `content` variable with the HTML content of the page.
     * Fetch the custom pages associated with the store.
     * @param token The webstore identifier.
     */
    public getCMSPagesWithHttpInfo(token: string, _options?: Configuration): Observable<HttpInfo<CMSPagesResponse>> {
        const requestContextPromise = this.requestFactory.getCMSPages(token, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCMSPagesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of custom pages associated with the webstore. These contain a `content` variable with the HTML content of the page.
     * Fetch the custom pages associated with the store.
     * @param token The webstore identifier.
     */
    public getCMSPages(token: string, _options?: Configuration): Observable<CMSPagesResponse> {
        return this.getCMSPagesWithHttpInfo(token, _options).pipe(map((apiResponse: HttpInfo<CMSPagesResponse>) => apiResponse.data));
    }

    /**
     * Gets information about a category and returns the packages in that category.
     * Gets information about a specific category
     * @param token The webstore identifier.
     * @param categoryId The ID of the category to fetch.
     */
    public getCategoryByIdWithHttpInfo(token: string, categoryId: string, _options?: Configuration): Observable<HttpInfo<CategoryResponse>> {
        const requestContextPromise = this.requestFactory.getCategoryById(token, categoryId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCategoryByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets information about a category and returns the packages in that category.
     * Gets information about a specific category
     * @param token The webstore identifier.
     * @param categoryId The ID of the category to fetch.
     */
    public getCategoryById(token: string, categoryId: string, _options?: Configuration): Observable<CategoryResponse> {
        return this.getCategoryByIdWithHttpInfo(token, categoryId, _options).pipe(map((apiResponse: HttpInfo<CategoryResponse>) => apiResponse.data));
    }

    /**
     * Gets information about a category and returns the packages in that category.
     * Gets information about a specific category, including all the packages in the category
     * @param token The webstore identifier.
     * @param categoryId The ID of the category to fetch.
     */
    public getCategoryIncludingPackagesWithHttpInfo(token: string, categoryId: string, _options?: Configuration): Observable<HttpInfo<CategoryResponse>> {
        const requestContextPromise = this.requestFactory.getCategoryIncludingPackages(token, categoryId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCategoryIncludingPackagesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets information about a category and returns the packages in that category.
     * Gets information about a specific category, including all the packages in the category
     * @param token The webstore identifier.
     * @param categoryId The ID of the category to fetch.
     */
    public getCategoryIncludingPackages(token: string, categoryId: string, _options?: Configuration): Observable<CategoryResponse> {
        return this.getCategoryIncludingPackagesWithHttpInfo(token, categoryId, _options).pipe(map((apiResponse: HttpInfo<CategoryResponse>) => apiResponse.data));
    }

    /**
     * Gets a package from a webstore by ID.
     * Fetch a package from a webstore by its identifier
     * @param token The webstore identifier.
     * @param packageId The package\&#39;s ID.
     */
    public getPackageByIdWithHttpInfo(token: string, packageId: number, _options?: Configuration): Observable<HttpInfo<PackageResponse>> {
        const requestContextPromise = this.requestFactory.getPackageById(token, packageId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPackageByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a package from a webstore by ID.
     * Fetch a package from a webstore by its identifier
     * @param token The webstore identifier.
     * @param packageId The package\&#39;s ID.
     */
    public getPackageById(token: string, packageId: number, _options?: Configuration): Observable<PackageResponse> {
        return this.getPackageByIdWithHttpInfo(token, packageId, _options).pipe(map((apiResponse: HttpInfo<PackageResponse>) => apiResponse.data));
    }

    /**
     * Gets all categories from the webstore, returning active tier information for the given player.
     * Gets a store\'s categories including all package information with them.
     * @param token The webstore identifier.
     * @param usernameId 
     */
    public getTieredCategoriesForUserWithHttpInfo(token: string, usernameId: number, _options?: Configuration): Observable<HttpInfo<CategoryResponse>> {
        const requestContextPromise = this.requestFactory.getTieredCategoriesForUser(token, usernameId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTieredCategoriesForUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets all categories from the webstore, returning active tier information for the given player.
     * Gets a store\'s categories including all package information with them.
     * @param token The webstore identifier.
     * @param usernameId 
     */
    public getTieredCategoriesForUser(token: string, usernameId: number, _options?: Configuration): Observable<CategoryResponse> {
        return this.getTieredCategoriesForUserWithHttpInfo(token, usernameId, _options).pipe(map((apiResponse: HttpInfo<CategoryResponse>) => apiResponse.data));
    }

    /**
     * Gets the webstore associated with the provided identifier.
     * Fetch a webstore by its identifier
     * @param token The webstore identifier.
     */
    public getWebstoreByIdWithHttpInfo(token: string, _options?: Configuration): Observable<HttpInfo<WebstoreResponse>> {
        const requestContextPromise = this.requestFactory.getWebstoreById(token, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWebstoreByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the webstore associated with the provided identifier.
     * Fetch a webstore by its identifier
     * @param token The webstore identifier.
     */
    public getWebstoreById(token: string, _options?: Configuration): Observable<WebstoreResponse> {
        return this.getWebstoreByIdWithHttpInfo(token, _options).pipe(map((apiResponse: HttpInfo<WebstoreResponse>) => apiResponse.data));
    }

    /**
     * Remove the given package ID from the basket.
     * Remove a package from a basket
     * @param basketIdent The basket identifier.
     * @param removeBasketPackageRequest 
     */
    public removeBasketPackageWithHttpInfo(basketIdent: string, removeBasketPackageRequest?: RemoveBasketPackageRequest, _options?: Configuration): Observable<HttpInfo<Basket>> {
        const requestContextPromise = this.requestFactory.removeBasketPackage(basketIdent, removeBasketPackageRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeBasketPackageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove the given package ID from the basket.
     * Remove a package from a basket
     * @param basketIdent The basket identifier.
     * @param removeBasketPackageRequest 
     */
    public removeBasketPackage(basketIdent: string, removeBasketPackageRequest?: RemoveBasketPackageRequest, _options?: Configuration): Observable<Basket> {
        return this.removeBasketPackageWithHttpInfo(basketIdent, removeBasketPackageRequest, _options).pipe(map((apiResponse: HttpInfo<Basket>) => apiResponse.data));
    }

    /**
     * Removes a coupon code from a basket
     * Remove a coupon from the basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     */
    public removeCouponWithHttpInfo(token: string, basketIdent: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.removeCoupon(token, basketIdent, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeCouponWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a coupon code from a basket
     * Remove a coupon from the basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     */
    public removeCoupon(token: string, basketIdent: string, _options?: Configuration): Observable<void> {
        return this.removeCouponWithHttpInfo(token, basketIdent, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Applies a creator code to a basket.
     * Remove a creator code from the basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     */
    public removeCreatorCodeWithHttpInfo(token: string, basketIdent: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.removeCreatorCode(token, basketIdent, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeCreatorCodeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Applies a creator code to a basket.
     * Remove a creator code from the basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     */
    public removeCreatorCode(token: string, basketIdent: string, _options?: Configuration): Observable<void> {
        return this.removeCreatorCodeWithHttpInfo(token, basketIdent, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Removes a gift card from the basket.
     * Remove a gift card from the basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param removeGiftCardRequest Provide the &#x60;card_number&#x60; to remove from the basket.
     */
    public removeGiftCardWithHttpInfo(token: string, basketIdent: string, removeGiftCardRequest?: RemoveGiftCardRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.removeGiftCard(token, basketIdent, removeGiftCardRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeGiftCardWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a gift card from the basket.
     * Remove a gift card from the basket.
     * @param token The webstore identifier.
     * @param basketIdent The basket identifier.
     * @param removeGiftCardRequest Provide the &#x60;card_number&#x60; to remove from the basket.
     */
    public removeGiftCard(token: string, basketIdent: string, removeGiftCardRequest?: RemoveGiftCardRequest, _options?: Configuration): Observable<void> {
        return this.removeGiftCardWithHttpInfo(token, basketIdent, removeGiftCardRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Sets the quantity of the given item in the basket.
     * Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed.
     * @param basketIdent The basket identifier.
     * @param packageId The package identifier.
     * @param updatePackageQuantityRequest 
     */
    public updatePackageQuantityWithHttpInfo(basketIdent: string, packageId: number, updatePackageQuantityRequest?: UpdatePackageQuantityRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updatePackageQuantity(basketIdent, packageId, updatePackageQuantityRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePackageQuantityWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sets the quantity of the given item in the basket.
     * Updates the quantity of the given package in the basket. The user must be logged in before the quantity can be changed.
     * @param basketIdent The basket identifier.
     * @param packageId The package identifier.
     * @param updatePackageQuantityRequest 
     */
    public updatePackageQuantity(basketIdent: string, packageId: number, updatePackageQuantityRequest?: UpdatePackageQuantityRequest, _options?: Configuration): Observable<void> {
        return this.updatePackageQuantityWithHttpInfo(basketIdent, packageId, updatePackageQuantityRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Updates a tier to a new package.
     * Updates the given teir to the provided package.
     * @param token The webstore identifier.
     * @param tierId The tier identifier
     * @param updateTierRequest 
     */
    public updateTierWithHttpInfo(token: string, tierId: number, updateTierRequest?: UpdateTierRequest, _options?: Configuration): Observable<HttpInfo<UpdateTierResponse>> {
        const requestContextPromise = this.requestFactory.updateTier(token, tierId, updateTierRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTierWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a tier to a new package.
     * Updates the given teir to the provided package.
     * @param token The webstore identifier.
     * @param tierId The tier identifier
     * @param updateTierRequest 
     */
    public updateTier(token: string, tierId: number, updateTierRequest?: UpdateTierRequest, _options?: Configuration): Observable<UpdateTierResponse> {
        return this.updateTierWithHttpInfo(token, tierId, updateTierRequest, _options).pipe(map((apiResponse: HttpInfo<UpdateTierResponse>) => apiResponse.data));
    }

}

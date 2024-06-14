/**
 * Tebex Headless API
 * The headless API is designed for implementing your own store frontend with the data of your store. You are able to call the Headless API directly from a web browser (such as within an SPA), or from a backend server, such as for in-game GUIs.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: tebex-integrations@overwolf.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AddBasketPackageRequest from './model/AddBasketPackageRequest';
import ApplyCreatorCodeRequest from './model/ApplyCreatorCodeRequest';
import Basket from './model/Basket';
import BasketLinks from './model/BasketLinks';
import BasketPackage from './model/BasketPackage';
import BasketResponse from './model/BasketResponse';
import Category from './model/Category';
import CategoryResponse from './model/CategoryResponse';
import Coupon from './model/Coupon';
import CreateBasketRequest from './model/CreateBasketRequest';
import ErrorResponse from './model/ErrorResponse';
import GiftCard from './model/GiftCard';
import Package from './model/Package';
import PackageCategory from './model/PackageCategory';
import PackageResponse from './model/PackageResponse';
import RemoveBasketPackageRequest from './model/RemoveBasketPackageRequest';
import RemoveGiftCardRequest from './model/RemoveGiftCardRequest';
import RevenueShare from './model/RevenueShare';
import UpdatePackageQuantityRequest from './model/UpdatePackageQuantityRequest';
import Webstore from './model/Webstore';
import WebstoreResponse from './model/WebstoreResponse';
import WebstoreResponseData from './model/WebstoreResponseData';
import HeadlessApi from './TebexHeadless/HeadlessApi';


/**
* The headless API is designed for implementing your own store frontend with the data of your store. You are able to call the Headless API directly from a web browser (such as within an SPA), or from a backend server, such as for in-game GUIs..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var TebexHeadlessApi = require('TebexHeadless/index'); // See note below*.
* var xxxSvc = new TebexHeadlessApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new TebexHeadlessApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['TebexHeadless/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new TebexHeadlessApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new TebexHeadlessApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module TebexHeadless/index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:TebexHeadless/ApiClient}
     */
    ApiClient,

    /**
     * The AddBasketPackageRequest model constructor.
     * @property {module:TebexHeadless/model/AddBasketPackageRequest}
     */
    AddBasketPackageRequest,

    /**
     * The ApplyCreatorCodeRequest model constructor.
     * @property {module:TebexHeadless/model/ApplyCreatorCodeRequest}
     */
    ApplyCreatorCodeRequest,

    /**
     * The Basket model constructor.
     * @property {module:TebexHeadless/model/Basket}
     */
    Basket,

    /**
     * The BasketLinks model constructor.
     * @property {module:TebexHeadless/model/BasketLinks}
     */
    BasketLinks,

    /**
     * The BasketPackage model constructor.
     * @property {module:TebexHeadless/model/BasketPackage}
     */
    BasketPackage,

    /**
     * The BasketResponse model constructor.
     * @property {module:TebexHeadless/model/BasketResponse}
     */
    BasketResponse,

    /**
     * The Category model constructor.
     * @property {module:TebexHeadless/model/Category}
     */
    Category,

    /**
     * The CategoryResponse model constructor.
     * @property {module:TebexHeadless/model/CategoryResponse}
     */
    CategoryResponse,

    /**
     * The Coupon model constructor.
     * @property {module:TebexHeadless/model/Coupon}
     */
    Coupon,

    /**
     * The CreateBasketRequest model constructor.
     * @property {module:TebexHeadless/model/CreateBasketRequest}
     */
    CreateBasketRequest,

    /**
     * The ErrorResponse model constructor.
     * @property {module:TebexHeadless/model/ErrorResponse}
     */
    ErrorResponse,

    /**
     * The GiftCard model constructor.
     * @property {module:TebexHeadless/model/GiftCard}
     */
    GiftCard,

    /**
     * The Package model constructor.
     * @property {module:TebexHeadless/model/Package}
     */
    Package,

    /**
     * The PackageCategory model constructor.
     * @property {module:TebexHeadless/model/PackageCategory}
     */
    PackageCategory,

    /**
     * The PackageResponse model constructor.
     * @property {module:TebexHeadless/model/PackageResponse}
     */
    PackageResponse,

    /**
     * The RemoveBasketPackageRequest model constructor.
     * @property {module:TebexHeadless/model/RemoveBasketPackageRequest}
     */
    RemoveBasketPackageRequest,

    /**
     * The RemoveGiftCardRequest model constructor.
     * @property {module:TebexHeadless/model/RemoveGiftCardRequest}
     */
    RemoveGiftCardRequest,

    /**
     * The RevenueShare model constructor.
     * @property {module:TebexHeadless/model/RevenueShare}
     */
    RevenueShare,

    /**
     * The UpdatePackageQuantityRequest model constructor.
     * @property {module:TebexHeadless/model/UpdatePackageQuantityRequest}
     */
    UpdatePackageQuantityRequest,

    /**
     * The Webstore model constructor.
     * @property {module:TebexHeadless/model/Webstore}
     */
    Webstore,

    /**
     * The WebstoreResponse model constructor.
     * @property {module:TebexHeadless/model/WebstoreResponse}
     */
    WebstoreResponse,

    /**
     * The WebstoreResponseData model constructor.
     * @property {module:TebexHeadless/model/WebstoreResponseData}
     */
    WebstoreResponseData,

    /**
    * The HeadlessApi service constructor.
    * @property {module:TebexHeadless/TebexHeadless/HeadlessApi}
    */
    HeadlessApi
};

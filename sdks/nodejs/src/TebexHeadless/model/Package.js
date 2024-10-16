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

import ApiClient from '../ApiClient';
import PackageCategory from './PackageCategory';

/**
 * The Package model module.
 * @module TebexHeadless/model/Package
 * @version 1.0.0
 */
class Package {
    /**
     * Constructs a new <code>Package</code>.
     * @alias module:TebexHeadless/model/Package
     */
    constructor() { 
        
        Package.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Package</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:TebexHeadless/model/Package} obj Optional instance to populate.
     * @return {module:TebexHeadless/model/Package} The populated <code>Package</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Package();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = PackageCategory.constructFromObject(data['category']);
            }
            if (data.hasOwnProperty('base_price')) {
                obj['base_price'] = ApiClient.convertToType(data['base_price'], 'Number');
            }
            if (data.hasOwnProperty('sales_tax')) {
                obj['sales_tax'] = ApiClient.convertToType(data['sales_tax'], 'Number');
            }
            if (data.hasOwnProperty('total_price')) {
                obj['total_price'] = ApiClient.convertToType(data['total_price'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('discount')) {
                obj['discount'] = ApiClient.convertToType(data['discount'], 'Number');
            }
            if (data.hasOwnProperty('disable_quantity')) {
                obj['disable_quantity'] = ApiClient.convertToType(data['disable_quantity'], 'Boolean');
            }
            if (data.hasOwnProperty('disable_gifting')) {
                obj['disable_gifting'] = ApiClient.convertToType(data['disable_gifting'], 'Boolean');
            }
            if (data.hasOwnProperty('expiration_date')) {
                obj['expiration_date'] = ApiClient.convertToType(data['expiration_date'], 'Date');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Package</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Package</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `category`
        if (data['category']) { // data not null
          PackageCategory.validateJSON(data['category']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
Package.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Package.prototype['name'] = undefined;

/**
 * @member {String} description
 */
Package.prototype['description'] = undefined;

/**
 * @member {String} image
 */
Package.prototype['image'] = undefined;

/**
 * @member {String} type
 */
Package.prototype['type'] = undefined;

/**
 * @member {module:TebexHeadless/model/PackageCategory} category
 */
Package.prototype['category'] = undefined;

/**
 * @member {Number} base_price
 */
Package.prototype['base_price'] = undefined;

/**
 * @member {Number} sales_tax
 */
Package.prototype['sales_tax'] = undefined;

/**
 * @member {Number} total_price
 */
Package.prototype['total_price'] = undefined;

/**
 * @member {String} currency
 */
Package.prototype['currency'] = undefined;

/**
 * @member {Number} discount
 */
Package.prototype['discount'] = undefined;

/**
 * @member {Boolean} disable_quantity
 */
Package.prototype['disable_quantity'] = undefined;

/**
 * @member {Boolean} disable_gifting
 */
Package.prototype['disable_gifting'] = undefined;

/**
 * @member {Date} expiration_date
 */
Package.prototype['expiration_date'] = undefined;

/**
 * @member {Date} created_at
 */
Package.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Package.prototype['updated_at'] = undefined;






export default Package;


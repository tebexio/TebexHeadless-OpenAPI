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

/**
 * The Webstore model module.
 * @module TebexHeadless/model/Webstore
 * @version 1.0.0
 */
class Webstore {
    /**
     * Constructs a new <code>Webstore</code>.
     * @alias module:TebexHeadless/model/Webstore
     */
    constructor() { 
        
        Webstore.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Webstore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:TebexHeadless/model/Webstore} obj Optional instance to populate.
     * @return {module:TebexHeadless/model/Webstore} The populated <code>Webstore</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Webstore();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('webstore_url')) {
                obj['webstore_url'] = ApiClient.convertToType(data['webstore_url'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('lang')) {
                obj['lang'] = ApiClient.convertToType(data['lang'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('platform_type')) {
                obj['platform_type'] = ApiClient.convertToType(data['platform_type'], 'String');
            }
            if (data.hasOwnProperty('platform_type_id')) {
                obj['platform_type_id'] = ApiClient.convertToType(data['platform_type_id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Webstore</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Webstore</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['webstore_url'] && !(typeof data['webstore_url'] === 'string' || data['webstore_url'] instanceof String)) {
            throw new Error("Expected the field `webstore_url` to be a primitive type in the JSON string but got " + data['webstore_url']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['lang'] && !(typeof data['lang'] === 'string' || data['lang'] instanceof String)) {
            throw new Error("Expected the field `lang` to be a primitive type in the JSON string but got " + data['lang']);
        }
        // ensure the json data is a string
        if (data['logo'] && !(typeof data['logo'] === 'string' || data['logo'] instanceof String)) {
            throw new Error("Expected the field `logo` to be a primitive type in the JSON string but got " + data['logo']);
        }
        // ensure the json data is a string
        if (data['platform_type'] && !(typeof data['platform_type'] === 'string' || data['platform_type'] instanceof String)) {
            throw new Error("Expected the field `platform_type` to be a primitive type in the JSON string but got " + data['platform_type']);
        }
        // ensure the json data is a string
        if (data['platform_type_id'] && !(typeof data['platform_type_id'] === 'string' || data['platform_type_id'] instanceof String)) {
            throw new Error("Expected the field `platform_type_id` to be a primitive type in the JSON string but got " + data['platform_type_id']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
Webstore.prototype['id'] = undefined;

/**
 * Store description in HTML format
 * @member {String} description
 */
Webstore.prototype['description'] = undefined;

/**
 * Name of the store
 * @member {String} name
 */
Webstore.prototype['name'] = undefined;

/**
 * URL of the webstore
 * @member {String} webstore_url
 */
Webstore.prototype['webstore_url'] = undefined;

/**
 * Currency used in the store
 * @member {String} currency
 */
Webstore.prototype['currency'] = undefined;

/**
 * Language of the store
 * @member {String} lang
 */
Webstore.prototype['lang'] = undefined;

/**
 * URL of the store's logo
 * @member {String} logo
 */
Webstore.prototype['logo'] = undefined;

/**
 * Platform type for the store
 * @member {String} platform_type
 */
Webstore.prototype['platform_type'] = undefined;

/**
 * @member {String} platform_type_id
 */
Webstore.prototype['platform_type_id'] = undefined;

/**
 * The date and time when the store was created
 * @member {Date} created_at
 */
Webstore.prototype['created_at'] = undefined;






export default Webstore;


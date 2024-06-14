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
import Package from './Package';

/**
 * The PackageResponse model module.
 * @module TebexHeadless/model/PackageResponse
 * @version 1.0.0
 */
class PackageResponse {
    /**
     * Constructs a new <code>PackageResponse</code>.
     * @alias module:TebexHeadless/model/PackageResponse
     */
    constructor() { 
        
        PackageResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PackageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:TebexHeadless/model/PackageResponse} obj Optional instance to populate.
     * @return {module:TebexHeadless/model/PackageResponse} The populated <code>PackageResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PackageResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Package]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PackageResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PackageResponse</code>.
     */
    static validateJSON(data) {
        if (data['data']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['data'])) {
                throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
            }
            // validate the optional field `data` (array)
            for (const item of data['data']) {
                Package.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:TebexHeadless/model/Package>} data
 */
PackageResponse.prototype['data'] = undefined;






export default PackageResponse;


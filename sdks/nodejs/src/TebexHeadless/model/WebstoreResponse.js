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
import WebstoreResponseData from './WebstoreResponseData';

/**
 * The WebstoreResponse model module.
 * @module TebexHeadless/model/WebstoreResponse
 * @version 1.0.0
 */
class WebstoreResponse {
    /**
     * Constructs a new <code>WebstoreResponse</code>.
     * Wrapped webstore information in a \&quot;data\&quot; object.
     * @alias module:TebexHeadless/model/WebstoreResponse
     */
    constructor() { 
        
        WebstoreResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebstoreResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:TebexHeadless/model/WebstoreResponse} obj Optional instance to populate.
     * @return {module:TebexHeadless/model/WebstoreResponse} The populated <code>WebstoreResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebstoreResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = WebstoreResponseData.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebstoreResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebstoreResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `data`
        if (data['data']) { // data not null
          WebstoreResponseData.validateJSON(data['data']);
        }

        return true;
    }


}



/**
 * @member {module:TebexHeadless/model/WebstoreResponseData} data
 */
WebstoreResponse.prototype['data'] = undefined;






export default WebstoreResponse;


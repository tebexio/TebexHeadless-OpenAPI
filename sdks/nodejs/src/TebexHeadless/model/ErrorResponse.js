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
 * The ErrorResponse model module.
 * @module TebexHeadless/model/ErrorResponse
 * @version 1.0.0
 */
class ErrorResponse {
    /**
     * Constructs a new <code>ErrorResponse</code>.
     * @alias module:TebexHeadless/model/ErrorResponse
     */
    constructor() { 
        
        ErrorResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:TebexHeadless/model/ErrorResponse} obj Optional instance to populate.
     * @return {module:TebexHeadless/model/ErrorResponse} The populated <code>ErrorResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorResponse();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], Object);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
            }
            if (data.hasOwnProperty('instance')) {
                obj['instance'] = ApiClient.convertToType(data['instance'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ErrorResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ErrorResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['detail'] && !(typeof data['detail'] === 'string' || data['detail'] instanceof String)) {
            throw new Error("Expected the field `detail` to be a primitive type in the JSON string but got " + data['detail']);
        }
        // ensure the json data is a string
        if (data['instance'] && !(typeof data['instance'] === 'string' || data['instance'] instanceof String)) {
            throw new Error("Expected the field `instance` to be a primitive type in the JSON string but got " + data['instance']);
        }

        return true;
    }


}



/**
 * A URI reference [RFC3986] that identifies the problem type.  This specification encourages that, when dereferenced, it provide human-readable documentation for the problem type (e.g., using HTML [W3C.REC-html5-20141028]).  When this member is not present, its value is assumed to be \"about:blank\".
 * @member {Object} type
 */
ErrorResponse.prototype['type'] = undefined;

/**
 * A short, human-readable summary of the problem type.  It SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization
 * @member {String} title
 */
ErrorResponse.prototype['title'] = undefined;

/**
 * The HTTP status code generated by the origin server for the occurrence of the problem.
 * @member {Number} status
 */
ErrorResponse.prototype['status'] = undefined;

/**
 * A human-readable explanation specific to this occurrence of the problem.
 * @member {String} detail
 */
ErrorResponse.prototype['detail'] = undefined;

/**
 * A URI reference that identifies the specific occurrence of the problem. It may or may not yield further information if dereferenced
 * @member {String} instance
 */
ErrorResponse.prototype['instance'] = undefined;






export default ErrorResponse;


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
 * The BasketLinks model module.
 * @module TebexHeadless/model/BasketLinks
 * @version 1.0.0
 */
class BasketLinks {
    /**
     * Constructs a new <code>BasketLinks</code>.
     * @alias module:TebexHeadless/model/BasketLinks
     */
    constructor() { 
        
        BasketLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasketLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:TebexHeadless/model/BasketLinks} obj Optional instance to populate.
     * @return {module:TebexHeadless/model/BasketLinks} The populated <code>BasketLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasketLinks();

            if (data.hasOwnProperty('payment')) {
                obj['payment'] = ApiClient.convertToType(data['payment'], 'String');
            }
            if (data.hasOwnProperty('checkout')) {
                obj['checkout'] = ApiClient.convertToType(data['checkout'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BasketLinks</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BasketLinks</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['payment'] && !(typeof data['payment'] === 'string' || data['payment'] instanceof String)) {
            throw new Error("Expected the field `payment` to be a primitive type in the JSON string but got " + data['payment']);
        }
        // ensure the json data is a string
        if (data['checkout'] && !(typeof data['checkout'] === 'string' || data['checkout'] instanceof String)) {
            throw new Error("Expected the field `checkout` to be a primitive type in the JSON string but got " + data['checkout']);
        }

        return true;
    }


}



/**
 * The `links.payment` property is only returned if the basket has been paid for and a payment exists with the `complete`,`refund`, or `chargeback` status.
 * @member {String} payment
 */
BasketLinks.prototype['payment'] = undefined;

/**
 * The `links.checkout` property is only returned if the basket has not been paid, and is the URL to send the customer to make payment
 * @member {String} checkout
 */
BasketLinks.prototype['checkout'] = undefined;






export default BasketLinks;


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
 * The GiftCard model module.
 * @module TebexHeadless/model/GiftCard
 * @version 1.0.0
 */
class GiftCard {
    /**
     * Constructs a new <code>GiftCard</code>.
     * @alias module:TebexHeadless/model/GiftCard
     */
    constructor() { 
        
        GiftCard.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GiftCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:TebexHeadless/model/GiftCard} obj Optional instance to populate.
     * @return {module:TebexHeadless/model/GiftCard} The populated <code>GiftCard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GiftCard();

            if (data.hasOwnProperty('card_number')) {
                obj['card_number'] = ApiClient.convertToType(data['card_number'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GiftCard</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GiftCard</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['card_number'] && !(typeof data['card_number'] === 'string' || data['card_number'] instanceof String)) {
            throw new Error("Expected the field `card_number` to be a primitive type in the JSON string but got " + data['card_number']);
        }

        return true;
    }


}



/**
 * @member {String} card_number
 */
GiftCard.prototype['card_number'] = undefined;






export default GiftCard;


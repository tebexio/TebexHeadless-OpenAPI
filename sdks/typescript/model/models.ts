import localVarRequest from 'request';

export * from './addBasketPackageRequest';
export * from './applyCoupon200Response';
export * from './applyCouponRequest';
export * from './applyCreatorCode200Response';
export * from './applyCreatorCodeRequest';
export * from './applyGiftCard200Response';
export * from './basket';
export * from './basketAuthResponseInner';
export * from './basketLinks';
export * from './basketPackage';
export * from './basketPackageInBasket';
export * from './basketResponse';
export * from './cMSPage';
export * from './cMSPagesResponse';
export * from './category';
export * from './categoryResponse';
export * from './communityGoalData';
export * from './communityGoalModule';
export * from './coupon';
export * from './createBasketRequest';
export * from './dynamicPackageInput';
export * from './dynamicPackagesRequest';
export * from './dynamicPackagesResponse';
export * from './errorResponse';
export * from './featuredPackageData';
export * from './featuredPackageModule';
export * from './giftCard';
export * from './giftcardBalanceData';
export * from './giftcardBalanceModule';
export * from './module';
export * from './moduleBase';
export * from './modulesResponse';
export * from './package';
export * from './packageCategory';
export * from './packageMedia';
export * from './packageResponse';
export * from './paymentGoalData';
export * from './paymentGoalModule';
export * from './players';
export * from './recentPayment';
export * from './recentPaymentPackage';
export * from './recentPaymentsData';
export * from './recentPaymentsModule';
export * from './removeBasketPackageRequest';
export * from './removeGiftCardRequest';
export * from './revenueShare';
export * from './serverStatusData';
export * from './serverStatusModule';
export * from './singleCategoryResponse';
export * from './singlePackageResponse';
export * from './textboxData';
export * from './textboxModule';
export * from './tier';
export * from './tierPendingDowngradePackage';
export * from './tierStatus';
export * from './topCustomerData';
export * from './topCustomerModule';
export * from './updatePackageQuantityRequest';
export * from './updateTierRequest';
export * from './updateTierResponse';
export * from './webstore';
export * from './webstoreResponse';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AddBasketPackageRequest } from './addBasketPackageRequest';
import { ApplyCoupon200Response } from './applyCoupon200Response';
import { ApplyCouponRequest } from './applyCouponRequest';
import { ApplyCreatorCode200Response } from './applyCreatorCode200Response';
import { ApplyCreatorCodeRequest } from './applyCreatorCodeRequest';
import { ApplyGiftCard200Response } from './applyGiftCard200Response';
import { Basket } from './basket';
import { BasketAuthResponseInner } from './basketAuthResponseInner';
import { BasketLinks } from './basketLinks';
import { BasketPackage } from './basketPackage';
import { BasketPackageInBasket } from './basketPackageInBasket';
import { BasketResponse } from './basketResponse';
import { CMSPage } from './cMSPage';
import { CMSPagesResponse } from './cMSPagesResponse';
import { Category } from './category';
import { CategoryResponse } from './categoryResponse';
import { CommunityGoalData } from './communityGoalData';
import { CommunityGoalModule } from './communityGoalModule';
import { Coupon } from './coupon';
import { CreateBasketRequest } from './createBasketRequest';
import { DynamicPackageInput } from './dynamicPackageInput';
import { DynamicPackagesRequest } from './dynamicPackagesRequest';
import { DynamicPackagesResponse } from './dynamicPackagesResponse';
import { ErrorResponse } from './errorResponse';
import { FeaturedPackageData } from './featuredPackageData';
import { FeaturedPackageModule } from './featuredPackageModule';
import { GiftCard } from './giftCard';
import { GiftcardBalanceData } from './giftcardBalanceData';
import { GiftcardBalanceModule } from './giftcardBalanceModule';
import { Module } from './module';
import { ModuleBase } from './moduleBase';
import { ModulesResponse } from './modulesResponse';
import { Package } from './package';
import { PackageCategory } from './packageCategory';
import { PackageMedia } from './packageMedia';
import { PackageResponse } from './packageResponse';
import { PaymentGoalData } from './paymentGoalData';
import { PaymentGoalModule } from './paymentGoalModule';
import { Players } from './players';
import { RecentPayment } from './recentPayment';
import { RecentPaymentPackage } from './recentPaymentPackage';
import { RecentPaymentsData } from './recentPaymentsData';
import { RecentPaymentsModule } from './recentPaymentsModule';
import { RemoveBasketPackageRequest } from './removeBasketPackageRequest';
import { RemoveGiftCardRequest } from './removeGiftCardRequest';
import { RevenueShare } from './revenueShare';
import { ServerStatusData } from './serverStatusData';
import { ServerStatusModule } from './serverStatusModule';
import { SingleCategoryResponse } from './singleCategoryResponse';
import { SinglePackageResponse } from './singlePackageResponse';
import { TextboxData } from './textboxData';
import { TextboxModule } from './textboxModule';
import { Tier } from './tier';
import { TierPendingDowngradePackage } from './tierPendingDowngradePackage';
import { TierStatus } from './tierStatus';
import { TopCustomerData } from './topCustomerData';
import { TopCustomerModule } from './topCustomerModule';
import { UpdatePackageQuantityRequest } from './updatePackageQuantityRequest';
import { UpdateTierRequest } from './updateTierRequest';
import { UpdateTierResponse } from './updateTierResponse';
import { Webstore } from './webstore';
import { WebstoreResponse } from './webstoreResponse';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "BasketPackage.TypeEnum": BasketPackage.TypeEnum,
        "Category.DisplayTypeEnum": Category.DisplayTypeEnum,
        "CommunityGoalData.BarStyleEnum": CommunityGoalData.BarStyleEnum,
        "PackageMedia.TypeEnum": PackageMedia.TypeEnum,
        "PaymentGoalData.BarStyleEnum": PaymentGoalData.BarStyleEnum,
}

let typeMap: {[index: string]: any} = {
    "AddBasketPackageRequest": AddBasketPackageRequest,
    "ApplyCoupon200Response": ApplyCoupon200Response,
    "ApplyCouponRequest": ApplyCouponRequest,
    "ApplyCreatorCode200Response": ApplyCreatorCode200Response,
    "ApplyCreatorCodeRequest": ApplyCreatorCodeRequest,
    "ApplyGiftCard200Response": ApplyGiftCard200Response,
    "Basket": Basket,
    "BasketAuthResponseInner": BasketAuthResponseInner,
    "BasketLinks": BasketLinks,
    "BasketPackage": BasketPackage,
    "BasketPackageInBasket": BasketPackageInBasket,
    "BasketResponse": BasketResponse,
    "CMSPage": CMSPage,
    "CMSPagesResponse": CMSPagesResponse,
    "Category": Category,
    "CategoryResponse": CategoryResponse,
    "CommunityGoalData": CommunityGoalData,
    "CommunityGoalModule": CommunityGoalModule,
    "Coupon": Coupon,
    "CreateBasketRequest": CreateBasketRequest,
    "DynamicPackageInput": DynamicPackageInput,
    "DynamicPackagesRequest": DynamicPackagesRequest,
    "DynamicPackagesResponse": DynamicPackagesResponse,
    "ErrorResponse": ErrorResponse,
    "FeaturedPackageData": FeaturedPackageData,
    "FeaturedPackageModule": FeaturedPackageModule,
    "GiftCard": GiftCard,
    "GiftcardBalanceData": GiftcardBalanceData,
    "GiftcardBalanceModule": GiftcardBalanceModule,
    "Module": Module,
    "ModuleBase": ModuleBase,
    "ModulesResponse": ModulesResponse,
    "Package": Package,
    "PackageCategory": PackageCategory,
    "PackageMedia": PackageMedia,
    "PackageResponse": PackageResponse,
    "PaymentGoalData": PaymentGoalData,
    "PaymentGoalModule": PaymentGoalModule,
    "Players": Players,
    "RecentPayment": RecentPayment,
    "RecentPaymentPackage": RecentPaymentPackage,
    "RecentPaymentsData": RecentPaymentsData,
    "RecentPaymentsModule": RecentPaymentsModule,
    "RemoveBasketPackageRequest": RemoveBasketPackageRequest,
    "RemoveGiftCardRequest": RemoveGiftCardRequest,
    "RevenueShare": RevenueShare,
    "ServerStatusData": ServerStatusData,
    "ServerStatusModule": ServerStatusModule,
    "SingleCategoryResponse": SingleCategoryResponse,
    "SinglePackageResponse": SinglePackageResponse,
    "TextboxData": TextboxData,
    "TextboxModule": TextboxModule,
    "Tier": Tier,
    "TierPendingDowngradePackage": TierPendingDowngradePackage,
    "TierStatus": TierStatus,
    "TopCustomerData": TopCustomerData,
    "TopCustomerModule": TopCustomerModule,
    "UpdatePackageQuantityRequest": UpdatePackageQuantityRequest,
    "UpdateTierRequest": UpdateTierRequest,
    "UpdateTierResponse": UpdateTierResponse,
    "Webstore": Webstore,
    "WebstoreResponse": WebstoreResponse,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);

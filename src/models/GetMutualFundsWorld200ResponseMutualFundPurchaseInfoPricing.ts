/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Pricing information for the mutual fund
 * @export
 * @interface GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing
 */
export interface GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing {
  /**
   * Net Asset Value: fund value minus liabilities
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing
   */
  nav?: number;
  /**
   * Lowest price of the fund over the last year
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing
   */
  _12monthLow?: number;
  /**
   * Highest price of the fund over the last year
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing
   */
  _12monthHigh?: number;
  /**
   * Fund price at the end of the last month
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing
   */
  lastMonth?: number;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing interface.
 */
export function instanceOfGetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing(
  value: object,
): value is GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing {
  return true;
}

export function GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricingFromJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing {
  return GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricingFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricingFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing {
  if (json == null) {
    return json;
  }
  return {
    nav: json["nav"] == null ? undefined : json["nav"],
    _12monthLow:
      json["12_month_low"] == null ? undefined : json["12_month_low"],
    _12monthHigh:
      json["12_month_high"] == null ? undefined : json["12_month_high"],
    lastMonth: json["last_month"] == null ? undefined : json["last_month"],
  };
}

export function GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricingToJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing {
  return GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricingToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricingToJSONTyped(
  value?: GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    nav: value["nav"],
    "12_month_low": value["_12monthLow"],
    "12_month_high": value["_12monthHigh"],
    last_month: value["lastMonth"],
  };
}

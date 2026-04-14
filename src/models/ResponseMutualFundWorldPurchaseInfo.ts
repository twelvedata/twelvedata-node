/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing } from "./GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing";
import {
  GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricingFromJSON,
  GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricingFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricingToJSON,
  GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricingToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing";
import type { GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses } from "./GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses";
import {
  GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpensesFromJSON,
  GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpensesFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpensesToJSON,
  GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpensesToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses";
import type { GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums } from "./GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums";
import {
  GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimumsFromJSON,
  GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimumsFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimumsToJSON,
  GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimumsToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums";

/**
 * Purchase information for the mutual fund
 * @export
 * @interface ResponseMutualFundWorldPurchaseInfo
 */
export interface ResponseMutualFundWorldPurchaseInfo {
  /**
   *
   * @type {GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses}
   * @memberof ResponseMutualFundWorldPurchaseInfo
   */
  expenses?: GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses;
  /**
   *
   * @type {GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums}
   * @memberof ResponseMutualFundWorldPurchaseInfo
   */
  minimums?: GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums;
  /**
   *
   * @type {GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing}
   * @memberof ResponseMutualFundWorldPurchaseInfo
   */
  pricing?: GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing;
  /**
   * List of brokerages where mutual fund can be purchased
   * @type {Array<string>}
   * @memberof ResponseMutualFundWorldPurchaseInfo
   */
  brokerages?: Array<string>;
}

/**
 * Check if a given object implements the ResponseMutualFundWorldPurchaseInfo interface.
 */
export function instanceOfResponseMutualFundWorldPurchaseInfo(
  value: object,
): value is ResponseMutualFundWorldPurchaseInfo {
  return true;
}

export function ResponseMutualFundWorldPurchaseInfoFromJSON(
  json: any,
): ResponseMutualFundWorldPurchaseInfo {
  return ResponseMutualFundWorldPurchaseInfoFromJSONTyped(json, false);
}

export function ResponseMutualFundWorldPurchaseInfoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ResponseMutualFundWorldPurchaseInfo {
  if (json == null) {
    return json;
  }
  return {
    expenses:
      json["expenses"] == null
        ? undefined
        : GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpensesFromJSON(
            json["expenses"],
          ),
    minimums:
      json["minimums"] == null
        ? undefined
        : GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimumsFromJSON(
            json["minimums"],
          ),
    pricing:
      json["pricing"] == null
        ? undefined
        : GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricingFromJSON(
            json["pricing"],
          ),
    brokerages: json["brokerages"] == null ? undefined : json["brokerages"],
  };
}

export function ResponseMutualFundWorldPurchaseInfoToJSON(
  json: any,
): ResponseMutualFundWorldPurchaseInfo {
  return ResponseMutualFundWorldPurchaseInfoToJSONTyped(json, false);
}

export function ResponseMutualFundWorldPurchaseInfoToJSONTyped(
  value?: ResponseMutualFundWorldPurchaseInfo | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    expenses:
      GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpensesToJSON(
        value["expenses"],
      ),
    minimums:
      GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimumsToJSON(
        value["minimums"],
      ),
    pricing: GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricingToJSON(
      value["pricing"],
    ),
    brokerages: value["brokerages"],
  };
}

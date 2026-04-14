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
 * Purchase information of a mutual fund
 * @export
 * @interface GetMutualFundsWorld200ResponseMutualFundPurchaseInfo
 */
export interface GetMutualFundsWorld200ResponseMutualFundPurchaseInfo {
  /**
   *
   * @type {GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPurchaseInfo
   */
  expenses?: GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses;
  /**
   *
   * @type {GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPurchaseInfo
   */
  minimums?: GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums;
  /**
   *
   * @type {GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPurchaseInfo
   */
  pricing?: GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing;
  /**
   * List of brokerages where mutual fund can be purchased
   * @type {Array<string>}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPurchaseInfo
   */
  brokerages?: Array<string>;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200ResponseMutualFundPurchaseInfo interface.
 */
export function instanceOfGetMutualFundsWorld200ResponseMutualFundPurchaseInfo(
  value: object,
): value is GetMutualFundsWorld200ResponseMutualFundPurchaseInfo {
  return true;
}

export function GetMutualFundsWorld200ResponseMutualFundPurchaseInfoFromJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundPurchaseInfo {
  return GetMutualFundsWorld200ResponseMutualFundPurchaseInfoFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundPurchaseInfoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200ResponseMutualFundPurchaseInfo {
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

export function GetMutualFundsWorld200ResponseMutualFundPurchaseInfoToJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundPurchaseInfo {
  return GetMutualFundsWorld200ResponseMutualFundPurchaseInfoToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundPurchaseInfoToJSONTyped(
  value?: GetMutualFundsWorld200ResponseMutualFundPurchaseInfo | null,
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

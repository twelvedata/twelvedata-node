/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { ResponseMutualFundWorldPurchaseInfo } from "./ResponseMutualFundWorldPurchaseInfo";
import {
  ResponseMutualFundWorldPurchaseInfoFromJSON,
  ResponseMutualFundWorldPurchaseInfoFromJSONTyped,
  ResponseMutualFundWorldPurchaseInfoToJSON,
  ResponseMutualFundWorldPurchaseInfoToJSONTyped,
} from "./ResponseMutualFundWorldPurchaseInfo";

/**
 * Mutual fund information
 * @export
 * @interface GetMutualFundsWorldPurchaseInfo200ResponseMutualFund
 */
export interface GetMutualFundsWorldPurchaseInfo200ResponseMutualFund {
  /**
   *
   * @type {ResponseMutualFundWorldPurchaseInfo}
   * @memberof GetMutualFundsWorldPurchaseInfo200ResponseMutualFund
   */
  purchaseInfo?: ResponseMutualFundWorldPurchaseInfo;
}

/**
 * Check if a given object implements the GetMutualFundsWorldPurchaseInfo200ResponseMutualFund interface.
 */
export function instanceOfGetMutualFundsWorldPurchaseInfo200ResponseMutualFund(
  value: object,
): value is GetMutualFundsWorldPurchaseInfo200ResponseMutualFund {
  return true;
}

export function GetMutualFundsWorldPurchaseInfo200ResponseMutualFundFromJSON(
  json: any,
): GetMutualFundsWorldPurchaseInfo200ResponseMutualFund {
  return GetMutualFundsWorldPurchaseInfo200ResponseMutualFundFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorldPurchaseInfo200ResponseMutualFundFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorldPurchaseInfo200ResponseMutualFund {
  if (json == null) {
    return json;
  }
  return {
    purchaseInfo:
      json["purchase_info"] == null
        ? undefined
        : ResponseMutualFundWorldPurchaseInfoFromJSON(json["purchase_info"]),
  };
}

export function GetMutualFundsWorldPurchaseInfo200ResponseMutualFundToJSON(
  json: any,
): GetMutualFundsWorldPurchaseInfo200ResponseMutualFund {
  return GetMutualFundsWorldPurchaseInfo200ResponseMutualFundToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorldPurchaseInfo200ResponseMutualFundToJSONTyped(
  value?: GetMutualFundsWorldPurchaseInfo200ResponseMutualFund | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    purchase_info: ResponseMutualFundWorldPurchaseInfoToJSON(
      value["purchaseInfo"],
    ),
  };
}

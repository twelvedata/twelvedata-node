/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetMutualFundsWorldPurchaseInfo200ResponseMutualFund } from "./GetMutualFundsWorldPurchaseInfo200ResponseMutualFund";
import {
  GetMutualFundsWorldPurchaseInfo200ResponseMutualFundFromJSON,
  GetMutualFundsWorldPurchaseInfo200ResponseMutualFundFromJSONTyped,
  GetMutualFundsWorldPurchaseInfo200ResponseMutualFundToJSON,
  GetMutualFundsWorldPurchaseInfo200ResponseMutualFundToJSONTyped,
} from "./GetMutualFundsWorldPurchaseInfo200ResponseMutualFund";

/**
 *
 * @export
 * @interface GetMutualFundsWorldPurchaseInfo200Response
 */
export interface GetMutualFundsWorldPurchaseInfo200Response {
  /**
   *
   * @type {GetMutualFundsWorldPurchaseInfo200ResponseMutualFund}
   * @memberof GetMutualFundsWorldPurchaseInfo200Response
   */
  mutualFund: GetMutualFundsWorldPurchaseInfo200ResponseMutualFund;
  /**
   * Status of the response
   * @type {string}
   * @memberof GetMutualFundsWorldPurchaseInfo200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetMutualFundsWorldPurchaseInfo200Response interface.
 */
export function instanceOfGetMutualFundsWorldPurchaseInfo200Response(
  value: object,
): value is GetMutualFundsWorldPurchaseInfo200Response {
  if (!("mutualFund" in value) || value["mutualFund"] === undefined)
    return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetMutualFundsWorldPurchaseInfo200ResponseFromJSON(
  json: any,
): GetMutualFundsWorldPurchaseInfo200Response {
  return GetMutualFundsWorldPurchaseInfo200ResponseFromJSONTyped(json, false);
}

export function GetMutualFundsWorldPurchaseInfo200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorldPurchaseInfo200Response {
  if (json == null) {
    return json;
  }
  return {
    mutualFund: GetMutualFundsWorldPurchaseInfo200ResponseMutualFundFromJSON(
      json["mutual_fund"],
    ),
    status: json["status"],
  };
}

export function GetMutualFundsWorldPurchaseInfo200ResponseToJSON(
  json: any,
): GetMutualFundsWorldPurchaseInfo200Response {
  return GetMutualFundsWorldPurchaseInfo200ResponseToJSONTyped(json, false);
}

export function GetMutualFundsWorldPurchaseInfo200ResponseToJSONTyped(
  value?: GetMutualFundsWorldPurchaseInfo200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    mutual_fund: GetMutualFundsWorldPurchaseInfo200ResponseMutualFundToJSON(
      value["mutualFund"],
    ),
    status: value["status"],
  };
}

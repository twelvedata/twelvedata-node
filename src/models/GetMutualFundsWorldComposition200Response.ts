/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetMutualFundsWorldComposition200ResponseMutualFund } from "./GetMutualFundsWorldComposition200ResponseMutualFund";
import {
  GetMutualFundsWorldComposition200ResponseMutualFundFromJSON,
  GetMutualFundsWorldComposition200ResponseMutualFundFromJSONTyped,
  GetMutualFundsWorldComposition200ResponseMutualFundToJSON,
  GetMutualFundsWorldComposition200ResponseMutualFundToJSONTyped,
} from "./GetMutualFundsWorldComposition200ResponseMutualFund";

/**
 *
 * @export
 * @interface GetMutualFundsWorldComposition200Response
 */
export interface GetMutualFundsWorldComposition200Response {
  /**
   *
   * @type {GetMutualFundsWorldComposition200ResponseMutualFund}
   * @memberof GetMutualFundsWorldComposition200Response
   */
  mutualFund: GetMutualFundsWorldComposition200ResponseMutualFund;
  /**
   * Status of the response
   * @type {string}
   * @memberof GetMutualFundsWorldComposition200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetMutualFundsWorldComposition200Response interface.
 */
export function instanceOfGetMutualFundsWorldComposition200Response(
  value: object,
): value is GetMutualFundsWorldComposition200Response {
  if (!("mutualFund" in value) || value["mutualFund"] === undefined)
    return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetMutualFundsWorldComposition200ResponseFromJSON(
  json: any,
): GetMutualFundsWorldComposition200Response {
  return GetMutualFundsWorldComposition200ResponseFromJSONTyped(json, false);
}

export function GetMutualFundsWorldComposition200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorldComposition200Response {
  if (json == null) {
    return json;
  }
  return {
    mutualFund: GetMutualFundsWorldComposition200ResponseMutualFundFromJSON(
      json["mutual_fund"],
    ),
    status: json["status"],
  };
}

export function GetMutualFundsWorldComposition200ResponseToJSON(
  json: any,
): GetMutualFundsWorldComposition200Response {
  return GetMutualFundsWorldComposition200ResponseToJSONTyped(json, false);
}

export function GetMutualFundsWorldComposition200ResponseToJSONTyped(
  value?: GetMutualFundsWorldComposition200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    mutual_fund: GetMutualFundsWorldComposition200ResponseMutualFundToJSON(
      value["mutualFund"],
    ),
    status: value["status"],
  };
}

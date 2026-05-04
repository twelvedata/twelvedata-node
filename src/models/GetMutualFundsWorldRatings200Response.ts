/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetMutualFundsWorldRatings200ResponseMutualFund } from "./GetMutualFundsWorldRatings200ResponseMutualFund";
import {
  GetMutualFundsWorldRatings200ResponseMutualFundFromJSON,
  GetMutualFundsWorldRatings200ResponseMutualFundFromJSONTyped,
  GetMutualFundsWorldRatings200ResponseMutualFundToJSON,
  GetMutualFundsWorldRatings200ResponseMutualFundToJSONTyped,
} from "./GetMutualFundsWorldRatings200ResponseMutualFund";

/**
 *
 * @export
 * @interface GetMutualFundsWorldRatings200Response
 */
export interface GetMutualFundsWorldRatings200Response {
  /**
   *
   * @type {GetMutualFundsWorldRatings200ResponseMutualFund}
   * @memberof GetMutualFundsWorldRatings200Response
   */
  mutualFund: GetMutualFundsWorldRatings200ResponseMutualFund;
  /**
   * Status of the response
   * @type {string}
   * @memberof GetMutualFundsWorldRatings200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetMutualFundsWorldRatings200Response interface.
 */
export function instanceOfGetMutualFundsWorldRatings200Response(
  value: object,
): value is GetMutualFundsWorldRatings200Response {
  if (!("mutualFund" in value) || value["mutualFund"] === undefined)
    return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetMutualFundsWorldRatings200ResponseFromJSON(
  json: any,
): GetMutualFundsWorldRatings200Response {
  return GetMutualFundsWorldRatings200ResponseFromJSONTyped(json, false);
}

export function GetMutualFundsWorldRatings200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorldRatings200Response {
  if (json == null) {
    return json;
  }
  return {
    mutualFund: GetMutualFundsWorldRatings200ResponseMutualFundFromJSON(
      json["mutual_fund"],
    ),
    status: json["status"],
  };
}

export function GetMutualFundsWorldRatings200ResponseToJSON(
  json: any,
): GetMutualFundsWorldRatings200Response {
  return GetMutualFundsWorldRatings200ResponseToJSONTyped(json, false);
}

export function GetMutualFundsWorldRatings200ResponseToJSONTyped(
  value?: GetMutualFundsWorldRatings200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    mutual_fund: GetMutualFundsWorldRatings200ResponseMutualFundToJSON(
      value["mutualFund"],
    ),
    status: value["status"],
  };
}

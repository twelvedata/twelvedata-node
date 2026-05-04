/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetMutualFundsWorldPerformance200ResponseMutualFund } from "./GetMutualFundsWorldPerformance200ResponseMutualFund";
import {
  GetMutualFundsWorldPerformance200ResponseMutualFundFromJSON,
  GetMutualFundsWorldPerformance200ResponseMutualFundFromJSONTyped,
  GetMutualFundsWorldPerformance200ResponseMutualFundToJSON,
  GetMutualFundsWorldPerformance200ResponseMutualFundToJSONTyped,
} from "./GetMutualFundsWorldPerformance200ResponseMutualFund";

/**
 *
 * @export
 * @interface GetMutualFundsWorldPerformance200Response
 */
export interface GetMutualFundsWorldPerformance200Response {
  /**
   *
   * @type {GetMutualFundsWorldPerformance200ResponseMutualFund}
   * @memberof GetMutualFundsWorldPerformance200Response
   */
  mutualFund: GetMutualFundsWorldPerformance200ResponseMutualFund;
  /**
   * Status of the response
   * @type {string}
   * @memberof GetMutualFundsWorldPerformance200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetMutualFundsWorldPerformance200Response interface.
 */
export function instanceOfGetMutualFundsWorldPerformance200Response(
  value: object,
): value is GetMutualFundsWorldPerformance200Response {
  if (!("mutualFund" in value) || value["mutualFund"] === undefined)
    return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetMutualFundsWorldPerformance200ResponseFromJSON(
  json: any,
): GetMutualFundsWorldPerformance200Response {
  return GetMutualFundsWorldPerformance200ResponseFromJSONTyped(json, false);
}

export function GetMutualFundsWorldPerformance200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorldPerformance200Response {
  if (json == null) {
    return json;
  }
  return {
    mutualFund: GetMutualFundsWorldPerformance200ResponseMutualFundFromJSON(
      json["mutual_fund"],
    ),
    status: json["status"],
  };
}

export function GetMutualFundsWorldPerformance200ResponseToJSON(
  json: any,
): GetMutualFundsWorldPerformance200Response {
  return GetMutualFundsWorldPerformance200ResponseToJSONTyped(json, false);
}

export function GetMutualFundsWorldPerformance200ResponseToJSONTyped(
  value?: GetMutualFundsWorldPerformance200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    mutual_fund: GetMutualFundsWorldPerformance200ResponseMutualFundToJSON(
      value["mutualFund"],
    ),
    status: value["status"],
  };
}

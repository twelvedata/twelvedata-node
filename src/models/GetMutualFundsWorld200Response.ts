/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetMutualFundsWorld200ResponseMutualFund } from "./GetMutualFundsWorld200ResponseMutualFund";
import {
  GetMutualFundsWorld200ResponseMutualFundFromJSON,
  GetMutualFundsWorld200ResponseMutualFundFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundToJSON,
  GetMutualFundsWorld200ResponseMutualFundToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFund";

/**
 *
 * @export
 * @interface GetMutualFundsWorld200Response
 */
export interface GetMutualFundsWorld200Response {
  /**
   *
   * @type {GetMutualFundsWorld200ResponseMutualFund}
   * @memberof GetMutualFundsWorld200Response
   */
  mutualFund?: GetMutualFundsWorld200ResponseMutualFund;
  /**
   * Status of the response
   * @type {string}
   * @memberof GetMutualFundsWorld200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200Response interface.
 */
export function instanceOfGetMutualFundsWorld200Response(
  value: object,
): value is GetMutualFundsWorld200Response {
  return true;
}

export function GetMutualFundsWorld200ResponseFromJSON(
  json: any,
): GetMutualFundsWorld200Response {
  return GetMutualFundsWorld200ResponseFromJSONTyped(json, false);
}

export function GetMutualFundsWorld200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200Response {
  if (json == null) {
    return json;
  }
  return {
    mutualFund:
      json["mutual_fund"] == null
        ? undefined
        : GetMutualFundsWorld200ResponseMutualFundFromJSON(json["mutual_fund"]),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetMutualFundsWorld200ResponseToJSON(
  json: any,
): GetMutualFundsWorld200Response {
  return GetMutualFundsWorld200ResponseToJSONTyped(json, false);
}

export function GetMutualFundsWorld200ResponseToJSONTyped(
  value?: GetMutualFundsWorld200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    mutual_fund: GetMutualFundsWorld200ResponseMutualFundToJSON(
      value["mutualFund"],
    ),
    status: value["status"],
  };
}

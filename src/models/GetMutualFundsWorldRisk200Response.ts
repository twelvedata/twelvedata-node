/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetMutualFundsWorldRisk200ResponseMutualFund } from "./GetMutualFundsWorldRisk200ResponseMutualFund";
import {
  GetMutualFundsWorldRisk200ResponseMutualFundFromJSON,
  GetMutualFundsWorldRisk200ResponseMutualFundFromJSONTyped,
  GetMutualFundsWorldRisk200ResponseMutualFundToJSON,
  GetMutualFundsWorldRisk200ResponseMutualFundToJSONTyped,
} from "./GetMutualFundsWorldRisk200ResponseMutualFund";

/**
 *
 * @export
 * @interface GetMutualFundsWorldRisk200Response
 */
export interface GetMutualFundsWorldRisk200Response {
  /**
   *
   * @type {GetMutualFundsWorldRisk200ResponseMutualFund}
   * @memberof GetMutualFundsWorldRisk200Response
   */
  mutualFund?: GetMutualFundsWorldRisk200ResponseMutualFund;
  /**
   * Status of the response
   * @type {string}
   * @memberof GetMutualFundsWorldRisk200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetMutualFundsWorldRisk200Response interface.
 */
export function instanceOfGetMutualFundsWorldRisk200Response(
  value: object,
): value is GetMutualFundsWorldRisk200Response {
  return true;
}

export function GetMutualFundsWorldRisk200ResponseFromJSON(
  json: any,
): GetMutualFundsWorldRisk200Response {
  return GetMutualFundsWorldRisk200ResponseFromJSONTyped(json, false);
}

export function GetMutualFundsWorldRisk200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorldRisk200Response {
  if (json == null) {
    return json;
  }
  return {
    mutualFund:
      json["mutual_fund"] == null
        ? undefined
        : GetMutualFundsWorldRisk200ResponseMutualFundFromJSON(
            json["mutual_fund"],
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetMutualFundsWorldRisk200ResponseToJSON(
  json: any,
): GetMutualFundsWorldRisk200Response {
  return GetMutualFundsWorldRisk200ResponseToJSONTyped(json, false);
}

export function GetMutualFundsWorldRisk200ResponseToJSONTyped(
  value?: GetMutualFundsWorldRisk200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    mutual_fund: GetMutualFundsWorldRisk200ResponseMutualFundToJSON(
      value["mutualFund"],
    ),
    status: value["status"],
  };
}

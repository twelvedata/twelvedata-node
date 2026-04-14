/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetMutualFundsWorldSummary200ResponseMutualFund } from "./GetMutualFundsWorldSummary200ResponseMutualFund";
import {
  GetMutualFundsWorldSummary200ResponseMutualFundFromJSON,
  GetMutualFundsWorldSummary200ResponseMutualFundFromJSONTyped,
  GetMutualFundsWorldSummary200ResponseMutualFundToJSON,
  GetMutualFundsWorldSummary200ResponseMutualFundToJSONTyped,
} from "./GetMutualFundsWorldSummary200ResponseMutualFund";

/**
 *
 * @export
 * @interface GetMutualFundsWorldSummary200Response
 */
export interface GetMutualFundsWorldSummary200Response {
  /**
   *
   * @type {GetMutualFundsWorldSummary200ResponseMutualFund}
   * @memberof GetMutualFundsWorldSummary200Response
   */
  mutualFund?: GetMutualFundsWorldSummary200ResponseMutualFund;
  /**
   * Status of the response
   * @type {string}
   * @memberof GetMutualFundsWorldSummary200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetMutualFundsWorldSummary200Response interface.
 */
export function instanceOfGetMutualFundsWorldSummary200Response(
  value: object,
): value is GetMutualFundsWorldSummary200Response {
  return true;
}

export function GetMutualFundsWorldSummary200ResponseFromJSON(
  json: any,
): GetMutualFundsWorldSummary200Response {
  return GetMutualFundsWorldSummary200ResponseFromJSONTyped(json, false);
}

export function GetMutualFundsWorldSummary200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorldSummary200Response {
  if (json == null) {
    return json;
  }
  return {
    mutualFund:
      json["mutual_fund"] == null
        ? undefined
        : GetMutualFundsWorldSummary200ResponseMutualFundFromJSON(
            json["mutual_fund"],
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetMutualFundsWorldSummary200ResponseToJSON(
  json: any,
): GetMutualFundsWorldSummary200Response {
  return GetMutualFundsWorldSummary200ResponseToJSONTyped(json, false);
}

export function GetMutualFundsWorldSummary200ResponseToJSONTyped(
  value?: GetMutualFundsWorldSummary200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    mutual_fund: GetMutualFundsWorldSummary200ResponseMutualFundToJSON(
      value["mutualFund"],
    ),
    status: value["status"],
  };
}

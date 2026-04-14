/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetMutualFundsWorldSustainability200ResponseMutualFund } from "./GetMutualFundsWorldSustainability200ResponseMutualFund";
import {
  GetMutualFundsWorldSustainability200ResponseMutualFundFromJSON,
  GetMutualFundsWorldSustainability200ResponseMutualFundFromJSONTyped,
  GetMutualFundsWorldSustainability200ResponseMutualFundToJSON,
  GetMutualFundsWorldSustainability200ResponseMutualFundToJSONTyped,
} from "./GetMutualFundsWorldSustainability200ResponseMutualFund";

/**
 *
 * @export
 * @interface GetMutualFundsWorldSustainability200Response
 */
export interface GetMutualFundsWorldSustainability200Response {
  /**
   *
   * @type {GetMutualFundsWorldSustainability200ResponseMutualFund}
   * @memberof GetMutualFundsWorldSustainability200Response
   */
  mutualFund?: GetMutualFundsWorldSustainability200ResponseMutualFund;
  /**
   * Status of the response
   * @type {string}
   * @memberof GetMutualFundsWorldSustainability200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetMutualFundsWorldSustainability200Response interface.
 */
export function instanceOfGetMutualFundsWorldSustainability200Response(
  value: object,
): value is GetMutualFundsWorldSustainability200Response {
  return true;
}

export function GetMutualFundsWorldSustainability200ResponseFromJSON(
  json: any,
): GetMutualFundsWorldSustainability200Response {
  return GetMutualFundsWorldSustainability200ResponseFromJSONTyped(json, false);
}

export function GetMutualFundsWorldSustainability200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorldSustainability200Response {
  if (json == null) {
    return json;
  }
  return {
    mutualFund:
      json["mutual_fund"] == null
        ? undefined
        : GetMutualFundsWorldSustainability200ResponseMutualFundFromJSON(
            json["mutual_fund"],
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetMutualFundsWorldSustainability200ResponseToJSON(
  json: any,
): GetMutualFundsWorldSustainability200Response {
  return GetMutualFundsWorldSustainability200ResponseToJSONTyped(json, false);
}

export function GetMutualFundsWorldSustainability200ResponseToJSONTyped(
  value?: GetMutualFundsWorldSustainability200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    mutual_fund: GetMutualFundsWorldSustainability200ResponseMutualFundToJSON(
      value["mutualFund"],
    ),
    status: value["status"],
  };
}

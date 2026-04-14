/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetEarningsEstimate200ResponseMeta } from "./GetEarningsEstimate200ResponseMeta";
import {
  GetEarningsEstimate200ResponseMetaFromJSON,
  GetEarningsEstimate200ResponseMetaFromJSONTyped,
  GetEarningsEstimate200ResponseMetaToJSON,
  GetEarningsEstimate200ResponseMetaToJSONTyped,
} from "./GetEarningsEstimate200ResponseMeta";
import type { GetEarningsEstimate200ResponseEarningsEstimateInner } from "./GetEarningsEstimate200ResponseEarningsEstimateInner";
import {
  GetEarningsEstimate200ResponseEarningsEstimateInnerFromJSON,
  GetEarningsEstimate200ResponseEarningsEstimateInnerFromJSONTyped,
  GetEarningsEstimate200ResponseEarningsEstimateInnerToJSON,
  GetEarningsEstimate200ResponseEarningsEstimateInnerToJSONTyped,
} from "./GetEarningsEstimate200ResponseEarningsEstimateInner";

/**
 *
 * @export
 * @interface GetEarningsEstimate200Response
 */
export interface GetEarningsEstimate200Response {
  /**
   *
   * @type {GetEarningsEstimate200ResponseMeta}
   * @memberof GetEarningsEstimate200Response
   */
  meta?: GetEarningsEstimate200ResponseMeta;
  /**
   * List of earnings estimates
   * @type {Array<GetEarningsEstimate200ResponseEarningsEstimateInner>}
   * @memberof GetEarningsEstimate200Response
   */
  earningsEstimate?: Array<GetEarningsEstimate200ResponseEarningsEstimateInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetEarningsEstimate200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetEarningsEstimate200Response interface.
 */
export function instanceOfGetEarningsEstimate200Response(
  value: object,
): value is GetEarningsEstimate200Response {
  return true;
}

export function GetEarningsEstimate200ResponseFromJSON(
  json: any,
): GetEarningsEstimate200Response {
  return GetEarningsEstimate200ResponseFromJSONTyped(json, false);
}

export function GetEarningsEstimate200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetEarningsEstimate200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetEarningsEstimate200ResponseMetaFromJSON(json["meta"]),
    earningsEstimate:
      json["earnings_estimate"] == null
        ? undefined
        : (json["earnings_estimate"] as Array<any>).map(
            GetEarningsEstimate200ResponseEarningsEstimateInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetEarningsEstimate200ResponseToJSON(
  json: any,
): GetEarningsEstimate200Response {
  return GetEarningsEstimate200ResponseToJSONTyped(json, false);
}

export function GetEarningsEstimate200ResponseToJSONTyped(
  value?: GetEarningsEstimate200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetEarningsEstimate200ResponseMetaToJSON(value["meta"]),
    earnings_estimate:
      value["earningsEstimate"] == null
        ? undefined
        : (value["earningsEstimate"] as Array<any>).map(
            GetEarningsEstimate200ResponseEarningsEstimateInnerToJSON,
          ),
    status: value["status"],
  };
}

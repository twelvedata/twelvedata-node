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
import type { GetRevenueEstimate200ResponseRevenueEstimateInner } from "./GetRevenueEstimate200ResponseRevenueEstimateInner";
import {
  GetRevenueEstimate200ResponseRevenueEstimateInnerFromJSON,
  GetRevenueEstimate200ResponseRevenueEstimateInnerFromJSONTyped,
  GetRevenueEstimate200ResponseRevenueEstimateInnerToJSON,
  GetRevenueEstimate200ResponseRevenueEstimateInnerToJSONTyped,
} from "./GetRevenueEstimate200ResponseRevenueEstimateInner";

/**
 *
 * @export
 * @interface GetRevenueEstimate200Response
 */
export interface GetRevenueEstimate200Response {
  /**
   *
   * @type {GetEarningsEstimate200ResponseMeta}
   * @memberof GetRevenueEstimate200Response
   */
  meta?: GetEarningsEstimate200ResponseMeta;
  /**
   * Revenue estimate data
   * @type {Array<GetRevenueEstimate200ResponseRevenueEstimateInner>}
   * @memberof GetRevenueEstimate200Response
   */
  revenueEstimate?: Array<GetRevenueEstimate200ResponseRevenueEstimateInner>;
  /**
   * Status of the response
   * @type {string}
   * @memberof GetRevenueEstimate200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetRevenueEstimate200Response interface.
 */
export function instanceOfGetRevenueEstimate200Response(
  value: object,
): value is GetRevenueEstimate200Response {
  return true;
}

export function GetRevenueEstimate200ResponseFromJSON(
  json: any,
): GetRevenueEstimate200Response {
  return GetRevenueEstimate200ResponseFromJSONTyped(json, false);
}

export function GetRevenueEstimate200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetRevenueEstimate200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetEarningsEstimate200ResponseMetaFromJSON(json["meta"]),
    revenueEstimate:
      json["revenue_estimate"] == null
        ? undefined
        : (json["revenue_estimate"] as Array<any>).map(
            GetRevenueEstimate200ResponseRevenueEstimateInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetRevenueEstimate200ResponseToJSON(
  json: any,
): GetRevenueEstimate200Response {
  return GetRevenueEstimate200ResponseToJSONTyped(json, false);
}

export function GetRevenueEstimate200ResponseToJSONTyped(
  value?: GetRevenueEstimate200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetEarningsEstimate200ResponseMetaToJSON(value["meta"]),
    revenue_estimate:
      value["revenueEstimate"] == null
        ? undefined
        : (value["revenueEstimate"] as Array<any>).map(
            GetRevenueEstimate200ResponseRevenueEstimateInnerToJSON,
          ),
    status: value["status"],
  };
}

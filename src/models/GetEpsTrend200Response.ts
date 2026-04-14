/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetEpsTrend200ResponseEpsTrendInner } from "./GetEpsTrend200ResponseEpsTrendInner";
import {
  GetEpsTrend200ResponseEpsTrendInnerFromJSON,
  GetEpsTrend200ResponseEpsTrendInnerFromJSONTyped,
  GetEpsTrend200ResponseEpsTrendInnerToJSON,
  GetEpsTrend200ResponseEpsTrendInnerToJSONTyped,
} from "./GetEpsTrend200ResponseEpsTrendInner";
import type { GetEarningsEstimate200ResponseMeta } from "./GetEarningsEstimate200ResponseMeta";
import {
  GetEarningsEstimate200ResponseMetaFromJSON,
  GetEarningsEstimate200ResponseMetaFromJSONTyped,
  GetEarningsEstimate200ResponseMetaToJSON,
  GetEarningsEstimate200ResponseMetaToJSONTyped,
} from "./GetEarningsEstimate200ResponseMeta";

/**
 *
 * @export
 * @interface GetEpsTrend200Response
 */
export interface GetEpsTrend200Response {
  /**
   *
   * @type {GetEarningsEstimate200ResponseMeta}
   * @memberof GetEpsTrend200Response
   */
  meta?: GetEarningsEstimate200ResponseMeta;
  /**
   * EPS trend data
   * @type {Array<GetEpsTrend200ResponseEpsTrendInner>}
   * @memberof GetEpsTrend200Response
   */
  epsTrend?: Array<GetEpsTrend200ResponseEpsTrendInner>;
  /**
   * Status of the response
   * @type {string}
   * @memberof GetEpsTrend200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetEpsTrend200Response interface.
 */
export function instanceOfGetEpsTrend200Response(
  value: object,
): value is GetEpsTrend200Response {
  return true;
}

export function GetEpsTrend200ResponseFromJSON(
  json: any,
): GetEpsTrend200Response {
  return GetEpsTrend200ResponseFromJSONTyped(json, false);
}

export function GetEpsTrend200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetEpsTrend200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetEarningsEstimate200ResponseMetaFromJSON(json["meta"]),
    epsTrend:
      json["eps_trend"] == null
        ? undefined
        : (json["eps_trend"] as Array<any>).map(
            GetEpsTrend200ResponseEpsTrendInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetEpsTrend200ResponseToJSON(
  json: any,
): GetEpsTrend200Response {
  return GetEpsTrend200ResponseToJSONTyped(json, false);
}

export function GetEpsTrend200ResponseToJSONTyped(
  value?: GetEpsTrend200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetEarningsEstimate200ResponseMetaToJSON(value["meta"]),
    eps_trend:
      value["epsTrend"] == null
        ? undefined
        : (value["epsTrend"] as Array<any>).map(
            GetEpsTrend200ResponseEpsTrendInnerToJSON,
          ),
    status: value["status"],
  };
}

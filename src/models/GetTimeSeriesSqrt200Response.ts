/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesSqrt200ResponseValuesInner } from "./GetTimeSeriesSqrt200ResponseValuesInner";
import {
  GetTimeSeriesSqrt200ResponseValuesInnerFromJSON,
  GetTimeSeriesSqrt200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesSqrt200ResponseValuesInnerToJSON,
  GetTimeSeriesSqrt200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesSqrt200ResponseValuesInner";
import type { GetTimeSeriesSqrt200ResponseMeta } from "./GetTimeSeriesSqrt200ResponseMeta";
import {
  GetTimeSeriesSqrt200ResponseMetaFromJSON,
  GetTimeSeriesSqrt200ResponseMetaFromJSONTyped,
  GetTimeSeriesSqrt200ResponseMetaToJSON,
  GetTimeSeriesSqrt200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesSqrt200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesSqrt200Response
 */
export interface GetTimeSeriesSqrt200Response {
  /**
   *
   * @type {GetTimeSeriesSqrt200ResponseMeta}
   * @memberof GetTimeSeriesSqrt200Response
   */
  meta?: GetTimeSeriesSqrt200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesSqrt200ResponseValuesInner>}
   * @memberof GetTimeSeriesSqrt200Response
   */
  values?: Array<GetTimeSeriesSqrt200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesSqrt200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesSqrt200Response interface.
 */
export function instanceOfGetTimeSeriesSqrt200Response(
  value: object,
): value is GetTimeSeriesSqrt200Response {
  return true;
}

export function GetTimeSeriesSqrt200ResponseFromJSON(
  json: any,
): GetTimeSeriesSqrt200Response {
  return GetTimeSeriesSqrt200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesSqrt200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSqrt200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesSqrt200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesSqrt200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesSqrt200ResponseToJSON(
  json: any,
): GetTimeSeriesSqrt200Response {
  return GetTimeSeriesSqrt200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesSqrt200ResponseToJSONTyped(
  value?: GetTimeSeriesSqrt200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesSqrt200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesSqrt200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}

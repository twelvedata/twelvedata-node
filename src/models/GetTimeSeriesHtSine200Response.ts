/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesHtSine200ResponseMeta } from "./GetTimeSeriesHtSine200ResponseMeta";
import {
  GetTimeSeriesHtSine200ResponseMetaFromJSON,
  GetTimeSeriesHtSine200ResponseMetaFromJSONTyped,
  GetTimeSeriesHtSine200ResponseMetaToJSON,
  GetTimeSeriesHtSine200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesHtSine200ResponseMeta";
import type { GetTimeSeriesHtSine200ResponseValuesInner } from "./GetTimeSeriesHtSine200ResponseValuesInner";
import {
  GetTimeSeriesHtSine200ResponseValuesInnerFromJSON,
  GetTimeSeriesHtSine200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesHtSine200ResponseValuesInnerToJSON,
  GetTimeSeriesHtSine200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesHtSine200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesHtSine200Response
 */
export interface GetTimeSeriesHtSine200Response {
  /**
   *
   * @type {GetTimeSeriesHtSine200ResponseMeta}
   * @memberof GetTimeSeriesHtSine200Response
   */
  meta: GetTimeSeriesHtSine200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesHtSine200ResponseValuesInner>}
   * @memberof GetTimeSeriesHtSine200Response
   */
  values: Array<GetTimeSeriesHtSine200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesHtSine200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHtSine200Response interface.
 */
export function instanceOfGetTimeSeriesHtSine200Response(
  value: object,
): value is GetTimeSeriesHtSine200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesHtSine200ResponseFromJSON(
  json: any,
): GetTimeSeriesHtSine200Response {
  return GetTimeSeriesHtSine200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesHtSine200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtSine200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesHtSine200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesHtSine200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesHtSine200ResponseToJSON(
  json: any,
): GetTimeSeriesHtSine200Response {
  return GetTimeSeriesHtSine200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesHtSine200ResponseToJSONTyped(
  value?: GetTimeSeriesHtSine200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesHtSine200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesHtSine200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesHeikinashiCandles200ResponseMeta } from "./GetTimeSeriesHeikinashiCandles200ResponseMeta";
import {
  GetTimeSeriesHeikinashiCandles200ResponseMetaFromJSON,
  GetTimeSeriesHeikinashiCandles200ResponseMetaFromJSONTyped,
  GetTimeSeriesHeikinashiCandles200ResponseMetaToJSON,
  GetTimeSeriesHeikinashiCandles200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesHeikinashiCandles200ResponseMeta";
import type { GetTimeSeriesHeikinashiCandles200ResponseValuesInner } from "./GetTimeSeriesHeikinashiCandles200ResponseValuesInner";
import {
  GetTimeSeriesHeikinashiCandles200ResponseValuesInnerFromJSON,
  GetTimeSeriesHeikinashiCandles200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesHeikinashiCandles200ResponseValuesInnerToJSON,
  GetTimeSeriesHeikinashiCandles200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesHeikinashiCandles200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesHeikinashiCandles200Response
 */
export interface GetTimeSeriesHeikinashiCandles200Response {
  /**
   *
   * @type {GetTimeSeriesHeikinashiCandles200ResponseMeta}
   * @memberof GetTimeSeriesHeikinashiCandles200Response
   */
  meta: GetTimeSeriesHeikinashiCandles200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesHeikinashiCandles200ResponseValuesInner>}
   * @memberof GetTimeSeriesHeikinashiCandles200Response
   */
  values: Array<GetTimeSeriesHeikinashiCandles200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesHeikinashiCandles200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHeikinashiCandles200Response interface.
 */
export function instanceOfGetTimeSeriesHeikinashiCandles200Response(
  value: object,
): value is GetTimeSeriesHeikinashiCandles200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesHeikinashiCandles200ResponseFromJSON(
  json: any,
): GetTimeSeriesHeikinashiCandles200Response {
  return GetTimeSeriesHeikinashiCandles200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesHeikinashiCandles200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHeikinashiCandles200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesHeikinashiCandles200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesHeikinashiCandles200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesHeikinashiCandles200ResponseToJSON(
  json: any,
): GetTimeSeriesHeikinashiCandles200Response {
  return GetTimeSeriesHeikinashiCandles200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesHeikinashiCandles200ResponseToJSONTyped(
  value?: GetTimeSeriesHeikinashiCandles200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesHeikinashiCandles200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesHeikinashiCandles200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

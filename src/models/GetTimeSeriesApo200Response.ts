/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesApo200ResponseValuesInner } from "./GetTimeSeriesApo200ResponseValuesInner";
import {
  GetTimeSeriesApo200ResponseValuesInnerFromJSON,
  GetTimeSeriesApo200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesApo200ResponseValuesInnerToJSON,
  GetTimeSeriesApo200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesApo200ResponseValuesInner";
import type { GetTimeSeriesApo200ResponseMeta } from "./GetTimeSeriesApo200ResponseMeta";
import {
  GetTimeSeriesApo200ResponseMetaFromJSON,
  GetTimeSeriesApo200ResponseMetaFromJSONTyped,
  GetTimeSeriesApo200ResponseMetaToJSON,
  GetTimeSeriesApo200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesApo200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesApo200Response
 */
export interface GetTimeSeriesApo200Response {
  /**
   *
   * @type {GetTimeSeriesApo200ResponseMeta}
   * @memberof GetTimeSeriesApo200Response
   */
  meta: GetTimeSeriesApo200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesApo200ResponseValuesInner>}
   * @memberof GetTimeSeriesApo200Response
   */
  values: Array<GetTimeSeriesApo200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesApo200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesApo200Response interface.
 */
export function instanceOfGetTimeSeriesApo200Response(
  value: object,
): value is GetTimeSeriesApo200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesApo200ResponseFromJSON(
  json: any,
): GetTimeSeriesApo200Response {
  return GetTimeSeriesApo200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesApo200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesApo200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesApo200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesApo200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesApo200ResponseToJSON(
  json: any,
): GetTimeSeriesApo200Response {
  return GetTimeSeriesApo200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesApo200ResponseToJSONTyped(
  value?: GetTimeSeriesApo200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesApo200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesApo200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

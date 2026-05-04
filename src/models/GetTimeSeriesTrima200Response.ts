/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesTrima200ResponseMeta } from "./GetTimeSeriesTrima200ResponseMeta";
import {
  GetTimeSeriesTrima200ResponseMetaFromJSON,
  GetTimeSeriesTrima200ResponseMetaFromJSONTyped,
  GetTimeSeriesTrima200ResponseMetaToJSON,
  GetTimeSeriesTrima200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesTrima200ResponseMeta";
import type { GetTimeSeriesTrima200ResponseValuesInner } from "./GetTimeSeriesTrima200ResponseValuesInner";
import {
  GetTimeSeriesTrima200ResponseValuesInnerFromJSON,
  GetTimeSeriesTrima200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesTrima200ResponseValuesInnerToJSON,
  GetTimeSeriesTrima200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesTrima200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesTrima200Response
 */
export interface GetTimeSeriesTrima200Response {
  /**
   *
   * @type {GetTimeSeriesTrima200ResponseMeta}
   * @memberof GetTimeSeriesTrima200Response
   */
  meta: GetTimeSeriesTrima200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesTrima200ResponseValuesInner>}
   * @memberof GetTimeSeriesTrima200Response
   */
  values: Array<GetTimeSeriesTrima200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesTrima200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesTrima200Response interface.
 */
export function instanceOfGetTimeSeriesTrima200Response(
  value: object,
): value is GetTimeSeriesTrima200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesTrima200ResponseFromJSON(
  json: any,
): GetTimeSeriesTrima200Response {
  return GetTimeSeriesTrima200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesTrima200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesTrima200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesTrima200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesTrima200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesTrima200ResponseToJSON(
  json: any,
): GetTimeSeriesTrima200Response {
  return GetTimeSeriesTrima200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesTrima200ResponseToJSONTyped(
  value?: GetTimeSeriesTrima200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesTrima200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesTrima200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

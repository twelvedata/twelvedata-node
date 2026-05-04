/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesEma200ResponseValuesInner } from "./GetTimeSeriesEma200ResponseValuesInner";
import {
  GetTimeSeriesEma200ResponseValuesInnerFromJSON,
  GetTimeSeriesEma200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesEma200ResponseValuesInnerToJSON,
  GetTimeSeriesEma200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesEma200ResponseValuesInner";
import type { GetTimeSeriesEma200ResponseMeta } from "./GetTimeSeriesEma200ResponseMeta";
import {
  GetTimeSeriesEma200ResponseMetaFromJSON,
  GetTimeSeriesEma200ResponseMetaFromJSONTyped,
  GetTimeSeriesEma200ResponseMetaToJSON,
  GetTimeSeriesEma200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesEma200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesEma200Response
 */
export interface GetTimeSeriesEma200Response {
  /**
   *
   * @type {GetTimeSeriesEma200ResponseMeta}
   * @memberof GetTimeSeriesEma200Response
   */
  meta: GetTimeSeriesEma200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesEma200ResponseValuesInner>}
   * @memberof GetTimeSeriesEma200Response
   */
  values: Array<GetTimeSeriesEma200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesEma200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesEma200Response interface.
 */
export function instanceOfGetTimeSeriesEma200Response(
  value: object,
): value is GetTimeSeriesEma200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesEma200ResponseFromJSON(
  json: any,
): GetTimeSeriesEma200Response {
  return GetTimeSeriesEma200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesEma200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesEma200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesEma200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesEma200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesEma200ResponseToJSON(
  json: any,
): GetTimeSeriesEma200Response {
  return GetTimeSeriesEma200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesEma200ResponseToJSONTyped(
  value?: GetTimeSeriesEma200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesEma200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesEma200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

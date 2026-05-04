/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesLog10200ResponseValuesInner } from "./GetTimeSeriesLog10200ResponseValuesInner";
import {
  GetTimeSeriesLog10200ResponseValuesInnerFromJSON,
  GetTimeSeriesLog10200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesLog10200ResponseValuesInnerToJSON,
  GetTimeSeriesLog10200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesLog10200ResponseValuesInner";
import type { GetTimeSeriesLog10200ResponseMeta } from "./GetTimeSeriesLog10200ResponseMeta";
import {
  GetTimeSeriesLog10200ResponseMetaFromJSON,
  GetTimeSeriesLog10200ResponseMetaFromJSONTyped,
  GetTimeSeriesLog10200ResponseMetaToJSON,
  GetTimeSeriesLog10200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesLog10200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesLog10200Response
 */
export interface GetTimeSeriesLog10200Response {
  /**
   *
   * @type {GetTimeSeriesLog10200ResponseMeta}
   * @memberof GetTimeSeriesLog10200Response
   */
  meta: GetTimeSeriesLog10200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesLog10200ResponseValuesInner>}
   * @memberof GetTimeSeriesLog10200Response
   */
  values: Array<GetTimeSeriesLog10200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesLog10200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesLog10200Response interface.
 */
export function instanceOfGetTimeSeriesLog10200Response(
  value: object,
): value is GetTimeSeriesLog10200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesLog10200ResponseFromJSON(
  json: any,
): GetTimeSeriesLog10200Response {
  return GetTimeSeriesLog10200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesLog10200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesLog10200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesLog10200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesLog10200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesLog10200ResponseToJSON(
  json: any,
): GetTimeSeriesLog10200Response {
  return GetTimeSeriesLog10200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesLog10200ResponseToJSONTyped(
  value?: GetTimeSeriesLog10200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesLog10200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesLog10200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

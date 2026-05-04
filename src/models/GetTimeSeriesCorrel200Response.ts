/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesCorrel200ResponseMeta } from "./GetTimeSeriesCorrel200ResponseMeta";
import {
  GetTimeSeriesCorrel200ResponseMetaFromJSON,
  GetTimeSeriesCorrel200ResponseMetaFromJSONTyped,
  GetTimeSeriesCorrel200ResponseMetaToJSON,
  GetTimeSeriesCorrel200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesCorrel200ResponseMeta";
import type { GetTimeSeriesCorrel200ResponseValuesInner } from "./GetTimeSeriesCorrel200ResponseValuesInner";
import {
  GetTimeSeriesCorrel200ResponseValuesInnerFromJSON,
  GetTimeSeriesCorrel200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesCorrel200ResponseValuesInnerToJSON,
  GetTimeSeriesCorrel200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesCorrel200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesCorrel200Response
 */
export interface GetTimeSeriesCorrel200Response {
  /**
   *
   * @type {GetTimeSeriesCorrel200ResponseMeta}
   * @memberof GetTimeSeriesCorrel200Response
   */
  meta: GetTimeSeriesCorrel200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesCorrel200ResponseValuesInner>}
   * @memberof GetTimeSeriesCorrel200Response
   */
  values: Array<GetTimeSeriesCorrel200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesCorrel200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesCorrel200Response interface.
 */
export function instanceOfGetTimeSeriesCorrel200Response(
  value: object,
): value is GetTimeSeriesCorrel200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesCorrel200ResponseFromJSON(
  json: any,
): GetTimeSeriesCorrel200Response {
  return GetTimeSeriesCorrel200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesCorrel200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCorrel200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesCorrel200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesCorrel200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesCorrel200ResponseToJSON(
  json: any,
): GetTimeSeriesCorrel200Response {
  return GetTimeSeriesCorrel200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesCorrel200ResponseToJSONTyped(
  value?: GetTimeSeriesCorrel200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesCorrel200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesCorrel200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

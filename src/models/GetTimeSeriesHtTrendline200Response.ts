/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesHtTrendline200ResponseValuesInner } from "./GetTimeSeriesHtTrendline200ResponseValuesInner";
import {
  GetTimeSeriesHtTrendline200ResponseValuesInnerFromJSON,
  GetTimeSeriesHtTrendline200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesHtTrendline200ResponseValuesInnerToJSON,
  GetTimeSeriesHtTrendline200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesHtTrendline200ResponseValuesInner";
import type { GetTimeSeriesHtTrendline200ResponseMeta } from "./GetTimeSeriesHtTrendline200ResponseMeta";
import {
  GetTimeSeriesHtTrendline200ResponseMetaFromJSON,
  GetTimeSeriesHtTrendline200ResponseMetaFromJSONTyped,
  GetTimeSeriesHtTrendline200ResponseMetaToJSON,
  GetTimeSeriesHtTrendline200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesHtTrendline200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesHtTrendline200Response
 */
export interface GetTimeSeriesHtTrendline200Response {
  /**
   *
   * @type {GetTimeSeriesHtTrendline200ResponseMeta}
   * @memberof GetTimeSeriesHtTrendline200Response
   */
  meta: GetTimeSeriesHtTrendline200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesHtTrendline200ResponseValuesInner>}
   * @memberof GetTimeSeriesHtTrendline200Response
   */
  values: Array<GetTimeSeriesHtTrendline200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesHtTrendline200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHtTrendline200Response interface.
 */
export function instanceOfGetTimeSeriesHtTrendline200Response(
  value: object,
): value is GetTimeSeriesHtTrendline200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesHtTrendline200ResponseFromJSON(
  json: any,
): GetTimeSeriesHtTrendline200Response {
  return GetTimeSeriesHtTrendline200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesHtTrendline200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtTrendline200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesHtTrendline200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesHtTrendline200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesHtTrendline200ResponseToJSON(
  json: any,
): GetTimeSeriesHtTrendline200Response {
  return GetTimeSeriesHtTrendline200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesHtTrendline200ResponseToJSONTyped(
  value?: GetTimeSeriesHtTrendline200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesHtTrendline200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesHtTrendline200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

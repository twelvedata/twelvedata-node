/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { TimeSeriesItem } from "./TimeSeriesItem";
import {
  TimeSeriesItemFromJSON,
  TimeSeriesItemFromJSONTyped,
  TimeSeriesItemToJSON,
  TimeSeriesItemToJSONTyped,
} from "./TimeSeriesItem";
import type { GetTimeSeries200ResponseMeta } from "./GetTimeSeries200ResponseMeta";
import {
  GetTimeSeries200ResponseMetaFromJSON,
  GetTimeSeries200ResponseMetaFromJSONTyped,
  GetTimeSeries200ResponseMetaToJSON,
  GetTimeSeries200ResponseMetaToJSONTyped,
} from "./GetTimeSeries200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeries200Response
 */
export interface GetTimeSeries200Response {
  /**
   *
   * @type {GetTimeSeries200ResponseMeta}
   * @memberof GetTimeSeries200Response
   */
  meta: GetTimeSeries200ResponseMeta;
  /**
   * List of time series data points
   * @type {Array<TimeSeriesItem>}
   * @memberof GetTimeSeries200Response
   */
  values: Array<TimeSeriesItem>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeries200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeries200Response interface.
 */
export function instanceOfGetTimeSeries200Response(
  value: object,
): value is GetTimeSeries200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeries200ResponseFromJSON(
  json: any,
): GetTimeSeries200Response {
  return GetTimeSeries200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeries200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeries200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeries200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(TimeSeriesItemFromJSON),
    status: json["status"],
  };
}

export function GetTimeSeries200ResponseToJSON(
  json: any,
): GetTimeSeries200Response {
  return GetTimeSeries200ResponseToJSONTyped(json, false);
}

export function GetTimeSeries200ResponseToJSONTyped(
  value?: GetTimeSeries200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeries200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(TimeSeriesItemToJSON),
    status: value["status"],
  };
}

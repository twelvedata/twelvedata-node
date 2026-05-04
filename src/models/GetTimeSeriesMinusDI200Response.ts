/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMinusDI200ResponseMeta } from "./GetTimeSeriesMinusDI200ResponseMeta";
import {
  GetTimeSeriesMinusDI200ResponseMetaFromJSON,
  GetTimeSeriesMinusDI200ResponseMetaFromJSONTyped,
  GetTimeSeriesMinusDI200ResponseMetaToJSON,
  GetTimeSeriesMinusDI200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesMinusDI200ResponseMeta";
import type { GetTimeSeriesMinusDI200ResponseValuesInner } from "./GetTimeSeriesMinusDI200ResponseValuesInner";
import {
  GetTimeSeriesMinusDI200ResponseValuesInnerFromJSON,
  GetTimeSeriesMinusDI200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesMinusDI200ResponseValuesInnerToJSON,
  GetTimeSeriesMinusDI200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesMinusDI200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesMinusDI200Response
 */
export interface GetTimeSeriesMinusDI200Response {
  /**
   *
   * @type {GetTimeSeriesMinusDI200ResponseMeta}
   * @memberof GetTimeSeriesMinusDI200Response
   */
  meta: GetTimeSeriesMinusDI200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesMinusDI200ResponseValuesInner>}
   * @memberof GetTimeSeriesMinusDI200Response
   */
  values: Array<GetTimeSeriesMinusDI200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesMinusDI200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMinusDI200Response interface.
 */
export function instanceOfGetTimeSeriesMinusDI200Response(
  value: object,
): value is GetTimeSeriesMinusDI200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMinusDI200ResponseFromJSON(
  json: any,
): GetTimeSeriesMinusDI200Response {
  return GetTimeSeriesMinusDI200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesMinusDI200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMinusDI200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesMinusDI200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesMinusDI200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesMinusDI200ResponseToJSON(
  json: any,
): GetTimeSeriesMinusDI200Response {
  return GetTimeSeriesMinusDI200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesMinusDI200ResponseToJSONTyped(
  value?: GetTimeSeriesMinusDI200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesMinusDI200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesMinusDI200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

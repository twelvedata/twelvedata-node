/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesUltOsc200ResponseMeta } from "./GetTimeSeriesUltOsc200ResponseMeta";
import {
  GetTimeSeriesUltOsc200ResponseMetaFromJSON,
  GetTimeSeriesUltOsc200ResponseMetaFromJSONTyped,
  GetTimeSeriesUltOsc200ResponseMetaToJSON,
  GetTimeSeriesUltOsc200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesUltOsc200ResponseMeta";
import type { GetTimeSeriesUltOsc200ResponseValuesInner } from "./GetTimeSeriesUltOsc200ResponseValuesInner";
import {
  GetTimeSeriesUltOsc200ResponseValuesInnerFromJSON,
  GetTimeSeriesUltOsc200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesUltOsc200ResponseValuesInnerToJSON,
  GetTimeSeriesUltOsc200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesUltOsc200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesUltOsc200Response
 */
export interface GetTimeSeriesUltOsc200Response {
  /**
   *
   * @type {GetTimeSeriesUltOsc200ResponseMeta}
   * @memberof GetTimeSeriesUltOsc200Response
   */
  meta: GetTimeSeriesUltOsc200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesUltOsc200ResponseValuesInner>}
   * @memberof GetTimeSeriesUltOsc200Response
   */
  values: Array<GetTimeSeriesUltOsc200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesUltOsc200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesUltOsc200Response interface.
 */
export function instanceOfGetTimeSeriesUltOsc200Response(
  value: object,
): value is GetTimeSeriesUltOsc200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesUltOsc200ResponseFromJSON(
  json: any,
): GetTimeSeriesUltOsc200Response {
  return GetTimeSeriesUltOsc200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesUltOsc200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesUltOsc200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesUltOsc200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesUltOsc200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesUltOsc200ResponseToJSON(
  json: any,
): GetTimeSeriesUltOsc200Response {
  return GetTimeSeriesUltOsc200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesUltOsc200ResponseToJSONTyped(
  value?: GetTimeSeriesUltOsc200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesUltOsc200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesUltOsc200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

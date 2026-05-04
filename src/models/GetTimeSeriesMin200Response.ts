/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMin200ResponseValuesInner } from "./GetTimeSeriesMin200ResponseValuesInner";
import {
  GetTimeSeriesMin200ResponseValuesInnerFromJSON,
  GetTimeSeriesMin200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesMin200ResponseValuesInnerToJSON,
  GetTimeSeriesMin200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesMin200ResponseValuesInner";
import type { GetTimeSeriesMin200ResponseMeta } from "./GetTimeSeriesMin200ResponseMeta";
import {
  GetTimeSeriesMin200ResponseMetaFromJSON,
  GetTimeSeriesMin200ResponseMetaFromJSONTyped,
  GetTimeSeriesMin200ResponseMetaToJSON,
  GetTimeSeriesMin200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesMin200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesMin200Response
 */
export interface GetTimeSeriesMin200Response {
  /**
   *
   * @type {GetTimeSeriesMin200ResponseMeta}
   * @memberof GetTimeSeriesMin200Response
   */
  meta: GetTimeSeriesMin200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesMin200ResponseValuesInner>}
   * @memberof GetTimeSeriesMin200Response
   */
  values: Array<GetTimeSeriesMin200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesMin200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMin200Response interface.
 */
export function instanceOfGetTimeSeriesMin200Response(
  value: object,
): value is GetTimeSeriesMin200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMin200ResponseFromJSON(
  json: any,
): GetTimeSeriesMin200Response {
  return GetTimeSeriesMin200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesMin200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMin200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesMin200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesMin200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesMin200ResponseToJSON(
  json: any,
): GetTimeSeriesMin200Response {
  return GetTimeSeriesMin200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesMin200ResponseToJSONTyped(
  value?: GetTimeSeriesMin200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesMin200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesMin200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

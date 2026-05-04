/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesVar200ResponseValuesInner } from "./GetTimeSeriesVar200ResponseValuesInner";
import {
  GetTimeSeriesVar200ResponseValuesInnerFromJSON,
  GetTimeSeriesVar200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesVar200ResponseValuesInnerToJSON,
  GetTimeSeriesVar200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesVar200ResponseValuesInner";
import type { GetTimeSeriesVar200ResponseMeta } from "./GetTimeSeriesVar200ResponseMeta";
import {
  GetTimeSeriesVar200ResponseMetaFromJSON,
  GetTimeSeriesVar200ResponseMetaFromJSONTyped,
  GetTimeSeriesVar200ResponseMetaToJSON,
  GetTimeSeriesVar200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesVar200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesVar200Response
 */
export interface GetTimeSeriesVar200Response {
  /**
   *
   * @type {GetTimeSeriesVar200ResponseMeta}
   * @memberof GetTimeSeriesVar200Response
   */
  meta: GetTimeSeriesVar200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesVar200ResponseValuesInner>}
   * @memberof GetTimeSeriesVar200Response
   */
  values: Array<GetTimeSeriesVar200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesVar200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesVar200Response interface.
 */
export function instanceOfGetTimeSeriesVar200Response(
  value: object,
): value is GetTimeSeriesVar200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesVar200ResponseFromJSON(
  json: any,
): GetTimeSeriesVar200Response {
  return GetTimeSeriesVar200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesVar200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesVar200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesVar200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesVar200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesVar200ResponseToJSON(
  json: any,
): GetTimeSeriesVar200Response {
  return GetTimeSeriesVar200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesVar200ResponseToJSONTyped(
  value?: GetTimeSeriesVar200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesVar200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesVar200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

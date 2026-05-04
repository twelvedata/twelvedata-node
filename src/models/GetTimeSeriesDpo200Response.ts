/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesDpo200ResponseValuesInner } from "./GetTimeSeriesDpo200ResponseValuesInner";
import {
  GetTimeSeriesDpo200ResponseValuesInnerFromJSON,
  GetTimeSeriesDpo200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesDpo200ResponseValuesInnerToJSON,
  GetTimeSeriesDpo200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesDpo200ResponseValuesInner";
import type { GetTimeSeriesDpo200ResponseMeta } from "./GetTimeSeriesDpo200ResponseMeta";
import {
  GetTimeSeriesDpo200ResponseMetaFromJSON,
  GetTimeSeriesDpo200ResponseMetaFromJSONTyped,
  GetTimeSeriesDpo200ResponseMetaToJSON,
  GetTimeSeriesDpo200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesDpo200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesDpo200Response
 */
export interface GetTimeSeriesDpo200Response {
  /**
   *
   * @type {GetTimeSeriesDpo200ResponseMeta}
   * @memberof GetTimeSeriesDpo200Response
   */
  meta: GetTimeSeriesDpo200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesDpo200ResponseValuesInner>}
   * @memberof GetTimeSeriesDpo200Response
   */
  values: Array<GetTimeSeriesDpo200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesDpo200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesDpo200Response interface.
 */
export function instanceOfGetTimeSeriesDpo200Response(
  value: object,
): value is GetTimeSeriesDpo200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesDpo200ResponseFromJSON(
  json: any,
): GetTimeSeriesDpo200Response {
  return GetTimeSeriesDpo200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesDpo200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesDpo200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesDpo200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesDpo200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesDpo200ResponseToJSON(
  json: any,
): GetTimeSeriesDpo200Response {
  return GetTimeSeriesDpo200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesDpo200ResponseToJSONTyped(
  value?: GetTimeSeriesDpo200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesDpo200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesDpo200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

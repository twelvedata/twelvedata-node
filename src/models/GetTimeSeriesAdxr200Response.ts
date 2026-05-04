/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesAdxr200ResponseValuesInner } from "./GetTimeSeriesAdxr200ResponseValuesInner";
import {
  GetTimeSeriesAdxr200ResponseValuesInnerFromJSON,
  GetTimeSeriesAdxr200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesAdxr200ResponseValuesInnerToJSON,
  GetTimeSeriesAdxr200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesAdxr200ResponseValuesInner";
import type { GetTimeSeriesAdxr200ResponseMeta } from "./GetTimeSeriesAdxr200ResponseMeta";
import {
  GetTimeSeriesAdxr200ResponseMetaFromJSON,
  GetTimeSeriesAdxr200ResponseMetaFromJSONTyped,
  GetTimeSeriesAdxr200ResponseMetaToJSON,
  GetTimeSeriesAdxr200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesAdxr200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesAdxr200Response
 */
export interface GetTimeSeriesAdxr200Response {
  /**
   *
   * @type {GetTimeSeriesAdxr200ResponseMeta}
   * @memberof GetTimeSeriesAdxr200Response
   */
  meta: GetTimeSeriesAdxr200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesAdxr200ResponseValuesInner>}
   * @memberof GetTimeSeriesAdxr200Response
   */
  values: Array<GetTimeSeriesAdxr200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesAdxr200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAdxr200Response interface.
 */
export function instanceOfGetTimeSeriesAdxr200Response(
  value: object,
): value is GetTimeSeriesAdxr200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesAdxr200ResponseFromJSON(
  json: any,
): GetTimeSeriesAdxr200Response {
  return GetTimeSeriesAdxr200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesAdxr200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAdxr200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesAdxr200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesAdxr200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesAdxr200ResponseToJSON(
  json: any,
): GetTimeSeriesAdxr200Response {
  return GetTimeSeriesAdxr200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesAdxr200ResponseToJSONTyped(
  value?: GetTimeSeriesAdxr200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesAdxr200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesAdxr200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

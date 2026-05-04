/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesT3ma200ResponseValuesInner } from "./GetTimeSeriesT3ma200ResponseValuesInner";
import {
  GetTimeSeriesT3ma200ResponseValuesInnerFromJSON,
  GetTimeSeriesT3ma200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesT3ma200ResponseValuesInnerToJSON,
  GetTimeSeriesT3ma200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesT3ma200ResponseValuesInner";
import type { GetTimeSeriesT3ma200ResponseMeta } from "./GetTimeSeriesT3ma200ResponseMeta";
import {
  GetTimeSeriesT3ma200ResponseMetaFromJSON,
  GetTimeSeriesT3ma200ResponseMetaFromJSONTyped,
  GetTimeSeriesT3ma200ResponseMetaToJSON,
  GetTimeSeriesT3ma200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesT3ma200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesT3ma200Response
 */
export interface GetTimeSeriesT3ma200Response {
  /**
   *
   * @type {GetTimeSeriesT3ma200ResponseMeta}
   * @memberof GetTimeSeriesT3ma200Response
   */
  meta: GetTimeSeriesT3ma200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesT3ma200ResponseValuesInner>}
   * @memberof GetTimeSeriesT3ma200Response
   */
  values: Array<GetTimeSeriesT3ma200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesT3ma200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesT3ma200Response interface.
 */
export function instanceOfGetTimeSeriesT3ma200Response(
  value: object,
): value is GetTimeSeriesT3ma200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesT3ma200ResponseFromJSON(
  json: any,
): GetTimeSeriesT3ma200Response {
  return GetTimeSeriesT3ma200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesT3ma200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesT3ma200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesT3ma200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesT3ma200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesT3ma200ResponseToJSON(
  json: any,
): GetTimeSeriesT3ma200Response {
  return GetTimeSeriesT3ma200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesT3ma200ResponseToJSONTyped(
  value?: GetTimeSeriesT3ma200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesT3ma200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesT3ma200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

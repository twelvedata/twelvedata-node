/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesPercentB200ResponseMeta } from "./GetTimeSeriesPercentB200ResponseMeta";
import {
  GetTimeSeriesPercentB200ResponseMetaFromJSON,
  GetTimeSeriesPercentB200ResponseMetaFromJSONTyped,
  GetTimeSeriesPercentB200ResponseMetaToJSON,
  GetTimeSeriesPercentB200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesPercentB200ResponseMeta";
import type { GetTimeSeriesPercentB200ResponseValuesInner } from "./GetTimeSeriesPercentB200ResponseValuesInner";
import {
  GetTimeSeriesPercentB200ResponseValuesInnerFromJSON,
  GetTimeSeriesPercentB200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesPercentB200ResponseValuesInnerToJSON,
  GetTimeSeriesPercentB200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesPercentB200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesPercentB200Response
 */
export interface GetTimeSeriesPercentB200Response {
  /**
   *
   * @type {GetTimeSeriesPercentB200ResponseMeta}
   * @memberof GetTimeSeriesPercentB200Response
   */
  meta: GetTimeSeriesPercentB200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesPercentB200ResponseValuesInner>}
   * @memberof GetTimeSeriesPercentB200Response
   */
  values: Array<GetTimeSeriesPercentB200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesPercentB200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesPercentB200Response interface.
 */
export function instanceOfGetTimeSeriesPercentB200Response(
  value: object,
): value is GetTimeSeriesPercentB200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesPercentB200ResponseFromJSON(
  json: any,
): GetTimeSeriesPercentB200Response {
  return GetTimeSeriesPercentB200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesPercentB200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesPercentB200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesPercentB200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesPercentB200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesPercentB200ResponseToJSON(
  json: any,
): GetTimeSeriesPercentB200Response {
  return GetTimeSeriesPercentB200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesPercentB200ResponseToJSONTyped(
  value?: GetTimeSeriesPercentB200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesPercentB200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesPercentB200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

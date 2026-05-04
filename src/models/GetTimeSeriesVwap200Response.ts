/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesVwap200ResponseValuesInner } from "./GetTimeSeriesVwap200ResponseValuesInner";
import {
  GetTimeSeriesVwap200ResponseValuesInnerFromJSON,
  GetTimeSeriesVwap200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesVwap200ResponseValuesInnerToJSON,
  GetTimeSeriesVwap200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesVwap200ResponseValuesInner";
import type { GetTimeSeriesVwap200ResponseMeta } from "./GetTimeSeriesVwap200ResponseMeta";
import {
  GetTimeSeriesVwap200ResponseMetaFromJSON,
  GetTimeSeriesVwap200ResponseMetaFromJSONTyped,
  GetTimeSeriesVwap200ResponseMetaToJSON,
  GetTimeSeriesVwap200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesVwap200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesVwap200Response
 */
export interface GetTimeSeriesVwap200Response {
  /**
   *
   * @type {GetTimeSeriesVwap200ResponseMeta}
   * @memberof GetTimeSeriesVwap200Response
   */
  meta: GetTimeSeriesVwap200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesVwap200ResponseValuesInner>}
   * @memberof GetTimeSeriesVwap200Response
   */
  values: Array<GetTimeSeriesVwap200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesVwap200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesVwap200Response interface.
 */
export function instanceOfGetTimeSeriesVwap200Response(
  value: object,
): value is GetTimeSeriesVwap200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesVwap200ResponseFromJSON(
  json: any,
): GetTimeSeriesVwap200Response {
  return GetTimeSeriesVwap200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesVwap200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesVwap200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesVwap200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesVwap200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesVwap200ResponseToJSON(
  json: any,
): GetTimeSeriesVwap200Response {
  return GetTimeSeriesVwap200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesVwap200ResponseToJSONTyped(
  value?: GetTimeSeriesVwap200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesVwap200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesVwap200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

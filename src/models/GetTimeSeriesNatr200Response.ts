/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesNatr200ResponseMeta } from "./GetTimeSeriesNatr200ResponseMeta";
import {
  GetTimeSeriesNatr200ResponseMetaFromJSON,
  GetTimeSeriesNatr200ResponseMetaFromJSONTyped,
  GetTimeSeriesNatr200ResponseMetaToJSON,
  GetTimeSeriesNatr200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesNatr200ResponseMeta";
import type { GetTimeSeriesNatr200ResponseValuesInner } from "./GetTimeSeriesNatr200ResponseValuesInner";
import {
  GetTimeSeriesNatr200ResponseValuesInnerFromJSON,
  GetTimeSeriesNatr200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesNatr200ResponseValuesInnerToJSON,
  GetTimeSeriesNatr200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesNatr200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesNatr200Response
 */
export interface GetTimeSeriesNatr200Response {
  /**
   *
   * @type {GetTimeSeriesNatr200ResponseMeta}
   * @memberof GetTimeSeriesNatr200Response
   */
  meta: GetTimeSeriesNatr200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesNatr200ResponseValuesInner>}
   * @memberof GetTimeSeriesNatr200Response
   */
  values: Array<GetTimeSeriesNatr200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesNatr200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesNatr200Response interface.
 */
export function instanceOfGetTimeSeriesNatr200Response(
  value: object,
): value is GetTimeSeriesNatr200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesNatr200ResponseFromJSON(
  json: any,
): GetTimeSeriesNatr200Response {
  return GetTimeSeriesNatr200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesNatr200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesNatr200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesNatr200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesNatr200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesNatr200ResponseToJSON(
  json: any,
): GetTimeSeriesNatr200Response {
  return GetTimeSeriesNatr200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesNatr200ResponseToJSONTyped(
  value?: GetTimeSeriesNatr200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesNatr200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesNatr200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

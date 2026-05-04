/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesDiv200ResponseValuesInner } from "./GetTimeSeriesDiv200ResponseValuesInner";
import {
  GetTimeSeriesDiv200ResponseValuesInnerFromJSON,
  GetTimeSeriesDiv200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesDiv200ResponseValuesInnerToJSON,
  GetTimeSeriesDiv200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesDiv200ResponseValuesInner";
import type { GetTimeSeriesDiv200ResponseMeta } from "./GetTimeSeriesDiv200ResponseMeta";
import {
  GetTimeSeriesDiv200ResponseMetaFromJSON,
  GetTimeSeriesDiv200ResponseMetaFromJSONTyped,
  GetTimeSeriesDiv200ResponseMetaToJSON,
  GetTimeSeriesDiv200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesDiv200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesDiv200Response
 */
export interface GetTimeSeriesDiv200Response {
  /**
   *
   * @type {GetTimeSeriesDiv200ResponseMeta}
   * @memberof GetTimeSeriesDiv200Response
   */
  meta: GetTimeSeriesDiv200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesDiv200ResponseValuesInner>}
   * @memberof GetTimeSeriesDiv200Response
   */
  values: Array<GetTimeSeriesDiv200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesDiv200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesDiv200Response interface.
 */
export function instanceOfGetTimeSeriesDiv200Response(
  value: object,
): value is GetTimeSeriesDiv200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesDiv200ResponseFromJSON(
  json: any,
): GetTimeSeriesDiv200Response {
  return GetTimeSeriesDiv200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesDiv200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesDiv200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesDiv200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesDiv200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesDiv200ResponseToJSON(
  json: any,
): GetTimeSeriesDiv200Response {
  return GetTimeSeriesDiv200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesDiv200ResponseToJSONTyped(
  value?: GetTimeSeriesDiv200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesDiv200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesDiv200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

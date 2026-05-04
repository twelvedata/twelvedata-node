/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesCmo200ResponseValuesInner } from "./GetTimeSeriesCmo200ResponseValuesInner";
import {
  GetTimeSeriesCmo200ResponseValuesInnerFromJSON,
  GetTimeSeriesCmo200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesCmo200ResponseValuesInnerToJSON,
  GetTimeSeriesCmo200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesCmo200ResponseValuesInner";
import type { GetTimeSeriesCmo200ResponseMeta } from "./GetTimeSeriesCmo200ResponseMeta";
import {
  GetTimeSeriesCmo200ResponseMetaFromJSON,
  GetTimeSeriesCmo200ResponseMetaFromJSONTyped,
  GetTimeSeriesCmo200ResponseMetaToJSON,
  GetTimeSeriesCmo200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesCmo200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesCmo200Response
 */
export interface GetTimeSeriesCmo200Response {
  /**
   *
   * @type {GetTimeSeriesCmo200ResponseMeta}
   * @memberof GetTimeSeriesCmo200Response
   */
  meta: GetTimeSeriesCmo200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesCmo200ResponseValuesInner>}
   * @memberof GetTimeSeriesCmo200Response
   */
  values: Array<GetTimeSeriesCmo200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesCmo200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesCmo200Response interface.
 */
export function instanceOfGetTimeSeriesCmo200Response(
  value: object,
): value is GetTimeSeriesCmo200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesCmo200ResponseFromJSON(
  json: any,
): GetTimeSeriesCmo200Response {
  return GetTimeSeriesCmo200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesCmo200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCmo200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesCmo200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesCmo200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesCmo200ResponseToJSON(
  json: any,
): GetTimeSeriesCmo200Response {
  return GetTimeSeriesCmo200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesCmo200ResponseToJSONTyped(
  value?: GetTimeSeriesCmo200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesCmo200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesCmo200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

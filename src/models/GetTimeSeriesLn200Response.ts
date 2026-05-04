/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesLn200ResponseMeta } from "./GetTimeSeriesLn200ResponseMeta";
import {
  GetTimeSeriesLn200ResponseMetaFromJSON,
  GetTimeSeriesLn200ResponseMetaFromJSONTyped,
  GetTimeSeriesLn200ResponseMetaToJSON,
  GetTimeSeriesLn200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesLn200ResponseMeta";
import type { GetTimeSeriesLn200ResponseValuesInner } from "./GetTimeSeriesLn200ResponseValuesInner";
import {
  GetTimeSeriesLn200ResponseValuesInnerFromJSON,
  GetTimeSeriesLn200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesLn200ResponseValuesInnerToJSON,
  GetTimeSeriesLn200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesLn200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesLn200Response
 */
export interface GetTimeSeriesLn200Response {
  /**
   *
   * @type {GetTimeSeriesLn200ResponseMeta}
   * @memberof GetTimeSeriesLn200Response
   */
  meta: GetTimeSeriesLn200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesLn200ResponseValuesInner>}
   * @memberof GetTimeSeriesLn200Response
   */
  values: Array<GetTimeSeriesLn200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesLn200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesLn200Response interface.
 */
export function instanceOfGetTimeSeriesLn200Response(
  value: object,
): value is GetTimeSeriesLn200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesLn200ResponseFromJSON(
  json: any,
): GetTimeSeriesLn200Response {
  return GetTimeSeriesLn200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesLn200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesLn200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesLn200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesLn200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesLn200ResponseToJSON(
  json: any,
): GetTimeSeriesLn200Response {
  return GetTimeSeriesLn200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesLn200ResponseToJSONTyped(
  value?: GetTimeSeriesLn200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesLn200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesLn200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

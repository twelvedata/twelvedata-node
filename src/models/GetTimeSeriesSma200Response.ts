/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesSma200ResponseValuesInner } from "./GetTimeSeriesSma200ResponseValuesInner";
import {
  GetTimeSeriesSma200ResponseValuesInnerFromJSON,
  GetTimeSeriesSma200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesSma200ResponseValuesInnerToJSON,
  GetTimeSeriesSma200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesSma200ResponseValuesInner";
import type { GetTimeSeriesSma200ResponseMeta } from "./GetTimeSeriesSma200ResponseMeta";
import {
  GetTimeSeriesSma200ResponseMetaFromJSON,
  GetTimeSeriesSma200ResponseMetaFromJSONTyped,
  GetTimeSeriesSma200ResponseMetaToJSON,
  GetTimeSeriesSma200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesSma200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesSma200Response
 */
export interface GetTimeSeriesSma200Response {
  /**
   *
   * @type {GetTimeSeriesSma200ResponseMeta}
   * @memberof GetTimeSeriesSma200Response
   */
  meta: GetTimeSeriesSma200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesSma200ResponseValuesInner>}
   * @memberof GetTimeSeriesSma200Response
   */
  values: Array<GetTimeSeriesSma200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesSma200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesSma200Response interface.
 */
export function instanceOfGetTimeSeriesSma200Response(
  value: object,
): value is GetTimeSeriesSma200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesSma200ResponseFromJSON(
  json: any,
): GetTimeSeriesSma200Response {
  return GetTimeSeriesSma200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesSma200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSma200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesSma200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesSma200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesSma200ResponseToJSON(
  json: any,
): GetTimeSeriesSma200Response {
  return GetTimeSeriesSma200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesSma200ResponseToJSONTyped(
  value?: GetTimeSeriesSma200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesSma200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesSma200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

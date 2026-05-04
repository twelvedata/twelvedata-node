/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesSub200ResponseValuesInner } from "./GetTimeSeriesSub200ResponseValuesInner";
import {
  GetTimeSeriesSub200ResponseValuesInnerFromJSON,
  GetTimeSeriesSub200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesSub200ResponseValuesInnerToJSON,
  GetTimeSeriesSub200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesSub200ResponseValuesInner";
import type { GetTimeSeriesSub200ResponseMeta } from "./GetTimeSeriesSub200ResponseMeta";
import {
  GetTimeSeriesSub200ResponseMetaFromJSON,
  GetTimeSeriesSub200ResponseMetaFromJSONTyped,
  GetTimeSeriesSub200ResponseMetaToJSON,
  GetTimeSeriesSub200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesSub200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesSub200Response
 */
export interface GetTimeSeriesSub200Response {
  /**
   *
   * @type {GetTimeSeriesSub200ResponseMeta}
   * @memberof GetTimeSeriesSub200Response
   */
  meta: GetTimeSeriesSub200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesSub200ResponseValuesInner>}
   * @memberof GetTimeSeriesSub200Response
   */
  values: Array<GetTimeSeriesSub200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesSub200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesSub200Response interface.
 */
export function instanceOfGetTimeSeriesSub200Response(
  value: object,
): value is GetTimeSeriesSub200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesSub200ResponseFromJSON(
  json: any,
): GetTimeSeriesSub200Response {
  return GetTimeSeriesSub200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesSub200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSub200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesSub200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesSub200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesSub200ResponseToJSON(
  json: any,
): GetTimeSeriesSub200Response {
  return GetTimeSeriesSub200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesSub200ResponseToJSONTyped(
  value?: GetTimeSeriesSub200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesSub200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesSub200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

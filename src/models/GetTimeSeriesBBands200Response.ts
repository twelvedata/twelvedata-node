/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesBBands200ResponseMeta } from "./GetTimeSeriesBBands200ResponseMeta";
import {
  GetTimeSeriesBBands200ResponseMetaFromJSON,
  GetTimeSeriesBBands200ResponseMetaFromJSONTyped,
  GetTimeSeriesBBands200ResponseMetaToJSON,
  GetTimeSeriesBBands200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesBBands200ResponseMeta";
import type { GetTimeSeriesBBands200ResponseValuesInner } from "./GetTimeSeriesBBands200ResponseValuesInner";
import {
  GetTimeSeriesBBands200ResponseValuesInnerFromJSON,
  GetTimeSeriesBBands200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesBBands200ResponseValuesInnerToJSON,
  GetTimeSeriesBBands200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesBBands200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesBBands200Response
 */
export interface GetTimeSeriesBBands200Response {
  /**
   *
   * @type {GetTimeSeriesBBands200ResponseMeta}
   * @memberof GetTimeSeriesBBands200Response
   */
  meta: GetTimeSeriesBBands200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesBBands200ResponseValuesInner>}
   * @memberof GetTimeSeriesBBands200Response
   */
  values: Array<GetTimeSeriesBBands200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesBBands200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesBBands200Response interface.
 */
export function instanceOfGetTimeSeriesBBands200Response(
  value: object,
): value is GetTimeSeriesBBands200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesBBands200ResponseFromJSON(
  json: any,
): GetTimeSeriesBBands200Response {
  return GetTimeSeriesBBands200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesBBands200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesBBands200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesBBands200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesBBands200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesBBands200ResponseToJSON(
  json: any,
): GetTimeSeriesBBands200Response {
  return GetTimeSeriesBBands200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesBBands200ResponseToJSONTyped(
  value?: GetTimeSeriesBBands200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesBBands200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesBBands200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

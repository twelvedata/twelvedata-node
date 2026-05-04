/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMa200ResponseValuesInner } from "./GetTimeSeriesMa200ResponseValuesInner";
import {
  GetTimeSeriesMa200ResponseValuesInnerFromJSON,
  GetTimeSeriesMa200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesMa200ResponseValuesInnerToJSON,
  GetTimeSeriesMa200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesMa200ResponseValuesInner";
import type { GetTimeSeriesMa200ResponseMeta } from "./GetTimeSeriesMa200ResponseMeta";
import {
  GetTimeSeriesMa200ResponseMetaFromJSON,
  GetTimeSeriesMa200ResponseMetaFromJSONTyped,
  GetTimeSeriesMa200ResponseMetaToJSON,
  GetTimeSeriesMa200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesMa200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesMa200Response
 */
export interface GetTimeSeriesMa200Response {
  /**
   *
   * @type {GetTimeSeriesMa200ResponseMeta}
   * @memberof GetTimeSeriesMa200Response
   */
  meta: GetTimeSeriesMa200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesMa200ResponseValuesInner>}
   * @memberof GetTimeSeriesMa200Response
   */
  values: Array<GetTimeSeriesMa200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesMa200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMa200Response interface.
 */
export function instanceOfGetTimeSeriesMa200Response(
  value: object,
): value is GetTimeSeriesMa200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMa200ResponseFromJSON(
  json: any,
): GetTimeSeriesMa200Response {
  return GetTimeSeriesMa200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesMa200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMa200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesMa200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesMa200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesMa200ResponseToJSON(
  json: any,
): GetTimeSeriesMa200Response {
  return GetTimeSeriesMa200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesMa200ResponseToJSONTyped(
  value?: GetTimeSeriesMa200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesMa200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesMa200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

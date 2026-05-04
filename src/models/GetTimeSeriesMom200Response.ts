/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMom200ResponseMeta } from "./GetTimeSeriesMom200ResponseMeta";
import {
  GetTimeSeriesMom200ResponseMetaFromJSON,
  GetTimeSeriesMom200ResponseMetaFromJSONTyped,
  GetTimeSeriesMom200ResponseMetaToJSON,
  GetTimeSeriesMom200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesMom200ResponseMeta";
import type { GetTimeSeriesMom200ResponseValuesInner } from "./GetTimeSeriesMom200ResponseValuesInner";
import {
  GetTimeSeriesMom200ResponseValuesInnerFromJSON,
  GetTimeSeriesMom200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesMom200ResponseValuesInnerToJSON,
  GetTimeSeriesMom200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesMom200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesMom200Response
 */
export interface GetTimeSeriesMom200Response {
  /**
   *
   * @type {GetTimeSeriesMom200ResponseMeta}
   * @memberof GetTimeSeriesMom200Response
   */
  meta: GetTimeSeriesMom200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesMom200ResponseValuesInner>}
   * @memberof GetTimeSeriesMom200Response
   */
  values: Array<GetTimeSeriesMom200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesMom200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMom200Response interface.
 */
export function instanceOfGetTimeSeriesMom200Response(
  value: object,
): value is GetTimeSeriesMom200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMom200ResponseFromJSON(
  json: any,
): GetTimeSeriesMom200Response {
  return GetTimeSeriesMom200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesMom200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMom200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesMom200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesMom200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesMom200ResponseToJSON(
  json: any,
): GetTimeSeriesMom200Response {
  return GetTimeSeriesMom200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesMom200ResponseToJSONTyped(
  value?: GetTimeSeriesMom200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesMom200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesMom200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

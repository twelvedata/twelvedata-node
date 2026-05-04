/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesDx200ResponseMeta } from "./GetTimeSeriesDx200ResponseMeta";
import {
  GetTimeSeriesDx200ResponseMetaFromJSON,
  GetTimeSeriesDx200ResponseMetaFromJSONTyped,
  GetTimeSeriesDx200ResponseMetaToJSON,
  GetTimeSeriesDx200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesDx200ResponseMeta";
import type { GetTimeSeriesDx200ResponseValuesInner } from "./GetTimeSeriesDx200ResponseValuesInner";
import {
  GetTimeSeriesDx200ResponseValuesInnerFromJSON,
  GetTimeSeriesDx200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesDx200ResponseValuesInnerToJSON,
  GetTimeSeriesDx200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesDx200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesDx200Response
 */
export interface GetTimeSeriesDx200Response {
  /**
   *
   * @type {GetTimeSeriesDx200ResponseMeta}
   * @memberof GetTimeSeriesDx200Response
   */
  meta: GetTimeSeriesDx200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesDx200ResponseValuesInner>}
   * @memberof GetTimeSeriesDx200Response
   */
  values: Array<GetTimeSeriesDx200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesDx200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesDx200Response interface.
 */
export function instanceOfGetTimeSeriesDx200Response(
  value: object,
): value is GetTimeSeriesDx200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesDx200ResponseFromJSON(
  json: any,
): GetTimeSeriesDx200Response {
  return GetTimeSeriesDx200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesDx200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesDx200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesDx200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesDx200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesDx200ResponseToJSON(
  json: any,
): GetTimeSeriesDx200Response {
  return GetTimeSeriesDx200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesDx200ResponseToJSONTyped(
  value?: GetTimeSeriesDx200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesDx200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesDx200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

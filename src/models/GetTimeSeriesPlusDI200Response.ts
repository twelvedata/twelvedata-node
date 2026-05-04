/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesPlusDI200ResponseMeta } from "./GetTimeSeriesPlusDI200ResponseMeta";
import {
  GetTimeSeriesPlusDI200ResponseMetaFromJSON,
  GetTimeSeriesPlusDI200ResponseMetaFromJSONTyped,
  GetTimeSeriesPlusDI200ResponseMetaToJSON,
  GetTimeSeriesPlusDI200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesPlusDI200ResponseMeta";
import type { GetTimeSeriesPlusDI200ResponseValuesInner } from "./GetTimeSeriesPlusDI200ResponseValuesInner";
import {
  GetTimeSeriesPlusDI200ResponseValuesInnerFromJSON,
  GetTimeSeriesPlusDI200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesPlusDI200ResponseValuesInnerToJSON,
  GetTimeSeriesPlusDI200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesPlusDI200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesPlusDI200Response
 */
export interface GetTimeSeriesPlusDI200Response {
  /**
   *
   * @type {GetTimeSeriesPlusDI200ResponseMeta}
   * @memberof GetTimeSeriesPlusDI200Response
   */
  meta: GetTimeSeriesPlusDI200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesPlusDI200ResponseValuesInner>}
   * @memberof GetTimeSeriesPlusDI200Response
   */
  values: Array<GetTimeSeriesPlusDI200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesPlusDI200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesPlusDI200Response interface.
 */
export function instanceOfGetTimeSeriesPlusDI200Response(
  value: object,
): value is GetTimeSeriesPlusDI200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesPlusDI200ResponseFromJSON(
  json: any,
): GetTimeSeriesPlusDI200Response {
  return GetTimeSeriesPlusDI200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesPlusDI200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesPlusDI200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesPlusDI200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesPlusDI200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesPlusDI200ResponseToJSON(
  json: any,
): GetTimeSeriesPlusDI200Response {
  return GetTimeSeriesPlusDI200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesPlusDI200ResponseToJSONTyped(
  value?: GetTimeSeriesPlusDI200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesPlusDI200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesPlusDI200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

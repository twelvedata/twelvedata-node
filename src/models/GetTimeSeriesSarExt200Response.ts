/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesSarExt200ResponseMeta } from "./GetTimeSeriesSarExt200ResponseMeta";
import {
  GetTimeSeriesSarExt200ResponseMetaFromJSON,
  GetTimeSeriesSarExt200ResponseMetaFromJSONTyped,
  GetTimeSeriesSarExt200ResponseMetaToJSON,
  GetTimeSeriesSarExt200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesSarExt200ResponseMeta";
import type { GetTimeSeriesSarExt200ResponseValuesInner } from "./GetTimeSeriesSarExt200ResponseValuesInner";
import {
  GetTimeSeriesSarExt200ResponseValuesInnerFromJSON,
  GetTimeSeriesSarExt200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesSarExt200ResponseValuesInnerToJSON,
  GetTimeSeriesSarExt200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesSarExt200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesSarExt200Response
 */
export interface GetTimeSeriesSarExt200Response {
  /**
   *
   * @type {GetTimeSeriesSarExt200ResponseMeta}
   * @memberof GetTimeSeriesSarExt200Response
   */
  meta: GetTimeSeriesSarExt200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesSarExt200ResponseValuesInner>}
   * @memberof GetTimeSeriesSarExt200Response
   */
  values: Array<GetTimeSeriesSarExt200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesSarExt200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesSarExt200Response interface.
 */
export function instanceOfGetTimeSeriesSarExt200Response(
  value: object,
): value is GetTimeSeriesSarExt200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesSarExt200ResponseFromJSON(
  json: any,
): GetTimeSeriesSarExt200Response {
  return GetTimeSeriesSarExt200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesSarExt200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSarExt200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesSarExt200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesSarExt200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesSarExt200ResponseToJSON(
  json: any,
): GetTimeSeriesSarExt200Response {
  return GetTimeSeriesSarExt200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesSarExt200ResponseToJSONTyped(
  value?: GetTimeSeriesSarExt200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesSarExt200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesSarExt200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

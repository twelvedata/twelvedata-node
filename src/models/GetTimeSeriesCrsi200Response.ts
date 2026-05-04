/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesCrsi200ResponseMeta } from "./GetTimeSeriesCrsi200ResponseMeta";
import {
  GetTimeSeriesCrsi200ResponseMetaFromJSON,
  GetTimeSeriesCrsi200ResponseMetaFromJSONTyped,
  GetTimeSeriesCrsi200ResponseMetaToJSON,
  GetTimeSeriesCrsi200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesCrsi200ResponseMeta";
import type { GetTimeSeriesCrsi200ResponseValuesInner } from "./GetTimeSeriesCrsi200ResponseValuesInner";
import {
  GetTimeSeriesCrsi200ResponseValuesInnerFromJSON,
  GetTimeSeriesCrsi200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesCrsi200ResponseValuesInnerToJSON,
  GetTimeSeriesCrsi200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesCrsi200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesCrsi200Response
 */
export interface GetTimeSeriesCrsi200Response {
  /**
   *
   * @type {GetTimeSeriesCrsi200ResponseMeta}
   * @memberof GetTimeSeriesCrsi200Response
   */
  meta: GetTimeSeriesCrsi200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesCrsi200ResponseValuesInner>}
   * @memberof GetTimeSeriesCrsi200Response
   */
  values: Array<GetTimeSeriesCrsi200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesCrsi200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesCrsi200Response interface.
 */
export function instanceOfGetTimeSeriesCrsi200Response(
  value: object,
): value is GetTimeSeriesCrsi200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesCrsi200ResponseFromJSON(
  json: any,
): GetTimeSeriesCrsi200Response {
  return GetTimeSeriesCrsi200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesCrsi200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCrsi200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesCrsi200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesCrsi200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesCrsi200ResponseToJSON(
  json: any,
): GetTimeSeriesCrsi200Response {
  return GetTimeSeriesCrsi200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesCrsi200ResponseToJSONTyped(
  value?: GetTimeSeriesCrsi200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesCrsi200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesCrsi200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

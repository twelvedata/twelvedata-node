/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesCoppock200ResponseValuesInner } from "./GetTimeSeriesCoppock200ResponseValuesInner";
import {
  GetTimeSeriesCoppock200ResponseValuesInnerFromJSON,
  GetTimeSeriesCoppock200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesCoppock200ResponseValuesInnerToJSON,
  GetTimeSeriesCoppock200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesCoppock200ResponseValuesInner";
import type { GetTimeSeriesCoppock200ResponseMeta } from "./GetTimeSeriesCoppock200ResponseMeta";
import {
  GetTimeSeriesCoppock200ResponseMetaFromJSON,
  GetTimeSeriesCoppock200ResponseMetaFromJSONTyped,
  GetTimeSeriesCoppock200ResponseMetaToJSON,
  GetTimeSeriesCoppock200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesCoppock200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesCoppock200Response
 */
export interface GetTimeSeriesCoppock200Response {
  /**
   *
   * @type {GetTimeSeriesCoppock200ResponseMeta}
   * @memberof GetTimeSeriesCoppock200Response
   */
  meta: GetTimeSeriesCoppock200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesCoppock200ResponseValuesInner>}
   * @memberof GetTimeSeriesCoppock200Response
   */
  values: Array<GetTimeSeriesCoppock200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesCoppock200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesCoppock200Response interface.
 */
export function instanceOfGetTimeSeriesCoppock200Response(
  value: object,
): value is GetTimeSeriesCoppock200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesCoppock200ResponseFromJSON(
  json: any,
): GetTimeSeriesCoppock200Response {
  return GetTimeSeriesCoppock200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesCoppock200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCoppock200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesCoppock200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesCoppock200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesCoppock200ResponseToJSON(
  json: any,
): GetTimeSeriesCoppock200Response {
  return GetTimeSeriesCoppock200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesCoppock200ResponseToJSONTyped(
  value?: GetTimeSeriesCoppock200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesCoppock200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesCoppock200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

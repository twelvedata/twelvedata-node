/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesBop200ResponseValuesInner } from "./GetTimeSeriesBop200ResponseValuesInner";
import {
  GetTimeSeriesBop200ResponseValuesInnerFromJSON,
  GetTimeSeriesBop200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesBop200ResponseValuesInnerToJSON,
  GetTimeSeriesBop200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesBop200ResponseValuesInner";
import type { GetTimeSeriesBop200ResponseMeta } from "./GetTimeSeriesBop200ResponseMeta";
import {
  GetTimeSeriesBop200ResponseMetaFromJSON,
  GetTimeSeriesBop200ResponseMetaFromJSONTyped,
  GetTimeSeriesBop200ResponseMetaToJSON,
  GetTimeSeriesBop200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesBop200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesBop200Response
 */
export interface GetTimeSeriesBop200Response {
  /**
   *
   * @type {GetTimeSeriesBop200ResponseMeta}
   * @memberof GetTimeSeriesBop200Response
   */
  meta: GetTimeSeriesBop200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesBop200ResponseValuesInner>}
   * @memberof GetTimeSeriesBop200Response
   */
  values: Array<GetTimeSeriesBop200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesBop200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesBop200Response interface.
 */
export function instanceOfGetTimeSeriesBop200Response(
  value: object,
): value is GetTimeSeriesBop200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesBop200ResponseFromJSON(
  json: any,
): GetTimeSeriesBop200Response {
  return GetTimeSeriesBop200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesBop200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesBop200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesBop200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesBop200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesBop200ResponseToJSON(
  json: any,
): GetTimeSeriesBop200Response {
  return GetTimeSeriesBop200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesBop200ResponseToJSONTyped(
  value?: GetTimeSeriesBop200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesBop200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesBop200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

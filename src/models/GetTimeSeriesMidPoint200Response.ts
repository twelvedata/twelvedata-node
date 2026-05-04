/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMidPoint200ResponseMeta } from "./GetTimeSeriesMidPoint200ResponseMeta";
import {
  GetTimeSeriesMidPoint200ResponseMetaFromJSON,
  GetTimeSeriesMidPoint200ResponseMetaFromJSONTyped,
  GetTimeSeriesMidPoint200ResponseMetaToJSON,
  GetTimeSeriesMidPoint200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesMidPoint200ResponseMeta";
import type { GetTimeSeriesMidPoint200ResponseValuesInner } from "./GetTimeSeriesMidPoint200ResponseValuesInner";
import {
  GetTimeSeriesMidPoint200ResponseValuesInnerFromJSON,
  GetTimeSeriesMidPoint200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesMidPoint200ResponseValuesInnerToJSON,
  GetTimeSeriesMidPoint200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesMidPoint200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesMidPoint200Response
 */
export interface GetTimeSeriesMidPoint200Response {
  /**
   *
   * @type {GetTimeSeriesMidPoint200ResponseMeta}
   * @memberof GetTimeSeriesMidPoint200Response
   */
  meta: GetTimeSeriesMidPoint200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesMidPoint200ResponseValuesInner>}
   * @memberof GetTimeSeriesMidPoint200Response
   */
  values: Array<GetTimeSeriesMidPoint200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesMidPoint200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMidPoint200Response interface.
 */
export function instanceOfGetTimeSeriesMidPoint200Response(
  value: object,
): value is GetTimeSeriesMidPoint200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMidPoint200ResponseFromJSON(
  json: any,
): GetTimeSeriesMidPoint200Response {
  return GetTimeSeriesMidPoint200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesMidPoint200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMidPoint200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesMidPoint200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesMidPoint200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesMidPoint200ResponseToJSON(
  json: any,
): GetTimeSeriesMidPoint200Response {
  return GetTimeSeriesMidPoint200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesMidPoint200ResponseToJSONTyped(
  value?: GetTimeSeriesMidPoint200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesMidPoint200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesMidPoint200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

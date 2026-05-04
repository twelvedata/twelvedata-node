/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesBeta200ResponseMeta } from "./GetTimeSeriesBeta200ResponseMeta";
import {
  GetTimeSeriesBeta200ResponseMetaFromJSON,
  GetTimeSeriesBeta200ResponseMetaFromJSONTyped,
  GetTimeSeriesBeta200ResponseMetaToJSON,
  GetTimeSeriesBeta200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesBeta200ResponseMeta";
import type { GetTimeSeriesBeta200ResponseValuesInner } from "./GetTimeSeriesBeta200ResponseValuesInner";
import {
  GetTimeSeriesBeta200ResponseValuesInnerFromJSON,
  GetTimeSeriesBeta200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesBeta200ResponseValuesInnerToJSON,
  GetTimeSeriesBeta200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesBeta200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesBeta200Response
 */
export interface GetTimeSeriesBeta200Response {
  /**
   *
   * @type {GetTimeSeriesBeta200ResponseMeta}
   * @memberof GetTimeSeriesBeta200Response
   */
  meta: GetTimeSeriesBeta200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesBeta200ResponseValuesInner>}
   * @memberof GetTimeSeriesBeta200Response
   */
  values: Array<GetTimeSeriesBeta200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesBeta200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesBeta200Response interface.
 */
export function instanceOfGetTimeSeriesBeta200Response(
  value: object,
): value is GetTimeSeriesBeta200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesBeta200ResponseFromJSON(
  json: any,
): GetTimeSeriesBeta200Response {
  return GetTimeSeriesBeta200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesBeta200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesBeta200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesBeta200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesBeta200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesBeta200ResponseToJSON(
  json: any,
): GetTimeSeriesBeta200Response {
  return GetTimeSeriesBeta200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesBeta200ResponseToJSONTyped(
  value?: GetTimeSeriesBeta200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesBeta200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesBeta200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

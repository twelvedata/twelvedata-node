/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesLinearReg200ResponseMeta } from "./GetTimeSeriesLinearReg200ResponseMeta";
import {
  GetTimeSeriesLinearReg200ResponseMetaFromJSON,
  GetTimeSeriesLinearReg200ResponseMetaFromJSONTyped,
  GetTimeSeriesLinearReg200ResponseMetaToJSON,
  GetTimeSeriesLinearReg200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesLinearReg200ResponseMeta";
import type { GetTimeSeriesLinearReg200ResponseValuesInner } from "./GetTimeSeriesLinearReg200ResponseValuesInner";
import {
  GetTimeSeriesLinearReg200ResponseValuesInnerFromJSON,
  GetTimeSeriesLinearReg200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesLinearReg200ResponseValuesInnerToJSON,
  GetTimeSeriesLinearReg200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesLinearReg200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesLinearReg200Response
 */
export interface GetTimeSeriesLinearReg200Response {
  /**
   *
   * @type {GetTimeSeriesLinearReg200ResponseMeta}
   * @memberof GetTimeSeriesLinearReg200Response
   */
  meta: GetTimeSeriesLinearReg200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesLinearReg200ResponseValuesInner>}
   * @memberof GetTimeSeriesLinearReg200Response
   */
  values: Array<GetTimeSeriesLinearReg200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesLinearReg200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesLinearReg200Response interface.
 */
export function instanceOfGetTimeSeriesLinearReg200Response(
  value: object,
): value is GetTimeSeriesLinearReg200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesLinearReg200ResponseFromJSON(
  json: any,
): GetTimeSeriesLinearReg200Response {
  return GetTimeSeriesLinearReg200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesLinearReg200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesLinearReg200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesLinearReg200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesLinearReg200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesLinearReg200ResponseToJSON(
  json: any,
): GetTimeSeriesLinearReg200Response {
  return GetTimeSeriesLinearReg200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesLinearReg200ResponseToJSONTyped(
  value?: GetTimeSeriesLinearReg200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesLinearReg200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesLinearReg200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesAtr200ResponseValuesInner } from "./GetTimeSeriesAtr200ResponseValuesInner";
import {
  GetTimeSeriesAtr200ResponseValuesInnerFromJSON,
  GetTimeSeriesAtr200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesAtr200ResponseValuesInnerToJSON,
  GetTimeSeriesAtr200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesAtr200ResponseValuesInner";
import type { GetTimeSeriesAtr200ResponseMeta } from "./GetTimeSeriesAtr200ResponseMeta";
import {
  GetTimeSeriesAtr200ResponseMetaFromJSON,
  GetTimeSeriesAtr200ResponseMetaFromJSONTyped,
  GetTimeSeriesAtr200ResponseMetaToJSON,
  GetTimeSeriesAtr200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesAtr200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesAtr200Response
 */
export interface GetTimeSeriesAtr200Response {
  /**
   *
   * @type {GetTimeSeriesAtr200ResponseMeta}
   * @memberof GetTimeSeriesAtr200Response
   */
  meta: GetTimeSeriesAtr200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesAtr200ResponseValuesInner>}
   * @memberof GetTimeSeriesAtr200Response
   */
  values: Array<GetTimeSeriesAtr200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesAtr200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAtr200Response interface.
 */
export function instanceOfGetTimeSeriesAtr200Response(
  value: object,
): value is GetTimeSeriesAtr200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesAtr200ResponseFromJSON(
  json: any,
): GetTimeSeriesAtr200Response {
  return GetTimeSeriesAtr200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesAtr200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAtr200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesAtr200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesAtr200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesAtr200ResponseToJSON(
  json: any,
): GetTimeSeriesAtr200Response {
  return GetTimeSeriesAtr200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesAtr200ResponseToJSONTyped(
  value?: GetTimeSeriesAtr200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesAtr200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesAtr200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

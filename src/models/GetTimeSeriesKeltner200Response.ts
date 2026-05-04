/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesKeltner200ResponseMeta } from "./GetTimeSeriesKeltner200ResponseMeta";
import {
  GetTimeSeriesKeltner200ResponseMetaFromJSON,
  GetTimeSeriesKeltner200ResponseMetaFromJSONTyped,
  GetTimeSeriesKeltner200ResponseMetaToJSON,
  GetTimeSeriesKeltner200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesKeltner200ResponseMeta";
import type { GetTimeSeriesKeltner200ResponseValuesInner } from "./GetTimeSeriesKeltner200ResponseValuesInner";
import {
  GetTimeSeriesKeltner200ResponseValuesInnerFromJSON,
  GetTimeSeriesKeltner200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesKeltner200ResponseValuesInnerToJSON,
  GetTimeSeriesKeltner200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesKeltner200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesKeltner200Response
 */
export interface GetTimeSeriesKeltner200Response {
  /**
   *
   * @type {GetTimeSeriesKeltner200ResponseMeta}
   * @memberof GetTimeSeriesKeltner200Response
   */
  meta: GetTimeSeriesKeltner200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesKeltner200ResponseValuesInner>}
   * @memberof GetTimeSeriesKeltner200Response
   */
  values: Array<GetTimeSeriesKeltner200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesKeltner200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesKeltner200Response interface.
 */
export function instanceOfGetTimeSeriesKeltner200Response(
  value: object,
): value is GetTimeSeriesKeltner200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesKeltner200ResponseFromJSON(
  json: any,
): GetTimeSeriesKeltner200Response {
  return GetTimeSeriesKeltner200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesKeltner200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesKeltner200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesKeltner200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesKeltner200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesKeltner200ResponseToJSON(
  json: any,
): GetTimeSeriesKeltner200Response {
  return GetTimeSeriesKeltner200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesKeltner200ResponseToJSONTyped(
  value?: GetTimeSeriesKeltner200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesKeltner200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesKeltner200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesPivotPointsHL200ResponseMeta } from "./GetTimeSeriesPivotPointsHL200ResponseMeta";
import {
  GetTimeSeriesPivotPointsHL200ResponseMetaFromJSON,
  GetTimeSeriesPivotPointsHL200ResponseMetaFromJSONTyped,
  GetTimeSeriesPivotPointsHL200ResponseMetaToJSON,
  GetTimeSeriesPivotPointsHL200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesPivotPointsHL200ResponseMeta";
import type { GetTimeSeriesPivotPointsHL200ResponseValuesInner } from "./GetTimeSeriesPivotPointsHL200ResponseValuesInner";
import {
  GetTimeSeriesPivotPointsHL200ResponseValuesInnerFromJSON,
  GetTimeSeriesPivotPointsHL200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesPivotPointsHL200ResponseValuesInnerToJSON,
  GetTimeSeriesPivotPointsHL200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesPivotPointsHL200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesPivotPointsHL200Response
 */
export interface GetTimeSeriesPivotPointsHL200Response {
  /**
   *
   * @type {GetTimeSeriesPivotPointsHL200ResponseMeta}
   * @memberof GetTimeSeriesPivotPointsHL200Response
   */
  meta: GetTimeSeriesPivotPointsHL200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesPivotPointsHL200ResponseValuesInner>}
   * @memberof GetTimeSeriesPivotPointsHL200Response
   */
  values: Array<GetTimeSeriesPivotPointsHL200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesPivotPointsHL200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesPivotPointsHL200Response interface.
 */
export function instanceOfGetTimeSeriesPivotPointsHL200Response(
  value: object,
): value is GetTimeSeriesPivotPointsHL200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesPivotPointsHL200ResponseFromJSON(
  json: any,
): GetTimeSeriesPivotPointsHL200Response {
  return GetTimeSeriesPivotPointsHL200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesPivotPointsHL200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesPivotPointsHL200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesPivotPointsHL200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesPivotPointsHL200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesPivotPointsHL200ResponseToJSON(
  json: any,
): GetTimeSeriesPivotPointsHL200Response {
  return GetTimeSeriesPivotPointsHL200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesPivotPointsHL200ResponseToJSONTyped(
  value?: GetTimeSeriesPivotPointsHL200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesPivotPointsHL200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesPivotPointsHL200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

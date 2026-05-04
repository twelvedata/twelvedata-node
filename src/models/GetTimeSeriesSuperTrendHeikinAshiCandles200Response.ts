/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner } from "./GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner";
import {
  GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInnerFromJSON,
  GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInnerToJSON,
  GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner";
import type { GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta } from "./GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta";
import {
  GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaFromJSON,
  GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaFromJSONTyped,
  GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaToJSON,
  GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesSuperTrendHeikinAshiCandles200Response
 */
export interface GetTimeSeriesSuperTrendHeikinAshiCandles200Response {
  /**
   *
   * @type {GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200Response
   */
  meta: GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner>}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200Response
   */
  values: Array<GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesSuperTrendHeikinAshiCandles200Response interface.
 */
export function instanceOfGetTimeSeriesSuperTrendHeikinAshiCandles200Response(
  value: object,
): value is GetTimeSeriesSuperTrendHeikinAshiCandles200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseFromJSON(
  json: any,
): GetTimeSeriesSuperTrendHeikinAshiCandles200Response {
  return GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSuperTrendHeikinAshiCandles200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaFromJSON(
      json["meta"],
    ),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseToJSON(
  json: any,
): GetTimeSeriesSuperTrendHeikinAshiCandles200Response {
  return GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseToJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseToJSONTyped(
  value?: GetTimeSeriesSuperTrendHeikinAshiCandles200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaToJSON(
      value["meta"],
    ),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}

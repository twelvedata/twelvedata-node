/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface GetTimeSeriesStochF200ResponseValuesInner
 */
export interface GetTimeSeriesStochF200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesStochF200ResponseValuesInner
   */
  datetime: string;
  /**
   * fast_k value
   * @type {string}
   * @memberof GetTimeSeriesStochF200ResponseValuesInner
   */
  fastK: string;
  /**
   * fast_d value
   * @type {string}
   * @memberof GetTimeSeriesStochF200ResponseValuesInner
   */
  fastD: string;
}

/**
 * Check if a given object implements the GetTimeSeriesStochF200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesStochF200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesStochF200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("fastK" in value) || value["fastK"] === undefined) return false;
  if (!("fastD" in value) || value["fastD"] === undefined) return false;
  return true;
}

export function GetTimeSeriesStochF200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesStochF200ResponseValuesInner {
  return GetTimeSeriesStochF200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesStochF200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesStochF200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    fastK: json["fast_k"],
    fastD: json["fast_d"],
  };
}

export function GetTimeSeriesStochF200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesStochF200ResponseValuesInner {
  return GetTimeSeriesStochF200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesStochF200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesStochF200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    fast_k: value["fastK"],
    fast_d: value["fastD"],
  };
}

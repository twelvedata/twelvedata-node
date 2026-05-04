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
 * @interface GetTimeSeriesMinusDM200ResponseValuesInner
 */
export interface GetTimeSeriesMinusDM200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMinusDM200ResponseValuesInner
   */
  datetime: string;
  /**
   * Minus Directional Movement value
   * @type {string}
   * @memberof GetTimeSeriesMinusDM200ResponseValuesInner
   */
  minusDm: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMinusDM200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMinusDM200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMinusDM200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("minusDm" in value) || value["minusDm"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMinusDM200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMinusDM200ResponseValuesInner {
  return GetTimeSeriesMinusDM200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMinusDM200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMinusDM200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    minusDm: json["minus_dm"],
  };
}

export function GetTimeSeriesMinusDM200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMinusDM200ResponseValuesInner {
  return GetTimeSeriesMinusDM200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMinusDM200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMinusDM200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    minus_dm: value["minusDm"],
  };
}

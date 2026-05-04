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
 * @interface GetTimeSeriesObv200ResponseValuesInner
 */
export interface GetTimeSeriesObv200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesObv200ResponseValuesInner
   */
  datetime: string;
  /**
   * obv value
   * @type {string}
   * @memberof GetTimeSeriesObv200ResponseValuesInner
   */
  obv: string;
}

/**
 * Check if a given object implements the GetTimeSeriesObv200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesObv200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesObv200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("obv" in value) || value["obv"] === undefined) return false;
  return true;
}

export function GetTimeSeriesObv200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesObv200ResponseValuesInner {
  return GetTimeSeriesObv200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesObv200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesObv200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    obv: json["obv"],
  };
}

export function GetTimeSeriesObv200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesObv200ResponseValuesInner {
  return GetTimeSeriesObv200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesObv200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesObv200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    obv: value["obv"],
  };
}

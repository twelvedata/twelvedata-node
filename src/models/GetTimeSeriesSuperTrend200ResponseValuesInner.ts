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
 * @interface GetTimeSeriesSuperTrend200ResponseValuesInner
 */
export interface GetTimeSeriesSuperTrend200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesSuperTrend200ResponseValuesInner
   */
  datetime: string;
  /**
   * SuperTrend value
   * @type {string}
   * @memberof GetTimeSeriesSuperTrend200ResponseValuesInner
   */
  supertrend: string;
}

/**
 * Check if a given object implements the GetTimeSeriesSuperTrend200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesSuperTrend200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesSuperTrend200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("supertrend" in value) || value["supertrend"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesSuperTrend200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesSuperTrend200ResponseValuesInner {
  return GetTimeSeriesSuperTrend200ResponseValuesInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesSuperTrend200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSuperTrend200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    supertrend: json["supertrend"],
  };
}

export function GetTimeSeriesSuperTrend200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesSuperTrend200ResponseValuesInner {
  return GetTimeSeriesSuperTrend200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesSuperTrend200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesSuperTrend200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    supertrend: value["supertrend"],
  };
}

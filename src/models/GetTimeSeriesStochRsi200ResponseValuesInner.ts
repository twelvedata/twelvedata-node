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
 * @interface GetTimeSeriesStochRsi200ResponseValuesInner
 */
export interface GetTimeSeriesStochRsi200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesStochRsi200ResponseValuesInner
   */
  datetime?: string;
  /**
   * K value
   * @type {string}
   * @memberof GetTimeSeriesStochRsi200ResponseValuesInner
   */
  k?: string;
  /**
   * D value
   * @type {string}
   * @memberof GetTimeSeriesStochRsi200ResponseValuesInner
   */
  d?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesStochRsi200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesStochRsi200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesStochRsi200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesStochRsi200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesStochRsi200ResponseValuesInner {
  return GetTimeSeriesStochRsi200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesStochRsi200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesStochRsi200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    k: json["k"] == null ? undefined : json["k"],
    d: json["d"] == null ? undefined : json["d"],
  };
}

export function GetTimeSeriesStochRsi200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesStochRsi200ResponseValuesInner {
  return GetTimeSeriesStochRsi200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesStochRsi200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesStochRsi200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    k: value["k"],
    d: value["d"],
  };
}

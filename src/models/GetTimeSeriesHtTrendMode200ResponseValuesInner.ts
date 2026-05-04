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
 * @interface GetTimeSeriesHtTrendMode200ResponseValuesInner
 */
export interface GetTimeSeriesHtTrendMode200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesHtTrendMode200ResponseValuesInner
   */
  datetime: string;
  /**
   * ht_trendmode value
   * @type {string}
   * @memberof GetTimeSeriesHtTrendMode200ResponseValuesInner
   */
  htTrendmode: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHtTrendMode200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesHtTrendMode200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesHtTrendMode200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("htTrendmode" in value) || value["htTrendmode"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesHtTrendMode200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesHtTrendMode200ResponseValuesInner {
  return GetTimeSeriesHtTrendMode200ResponseValuesInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesHtTrendMode200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtTrendMode200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    htTrendmode: json["ht_trendmode"],
  };
}

export function GetTimeSeriesHtTrendMode200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesHtTrendMode200ResponseValuesInner {
  return GetTimeSeriesHtTrendMode200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesHtTrendMode200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesHtTrendMode200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    ht_trendmode: value["htTrendmode"],
  };
}

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
 * @interface GetTimeSeriesAd200ResponseValuesInner
 */
export interface GetTimeSeriesAd200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesAd200ResponseValuesInner
   */
  datetime?: string;
  /**
   * AD value
   * @type {string}
   * @memberof GetTimeSeriesAd200ResponseValuesInner
   */
  ad?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAd200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesAd200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesAd200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesAd200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesAd200ResponseValuesInner {
  return GetTimeSeriesAd200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesAd200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAd200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    ad: json["ad"] == null ? undefined : json["ad"],
  };
}

export function GetTimeSeriesAd200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesAd200ResponseValuesInner {
  return GetTimeSeriesAd200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesAd200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesAd200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    ad: value["ad"],
  };
}

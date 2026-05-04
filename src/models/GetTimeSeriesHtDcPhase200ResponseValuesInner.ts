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
 * @interface GetTimeSeriesHtDcPhase200ResponseValuesInner
 */
export interface GetTimeSeriesHtDcPhase200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesHtDcPhase200ResponseValuesInner
   */
  datetime: string;
  /**
   * HT_DCPHASE value
   * @type {string}
   * @memberof GetTimeSeriesHtDcPhase200ResponseValuesInner
   */
  htDcphase: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHtDcPhase200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesHtDcPhase200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesHtDcPhase200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("htDcphase" in value) || value["htDcphase"] === undefined) return false;
  return true;
}

export function GetTimeSeriesHtDcPhase200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesHtDcPhase200ResponseValuesInner {
  return GetTimeSeriesHtDcPhase200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesHtDcPhase200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtDcPhase200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    htDcphase: json["ht_dcphase"],
  };
}

export function GetTimeSeriesHtDcPhase200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesHtDcPhase200ResponseValuesInner {
  return GetTimeSeriesHtDcPhase200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesHtDcPhase200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesHtDcPhase200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    ht_dcphase: value["htDcphase"],
  };
}

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
 * @interface GetTimeSeriesKst200ResponseValuesInner
 */
export interface GetTimeSeriesKst200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesKst200ResponseValuesInner
   */
  datetime?: string;
  /**
   * KST value
   * @type {string}
   * @memberof GetTimeSeriesKst200ResponseValuesInner
   */
  kst?: string;
  /**
   * KST signal value
   * @type {string}
   * @memberof GetTimeSeriesKst200ResponseValuesInner
   */
  kstSignal?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesKst200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesKst200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesKst200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesKst200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesKst200ResponseValuesInner {
  return GetTimeSeriesKst200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesKst200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesKst200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    kst: json["kst"] == null ? undefined : json["kst"],
    kstSignal: json["kst_signal"] == null ? undefined : json["kst_signal"],
  };
}

export function GetTimeSeriesKst200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesKst200ResponseValuesInner {
  return GetTimeSeriesKst200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesKst200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesKst200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    kst: value["kst"],
    kst_signal: value["kstSignal"],
  };
}

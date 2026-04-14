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
 * @interface GetTimeSeriesMaxIndex200ResponseValuesInner
 */
export interface GetTimeSeriesMaxIndex200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMaxIndex200ResponseValuesInner
   */
  datetime?: string;
  /**
   * maxidx value
   * @type {string}
   * @memberof GetTimeSeriesMaxIndex200ResponseValuesInner
   */
  maxidx?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMaxIndex200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMaxIndex200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMaxIndex200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesMaxIndex200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMaxIndex200ResponseValuesInner {
  return GetTimeSeriesMaxIndex200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMaxIndex200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMaxIndex200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    maxidx: json["maxidx"] == null ? undefined : json["maxidx"],
  };
}

export function GetTimeSeriesMaxIndex200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMaxIndex200ResponseValuesInner {
  return GetTimeSeriesMaxIndex200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMaxIndex200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMaxIndex200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    maxidx: value["maxidx"],
  };
}

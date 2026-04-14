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
 * @interface GetTimeSeriesMinMaxIndex200ResponseValuesInner
 */
export interface GetTimeSeriesMinMaxIndex200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMinMaxIndex200ResponseValuesInner
   */
  datetime?: string;
  /**
   * Index of the lowest value over the specified period
   * @type {string}
   * @memberof GetTimeSeriesMinMaxIndex200ResponseValuesInner
   */
  minidx?: string;
  /**
   * Index of the highest value over the specified period
   * @type {string}
   * @memberof GetTimeSeriesMinMaxIndex200ResponseValuesInner
   */
  maxidx?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMinMaxIndex200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMinMaxIndex200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMinMaxIndex200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesMinMaxIndex200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMinMaxIndex200ResponseValuesInner {
  return GetTimeSeriesMinMaxIndex200ResponseValuesInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesMinMaxIndex200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMinMaxIndex200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    minidx: json["minidx"] == null ? undefined : json["minidx"],
    maxidx: json["maxidx"] == null ? undefined : json["maxidx"],
  };
}

export function GetTimeSeriesMinMaxIndex200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMinMaxIndex200ResponseValuesInner {
  return GetTimeSeriesMinMaxIndex200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMinMaxIndex200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMinMaxIndex200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    minidx: value["minidx"],
    maxidx: value["maxidx"],
  };
}

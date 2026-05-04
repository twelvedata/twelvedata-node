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
  datetime: string;
  /**
   * Index of the lowest value over the specified period
   * @type {string}
   * @memberof GetTimeSeriesMinMaxIndex200ResponseValuesInner
   */
  minidx: string;
  /**
   * Index of the highest value over the specified period
   * @type {string}
   * @memberof GetTimeSeriesMinMaxIndex200ResponseValuesInner
   */
  maxidx: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMinMaxIndex200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMinMaxIndex200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMinMaxIndex200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("minidx" in value) || value["minidx"] === undefined) return false;
  if (!("maxidx" in value) || value["maxidx"] === undefined) return false;
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
    datetime: json["datetime"],
    minidx: json["minidx"],
    maxidx: json["maxidx"],
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

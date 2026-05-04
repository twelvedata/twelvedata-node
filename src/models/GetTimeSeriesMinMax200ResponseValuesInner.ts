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
 * @interface GetTimeSeriesMinMax200ResponseValuesInner
 */
export interface GetTimeSeriesMinMax200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMinMax200ResponseValuesInner
   */
  datetime: string;
  /**
   * Min value
   * @type {string}
   * @memberof GetTimeSeriesMinMax200ResponseValuesInner
   */
  min: string;
  /**
   * Max value
   * @type {string}
   * @memberof GetTimeSeriesMinMax200ResponseValuesInner
   */
  max: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMinMax200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMinMax200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMinMax200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("min" in value) || value["min"] === undefined) return false;
  if (!("max" in value) || value["max"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMinMax200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMinMax200ResponseValuesInner {
  return GetTimeSeriesMinMax200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMinMax200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMinMax200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    min: json["min"],
    max: json["max"],
  };
}

export function GetTimeSeriesMinMax200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMinMax200ResponseValuesInner {
  return GetTimeSeriesMinMax200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMinMax200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMinMax200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    min: value["min"],
    max: value["max"],
  };
}

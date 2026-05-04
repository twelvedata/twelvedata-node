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
 * @interface GetTimeSeriesAroonOsc200ResponseValuesInner
 */
export interface GetTimeSeriesAroonOsc200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesAroonOsc200ResponseValuesInner
   */
  datetime: string;
  /**
   * Aroon oscillator value
   * @type {string}
   * @memberof GetTimeSeriesAroonOsc200ResponseValuesInner
   */
  aroonosc: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAroonOsc200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesAroonOsc200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesAroonOsc200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("aroonosc" in value) || value["aroonosc"] === undefined) return false;
  return true;
}

export function GetTimeSeriesAroonOsc200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesAroonOsc200ResponseValuesInner {
  return GetTimeSeriesAroonOsc200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesAroonOsc200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAroonOsc200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    aroonosc: json["aroonosc"],
  };
}

export function GetTimeSeriesAroonOsc200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesAroonOsc200ResponseValuesInner {
  return GetTimeSeriesAroonOsc200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesAroonOsc200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesAroonOsc200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    aroonosc: value["aroonosc"],
  };
}

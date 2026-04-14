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
 * @interface GetTimeSeriesUltOsc200ResponseValuesInner
 */
export interface GetTimeSeriesUltOsc200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesUltOsc200ResponseValuesInner
   */
  datetime?: string;
  /**
   * Ultimate Oscillator value
   * @type {string}
   * @memberof GetTimeSeriesUltOsc200ResponseValuesInner
   */
  ultosc?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesUltOsc200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesUltOsc200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesUltOsc200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesUltOsc200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesUltOsc200ResponseValuesInner {
  return GetTimeSeriesUltOsc200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesUltOsc200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesUltOsc200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    ultosc: json["ultosc"] == null ? undefined : json["ultosc"],
  };
}

export function GetTimeSeriesUltOsc200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesUltOsc200ResponseValuesInner {
  return GetTimeSeriesUltOsc200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesUltOsc200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesUltOsc200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    ultosc: value["ultosc"],
  };
}

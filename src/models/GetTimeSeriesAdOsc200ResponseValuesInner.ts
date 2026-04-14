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
 * @interface GetTimeSeriesAdOsc200ResponseValuesInner
 */
export interface GetTimeSeriesAdOsc200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesAdOsc200ResponseValuesInner
   */
  datetime?: string;
  /**
   * Adosc value
   * @type {string}
   * @memberof GetTimeSeriesAdOsc200ResponseValuesInner
   */
  adosc?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAdOsc200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesAdOsc200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesAdOsc200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesAdOsc200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesAdOsc200ResponseValuesInner {
  return GetTimeSeriesAdOsc200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesAdOsc200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAdOsc200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    adosc: json["adosc"] == null ? undefined : json["adosc"],
  };
}

export function GetTimeSeriesAdOsc200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesAdOsc200ResponseValuesInner {
  return GetTimeSeriesAdOsc200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesAdOsc200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesAdOsc200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    adosc: value["adosc"],
  };
}

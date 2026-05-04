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
 * @interface GetTimeSeriesHtSine200ResponseValuesInner
 */
export interface GetTimeSeriesHtSine200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesHtSine200ResponseValuesInner
   */
  datetime: string;
  /**
   * ht_sine value
   * @type {string}
   * @memberof GetTimeSeriesHtSine200ResponseValuesInner
   */
  htSine: string;
  /**
   * ht_leadsine value
   * @type {string}
   * @memberof GetTimeSeriesHtSine200ResponseValuesInner
   */
  htLeadsine: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHtSine200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesHtSine200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesHtSine200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("htSine" in value) || value["htSine"] === undefined) return false;
  if (!("htLeadsine" in value) || value["htLeadsine"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesHtSine200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesHtSine200ResponseValuesInner {
  return GetTimeSeriesHtSine200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesHtSine200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtSine200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    htSine: json["ht_sine"],
    htLeadsine: json["ht_leadsine"],
  };
}

export function GetTimeSeriesHtSine200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesHtSine200ResponseValuesInner {
  return GetTimeSeriesHtSine200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesHtSine200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesHtSine200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    ht_sine: value["htSine"],
    ht_leadsine: value["htLeadsine"],
  };
}

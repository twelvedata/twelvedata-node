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
 * @interface GetTimeSeriesCrsi200ResponseValuesInner
 */
export interface GetTimeSeriesCrsi200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesCrsi200ResponseValuesInner
   */
  datetime?: string;
  /**
   * crsi value
   * @type {string}
   * @memberof GetTimeSeriesCrsi200ResponseValuesInner
   */
  crsi?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesCrsi200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesCrsi200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesCrsi200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesCrsi200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesCrsi200ResponseValuesInner {
  return GetTimeSeriesCrsi200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesCrsi200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCrsi200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    crsi: json["crsi"] == null ? undefined : json["crsi"],
  };
}

export function GetTimeSeriesCrsi200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesCrsi200ResponseValuesInner {
  return GetTimeSeriesCrsi200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesCrsi200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesCrsi200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    crsi: value["crsi"],
  };
}

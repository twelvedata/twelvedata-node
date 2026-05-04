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
 * @interface GetTimeSeriesRoc200ResponseValuesInner
 */
export interface GetTimeSeriesRoc200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesRoc200ResponseValuesInner
   */
  datetime: string;
  /**
   * roc value
   * @type {string}
   * @memberof GetTimeSeriesRoc200ResponseValuesInner
   */
  roc: string;
}

/**
 * Check if a given object implements the GetTimeSeriesRoc200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesRoc200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesRoc200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("roc" in value) || value["roc"] === undefined) return false;
  return true;
}

export function GetTimeSeriesRoc200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesRoc200ResponseValuesInner {
  return GetTimeSeriesRoc200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesRoc200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesRoc200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    roc: json["roc"],
  };
}

export function GetTimeSeriesRoc200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesRoc200ResponseValuesInner {
  return GetTimeSeriesRoc200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesRoc200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesRoc200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    roc: value["roc"],
  };
}

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
 * @interface GetTimeSeriesDiv200ResponseValuesInner
 */
export interface GetTimeSeriesDiv200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesDiv200ResponseValuesInner
   */
  datetime: string;
  /**
   * Div value
   * @type {string}
   * @memberof GetTimeSeriesDiv200ResponseValuesInner
   */
  div: string;
}

/**
 * Check if a given object implements the GetTimeSeriesDiv200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesDiv200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesDiv200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("div" in value) || value["div"] === undefined) return false;
  return true;
}

export function GetTimeSeriesDiv200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesDiv200ResponseValuesInner {
  return GetTimeSeriesDiv200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesDiv200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesDiv200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    div: json["div"],
  };
}

export function GetTimeSeriesDiv200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesDiv200ResponseValuesInner {
  return GetTimeSeriesDiv200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesDiv200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesDiv200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    div: value["div"],
  };
}

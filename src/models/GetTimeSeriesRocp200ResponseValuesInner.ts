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
 * @interface GetTimeSeriesRocp200ResponseValuesInner
 */
export interface GetTimeSeriesRocp200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesRocp200ResponseValuesInner
   */
  datetime?: string;
  /**
   * ROCP value
   * @type {string}
   * @memberof GetTimeSeriesRocp200ResponseValuesInner
   */
  rocp?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesRocp200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesRocp200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesRocp200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesRocp200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesRocp200ResponseValuesInner {
  return GetTimeSeriesRocp200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesRocp200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesRocp200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    rocp: json["rocp"] == null ? undefined : json["rocp"],
  };
}

export function GetTimeSeriesRocp200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesRocp200ResponseValuesInner {
  return GetTimeSeriesRocp200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesRocp200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesRocp200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    rocp: value["rocp"],
  };
}

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
 * @interface GetTimeSeriesRvol200ResponseValuesInner
 */
export interface GetTimeSeriesRvol200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesRvol200ResponseValuesInner
   */
  datetime: string;
  /**
   * RVOL value
   * @type {string}
   * @memberof GetTimeSeriesRvol200ResponseValuesInner
   */
  rvol: string;
}

/**
 * Check if a given object implements the GetTimeSeriesRvol200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesRvol200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesRvol200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("rvol" in value) || value["rvol"] === undefined) return false;
  return true;
}

export function GetTimeSeriesRvol200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesRvol200ResponseValuesInner {
  return GetTimeSeriesRvol200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesRvol200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesRvol200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    rvol: json["rvol"],
  };
}

export function GetTimeSeriesRvol200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesRvol200ResponseValuesInner {
  return GetTimeSeriesRvol200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesRvol200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesRvol200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    rvol: value["rvol"],
  };
}

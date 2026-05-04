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
 * @interface GetTimeSeriesWclPrice200ResponseValuesInner
 */
export interface GetTimeSeriesWclPrice200ResponseValuesInner {
  /**
   * datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesWclPrice200ResponseValuesInner
   */
  datetime: string;
  /**
   * wclprice value
   * @type {string}
   * @memberof GetTimeSeriesWclPrice200ResponseValuesInner
   */
  wclprice: string;
}

/**
 * Check if a given object implements the GetTimeSeriesWclPrice200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesWclPrice200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesWclPrice200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("wclprice" in value) || value["wclprice"] === undefined) return false;
  return true;
}

export function GetTimeSeriesWclPrice200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesWclPrice200ResponseValuesInner {
  return GetTimeSeriesWclPrice200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesWclPrice200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesWclPrice200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    wclprice: json["wclprice"],
  };
}

export function GetTimeSeriesWclPrice200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesWclPrice200ResponseValuesInner {
  return GetTimeSeriesWclPrice200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesWclPrice200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesWclPrice200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    wclprice: value["wclprice"],
  };
}

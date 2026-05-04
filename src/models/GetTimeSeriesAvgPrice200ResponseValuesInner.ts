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
 * @interface GetTimeSeriesAvgPrice200ResponseValuesInner
 */
export interface GetTimeSeriesAvgPrice200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesAvgPrice200ResponseValuesInner
   */
  datetime: string;
  /**
   * Avgprice value
   * @type {string}
   * @memberof GetTimeSeriesAvgPrice200ResponseValuesInner
   */
  avgprice: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAvgPrice200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesAvgPrice200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesAvgPrice200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("avgprice" in value) || value["avgprice"] === undefined) return false;
  return true;
}

export function GetTimeSeriesAvgPrice200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesAvgPrice200ResponseValuesInner {
  return GetTimeSeriesAvgPrice200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesAvgPrice200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAvgPrice200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    avgprice: json["avgprice"],
  };
}

export function GetTimeSeriesAvgPrice200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesAvgPrice200ResponseValuesInner {
  return GetTimeSeriesAvgPrice200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesAvgPrice200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesAvgPrice200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    avgprice: value["avgprice"],
  };
}

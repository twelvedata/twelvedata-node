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
 * @interface GetTimeSeriesTypPrice200ResponseValuesInner
 */
export interface GetTimeSeriesTypPrice200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesTypPrice200ResponseValuesInner
   */
  datetime: string;
  /**
   * typprice value
   * @type {string}
   * @memberof GetTimeSeriesTypPrice200ResponseValuesInner
   */
  typprice: string;
}

/**
 * Check if a given object implements the GetTimeSeriesTypPrice200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesTypPrice200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesTypPrice200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("typprice" in value) || value["typprice"] === undefined) return false;
  return true;
}

export function GetTimeSeriesTypPrice200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesTypPrice200ResponseValuesInner {
  return GetTimeSeriesTypPrice200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesTypPrice200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesTypPrice200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    typprice: json["typprice"],
  };
}

export function GetTimeSeriesTypPrice200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesTypPrice200ResponseValuesInner {
  return GetTimeSeriesTypPrice200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesTypPrice200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesTypPrice200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    typprice: value["typprice"],
  };
}

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
 * @interface GetTimeSeriesStoch200ResponseValuesInner
 */
export interface GetTimeSeriesStoch200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesStoch200ResponseValuesInner
   */
  datetime: string;
  /**
   * slow_k value
   * @type {string}
   * @memberof GetTimeSeriesStoch200ResponseValuesInner
   */
  slowK: string;
  /**
   * slow_d value
   * @type {string}
   * @memberof GetTimeSeriesStoch200ResponseValuesInner
   */
  slowD: string;
}

/**
 * Check if a given object implements the GetTimeSeriesStoch200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesStoch200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesStoch200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("slowK" in value) || value["slowK"] === undefined) return false;
  if (!("slowD" in value) || value["slowD"] === undefined) return false;
  return true;
}

export function GetTimeSeriesStoch200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesStoch200ResponseValuesInner {
  return GetTimeSeriesStoch200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesStoch200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesStoch200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    slowK: json["slow_k"],
    slowD: json["slow_d"],
  };
}

export function GetTimeSeriesStoch200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesStoch200ResponseValuesInner {
  return GetTimeSeriesStoch200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesStoch200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesStoch200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    slow_k: value["slowK"],
    slow_d: value["slowD"],
  };
}

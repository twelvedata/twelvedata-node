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
 * @interface GetTimeSeriesBeta200ResponseValuesInner
 */
export interface GetTimeSeriesBeta200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesBeta200ResponseValuesInner
   */
  datetime: string;
  /**
   * Beta value
   * @type {string}
   * @memberof GetTimeSeriesBeta200ResponseValuesInner
   */
  beta: string;
}

/**
 * Check if a given object implements the GetTimeSeriesBeta200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesBeta200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesBeta200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("beta" in value) || value["beta"] === undefined) return false;
  return true;
}

export function GetTimeSeriesBeta200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesBeta200ResponseValuesInner {
  return GetTimeSeriesBeta200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesBeta200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesBeta200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    beta: json["beta"],
  };
}

export function GetTimeSeriesBeta200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesBeta200ResponseValuesInner {
  return GetTimeSeriesBeta200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesBeta200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesBeta200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    beta: value["beta"],
  };
}

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
 * @interface GetTimeSeriesSqrt200ResponseValuesInner
 */
export interface GetTimeSeriesSqrt200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesSqrt200ResponseValuesInner
   */
  datetime?: string;
  /**
   * SQRT value
   * @type {string}
   * @memberof GetTimeSeriesSqrt200ResponseValuesInner
   */
  sqrt?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesSqrt200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesSqrt200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesSqrt200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesSqrt200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesSqrt200ResponseValuesInner {
  return GetTimeSeriesSqrt200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesSqrt200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSqrt200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    sqrt: json["sqrt"] == null ? undefined : json["sqrt"],
  };
}

export function GetTimeSeriesSqrt200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesSqrt200ResponseValuesInner {
  return GetTimeSeriesSqrt200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesSqrt200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesSqrt200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    sqrt: value["sqrt"],
  };
}

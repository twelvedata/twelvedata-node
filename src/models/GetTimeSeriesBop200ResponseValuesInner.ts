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
 * @interface GetTimeSeriesBop200ResponseValuesInner
 */
export interface GetTimeSeriesBop200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesBop200ResponseValuesInner
   */
  datetime?: string;
  /**
   * Bop value
   * @type {string}
   * @memberof GetTimeSeriesBop200ResponseValuesInner
   */
  bop?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesBop200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesBop200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesBop200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesBop200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesBop200ResponseValuesInner {
  return GetTimeSeriesBop200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesBop200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesBop200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    bop: json["bop"] == null ? undefined : json["bop"],
  };
}

export function GetTimeSeriesBop200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesBop200ResponseValuesInner {
  return GetTimeSeriesBop200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesBop200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesBop200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    bop: value["bop"],
  };
}

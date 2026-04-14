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
 * @interface GetTimeSeriesPlusDI200ResponseValuesInner
 */
export interface GetTimeSeriesPlusDI200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesPlusDI200ResponseValuesInner
   */
  datetime?: string;
  /**
   * plus_di value
   * @type {string}
   * @memberof GetTimeSeriesPlusDI200ResponseValuesInner
   */
  plusDi?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesPlusDI200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesPlusDI200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesPlusDI200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesPlusDI200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesPlusDI200ResponseValuesInner {
  return GetTimeSeriesPlusDI200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesPlusDI200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesPlusDI200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    plusDi: json["plus_di"] == null ? undefined : json["plus_di"],
  };
}

export function GetTimeSeriesPlusDI200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesPlusDI200ResponseValuesInner {
  return GetTimeSeriesPlusDI200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesPlusDI200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesPlusDI200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    plus_di: value["plusDi"],
  };
}

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
 * @interface GetTimeSeriesDema200ResponseValuesInner
 */
export interface GetTimeSeriesDema200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesDema200ResponseValuesInner
   */
  datetime?: string;
  /**
   * Dema value
   * @type {string}
   * @memberof GetTimeSeriesDema200ResponseValuesInner
   */
  dema?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesDema200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesDema200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesDema200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesDema200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesDema200ResponseValuesInner {
  return GetTimeSeriesDema200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesDema200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesDema200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    dema: json["dema"] == null ? undefined : json["dema"],
  };
}

export function GetTimeSeriesDema200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesDema200ResponseValuesInner {
  return GetTimeSeriesDema200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesDema200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesDema200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    dema: value["dema"],
  };
}

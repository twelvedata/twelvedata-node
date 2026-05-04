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
 * @interface GetTimeSeriesMult200ResponseValuesInner
 */
export interface GetTimeSeriesMult200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMult200ResponseValuesInner
   */
  datetime: string;
  /**
   * Mult value
   * @type {string}
   * @memberof GetTimeSeriesMult200ResponseValuesInner
   */
  mult: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMult200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMult200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMult200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("mult" in value) || value["mult"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMult200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMult200ResponseValuesInner {
  return GetTimeSeriesMult200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMult200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMult200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    mult: json["mult"],
  };
}

export function GetTimeSeriesMult200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMult200ResponseValuesInner {
  return GetTimeSeriesMult200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMult200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMult200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    mult: value["mult"],
  };
}

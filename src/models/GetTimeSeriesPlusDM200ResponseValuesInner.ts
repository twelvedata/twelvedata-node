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
 * @interface GetTimeSeriesPlusDM200ResponseValuesInner
 */
export interface GetTimeSeriesPlusDM200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesPlusDM200ResponseValuesInner
   */
  datetime: string;
  /**
   * plus_dm value
   * @type {string}
   * @memberof GetTimeSeriesPlusDM200ResponseValuesInner
   */
  plusDm: string;
}

/**
 * Check if a given object implements the GetTimeSeriesPlusDM200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesPlusDM200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesPlusDM200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("plusDm" in value) || value["plusDm"] === undefined) return false;
  return true;
}

export function GetTimeSeriesPlusDM200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesPlusDM200ResponseValuesInner {
  return GetTimeSeriesPlusDM200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesPlusDM200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesPlusDM200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    plusDm: json["plus_dm"],
  };
}

export function GetTimeSeriesPlusDM200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesPlusDM200ResponseValuesInner {
  return GetTimeSeriesPlusDM200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesPlusDM200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesPlusDM200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    plus_dm: value["plusDm"],
  };
}

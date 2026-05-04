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
 * @interface GetTimeSeriesDpo200ResponseValuesInner
 */
export interface GetTimeSeriesDpo200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesDpo200ResponseValuesInner
   */
  datetime: string;
  /**
   * DPO value
   * @type {string}
   * @memberof GetTimeSeriesDpo200ResponseValuesInner
   */
  dpo: string;
}

/**
 * Check if a given object implements the GetTimeSeriesDpo200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesDpo200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesDpo200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("dpo" in value) || value["dpo"] === undefined) return false;
  return true;
}

export function GetTimeSeriesDpo200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesDpo200ResponseValuesInner {
  return GetTimeSeriesDpo200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesDpo200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesDpo200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    dpo: json["dpo"],
  };
}

export function GetTimeSeriesDpo200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesDpo200ResponseValuesInner {
  return GetTimeSeriesDpo200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesDpo200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesDpo200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    dpo: value["dpo"],
  };
}

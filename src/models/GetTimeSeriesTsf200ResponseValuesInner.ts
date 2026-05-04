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
 * @interface GetTimeSeriesTsf200ResponseValuesInner
 */
export interface GetTimeSeriesTsf200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesTsf200ResponseValuesInner
   */
  datetime: string;
  /**
   * TSF value
   * @type {string}
   * @memberof GetTimeSeriesTsf200ResponseValuesInner
   */
  tsf: string;
}

/**
 * Check if a given object implements the GetTimeSeriesTsf200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesTsf200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesTsf200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("tsf" in value) || value["tsf"] === undefined) return false;
  return true;
}

export function GetTimeSeriesTsf200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesTsf200ResponseValuesInner {
  return GetTimeSeriesTsf200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesTsf200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesTsf200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    tsf: json["tsf"],
  };
}

export function GetTimeSeriesTsf200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesTsf200ResponseValuesInner {
  return GetTimeSeriesTsf200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesTsf200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesTsf200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    tsf: value["tsf"],
  };
}

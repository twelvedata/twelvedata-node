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
 * @interface GetTimeSeriesSarExt200ResponseValuesInner
 */
export interface GetTimeSeriesSarExt200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesSarExt200ResponseValuesInner
   */
  datetime: string;
  /**
   * SAREXT value
   * @type {string}
   * @memberof GetTimeSeriesSarExt200ResponseValuesInner
   */
  sarext: string;
}

/**
 * Check if a given object implements the GetTimeSeriesSarExt200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesSarExt200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesSarExt200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("sarext" in value) || value["sarext"] === undefined) return false;
  return true;
}

export function GetTimeSeriesSarExt200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesSarExt200ResponseValuesInner {
  return GetTimeSeriesSarExt200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesSarExt200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSarExt200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    sarext: json["sarext"],
  };
}

export function GetTimeSeriesSarExt200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesSarExt200ResponseValuesInner {
  return GetTimeSeriesSarExt200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesSarExt200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesSarExt200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    sarext: value["sarext"],
  };
}

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
 * @interface GetTimeSeriesCoppock200ResponseValuesInner
 */
export interface GetTimeSeriesCoppock200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesCoppock200ResponseValuesInner
   */
  datetime?: string;
  /**
   * Coppock value
   * @type {string}
   * @memberof GetTimeSeriesCoppock200ResponseValuesInner
   */
  coppock?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesCoppock200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesCoppock200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesCoppock200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesCoppock200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesCoppock200ResponseValuesInner {
  return GetTimeSeriesCoppock200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesCoppock200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCoppock200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    coppock: json["coppock"] == null ? undefined : json["coppock"],
  };
}

export function GetTimeSeriesCoppock200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesCoppock200ResponseValuesInner {
  return GetTimeSeriesCoppock200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesCoppock200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesCoppock200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    coppock: value["coppock"],
  };
}

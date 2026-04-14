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
 * @interface GetTimeSeriesMidPrice200ResponseValuesInner
 */
export interface GetTimeSeriesMidPrice200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMidPrice200ResponseValuesInner
   */
  datetime?: string;
  /**
   * Midprice value
   * @type {string}
   * @memberof GetTimeSeriesMidPrice200ResponseValuesInner
   */
  midprice?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMidPrice200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMidPrice200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMidPrice200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesMidPrice200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMidPrice200ResponseValuesInner {
  return GetTimeSeriesMidPrice200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMidPrice200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMidPrice200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    midprice: json["midprice"] == null ? undefined : json["midprice"],
  };
}

export function GetTimeSeriesMidPrice200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMidPrice200ResponseValuesInner {
  return GetTimeSeriesMidPrice200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMidPrice200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMidPrice200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    midprice: value["midprice"],
  };
}

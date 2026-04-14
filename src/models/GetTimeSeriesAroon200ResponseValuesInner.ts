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
 * @interface GetTimeSeriesAroon200ResponseValuesInner
 */
export interface GetTimeSeriesAroon200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesAroon200ResponseValuesInner
   */
  datetime?: string;
  /**
   * Aroon down value
   * @type {string}
   * @memberof GetTimeSeriesAroon200ResponseValuesInner
   */
  aroonDown?: string;
  /**
   * Aroon up value
   * @type {string}
   * @memberof GetTimeSeriesAroon200ResponseValuesInner
   */
  aroonUp?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAroon200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesAroon200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesAroon200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesAroon200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesAroon200ResponseValuesInner {
  return GetTimeSeriesAroon200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesAroon200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAroon200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    aroonDown: json["aroon_down"] == null ? undefined : json["aroon_down"],
    aroonUp: json["aroon_up"] == null ? undefined : json["aroon_up"],
  };
}

export function GetTimeSeriesAroon200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesAroon200ResponseValuesInner {
  return GetTimeSeriesAroon200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesAroon200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesAroon200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    aroon_down: value["aroonDown"],
    aroon_up: value["aroonUp"],
  };
}

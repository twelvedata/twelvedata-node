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
 * @interface GetTimeSeriesVwap200ResponseValuesInner
 */
export interface GetTimeSeriesVwap200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesVwap200ResponseValuesInner
   */
  datetime?: string;
  /**
   * VWAP lower value
   * @type {number}
   * @memberof GetTimeSeriesVwap200ResponseValuesInner
   */
  vwapLower?: number;
  /**
   * VWAP value
   * @type {number}
   * @memberof GetTimeSeriesVwap200ResponseValuesInner
   */
  vwap?: number;
  /**
   * VWAP upper value
   * @type {number}
   * @memberof GetTimeSeriesVwap200ResponseValuesInner
   */
  vwapUpper?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesVwap200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesVwap200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesVwap200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesVwap200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesVwap200ResponseValuesInner {
  return GetTimeSeriesVwap200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesVwap200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesVwap200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    vwapLower: json["vwap_lower"] == null ? undefined : json["vwap_lower"],
    vwap: json["vwap"] == null ? undefined : json["vwap"],
    vwapUpper: json["vwap_upper"] == null ? undefined : json["vwap_upper"],
  };
}

export function GetTimeSeriesVwap200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesVwap200ResponseValuesInner {
  return GetTimeSeriesVwap200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesVwap200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesVwap200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    vwap_lower: value["vwapLower"],
    vwap: value["vwap"],
    vwap_upper: value["vwapUpper"],
  };
}

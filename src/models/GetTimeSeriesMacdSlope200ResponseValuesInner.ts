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
 * @interface GetTimeSeriesMacdSlope200ResponseValuesInner
 */
export interface GetTimeSeriesMacdSlope200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMacdSlope200ResponseValuesInner
   */
  datetime?: string;
  /**
   * MACD slope value
   * @type {string}
   * @memberof GetTimeSeriesMacdSlope200ResponseValuesInner
   */
  macdSlope?: string;
  /**
   * MACD signal slope value
   * @type {string}
   * @memberof GetTimeSeriesMacdSlope200ResponseValuesInner
   */
  macdSignalSlope?: string;
  /**
   * MACD histogram slope value
   * @type {string}
   * @memberof GetTimeSeriesMacdSlope200ResponseValuesInner
   */
  macdHistSlope?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMacdSlope200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMacdSlope200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMacdSlope200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesMacdSlope200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMacdSlope200ResponseValuesInner {
  return GetTimeSeriesMacdSlope200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMacdSlope200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMacdSlope200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    macdSlope: json["macd_slope"] == null ? undefined : json["macd_slope"],
    macdSignalSlope:
      json["macd_signal_slope"] == null ? undefined : json["macd_signal_slope"],
    macdHistSlope:
      json["macd_hist_slope"] == null ? undefined : json["macd_hist_slope"],
  };
}

export function GetTimeSeriesMacdSlope200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMacdSlope200ResponseValuesInner {
  return GetTimeSeriesMacdSlope200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMacdSlope200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMacdSlope200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    macd_slope: value["macdSlope"],
    macd_signal_slope: value["macdSignalSlope"],
    macd_hist_slope: value["macdHistSlope"],
  };
}

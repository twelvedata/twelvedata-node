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
 * @interface GetTimeSeriesMacd200ResponseValuesInner
 */
export interface GetTimeSeriesMacd200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMacd200ResponseValuesInner
   */
  datetime?: string;
  /**
   * MACD value
   * @type {string}
   * @memberof GetTimeSeriesMacd200ResponseValuesInner
   */
  macd?: string;
  /**
   * MACD signal line value
   * @type {string}
   * @memberof GetTimeSeriesMacd200ResponseValuesInner
   */
  macdSignal?: string;
  /**
   * MACD histogram value
   * @type {string}
   * @memberof GetTimeSeriesMacd200ResponseValuesInner
   */
  macdHist?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMacd200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMacd200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMacd200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesMacd200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMacd200ResponseValuesInner {
  return GetTimeSeriesMacd200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMacd200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMacd200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    macd: json["macd"] == null ? undefined : json["macd"],
    macdSignal: json["macd_signal"] == null ? undefined : json["macd_signal"],
    macdHist: json["macd_hist"] == null ? undefined : json["macd_hist"],
  };
}

export function GetTimeSeriesMacd200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMacd200ResponseValuesInner {
  return GetTimeSeriesMacd200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMacd200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMacd200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    macd: value["macd"],
    macd_signal: value["macdSignal"],
    macd_hist: value["macdHist"],
  };
}

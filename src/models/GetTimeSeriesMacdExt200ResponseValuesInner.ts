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
 * @interface GetTimeSeriesMacdExt200ResponseValuesInner
 */
export interface GetTimeSeriesMacdExt200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMacdExt200ResponseValuesInner
   */
  datetime: string;
  /**
   * MACD value
   * @type {string}
   * @memberof GetTimeSeriesMacdExt200ResponseValuesInner
   */
  macd: string;
  /**
   * MACD signal line value
   * @type {string}
   * @memberof GetTimeSeriesMacdExt200ResponseValuesInner
   */
  macdSignal: string;
  /**
   * MACD histogram value
   * @type {string}
   * @memberof GetTimeSeriesMacdExt200ResponseValuesInner
   */
  macdHist: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMacdExt200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMacdExt200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMacdExt200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("macd" in value) || value["macd"] === undefined) return false;
  if (!("macdSignal" in value) || value["macdSignal"] === undefined)
    return false;
  if (!("macdHist" in value) || value["macdHist"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMacdExt200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMacdExt200ResponseValuesInner {
  return GetTimeSeriesMacdExt200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMacdExt200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMacdExt200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    macd: json["macd"],
    macdSignal: json["macd_signal"],
    macdHist: json["macd_hist"],
  };
}

export function GetTimeSeriesMacdExt200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMacdExt200ResponseValuesInner {
  return GetTimeSeriesMacdExt200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMacdExt200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMacdExt200ResponseValuesInner | null,
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

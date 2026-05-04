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
 * @interface GetTimeSeriesHeikinashiCandles200ResponseValuesInner
 */
export interface GetTimeSeriesHeikinashiCandles200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesHeikinashiCandles200ResponseValuesInner
   */
  datetime: string;
  /**
   * Heikin-Ashi highs value
   * @type {string}
   * @memberof GetTimeSeriesHeikinashiCandles200ResponseValuesInner
   */
  heikinhighs: string;
  /**
   * Heikin-Ashi opens value
   * @type {string}
   * @memberof GetTimeSeriesHeikinashiCandles200ResponseValuesInner
   */
  heikinopens: string;
  /**
   * Heikin-Ashi closes value
   * @type {string}
   * @memberof GetTimeSeriesHeikinashiCandles200ResponseValuesInner
   */
  heikincloses: string;
  /**
   * Heikin-Ashi lows value
   * @type {string}
   * @memberof GetTimeSeriesHeikinashiCandles200ResponseValuesInner
   */
  heikinlows: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHeikinashiCandles200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesHeikinashiCandles200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesHeikinashiCandles200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("heikinhighs" in value) || value["heikinhighs"] === undefined)
    return false;
  if (!("heikinopens" in value) || value["heikinopens"] === undefined)
    return false;
  if (!("heikincloses" in value) || value["heikincloses"] === undefined)
    return false;
  if (!("heikinlows" in value) || value["heikinlows"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesHeikinashiCandles200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesHeikinashiCandles200ResponseValuesInner {
  return GetTimeSeriesHeikinashiCandles200ResponseValuesInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesHeikinashiCandles200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHeikinashiCandles200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    heikinhighs: json["heikinhighs"],
    heikinopens: json["heikinopens"],
    heikincloses: json["heikincloses"],
    heikinlows: json["heikinlows"],
  };
}

export function GetTimeSeriesHeikinashiCandles200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesHeikinashiCandles200ResponseValuesInner {
  return GetTimeSeriesHeikinashiCandles200ResponseValuesInnerToJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesHeikinashiCandles200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesHeikinashiCandles200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    heikinhighs: value["heikinhighs"],
    heikinopens: value["heikinopens"],
    heikincloses: value["heikincloses"],
    heikinlows: value["heikinlows"],
  };
}

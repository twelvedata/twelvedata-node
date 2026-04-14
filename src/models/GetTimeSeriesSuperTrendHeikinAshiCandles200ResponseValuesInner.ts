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
 * @interface GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner
 */
export interface GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner
   */
  datetime?: string;
  /**
   * SuperTrend value
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner
   */
  supertrend?: string;
  /**
   * Heikin-Ashi high values
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner
   */
  heikinhighs?: string;
  /**
   * Heikin-Ashi open values
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner
   */
  heikinopens?: string;
  /**
   * Heikin-Ashi close values
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner
   */
  heikincloses?: string;
  /**
   * Heikin-Ashi low values
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner
   */
  heikinlows?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner {
  return GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    supertrend: json["supertrend"] == null ? undefined : json["supertrend"],
    heikinhighs: json["heikinhighs"] == null ? undefined : json["heikinhighs"],
    heikinopens: json["heikinopens"] == null ? undefined : json["heikinopens"],
    heikincloses:
      json["heikincloses"] == null ? undefined : json["heikincloses"],
    heikinlows: json["heikinlows"] == null ? undefined : json["heikinlows"],
  };
}

export function GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner {
  return GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInnerToJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    supertrend: value["supertrend"],
    heikinhighs: value["heikinhighs"],
    heikinopens: value["heikinopens"],
    heikincloses: value["heikincloses"],
    heikinlows: value["heikinlows"],
  };
}

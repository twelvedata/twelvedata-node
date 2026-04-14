/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesHeikinashiCandles200ResponseMetaIndicator } from "./GetTimeSeriesHeikinashiCandles200ResponseMetaIndicator";
import {
  GetTimeSeriesHeikinashiCandles200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesHeikinashiCandles200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesHeikinashiCandles200ResponseMetaIndicatorToJSON,
  GetTimeSeriesHeikinashiCandles200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesHeikinashiCandles200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesHeikinashiCandles200ResponseMeta
 */
export interface GetTimeSeriesHeikinashiCandles200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesHeikinashiCandles200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesHeikinashiCandles200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesHeikinashiCandles200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHeikinashiCandles200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHeikinashiCandles200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHeikinashiCandles200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesHeikinashiCandles200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesHeikinashiCandles200ResponseMetaIndicator}
   * @memberof GetTimeSeriesHeikinashiCandles200ResponseMeta
   */
  indicator?: GetTimeSeriesHeikinashiCandles200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesHeikinashiCandles200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesHeikinashiCandles200ResponseMeta(
  value: object,
): value is GetTimeSeriesHeikinashiCandles200ResponseMeta {
  return true;
}

export function GetTimeSeriesHeikinashiCandles200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesHeikinashiCandles200ResponseMeta {
  return GetTimeSeriesHeikinashiCandles200ResponseMetaFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesHeikinashiCandles200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHeikinashiCandles200ResponseMeta {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"] == null ? undefined : json["symbol"],
    interval: json["interval"] == null ? undefined : json["interval"],
    currency: json["currency"] == null ? undefined : json["currency"],
    exchangeTimezone:
      json["exchange_timezone"] == null ? undefined : json["exchange_timezone"],
    exchange: json["exchange"] == null ? undefined : json["exchange"],
    micCode: json["mic_code"] == null ? undefined : json["mic_code"],
    type: json["type"] == null ? undefined : json["type"],
    indicator:
      json["indicator"] == null
        ? undefined
        : GetTimeSeriesHeikinashiCandles200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesHeikinashiCandles200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesHeikinashiCandles200ResponseMeta {
  return GetTimeSeriesHeikinashiCandles200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesHeikinashiCandles200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesHeikinashiCandles200ResponseMeta | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    interval: value["interval"],
    currency: value["currency"],
    exchange_timezone: value["exchangeTimezone"],
    exchange: value["exchange"],
    mic_code: value["micCode"],
    type: value["type"],
    indicator: GetTimeSeriesHeikinashiCandles200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

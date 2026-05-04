/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicator } from "./GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicator";
import {
  GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicatorToJSON,
  GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta
 */
export interface GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicator}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta
   */
  indicator: GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta(
  value: object,
): value is GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("interval" in value) || value["interval"] === undefined) return false;
  if (!("currency" in value) || value["currency"] === undefined) return false;
  if (!("exchangeTimezone" in value) || value["exchangeTimezone"] === undefined)
    return false;
  if (!("exchange" in value) || value["exchange"] === undefined) return false;
  if (!("micCode" in value) || value["micCode"] === undefined) return false;
  if (!("type" in value) || value["type"] === undefined) return false;
  if (!("indicator" in value) || value["indicator"] === undefined) return false;
  return true;
}

export function GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta {
  return GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"],
    interval: json["interval"],
    currency: json["currency"],
    exchangeTimezone: json["exchange_timezone"],
    exchange: json["exchange"],
    micCode: json["mic_code"],
    type: json["type"],
    indicator:
      GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicatorFromJSON(
        json["indicator"],
      ),
  };
}

export function GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta {
  return GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaToJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta | null,
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
    indicator:
      GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicatorToJSON(
        value["indicator"],
      ),
  };
}

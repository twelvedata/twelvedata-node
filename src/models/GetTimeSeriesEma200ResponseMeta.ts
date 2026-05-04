/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesEma200ResponseMetaIndicator } from "./GetTimeSeriesEma200ResponseMetaIndicator";
import {
  GetTimeSeriesEma200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesEma200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesEma200ResponseMetaIndicatorToJSON,
  GetTimeSeriesEma200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesEma200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesEma200ResponseMeta
 */
export interface GetTimeSeriesEma200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesEma200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesEma200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesEma200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesEma200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesEma200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesEma200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesEma200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesEma200ResponseMetaIndicator}
   * @memberof GetTimeSeriesEma200ResponseMeta
   */
  indicator: GetTimeSeriesEma200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesEma200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesEma200ResponseMeta(
  value: object,
): value is GetTimeSeriesEma200ResponseMeta {
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

export function GetTimeSeriesEma200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesEma200ResponseMeta {
  return GetTimeSeriesEma200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesEma200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesEma200ResponseMeta {
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
    indicator: GetTimeSeriesEma200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesEma200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesEma200ResponseMeta {
  return GetTimeSeriesEma200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesEma200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesEma200ResponseMeta | null,
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
    indicator: GetTimeSeriesEma200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

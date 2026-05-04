/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesTrima200ResponseMetaIndicator } from "./GetTimeSeriesTrima200ResponseMetaIndicator";
import {
  GetTimeSeriesTrima200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesTrima200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesTrima200ResponseMetaIndicatorToJSON,
  GetTimeSeriesTrima200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesTrima200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesTrima200ResponseMeta
 */
export interface GetTimeSeriesTrima200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesTrima200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesTrima200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesTrima200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesTrima200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesTrima200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesTrima200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesTrima200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesTrima200ResponseMetaIndicator}
   * @memberof GetTimeSeriesTrima200ResponseMeta
   */
  indicator: GetTimeSeriesTrima200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesTrima200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesTrima200ResponseMeta(
  value: object,
): value is GetTimeSeriesTrima200ResponseMeta {
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

export function GetTimeSeriesTrima200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesTrima200ResponseMeta {
  return GetTimeSeriesTrima200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesTrima200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesTrima200ResponseMeta {
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
    indicator: GetTimeSeriesTrima200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesTrima200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesTrima200ResponseMeta {
  return GetTimeSeriesTrima200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesTrima200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesTrima200ResponseMeta | null,
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
    indicator: GetTimeSeriesTrima200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

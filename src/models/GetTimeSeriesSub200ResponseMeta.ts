/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesSub200ResponseMetaIndicator } from "./GetTimeSeriesSub200ResponseMetaIndicator";
import {
  GetTimeSeriesSub200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesSub200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesSub200ResponseMetaIndicatorToJSON,
  GetTimeSeriesSub200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesSub200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesSub200ResponseMeta
 */
export interface GetTimeSeriesSub200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesSub200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesSub200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesSub200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSub200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSub200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSub200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesSub200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesSub200ResponseMetaIndicator}
   * @memberof GetTimeSeriesSub200ResponseMeta
   */
  indicator: GetTimeSeriesSub200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesSub200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesSub200ResponseMeta(
  value: object,
): value is GetTimeSeriesSub200ResponseMeta {
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

export function GetTimeSeriesSub200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesSub200ResponseMeta {
  return GetTimeSeriesSub200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesSub200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSub200ResponseMeta {
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
    indicator: GetTimeSeriesSub200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesSub200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesSub200ResponseMeta {
  return GetTimeSeriesSub200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesSub200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesSub200ResponseMeta | null,
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
    indicator: GetTimeSeriesSub200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

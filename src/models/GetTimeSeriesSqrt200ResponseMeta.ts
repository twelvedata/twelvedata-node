/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesSqrt200ResponseMetaIndicator } from "./GetTimeSeriesSqrt200ResponseMetaIndicator";
import {
  GetTimeSeriesSqrt200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesSqrt200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesSqrt200ResponseMetaIndicatorToJSON,
  GetTimeSeriesSqrt200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesSqrt200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesSqrt200ResponseMeta
 */
export interface GetTimeSeriesSqrt200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesSqrt200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesSqrt200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesSqrt200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSqrt200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSqrt200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSqrt200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesSqrt200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesSqrt200ResponseMetaIndicator}
   * @memberof GetTimeSeriesSqrt200ResponseMeta
   */
  indicator: GetTimeSeriesSqrt200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesSqrt200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesSqrt200ResponseMeta(
  value: object,
): value is GetTimeSeriesSqrt200ResponseMeta {
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

export function GetTimeSeriesSqrt200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesSqrt200ResponseMeta {
  return GetTimeSeriesSqrt200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesSqrt200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSqrt200ResponseMeta {
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
    indicator: GetTimeSeriesSqrt200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesSqrt200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesSqrt200ResponseMeta {
  return GetTimeSeriesSqrt200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesSqrt200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesSqrt200ResponseMeta | null,
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
    indicator: GetTimeSeriesSqrt200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesDema200ResponseMetaIndicator } from "./GetTimeSeriesDema200ResponseMetaIndicator";
import {
  GetTimeSeriesDema200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesDema200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesDema200ResponseMetaIndicatorToJSON,
  GetTimeSeriesDema200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesDema200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesDema200ResponseMeta
 */
export interface GetTimeSeriesDema200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesDema200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesDema200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesDema200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesDema200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesDema200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesDema200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesDema200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesDema200ResponseMetaIndicator}
   * @memberof GetTimeSeriesDema200ResponseMeta
   */
  indicator: GetTimeSeriesDema200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesDema200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesDema200ResponseMeta(
  value: object,
): value is GetTimeSeriesDema200ResponseMeta {
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

export function GetTimeSeriesDema200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesDema200ResponseMeta {
  return GetTimeSeriesDema200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesDema200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesDema200ResponseMeta {
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
    indicator: GetTimeSeriesDema200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesDema200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesDema200ResponseMeta {
  return GetTimeSeriesDema200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesDema200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesDema200ResponseMeta | null,
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
    indicator: GetTimeSeriesDema200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

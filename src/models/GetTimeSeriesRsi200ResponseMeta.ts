/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesRsi200ResponseMetaIndicator } from "./GetTimeSeriesRsi200ResponseMetaIndicator";
import {
  GetTimeSeriesRsi200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesRsi200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesRsi200ResponseMetaIndicatorToJSON,
  GetTimeSeriesRsi200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesRsi200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesRsi200ResponseMeta
 */
export interface GetTimeSeriesRsi200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesRsi200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesRsi200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesRsi200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesRsi200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesRsi200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesRsi200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesRsi200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesRsi200ResponseMetaIndicator}
   * @memberof GetTimeSeriesRsi200ResponseMeta
   */
  indicator: GetTimeSeriesRsi200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesRsi200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesRsi200ResponseMeta(
  value: object,
): value is GetTimeSeriesRsi200ResponseMeta {
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

export function GetTimeSeriesRsi200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesRsi200ResponseMeta {
  return GetTimeSeriesRsi200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesRsi200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesRsi200ResponseMeta {
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
    indicator: GetTimeSeriesRsi200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesRsi200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesRsi200ResponseMeta {
  return GetTimeSeriesRsi200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesRsi200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesRsi200ResponseMeta | null,
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
    indicator: GetTimeSeriesRsi200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

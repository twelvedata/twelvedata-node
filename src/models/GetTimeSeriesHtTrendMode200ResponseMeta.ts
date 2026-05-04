/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesHtTrendMode200ResponseMetaIndicator } from "./GetTimeSeriesHtTrendMode200ResponseMetaIndicator";
import {
  GetTimeSeriesHtTrendMode200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesHtTrendMode200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesHtTrendMode200ResponseMetaIndicatorToJSON,
  GetTimeSeriesHtTrendMode200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesHtTrendMode200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesHtTrendMode200ResponseMeta
 */
export interface GetTimeSeriesHtTrendMode200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesHtTrendMode200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesHtTrendMode200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesHtTrendMode200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHtTrendMode200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHtTrendMode200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHtTrendMode200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesHtTrendMode200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesHtTrendMode200ResponseMetaIndicator}
   * @memberof GetTimeSeriesHtTrendMode200ResponseMeta
   */
  indicator: GetTimeSeriesHtTrendMode200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesHtTrendMode200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesHtTrendMode200ResponseMeta(
  value: object,
): value is GetTimeSeriesHtTrendMode200ResponseMeta {
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

export function GetTimeSeriesHtTrendMode200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesHtTrendMode200ResponseMeta {
  return GetTimeSeriesHtTrendMode200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesHtTrendMode200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtTrendMode200ResponseMeta {
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
    indicator: GetTimeSeriesHtTrendMode200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesHtTrendMode200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesHtTrendMode200ResponseMeta {
  return GetTimeSeriesHtTrendMode200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesHtTrendMode200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesHtTrendMode200ResponseMeta | null,
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
    indicator: GetTimeSeriesHtTrendMode200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

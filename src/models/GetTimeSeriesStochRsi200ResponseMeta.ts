/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesStochRsi200ResponseMetaIndicator } from "./GetTimeSeriesStochRsi200ResponseMetaIndicator";
import {
  GetTimeSeriesStochRsi200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesStochRsi200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesStochRsi200ResponseMetaIndicatorToJSON,
  GetTimeSeriesStochRsi200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesStochRsi200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesStochRsi200ResponseMeta
 */
export interface GetTimeSeriesStochRsi200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesStochRsi200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesStochRsi200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesStochRsi200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesStochRsi200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesStochRsi200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesStochRsi200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesStochRsi200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesStochRsi200ResponseMetaIndicator}
   * @memberof GetTimeSeriesStochRsi200ResponseMeta
   */
  indicator: GetTimeSeriesStochRsi200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesStochRsi200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesStochRsi200ResponseMeta(
  value: object,
): value is GetTimeSeriesStochRsi200ResponseMeta {
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

export function GetTimeSeriesStochRsi200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesStochRsi200ResponseMeta {
  return GetTimeSeriesStochRsi200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesStochRsi200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesStochRsi200ResponseMeta {
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
    indicator: GetTimeSeriesStochRsi200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesStochRsi200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesStochRsi200ResponseMeta {
  return GetTimeSeriesStochRsi200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesStochRsi200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesStochRsi200ResponseMeta | null,
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
    indicator: GetTimeSeriesStochRsi200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

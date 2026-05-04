/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesHtDcPhase200ResponseMetaIndicator } from "./GetTimeSeriesHtDcPhase200ResponseMetaIndicator";
import {
  GetTimeSeriesHtDcPhase200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesHtDcPhase200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesHtDcPhase200ResponseMetaIndicatorToJSON,
  GetTimeSeriesHtDcPhase200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesHtDcPhase200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesHtDcPhase200ResponseMeta
 */
export interface GetTimeSeriesHtDcPhase200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesHtDcPhase200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesHtDcPhase200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesHtDcPhase200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHtDcPhase200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHtDcPhase200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHtDcPhase200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesHtDcPhase200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesHtDcPhase200ResponseMetaIndicator}
   * @memberof GetTimeSeriesHtDcPhase200ResponseMeta
   */
  indicator: GetTimeSeriesHtDcPhase200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesHtDcPhase200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesHtDcPhase200ResponseMeta(
  value: object,
): value is GetTimeSeriesHtDcPhase200ResponseMeta {
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

export function GetTimeSeriesHtDcPhase200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesHtDcPhase200ResponseMeta {
  return GetTimeSeriesHtDcPhase200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesHtDcPhase200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtDcPhase200ResponseMeta {
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
    indicator: GetTimeSeriesHtDcPhase200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesHtDcPhase200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesHtDcPhase200ResponseMeta {
  return GetTimeSeriesHtDcPhase200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesHtDcPhase200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesHtDcPhase200ResponseMeta | null,
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
    indicator: GetTimeSeriesHtDcPhase200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

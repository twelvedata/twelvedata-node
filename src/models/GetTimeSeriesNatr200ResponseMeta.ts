/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesNatr200ResponseMetaIndicator } from "./GetTimeSeriesNatr200ResponseMetaIndicator";
import {
  GetTimeSeriesNatr200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesNatr200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesNatr200ResponseMetaIndicatorToJSON,
  GetTimeSeriesNatr200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesNatr200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesNatr200ResponseMeta
 */
export interface GetTimeSeriesNatr200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesNatr200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesNatr200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesNatr200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesNatr200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesNatr200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesNatr200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesNatr200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesNatr200ResponseMetaIndicator}
   * @memberof GetTimeSeriesNatr200ResponseMeta
   */
  indicator: GetTimeSeriesNatr200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesNatr200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesNatr200ResponseMeta(
  value: object,
): value is GetTimeSeriesNatr200ResponseMeta {
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

export function GetTimeSeriesNatr200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesNatr200ResponseMeta {
  return GetTimeSeriesNatr200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesNatr200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesNatr200ResponseMeta {
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
    indicator: GetTimeSeriesNatr200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesNatr200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesNatr200ResponseMeta {
  return GetTimeSeriesNatr200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesNatr200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesNatr200ResponseMeta | null,
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
    indicator: GetTimeSeriesNatr200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

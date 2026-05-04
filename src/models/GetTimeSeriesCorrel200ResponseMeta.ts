/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesCorrel200ResponseMetaIndicator } from "./GetTimeSeriesCorrel200ResponseMetaIndicator";
import {
  GetTimeSeriesCorrel200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesCorrel200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesCorrel200ResponseMetaIndicatorToJSON,
  GetTimeSeriesCorrel200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesCorrel200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesCorrel200ResponseMeta
 */
export interface GetTimeSeriesCorrel200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesCorrel200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesCorrel200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesCorrel200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesCorrel200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesCorrel200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesCorrel200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesCorrel200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesCorrel200ResponseMetaIndicator}
   * @memberof GetTimeSeriesCorrel200ResponseMeta
   */
  indicator: GetTimeSeriesCorrel200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesCorrel200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesCorrel200ResponseMeta(
  value: object,
): value is GetTimeSeriesCorrel200ResponseMeta {
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

export function GetTimeSeriesCorrel200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesCorrel200ResponseMeta {
  return GetTimeSeriesCorrel200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesCorrel200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCorrel200ResponseMeta {
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
    indicator: GetTimeSeriesCorrel200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesCorrel200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesCorrel200ResponseMeta {
  return GetTimeSeriesCorrel200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesCorrel200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesCorrel200ResponseMeta | null,
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
    indicator: GetTimeSeriesCorrel200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

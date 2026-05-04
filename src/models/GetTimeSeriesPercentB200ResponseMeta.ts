/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesPercentB200ResponseMetaIndicator } from "./GetTimeSeriesPercentB200ResponseMetaIndicator";
import {
  GetTimeSeriesPercentB200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesPercentB200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesPercentB200ResponseMetaIndicatorToJSON,
  GetTimeSeriesPercentB200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesPercentB200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesPercentB200ResponseMeta
 */
export interface GetTimeSeriesPercentB200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesPercentB200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesPercentB200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesPercentB200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesPercentB200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesPercentB200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesPercentB200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesPercentB200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesPercentB200ResponseMetaIndicator}
   * @memberof GetTimeSeriesPercentB200ResponseMeta
   */
  indicator: GetTimeSeriesPercentB200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesPercentB200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesPercentB200ResponseMeta(
  value: object,
): value is GetTimeSeriesPercentB200ResponseMeta {
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

export function GetTimeSeriesPercentB200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesPercentB200ResponseMeta {
  return GetTimeSeriesPercentB200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesPercentB200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesPercentB200ResponseMeta {
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
    indicator: GetTimeSeriesPercentB200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesPercentB200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesPercentB200ResponseMeta {
  return GetTimeSeriesPercentB200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesPercentB200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesPercentB200ResponseMeta | null,
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
    indicator: GetTimeSeriesPercentB200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

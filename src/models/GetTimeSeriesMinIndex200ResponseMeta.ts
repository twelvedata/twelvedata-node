/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMinIndex200ResponseMetaIndicator } from "./GetTimeSeriesMinIndex200ResponseMetaIndicator";
import {
  GetTimeSeriesMinIndex200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesMinIndex200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesMinIndex200ResponseMetaIndicatorToJSON,
  GetTimeSeriesMinIndex200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesMinIndex200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesMinIndex200ResponseMeta
 */
export interface GetTimeSeriesMinIndex200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesMinIndex200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesMinIndex200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesMinIndex200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMinIndex200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMinIndex200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMinIndex200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesMinIndex200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesMinIndex200ResponseMetaIndicator}
   * @memberof GetTimeSeriesMinIndex200ResponseMeta
   */
  indicator: GetTimeSeriesMinIndex200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesMinIndex200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesMinIndex200ResponseMeta(
  value: object,
): value is GetTimeSeriesMinIndex200ResponseMeta {
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

export function GetTimeSeriesMinIndex200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesMinIndex200ResponseMeta {
  return GetTimeSeriesMinIndex200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesMinIndex200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMinIndex200ResponseMeta {
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
    indicator: GetTimeSeriesMinIndex200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesMinIndex200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesMinIndex200ResponseMeta {
  return GetTimeSeriesMinIndex200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesMinIndex200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesMinIndex200ResponseMeta | null,
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
    indicator: GetTimeSeriesMinIndex200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

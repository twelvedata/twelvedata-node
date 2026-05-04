/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMax200ResponseMetaIndicator } from "./GetTimeSeriesMax200ResponseMetaIndicator";
import {
  GetTimeSeriesMax200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesMax200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesMax200ResponseMetaIndicatorToJSON,
  GetTimeSeriesMax200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesMax200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesMax200ResponseMeta
 */
export interface GetTimeSeriesMax200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesMax200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesMax200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesMax200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMax200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMax200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMax200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesMax200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesMax200ResponseMetaIndicator}
   * @memberof GetTimeSeriesMax200ResponseMeta
   */
  indicator: GetTimeSeriesMax200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesMax200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesMax200ResponseMeta(
  value: object,
): value is GetTimeSeriesMax200ResponseMeta {
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

export function GetTimeSeriesMax200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesMax200ResponseMeta {
  return GetTimeSeriesMax200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesMax200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMax200ResponseMeta {
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
    indicator: GetTimeSeriesMax200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesMax200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesMax200ResponseMeta {
  return GetTimeSeriesMax200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesMax200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesMax200ResponseMeta | null,
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
    indicator: GetTimeSeriesMax200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

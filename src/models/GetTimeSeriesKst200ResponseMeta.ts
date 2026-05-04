/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesKst200ResponseMetaIndicator } from "./GetTimeSeriesKst200ResponseMetaIndicator";
import {
  GetTimeSeriesKst200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesKst200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesKst200ResponseMetaIndicatorToJSON,
  GetTimeSeriesKst200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesKst200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesKst200ResponseMeta
 */
export interface GetTimeSeriesKst200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesKst200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesKst200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesKst200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesKst200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesKst200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesKst200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesKst200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesKst200ResponseMetaIndicator}
   * @memberof GetTimeSeriesKst200ResponseMeta
   */
  indicator: GetTimeSeriesKst200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesKst200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesKst200ResponseMeta(
  value: object,
): value is GetTimeSeriesKst200ResponseMeta {
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

export function GetTimeSeriesKst200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesKst200ResponseMeta {
  return GetTimeSeriesKst200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesKst200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesKst200ResponseMeta {
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
    indicator: GetTimeSeriesKst200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesKst200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesKst200ResponseMeta {
  return GetTimeSeriesKst200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesKst200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesKst200ResponseMeta | null,
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
    indicator: GetTimeSeriesKst200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

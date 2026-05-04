/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesLinearReg200ResponseMetaIndicator } from "./GetTimeSeriesLinearReg200ResponseMetaIndicator";
import {
  GetTimeSeriesLinearReg200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesLinearReg200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesLinearReg200ResponseMetaIndicatorToJSON,
  GetTimeSeriesLinearReg200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesLinearReg200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesLinearReg200ResponseMeta
 */
export interface GetTimeSeriesLinearReg200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesLinearReg200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesLinearReg200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesLinearReg200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesLinearReg200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesLinearReg200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesLinearReg200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesLinearReg200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesLinearReg200ResponseMetaIndicator}
   * @memberof GetTimeSeriesLinearReg200ResponseMeta
   */
  indicator: GetTimeSeriesLinearReg200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesLinearReg200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesLinearReg200ResponseMeta(
  value: object,
): value is GetTimeSeriesLinearReg200ResponseMeta {
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

export function GetTimeSeriesLinearReg200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesLinearReg200ResponseMeta {
  return GetTimeSeriesLinearReg200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesLinearReg200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesLinearReg200ResponseMeta {
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
    indicator: GetTimeSeriesLinearReg200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesLinearReg200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesLinearReg200ResponseMeta {
  return GetTimeSeriesLinearReg200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesLinearReg200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesLinearReg200ResponseMeta | null,
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
    indicator: GetTimeSeriesLinearReg200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

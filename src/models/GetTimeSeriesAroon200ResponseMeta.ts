/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesAroon200ResponseMetaIndicator } from "./GetTimeSeriesAroon200ResponseMetaIndicator";
import {
  GetTimeSeriesAroon200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesAroon200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesAroon200ResponseMetaIndicatorToJSON,
  GetTimeSeriesAroon200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesAroon200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesAroon200ResponseMeta
 */
export interface GetTimeSeriesAroon200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesAroon200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesAroon200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesAroon200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAroon200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAroon200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAroon200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesAroon200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesAroon200ResponseMetaIndicator}
   * @memberof GetTimeSeriesAroon200ResponseMeta
   */
  indicator: GetTimeSeriesAroon200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesAroon200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesAroon200ResponseMeta(
  value: object,
): value is GetTimeSeriesAroon200ResponseMeta {
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

export function GetTimeSeriesAroon200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesAroon200ResponseMeta {
  return GetTimeSeriesAroon200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesAroon200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAroon200ResponseMeta {
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
    indicator: GetTimeSeriesAroon200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesAroon200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesAroon200ResponseMeta {
  return GetTimeSeriesAroon200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesAroon200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesAroon200ResponseMeta | null,
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
    indicator: GetTimeSeriesAroon200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

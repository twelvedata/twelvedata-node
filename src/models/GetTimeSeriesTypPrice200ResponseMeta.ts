/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesTypPrice200ResponseMetaIndicator } from "./GetTimeSeriesTypPrice200ResponseMetaIndicator";
import {
  GetTimeSeriesTypPrice200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesTypPrice200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesTypPrice200ResponseMetaIndicatorToJSON,
  GetTimeSeriesTypPrice200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesTypPrice200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesTypPrice200ResponseMeta
 */
export interface GetTimeSeriesTypPrice200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesTypPrice200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesTypPrice200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesTypPrice200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesTypPrice200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesTypPrice200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesTypPrice200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesTypPrice200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesTypPrice200ResponseMetaIndicator}
   * @memberof GetTimeSeriesTypPrice200ResponseMeta
   */
  indicator: GetTimeSeriesTypPrice200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesTypPrice200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesTypPrice200ResponseMeta(
  value: object,
): value is GetTimeSeriesTypPrice200ResponseMeta {
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

export function GetTimeSeriesTypPrice200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesTypPrice200ResponseMeta {
  return GetTimeSeriesTypPrice200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesTypPrice200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesTypPrice200ResponseMeta {
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
    indicator: GetTimeSeriesTypPrice200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesTypPrice200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesTypPrice200ResponseMeta {
  return GetTimeSeriesTypPrice200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesTypPrice200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesTypPrice200ResponseMeta | null,
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
    indicator: GetTimeSeriesTypPrice200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

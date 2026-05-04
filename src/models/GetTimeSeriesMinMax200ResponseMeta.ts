/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMinMax200ResponseMetaIndicator } from "./GetTimeSeriesMinMax200ResponseMetaIndicator";
import {
  GetTimeSeriesMinMax200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesMinMax200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesMinMax200ResponseMetaIndicatorToJSON,
  GetTimeSeriesMinMax200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesMinMax200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesMinMax200ResponseMeta
 */
export interface GetTimeSeriesMinMax200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesMinMax200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesMinMax200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesMinMax200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMinMax200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMinMax200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMinMax200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesMinMax200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesMinMax200ResponseMetaIndicator}
   * @memberof GetTimeSeriesMinMax200ResponseMeta
   */
  indicator: GetTimeSeriesMinMax200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesMinMax200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesMinMax200ResponseMeta(
  value: object,
): value is GetTimeSeriesMinMax200ResponseMeta {
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

export function GetTimeSeriesMinMax200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesMinMax200ResponseMeta {
  return GetTimeSeriesMinMax200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesMinMax200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMinMax200ResponseMeta {
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
    indicator: GetTimeSeriesMinMax200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesMinMax200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesMinMax200ResponseMeta {
  return GetTimeSeriesMinMax200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesMinMax200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesMinMax200ResponseMeta | null,
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
    indicator: GetTimeSeriesMinMax200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

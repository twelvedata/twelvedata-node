/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesPpo200ResponseMetaIndicator } from "./GetTimeSeriesPpo200ResponseMetaIndicator";
import {
  GetTimeSeriesPpo200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesPpo200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesPpo200ResponseMetaIndicatorToJSON,
  GetTimeSeriesPpo200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesPpo200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesPpo200ResponseMeta
 */
export interface GetTimeSeriesPpo200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesPpo200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesPpo200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesPpo200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesPpo200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesPpo200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesPpo200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesPpo200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesPpo200ResponseMetaIndicator}
   * @memberof GetTimeSeriesPpo200ResponseMeta
   */
  indicator: GetTimeSeriesPpo200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesPpo200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesPpo200ResponseMeta(
  value: object,
): value is GetTimeSeriesPpo200ResponseMeta {
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

export function GetTimeSeriesPpo200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesPpo200ResponseMeta {
  return GetTimeSeriesPpo200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesPpo200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesPpo200ResponseMeta {
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
    indicator: GetTimeSeriesPpo200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesPpo200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesPpo200ResponseMeta {
  return GetTimeSeriesPpo200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesPpo200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesPpo200ResponseMeta | null,
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
    indicator: GetTimeSeriesPpo200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

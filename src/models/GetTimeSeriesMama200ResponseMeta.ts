/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMama200ResponseMetaIndicator } from "./GetTimeSeriesMama200ResponseMetaIndicator";
import {
  GetTimeSeriesMama200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesMama200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesMama200ResponseMetaIndicatorToJSON,
  GetTimeSeriesMama200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesMama200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesMama200ResponseMeta
 */
export interface GetTimeSeriesMama200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesMama200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesMama200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesMama200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMama200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMama200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMama200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesMama200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesMama200ResponseMetaIndicator}
   * @memberof GetTimeSeriesMama200ResponseMeta
   */
  indicator: GetTimeSeriesMama200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesMama200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesMama200ResponseMeta(
  value: object,
): value is GetTimeSeriesMama200ResponseMeta {
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

export function GetTimeSeriesMama200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesMama200ResponseMeta {
  return GetTimeSeriesMama200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesMama200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMama200ResponseMeta {
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
    indicator: GetTimeSeriesMama200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesMama200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesMama200ResponseMeta {
  return GetTimeSeriesMama200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesMama200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesMama200ResponseMeta | null,
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
    indicator: GetTimeSeriesMama200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

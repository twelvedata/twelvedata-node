/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesTema200ResponseMetaIndicator } from "./GetTimeSeriesTema200ResponseMetaIndicator";
import {
  GetTimeSeriesTema200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesTema200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesTema200ResponseMetaIndicatorToJSON,
  GetTimeSeriesTema200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesTema200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesTema200ResponseMeta
 */
export interface GetTimeSeriesTema200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesTema200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesTema200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesTema200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesTema200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesTema200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesTema200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesTema200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesTema200ResponseMetaIndicator}
   * @memberof GetTimeSeriesTema200ResponseMeta
   */
  indicator: GetTimeSeriesTema200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesTema200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesTema200ResponseMeta(
  value: object,
): value is GetTimeSeriesTema200ResponseMeta {
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

export function GetTimeSeriesTema200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesTema200ResponseMeta {
  return GetTimeSeriesTema200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesTema200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesTema200ResponseMeta {
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
    indicator: GetTimeSeriesTema200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesTema200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesTema200ResponseMeta {
  return GetTimeSeriesTema200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesTema200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesTema200ResponseMeta | null,
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
    indicator: GetTimeSeriesTema200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

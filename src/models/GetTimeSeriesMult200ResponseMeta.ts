/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMult200ResponseMetaIndicator } from "./GetTimeSeriesMult200ResponseMetaIndicator";
import {
  GetTimeSeriesMult200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesMult200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesMult200ResponseMetaIndicatorToJSON,
  GetTimeSeriesMult200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesMult200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesMult200ResponseMeta
 */
export interface GetTimeSeriesMult200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesMult200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesMult200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesMult200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMult200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMult200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMult200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesMult200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesMult200ResponseMetaIndicator}
   * @memberof GetTimeSeriesMult200ResponseMeta
   */
  indicator: GetTimeSeriesMult200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesMult200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesMult200ResponseMeta(
  value: object,
): value is GetTimeSeriesMult200ResponseMeta {
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

export function GetTimeSeriesMult200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesMult200ResponseMeta {
  return GetTimeSeriesMult200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesMult200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMult200ResponseMeta {
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
    indicator: GetTimeSeriesMult200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesMult200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesMult200ResponseMeta {
  return GetTimeSeriesMult200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesMult200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesMult200ResponseMeta | null,
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
    indicator: GetTimeSeriesMult200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

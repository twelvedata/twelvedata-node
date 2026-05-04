/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMidPoint200ResponseMetaIndicator } from "./GetTimeSeriesMidPoint200ResponseMetaIndicator";
import {
  GetTimeSeriesMidPoint200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesMidPoint200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesMidPoint200ResponseMetaIndicatorToJSON,
  GetTimeSeriesMidPoint200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesMidPoint200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesMidPoint200ResponseMeta
 */
export interface GetTimeSeriesMidPoint200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesMidPoint200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesMidPoint200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesMidPoint200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMidPoint200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMidPoint200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMidPoint200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesMidPoint200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesMidPoint200ResponseMetaIndicator}
   * @memberof GetTimeSeriesMidPoint200ResponseMeta
   */
  indicator: GetTimeSeriesMidPoint200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesMidPoint200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesMidPoint200ResponseMeta(
  value: object,
): value is GetTimeSeriesMidPoint200ResponseMeta {
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

export function GetTimeSeriesMidPoint200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesMidPoint200ResponseMeta {
  return GetTimeSeriesMidPoint200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesMidPoint200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMidPoint200ResponseMeta {
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
    indicator: GetTimeSeriesMidPoint200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesMidPoint200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesMidPoint200ResponseMeta {
  return GetTimeSeriesMidPoint200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesMidPoint200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesMidPoint200ResponseMeta | null,
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
    indicator: GetTimeSeriesMidPoint200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesCci200ResponseMetaIndicator } from "./GetTimeSeriesCci200ResponseMetaIndicator";
import {
  GetTimeSeriesCci200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesCci200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesCci200ResponseMetaIndicatorToJSON,
  GetTimeSeriesCci200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesCci200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesCci200ResponseMeta
 */
export interface GetTimeSeriesCci200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesCci200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesCci200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesCci200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesCci200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesCci200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesCci200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesCci200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesCci200ResponseMetaIndicator}
   * @memberof GetTimeSeriesCci200ResponseMeta
   */
  indicator: GetTimeSeriesCci200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesCci200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesCci200ResponseMeta(
  value: object,
): value is GetTimeSeriesCci200ResponseMeta {
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

export function GetTimeSeriesCci200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesCci200ResponseMeta {
  return GetTimeSeriesCci200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesCci200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCci200ResponseMeta {
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
    indicator: GetTimeSeriesCci200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesCci200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesCci200ResponseMeta {
  return GetTimeSeriesCci200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesCci200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesCci200ResponseMeta | null,
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
    indicator: GetTimeSeriesCci200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

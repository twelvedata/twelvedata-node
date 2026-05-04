/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesTsf200ResponseMetaIndicator } from "./GetTimeSeriesTsf200ResponseMetaIndicator";
import {
  GetTimeSeriesTsf200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesTsf200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesTsf200ResponseMetaIndicatorToJSON,
  GetTimeSeriesTsf200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesTsf200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesTsf200ResponseMeta
 */
export interface GetTimeSeriesTsf200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesTsf200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesTsf200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesTsf200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesTsf200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesTsf200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesTsf200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesTsf200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesTsf200ResponseMetaIndicator}
   * @memberof GetTimeSeriesTsf200ResponseMeta
   */
  indicator: GetTimeSeriesTsf200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesTsf200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesTsf200ResponseMeta(
  value: object,
): value is GetTimeSeriesTsf200ResponseMeta {
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

export function GetTimeSeriesTsf200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesTsf200ResponseMeta {
  return GetTimeSeriesTsf200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesTsf200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesTsf200ResponseMeta {
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
    indicator: GetTimeSeriesTsf200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesTsf200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesTsf200ResponseMeta {
  return GetTimeSeriesTsf200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesTsf200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesTsf200ResponseMeta | null,
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
    indicator: GetTimeSeriesTsf200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

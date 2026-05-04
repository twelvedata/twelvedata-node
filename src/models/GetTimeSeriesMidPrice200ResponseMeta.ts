/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMidPrice200ResponseMetaIndicator } from "./GetTimeSeriesMidPrice200ResponseMetaIndicator";
import {
  GetTimeSeriesMidPrice200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesMidPrice200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesMidPrice200ResponseMetaIndicatorToJSON,
  GetTimeSeriesMidPrice200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesMidPrice200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesMidPrice200ResponseMeta
 */
export interface GetTimeSeriesMidPrice200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesMidPrice200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesMidPrice200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesMidPrice200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMidPrice200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMidPrice200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMidPrice200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesMidPrice200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesMidPrice200ResponseMetaIndicator}
   * @memberof GetTimeSeriesMidPrice200ResponseMeta
   */
  indicator: GetTimeSeriesMidPrice200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesMidPrice200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesMidPrice200ResponseMeta(
  value: object,
): value is GetTimeSeriesMidPrice200ResponseMeta {
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

export function GetTimeSeriesMidPrice200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesMidPrice200ResponseMeta {
  return GetTimeSeriesMidPrice200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesMidPrice200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMidPrice200ResponseMeta {
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
    indicator: GetTimeSeriesMidPrice200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesMidPrice200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesMidPrice200ResponseMeta {
  return GetTimeSeriesMidPrice200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesMidPrice200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesMidPrice200ResponseMeta | null,
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
    indicator: GetTimeSeriesMidPrice200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

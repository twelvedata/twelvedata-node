/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMfi200ResponseMetaIndicator } from "./GetTimeSeriesMfi200ResponseMetaIndicator";
import {
  GetTimeSeriesMfi200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesMfi200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesMfi200ResponseMetaIndicatorToJSON,
  GetTimeSeriesMfi200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesMfi200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesMfi200ResponseMeta
 */
export interface GetTimeSeriesMfi200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesMfi200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesMfi200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesMfi200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMfi200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMfi200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMfi200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesMfi200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesMfi200ResponseMetaIndicator}
   * @memberof GetTimeSeriesMfi200ResponseMeta
   */
  indicator: GetTimeSeriesMfi200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesMfi200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesMfi200ResponseMeta(
  value: object,
): value is GetTimeSeriesMfi200ResponseMeta {
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

export function GetTimeSeriesMfi200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesMfi200ResponseMeta {
  return GetTimeSeriesMfi200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesMfi200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMfi200ResponseMeta {
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
    indicator: GetTimeSeriesMfi200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesMfi200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesMfi200ResponseMeta {
  return GetTimeSeriesMfi200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesMfi200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesMfi200ResponseMeta | null,
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
    indicator: GetTimeSeriesMfi200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

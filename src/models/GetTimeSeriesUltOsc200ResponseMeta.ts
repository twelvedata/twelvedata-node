/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesUltOsc200ResponseMetaIndicator } from "./GetTimeSeriesUltOsc200ResponseMetaIndicator";
import {
  GetTimeSeriesUltOsc200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesUltOsc200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesUltOsc200ResponseMetaIndicatorToJSON,
  GetTimeSeriesUltOsc200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesUltOsc200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesUltOsc200ResponseMeta
 */
export interface GetTimeSeriesUltOsc200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesUltOsc200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesUltOsc200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesUltOsc200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesUltOsc200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesUltOsc200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesUltOsc200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesUltOsc200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesUltOsc200ResponseMetaIndicator}
   * @memberof GetTimeSeriesUltOsc200ResponseMeta
   */
  indicator: GetTimeSeriesUltOsc200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesUltOsc200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesUltOsc200ResponseMeta(
  value: object,
): value is GetTimeSeriesUltOsc200ResponseMeta {
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

export function GetTimeSeriesUltOsc200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesUltOsc200ResponseMeta {
  return GetTimeSeriesUltOsc200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesUltOsc200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesUltOsc200ResponseMeta {
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
    indicator: GetTimeSeriesUltOsc200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesUltOsc200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesUltOsc200ResponseMeta {
  return GetTimeSeriesUltOsc200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesUltOsc200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesUltOsc200ResponseMeta | null,
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
    indicator: GetTimeSeriesUltOsc200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

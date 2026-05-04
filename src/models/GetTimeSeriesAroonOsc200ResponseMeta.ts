/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesAroonOsc200ResponseMetaIndicator } from "./GetTimeSeriesAroonOsc200ResponseMetaIndicator";
import {
  GetTimeSeriesAroonOsc200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesAroonOsc200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesAroonOsc200ResponseMetaIndicatorToJSON,
  GetTimeSeriesAroonOsc200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesAroonOsc200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesAroonOsc200ResponseMeta
 */
export interface GetTimeSeriesAroonOsc200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesAroonOsc200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesAroonOsc200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesAroonOsc200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAroonOsc200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAroonOsc200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAroonOsc200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesAroonOsc200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesAroonOsc200ResponseMetaIndicator}
   * @memberof GetTimeSeriesAroonOsc200ResponseMeta
   */
  indicator: GetTimeSeriesAroonOsc200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesAroonOsc200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesAroonOsc200ResponseMeta(
  value: object,
): value is GetTimeSeriesAroonOsc200ResponseMeta {
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

export function GetTimeSeriesAroonOsc200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesAroonOsc200ResponseMeta {
  return GetTimeSeriesAroonOsc200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesAroonOsc200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAroonOsc200ResponseMeta {
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
    indicator: GetTimeSeriesAroonOsc200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesAroonOsc200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesAroonOsc200ResponseMeta {
  return GetTimeSeriesAroonOsc200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesAroonOsc200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesAroonOsc200ResponseMeta | null,
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
    indicator: GetTimeSeriesAroonOsc200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesVar200ResponseMetaIndicator } from "./GetTimeSeriesVar200ResponseMetaIndicator";
import {
  GetTimeSeriesVar200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesVar200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesVar200ResponseMetaIndicatorToJSON,
  GetTimeSeriesVar200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesVar200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesVar200ResponseMeta
 */
export interface GetTimeSeriesVar200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesVar200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesVar200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesVar200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesVar200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesVar200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesVar200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesVar200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesVar200ResponseMetaIndicator}
   * @memberof GetTimeSeriesVar200ResponseMeta
   */
  indicator: GetTimeSeriesVar200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesVar200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesVar200ResponseMeta(
  value: object,
): value is GetTimeSeriesVar200ResponseMeta {
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

export function GetTimeSeriesVar200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesVar200ResponseMeta {
  return GetTimeSeriesVar200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesVar200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesVar200ResponseMeta {
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
    indicator: GetTimeSeriesVar200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesVar200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesVar200ResponseMeta {
  return GetTimeSeriesVar200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesVar200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesVar200ResponseMeta | null,
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
    indicator: GetTimeSeriesVar200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesAvg200ResponseMetaIndicator } from "./GetTimeSeriesAvg200ResponseMetaIndicator";
import {
  GetTimeSeriesAvg200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesAvg200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesAvg200ResponseMetaIndicatorToJSON,
  GetTimeSeriesAvg200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesAvg200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesAvg200ResponseMeta
 */
export interface GetTimeSeriesAvg200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesAvg200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesAvg200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesAvg200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAvg200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAvg200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAvg200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesAvg200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesAvg200ResponseMetaIndicator}
   * @memberof GetTimeSeriesAvg200ResponseMeta
   */
  indicator: GetTimeSeriesAvg200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesAvg200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesAvg200ResponseMeta(
  value: object,
): value is GetTimeSeriesAvg200ResponseMeta {
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

export function GetTimeSeriesAvg200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesAvg200ResponseMeta {
  return GetTimeSeriesAvg200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesAvg200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAvg200ResponseMeta {
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
    indicator: GetTimeSeriesAvg200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesAvg200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesAvg200ResponseMeta {
  return GetTimeSeriesAvg200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesAvg200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesAvg200ResponseMeta | null,
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
    indicator: GetTimeSeriesAvg200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesFloor200ResponseMetaIndicator } from "./GetTimeSeriesFloor200ResponseMetaIndicator";
import {
  GetTimeSeriesFloor200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesFloor200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesFloor200ResponseMetaIndicatorToJSON,
  GetTimeSeriesFloor200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesFloor200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesFloor200ResponseMeta
 */
export interface GetTimeSeriesFloor200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesFloor200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesFloor200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesFloor200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesFloor200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesFloor200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesFloor200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesFloor200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesFloor200ResponseMetaIndicator}
   * @memberof GetTimeSeriesFloor200ResponseMeta
   */
  indicator: GetTimeSeriesFloor200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesFloor200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesFloor200ResponseMeta(
  value: object,
): value is GetTimeSeriesFloor200ResponseMeta {
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

export function GetTimeSeriesFloor200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesFloor200ResponseMeta {
  return GetTimeSeriesFloor200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesFloor200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesFloor200ResponseMeta {
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
    indicator: GetTimeSeriesFloor200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesFloor200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesFloor200ResponseMeta {
  return GetTimeSeriesFloor200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesFloor200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesFloor200ResponseMeta | null,
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
    indicator: GetTimeSeriesFloor200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

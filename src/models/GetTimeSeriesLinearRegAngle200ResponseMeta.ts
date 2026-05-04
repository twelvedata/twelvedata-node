/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesLinearRegAngle200ResponseMetaIndicator } from "./GetTimeSeriesLinearRegAngle200ResponseMetaIndicator";
import {
  GetTimeSeriesLinearRegAngle200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesLinearRegAngle200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesLinearRegAngle200ResponseMetaIndicatorToJSON,
  GetTimeSeriesLinearRegAngle200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesLinearRegAngle200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesLinearRegAngle200ResponseMeta
 */
export interface GetTimeSeriesLinearRegAngle200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesLinearRegAngle200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesLinearRegAngle200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesLinearRegAngle200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesLinearRegAngle200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesLinearRegAngle200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesLinearRegAngle200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesLinearRegAngle200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesLinearRegAngle200ResponseMetaIndicator}
   * @memberof GetTimeSeriesLinearRegAngle200ResponseMeta
   */
  indicator: GetTimeSeriesLinearRegAngle200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesLinearRegAngle200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesLinearRegAngle200ResponseMeta(
  value: object,
): value is GetTimeSeriesLinearRegAngle200ResponseMeta {
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

export function GetTimeSeriesLinearRegAngle200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesLinearRegAngle200ResponseMeta {
  return GetTimeSeriesLinearRegAngle200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesLinearRegAngle200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesLinearRegAngle200ResponseMeta {
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
    indicator: GetTimeSeriesLinearRegAngle200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesLinearRegAngle200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesLinearRegAngle200ResponseMeta {
  return GetTimeSeriesLinearRegAngle200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesLinearRegAngle200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesLinearRegAngle200ResponseMeta | null,
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
    indicator: GetTimeSeriesLinearRegAngle200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

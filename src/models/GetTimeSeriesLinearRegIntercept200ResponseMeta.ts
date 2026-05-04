/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesLinearRegIntercept200ResponseMetaIndicator } from "./GetTimeSeriesLinearRegIntercept200ResponseMetaIndicator";
import {
  GetTimeSeriesLinearRegIntercept200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesLinearRegIntercept200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesLinearRegIntercept200ResponseMetaIndicatorToJSON,
  GetTimeSeriesLinearRegIntercept200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesLinearRegIntercept200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesLinearRegIntercept200ResponseMeta
 */
export interface GetTimeSeriesLinearRegIntercept200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesLinearRegIntercept200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesLinearRegIntercept200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesLinearRegIntercept200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesLinearRegIntercept200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesLinearRegIntercept200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesLinearRegIntercept200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesLinearRegIntercept200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesLinearRegIntercept200ResponseMetaIndicator}
   * @memberof GetTimeSeriesLinearRegIntercept200ResponseMeta
   */
  indicator: GetTimeSeriesLinearRegIntercept200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesLinearRegIntercept200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesLinearRegIntercept200ResponseMeta(
  value: object,
): value is GetTimeSeriesLinearRegIntercept200ResponseMeta {
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

export function GetTimeSeriesLinearRegIntercept200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesLinearRegIntercept200ResponseMeta {
  return GetTimeSeriesLinearRegIntercept200ResponseMetaFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesLinearRegIntercept200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesLinearRegIntercept200ResponseMeta {
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
    indicator: GetTimeSeriesLinearRegIntercept200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesLinearRegIntercept200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesLinearRegIntercept200ResponseMeta {
  return GetTimeSeriesLinearRegIntercept200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesLinearRegIntercept200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesLinearRegIntercept200ResponseMeta | null,
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
    indicator: GetTimeSeriesLinearRegIntercept200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

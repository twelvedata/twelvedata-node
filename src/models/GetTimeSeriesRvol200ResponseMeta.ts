/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesRvol200ResponseMetaIndicator } from "./GetTimeSeriesRvol200ResponseMetaIndicator";
import {
  GetTimeSeriesRvol200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesRvol200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesRvol200ResponseMetaIndicatorToJSON,
  GetTimeSeriesRvol200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesRvol200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesRvol200ResponseMeta
 */
export interface GetTimeSeriesRvol200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesRvol200ResponseMeta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesRvol200ResponseMeta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesRvol200ResponseMeta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesRvol200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesRvol200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesRvol200ResponseMeta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesRvol200ResponseMeta
   */
  type: string;
  /**
   *
   * @type {GetTimeSeriesRvol200ResponseMetaIndicator}
   * @memberof GetTimeSeriesRvol200ResponseMeta
   */
  indicator: GetTimeSeriesRvol200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesRvol200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesRvol200ResponseMeta(
  value: object,
): value is GetTimeSeriesRvol200ResponseMeta {
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

export function GetTimeSeriesRvol200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesRvol200ResponseMeta {
  return GetTimeSeriesRvol200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesRvol200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesRvol200ResponseMeta {
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
    indicator: GetTimeSeriesRvol200ResponseMetaIndicatorFromJSON(
      json["indicator"],
    ),
  };
}

export function GetTimeSeriesRvol200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesRvol200ResponseMeta {
  return GetTimeSeriesRvol200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesRvol200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesRvol200ResponseMeta | null,
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
    indicator: GetTimeSeriesRvol200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

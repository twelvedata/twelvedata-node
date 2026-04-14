/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesSma200ResponseMetaIndicator } from "./GetTimeSeriesSma200ResponseMetaIndicator";
import {
  GetTimeSeriesSma200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesSma200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesSma200ResponseMetaIndicatorToJSON,
  GetTimeSeriesSma200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesSma200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesSma200ResponseMeta
 */
export interface GetTimeSeriesSma200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesSma200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesSma200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesSma200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSma200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSma200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSma200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesSma200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesSma200ResponseMetaIndicator}
   * @memberof GetTimeSeriesSma200ResponseMeta
   */
  indicator?: GetTimeSeriesSma200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesSma200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesSma200ResponseMeta(
  value: object,
): value is GetTimeSeriesSma200ResponseMeta {
  return true;
}

export function GetTimeSeriesSma200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesSma200ResponseMeta {
  return GetTimeSeriesSma200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesSma200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSma200ResponseMeta {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"] == null ? undefined : json["symbol"],
    interval: json["interval"] == null ? undefined : json["interval"],
    currency: json["currency"] == null ? undefined : json["currency"],
    exchangeTimezone:
      json["exchange_timezone"] == null ? undefined : json["exchange_timezone"],
    exchange: json["exchange"] == null ? undefined : json["exchange"],
    micCode: json["mic_code"] == null ? undefined : json["mic_code"],
    type: json["type"] == null ? undefined : json["type"],
    indicator:
      json["indicator"] == null
        ? undefined
        : GetTimeSeriesSma200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesSma200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesSma200ResponseMeta {
  return GetTimeSeriesSma200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesSma200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesSma200ResponseMeta | null,
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
    indicator: GetTimeSeriesSma200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

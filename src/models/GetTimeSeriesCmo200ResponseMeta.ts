/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesCmo200ResponseMetaIndicator } from "./GetTimeSeriesCmo200ResponseMetaIndicator";
import {
  GetTimeSeriesCmo200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesCmo200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesCmo200ResponseMetaIndicatorToJSON,
  GetTimeSeriesCmo200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesCmo200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesCmo200ResponseMeta
 */
export interface GetTimeSeriesCmo200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesCmo200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesCmo200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesCmo200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesCmo200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesCmo200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesCmo200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesCmo200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesCmo200ResponseMetaIndicator}
   * @memberof GetTimeSeriesCmo200ResponseMeta
   */
  indicator?: GetTimeSeriesCmo200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesCmo200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesCmo200ResponseMeta(
  value: object,
): value is GetTimeSeriesCmo200ResponseMeta {
  return true;
}

export function GetTimeSeriesCmo200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesCmo200ResponseMeta {
  return GetTimeSeriesCmo200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesCmo200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCmo200ResponseMeta {
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
        : GetTimeSeriesCmo200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesCmo200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesCmo200ResponseMeta {
  return GetTimeSeriesCmo200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesCmo200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesCmo200ResponseMeta | null,
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
    indicator: GetTimeSeriesCmo200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

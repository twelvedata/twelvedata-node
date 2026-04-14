/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesDpo200ResponseMetaIndicator } from "./GetTimeSeriesDpo200ResponseMetaIndicator";
import {
  GetTimeSeriesDpo200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesDpo200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesDpo200ResponseMetaIndicatorToJSON,
  GetTimeSeriesDpo200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesDpo200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesDpo200ResponseMeta
 */
export interface GetTimeSeriesDpo200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesDpo200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesDpo200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesDpo200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesDpo200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesDpo200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesDpo200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesDpo200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesDpo200ResponseMetaIndicator}
   * @memberof GetTimeSeriesDpo200ResponseMeta
   */
  indicator?: GetTimeSeriesDpo200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesDpo200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesDpo200ResponseMeta(
  value: object,
): value is GetTimeSeriesDpo200ResponseMeta {
  return true;
}

export function GetTimeSeriesDpo200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesDpo200ResponseMeta {
  return GetTimeSeriesDpo200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesDpo200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesDpo200ResponseMeta {
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
        : GetTimeSeriesDpo200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesDpo200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesDpo200ResponseMeta {
  return GetTimeSeriesDpo200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesDpo200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesDpo200ResponseMeta | null,
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
    indicator: GetTimeSeriesDpo200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

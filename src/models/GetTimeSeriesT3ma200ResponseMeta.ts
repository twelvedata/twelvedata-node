/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesT3ma200ResponseMetaIndicator } from "./GetTimeSeriesT3ma200ResponseMetaIndicator";
import {
  GetTimeSeriesT3ma200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesT3ma200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesT3ma200ResponseMetaIndicatorToJSON,
  GetTimeSeriesT3ma200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesT3ma200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesT3ma200ResponseMeta
 */
export interface GetTimeSeriesT3ma200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesT3ma200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesT3ma200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesT3ma200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesT3ma200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesT3ma200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesT3ma200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesT3ma200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesT3ma200ResponseMetaIndicator}
   * @memberof GetTimeSeriesT3ma200ResponseMeta
   */
  indicator?: GetTimeSeriesT3ma200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesT3ma200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesT3ma200ResponseMeta(
  value: object,
): value is GetTimeSeriesT3ma200ResponseMeta {
  return true;
}

export function GetTimeSeriesT3ma200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesT3ma200ResponseMeta {
  return GetTimeSeriesT3ma200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesT3ma200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesT3ma200ResponseMeta {
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
        : GetTimeSeriesT3ma200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesT3ma200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesT3ma200ResponseMeta {
  return GetTimeSeriesT3ma200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesT3ma200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesT3ma200ResponseMeta | null,
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
    indicator: GetTimeSeriesT3ma200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

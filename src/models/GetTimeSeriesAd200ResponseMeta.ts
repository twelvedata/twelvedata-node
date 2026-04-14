/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesAd200ResponseMetaIndicator } from "./GetTimeSeriesAd200ResponseMetaIndicator";
import {
  GetTimeSeriesAd200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesAd200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesAd200ResponseMetaIndicatorToJSON,
  GetTimeSeriesAd200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesAd200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesAd200ResponseMeta
 */
export interface GetTimeSeriesAd200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesAd200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesAd200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesAd200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAd200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAd200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAd200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesAd200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesAd200ResponseMetaIndicator}
   * @memberof GetTimeSeriesAd200ResponseMeta
   */
  indicator?: GetTimeSeriesAd200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesAd200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesAd200ResponseMeta(
  value: object,
): value is GetTimeSeriesAd200ResponseMeta {
  return true;
}

export function GetTimeSeriesAd200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesAd200ResponseMeta {
  return GetTimeSeriesAd200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesAd200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAd200ResponseMeta {
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
        : GetTimeSeriesAd200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesAd200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesAd200ResponseMeta {
  return GetTimeSeriesAd200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesAd200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesAd200ResponseMeta | null,
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
    indicator: GetTimeSeriesAd200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

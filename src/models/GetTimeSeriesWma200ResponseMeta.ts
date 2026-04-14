/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesWma200ResponseMetaIndicator } from "./GetTimeSeriesWma200ResponseMetaIndicator";
import {
  GetTimeSeriesWma200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesWma200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesWma200ResponseMetaIndicatorToJSON,
  GetTimeSeriesWma200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesWma200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesWma200ResponseMeta
 */
export interface GetTimeSeriesWma200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesWma200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesWma200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesWma200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesWma200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesWma200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesWma200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesWma200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesWma200ResponseMetaIndicator}
   * @memberof GetTimeSeriesWma200ResponseMeta
   */
  indicator?: GetTimeSeriesWma200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesWma200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesWma200ResponseMeta(
  value: object,
): value is GetTimeSeriesWma200ResponseMeta {
  return true;
}

export function GetTimeSeriesWma200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesWma200ResponseMeta {
  return GetTimeSeriesWma200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesWma200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesWma200ResponseMeta {
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
        : GetTimeSeriesWma200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesWma200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesWma200ResponseMeta {
  return GetTimeSeriesWma200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesWma200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesWma200ResponseMeta | null,
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
    indicator: GetTimeSeriesWma200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

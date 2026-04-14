/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesHtSine200ResponseMetaIndicator } from "./GetTimeSeriesHtSine200ResponseMetaIndicator";
import {
  GetTimeSeriesHtSine200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesHtSine200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesHtSine200ResponseMetaIndicatorToJSON,
  GetTimeSeriesHtSine200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesHtSine200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesHtSine200ResponseMeta
 */
export interface GetTimeSeriesHtSine200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesHtSine200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesHtSine200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesHtSine200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHtSine200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHtSine200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHtSine200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesHtSine200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesHtSine200ResponseMetaIndicator}
   * @memberof GetTimeSeriesHtSine200ResponseMeta
   */
  indicator?: GetTimeSeriesHtSine200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesHtSine200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesHtSine200ResponseMeta(
  value: object,
): value is GetTimeSeriesHtSine200ResponseMeta {
  return true;
}

export function GetTimeSeriesHtSine200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesHtSine200ResponseMeta {
  return GetTimeSeriesHtSine200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesHtSine200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtSine200ResponseMeta {
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
        : GetTimeSeriesHtSine200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesHtSine200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesHtSine200ResponseMeta {
  return GetTimeSeriesHtSine200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesHtSine200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesHtSine200ResponseMeta | null,
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
    indicator: GetTimeSeriesHtSine200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

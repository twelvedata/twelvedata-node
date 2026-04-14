/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesHlc3200ResponseMetaIndicator } from "./GetTimeSeriesHlc3200ResponseMetaIndicator";
import {
  GetTimeSeriesHlc3200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesHlc3200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesHlc3200ResponseMetaIndicatorToJSON,
  GetTimeSeriesHlc3200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesHlc3200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesHlc3200ResponseMeta
 */
export interface GetTimeSeriesHlc3200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesHlc3200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesHlc3200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesHlc3200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHlc3200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHlc3200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHlc3200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesHlc3200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesHlc3200ResponseMetaIndicator}
   * @memberof GetTimeSeriesHlc3200ResponseMeta
   */
  indicator?: GetTimeSeriesHlc3200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesHlc3200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesHlc3200ResponseMeta(
  value: object,
): value is GetTimeSeriesHlc3200ResponseMeta {
  return true;
}

export function GetTimeSeriesHlc3200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesHlc3200ResponseMeta {
  return GetTimeSeriesHlc3200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesHlc3200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHlc3200ResponseMeta {
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
        : GetTimeSeriesHlc3200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesHlc3200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesHlc3200ResponseMeta {
  return GetTimeSeriesHlc3200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesHlc3200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesHlc3200ResponseMeta | null,
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
    indicator: GetTimeSeriesHlc3200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Common metadata fields for time series indicator responses
 * @export
 * @interface TimeSeriesIndicatorMeta
 */
export interface TimeSeriesIndicatorMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof TimeSeriesIndicatorMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof TimeSeriesIndicatorMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof TimeSeriesIndicatorMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof TimeSeriesIndicatorMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof TimeSeriesIndicatorMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof TimeSeriesIndicatorMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof TimeSeriesIndicatorMeta
   */
  type?: string;
}

/**
 * Check if a given object implements the TimeSeriesIndicatorMeta interface.
 */
export function instanceOfTimeSeriesIndicatorMeta(
  value: object,
): value is TimeSeriesIndicatorMeta {
  return true;
}

export function TimeSeriesIndicatorMetaFromJSON(
  json: any,
): TimeSeriesIndicatorMeta {
  return TimeSeriesIndicatorMetaFromJSONTyped(json, false);
}

export function TimeSeriesIndicatorMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TimeSeriesIndicatorMeta {
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
  };
}

export function TimeSeriesIndicatorMetaToJSON(
  json: any,
): TimeSeriesIndicatorMeta {
  return TimeSeriesIndicatorMetaToJSONTyped(json, false);
}

export function TimeSeriesIndicatorMetaToJSONTyped(
  value?: TimeSeriesIndicatorMeta | null,
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
  };
}

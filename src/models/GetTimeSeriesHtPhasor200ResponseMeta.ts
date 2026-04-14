/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesHtPhasor200ResponseMetaIndicator } from "./GetTimeSeriesHtPhasor200ResponseMetaIndicator";
import {
  GetTimeSeriesHtPhasor200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesHtPhasor200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesHtPhasor200ResponseMetaIndicatorToJSON,
  GetTimeSeriesHtPhasor200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesHtPhasor200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesHtPhasor200ResponseMeta
 */
export interface GetTimeSeriesHtPhasor200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesHtPhasor200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesHtPhasor200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesHtPhasor200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHtPhasor200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHtPhasor200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHtPhasor200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesHtPhasor200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesHtPhasor200ResponseMetaIndicator}
   * @memberof GetTimeSeriesHtPhasor200ResponseMeta
   */
  indicator?: GetTimeSeriesHtPhasor200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesHtPhasor200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesHtPhasor200ResponseMeta(
  value: object,
): value is GetTimeSeriesHtPhasor200ResponseMeta {
  return true;
}

export function GetTimeSeriesHtPhasor200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesHtPhasor200ResponseMeta {
  return GetTimeSeriesHtPhasor200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesHtPhasor200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtPhasor200ResponseMeta {
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
        : GetTimeSeriesHtPhasor200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesHtPhasor200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesHtPhasor200ResponseMeta {
  return GetTimeSeriesHtPhasor200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesHtPhasor200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesHtPhasor200ResponseMeta | null,
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
    indicator: GetTimeSeriesHtPhasor200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

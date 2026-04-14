/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesHtTrendline200ResponseMetaIndicator } from "./GetTimeSeriesHtTrendline200ResponseMetaIndicator";
import {
  GetTimeSeriesHtTrendline200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesHtTrendline200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesHtTrendline200ResponseMetaIndicatorToJSON,
  GetTimeSeriesHtTrendline200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesHtTrendline200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesHtTrendline200ResponseMeta
 */
export interface GetTimeSeriesHtTrendline200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesHtTrendline200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesHtTrendline200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesHtTrendline200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHtTrendline200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHtTrendline200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHtTrendline200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesHtTrendline200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesHtTrendline200ResponseMetaIndicator}
   * @memberof GetTimeSeriesHtTrendline200ResponseMeta
   */
  indicator?: GetTimeSeriesHtTrendline200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesHtTrendline200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesHtTrendline200ResponseMeta(
  value: object,
): value is GetTimeSeriesHtTrendline200ResponseMeta {
  return true;
}

export function GetTimeSeriesHtTrendline200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesHtTrendline200ResponseMeta {
  return GetTimeSeriesHtTrendline200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesHtTrendline200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtTrendline200ResponseMeta {
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
        : GetTimeSeriesHtTrendline200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesHtTrendline200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesHtTrendline200ResponseMeta {
  return GetTimeSeriesHtTrendline200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesHtTrendline200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesHtTrendline200ResponseMeta | null,
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
    indicator: GetTimeSeriesHtTrendline200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

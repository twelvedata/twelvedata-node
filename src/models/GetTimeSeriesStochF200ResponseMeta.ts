/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesStochF200ResponseMetaIndicator } from "./GetTimeSeriesStochF200ResponseMetaIndicator";
import {
  GetTimeSeriesStochF200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesStochF200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesStochF200ResponseMetaIndicatorToJSON,
  GetTimeSeriesStochF200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesStochF200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesStochF200ResponseMeta
 */
export interface GetTimeSeriesStochF200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesStochF200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesStochF200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesStochF200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesStochF200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesStochF200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesStochF200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesStochF200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesStochF200ResponseMetaIndicator}
   * @memberof GetTimeSeriesStochF200ResponseMeta
   */
  indicator?: GetTimeSeriesStochF200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesStochF200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesStochF200ResponseMeta(
  value: object,
): value is GetTimeSeriesStochF200ResponseMeta {
  return true;
}

export function GetTimeSeriesStochF200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesStochF200ResponseMeta {
  return GetTimeSeriesStochF200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesStochF200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesStochF200ResponseMeta {
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
        : GetTimeSeriesStochF200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesStochF200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesStochF200ResponseMeta {
  return GetTimeSeriesStochF200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesStochF200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesStochF200ResponseMeta | null,
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
    indicator: GetTimeSeriesStochF200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

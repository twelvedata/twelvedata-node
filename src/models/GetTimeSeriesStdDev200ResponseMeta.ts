/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesStdDev200ResponseMetaIndicator } from "./GetTimeSeriesStdDev200ResponseMetaIndicator";
import {
  GetTimeSeriesStdDev200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesStdDev200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesStdDev200ResponseMetaIndicatorToJSON,
  GetTimeSeriesStdDev200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesStdDev200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesStdDev200ResponseMeta
 */
export interface GetTimeSeriesStdDev200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesStdDev200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesStdDev200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesStdDev200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesStdDev200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesStdDev200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesStdDev200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesStdDev200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesStdDev200ResponseMetaIndicator}
   * @memberof GetTimeSeriesStdDev200ResponseMeta
   */
  indicator?: GetTimeSeriesStdDev200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesStdDev200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesStdDev200ResponseMeta(
  value: object,
): value is GetTimeSeriesStdDev200ResponseMeta {
  return true;
}

export function GetTimeSeriesStdDev200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesStdDev200ResponseMeta {
  return GetTimeSeriesStdDev200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesStdDev200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesStdDev200ResponseMeta {
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
        : GetTimeSeriesStdDev200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesStdDev200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesStdDev200ResponseMeta {
  return GetTimeSeriesStdDev200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesStdDev200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesStdDev200ResponseMeta | null,
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
    indicator: GetTimeSeriesStdDev200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

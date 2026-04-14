/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesAdx200ResponseMetaIndicator } from "./GetTimeSeriesAdx200ResponseMetaIndicator";
import {
  GetTimeSeriesAdx200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesAdx200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesAdx200ResponseMetaIndicatorToJSON,
  GetTimeSeriesAdx200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesAdx200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesAdx200ResponseMeta
 */
export interface GetTimeSeriesAdx200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesAdx200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesAdx200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesAdx200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAdx200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAdx200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAdx200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesAdx200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesAdx200ResponseMetaIndicator}
   * @memberof GetTimeSeriesAdx200ResponseMeta
   */
  indicator?: GetTimeSeriesAdx200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesAdx200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesAdx200ResponseMeta(
  value: object,
): value is GetTimeSeriesAdx200ResponseMeta {
  return true;
}

export function GetTimeSeriesAdx200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesAdx200ResponseMeta {
  return GetTimeSeriesAdx200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesAdx200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAdx200ResponseMeta {
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
        : GetTimeSeriesAdx200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesAdx200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesAdx200ResponseMeta {
  return GetTimeSeriesAdx200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesAdx200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesAdx200ResponseMeta | null,
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
    indicator: GetTimeSeriesAdx200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

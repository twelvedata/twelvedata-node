/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesObv200ResponseMetaIndicator } from "./GetTimeSeriesObv200ResponseMetaIndicator";
import {
  GetTimeSeriesObv200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesObv200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesObv200ResponseMetaIndicatorToJSON,
  GetTimeSeriesObv200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesObv200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesObv200ResponseMeta
 */
export interface GetTimeSeriesObv200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesObv200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesObv200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesObv200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesObv200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesObv200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesObv200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesObv200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesObv200ResponseMetaIndicator}
   * @memberof GetTimeSeriesObv200ResponseMeta
   */
  indicator?: GetTimeSeriesObv200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesObv200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesObv200ResponseMeta(
  value: object,
): value is GetTimeSeriesObv200ResponseMeta {
  return true;
}

export function GetTimeSeriesObv200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesObv200ResponseMeta {
  return GetTimeSeriesObv200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesObv200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesObv200ResponseMeta {
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
        : GetTimeSeriesObv200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesObv200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesObv200ResponseMeta {
  return GetTimeSeriesObv200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesObv200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesObv200ResponseMeta | null,
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
    indicator: GetTimeSeriesObv200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

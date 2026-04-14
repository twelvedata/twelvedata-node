/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesLog10200ResponseMetaIndicator } from "./GetTimeSeriesLog10200ResponseMetaIndicator";
import {
  GetTimeSeriesLog10200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesLog10200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesLog10200ResponseMetaIndicatorToJSON,
  GetTimeSeriesLog10200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesLog10200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesLog10200ResponseMeta
 */
export interface GetTimeSeriesLog10200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesLog10200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesLog10200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesLog10200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesLog10200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesLog10200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesLog10200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesLog10200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesLog10200ResponseMetaIndicator}
   * @memberof GetTimeSeriesLog10200ResponseMeta
   */
  indicator?: GetTimeSeriesLog10200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesLog10200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesLog10200ResponseMeta(
  value: object,
): value is GetTimeSeriesLog10200ResponseMeta {
  return true;
}

export function GetTimeSeriesLog10200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesLog10200ResponseMeta {
  return GetTimeSeriesLog10200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesLog10200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesLog10200ResponseMeta {
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
        : GetTimeSeriesLog10200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesLog10200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesLog10200ResponseMeta {
  return GetTimeSeriesLog10200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesLog10200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesLog10200ResponseMeta | null,
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
    indicator: GetTimeSeriesLog10200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

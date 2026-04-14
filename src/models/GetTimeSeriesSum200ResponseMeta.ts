/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesSum200ResponseMetaIndicator } from "./GetTimeSeriesSum200ResponseMetaIndicator";
import {
  GetTimeSeriesSum200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesSum200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesSum200ResponseMetaIndicatorToJSON,
  GetTimeSeriesSum200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesSum200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesSum200ResponseMeta
 */
export interface GetTimeSeriesSum200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesSum200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesSum200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesSum200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSum200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSum200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSum200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesSum200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesSum200ResponseMetaIndicator}
   * @memberof GetTimeSeriesSum200ResponseMeta
   */
  indicator?: GetTimeSeriesSum200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesSum200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesSum200ResponseMeta(
  value: object,
): value is GetTimeSeriesSum200ResponseMeta {
  return true;
}

export function GetTimeSeriesSum200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesSum200ResponseMeta {
  return GetTimeSeriesSum200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesSum200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSum200ResponseMeta {
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
        : GetTimeSeriesSum200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesSum200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesSum200ResponseMeta {
  return GetTimeSeriesSum200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesSum200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesSum200ResponseMeta | null,
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
    indicator: GetTimeSeriesSum200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

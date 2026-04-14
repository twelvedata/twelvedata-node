/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesAtr200ResponseMetaIndicator } from "./GetTimeSeriesAtr200ResponseMetaIndicator";
import {
  GetTimeSeriesAtr200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesAtr200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesAtr200ResponseMetaIndicatorToJSON,
  GetTimeSeriesAtr200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesAtr200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesAtr200ResponseMeta
 */
export interface GetTimeSeriesAtr200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesAtr200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesAtr200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesAtr200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAtr200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAtr200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAtr200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesAtr200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesAtr200ResponseMetaIndicator}
   * @memberof GetTimeSeriesAtr200ResponseMeta
   */
  indicator?: GetTimeSeriesAtr200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesAtr200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesAtr200ResponseMeta(
  value: object,
): value is GetTimeSeriesAtr200ResponseMeta {
  return true;
}

export function GetTimeSeriesAtr200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesAtr200ResponseMeta {
  return GetTimeSeriesAtr200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesAtr200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAtr200ResponseMeta {
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
        : GetTimeSeriesAtr200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesAtr200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesAtr200ResponseMeta {
  return GetTimeSeriesAtr200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesAtr200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesAtr200ResponseMeta | null,
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
    indicator: GetTimeSeriesAtr200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

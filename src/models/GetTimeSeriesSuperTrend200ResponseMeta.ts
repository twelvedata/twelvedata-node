/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesSuperTrend200ResponseMetaIndicator } from "./GetTimeSeriesSuperTrend200ResponseMetaIndicator";
import {
  GetTimeSeriesSuperTrend200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesSuperTrend200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesSuperTrend200ResponseMetaIndicatorToJSON,
  GetTimeSeriesSuperTrend200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesSuperTrend200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesSuperTrend200ResponseMeta
 */
export interface GetTimeSeriesSuperTrend200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesSuperTrend200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesSuperTrend200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesSuperTrend200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSuperTrend200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSuperTrend200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSuperTrend200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesSuperTrend200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesSuperTrend200ResponseMetaIndicator}
   * @memberof GetTimeSeriesSuperTrend200ResponseMeta
   */
  indicator?: GetTimeSeriesSuperTrend200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesSuperTrend200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesSuperTrend200ResponseMeta(
  value: object,
): value is GetTimeSeriesSuperTrend200ResponseMeta {
  return true;
}

export function GetTimeSeriesSuperTrend200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesSuperTrend200ResponseMeta {
  return GetTimeSeriesSuperTrend200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesSuperTrend200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSuperTrend200ResponseMeta {
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
        : GetTimeSeriesSuperTrend200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesSuperTrend200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesSuperTrend200ResponseMeta {
  return GetTimeSeriesSuperTrend200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesSuperTrend200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesSuperTrend200ResponseMeta | null,
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
    indicator: GetTimeSeriesSuperTrend200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

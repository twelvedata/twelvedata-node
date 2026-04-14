/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMacd200ResponseMetaIndicator } from "./GetTimeSeriesMacd200ResponseMetaIndicator";
import {
  GetTimeSeriesMacd200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesMacd200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesMacd200ResponseMetaIndicatorToJSON,
  GetTimeSeriesMacd200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesMacd200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesMacd200ResponseMeta
 */
export interface GetTimeSeriesMacd200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesMacd200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesMacd200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesMacd200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMacd200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMacd200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMacd200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesMacd200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesMacd200ResponseMetaIndicator}
   * @memberof GetTimeSeriesMacd200ResponseMeta
   */
  indicator?: GetTimeSeriesMacd200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesMacd200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesMacd200ResponseMeta(
  value: object,
): value is GetTimeSeriesMacd200ResponseMeta {
  return true;
}

export function GetTimeSeriesMacd200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesMacd200ResponseMeta {
  return GetTimeSeriesMacd200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesMacd200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMacd200ResponseMeta {
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
        : GetTimeSeriesMacd200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesMacd200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesMacd200ResponseMeta {
  return GetTimeSeriesMacd200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesMacd200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesMacd200ResponseMeta | null,
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
    indicator: GetTimeSeriesMacd200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

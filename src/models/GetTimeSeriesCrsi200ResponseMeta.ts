/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesCrsi200ResponseMetaIndicator } from "./GetTimeSeriesCrsi200ResponseMetaIndicator";
import {
  GetTimeSeriesCrsi200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesCrsi200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesCrsi200ResponseMetaIndicatorToJSON,
  GetTimeSeriesCrsi200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesCrsi200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesCrsi200ResponseMeta
 */
export interface GetTimeSeriesCrsi200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesCrsi200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesCrsi200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesCrsi200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesCrsi200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesCrsi200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesCrsi200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesCrsi200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesCrsi200ResponseMetaIndicator}
   * @memberof GetTimeSeriesCrsi200ResponseMeta
   */
  indicator?: GetTimeSeriesCrsi200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesCrsi200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesCrsi200ResponseMeta(
  value: object,
): value is GetTimeSeriesCrsi200ResponseMeta {
  return true;
}

export function GetTimeSeriesCrsi200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesCrsi200ResponseMeta {
  return GetTimeSeriesCrsi200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesCrsi200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCrsi200ResponseMeta {
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
        : GetTimeSeriesCrsi200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesCrsi200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesCrsi200ResponseMeta {
  return GetTimeSeriesCrsi200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesCrsi200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesCrsi200ResponseMeta | null,
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
    indicator: GetTimeSeriesCrsi200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

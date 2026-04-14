/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesDx200ResponseMetaIndicator } from "./GetTimeSeriesDx200ResponseMetaIndicator";
import {
  GetTimeSeriesDx200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesDx200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesDx200ResponseMetaIndicatorToJSON,
  GetTimeSeriesDx200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesDx200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesDx200ResponseMeta
 */
export interface GetTimeSeriesDx200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesDx200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesDx200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesDx200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesDx200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesDx200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesDx200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesDx200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesDx200ResponseMetaIndicator}
   * @memberof GetTimeSeriesDx200ResponseMeta
   */
  indicator?: GetTimeSeriesDx200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesDx200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesDx200ResponseMeta(
  value: object,
): value is GetTimeSeriesDx200ResponseMeta {
  return true;
}

export function GetTimeSeriesDx200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesDx200ResponseMeta {
  return GetTimeSeriesDx200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesDx200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesDx200ResponseMeta {
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
        : GetTimeSeriesDx200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesDx200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesDx200ResponseMeta {
  return GetTimeSeriesDx200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesDx200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesDx200ResponseMeta | null,
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
    indicator: GetTimeSeriesDx200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

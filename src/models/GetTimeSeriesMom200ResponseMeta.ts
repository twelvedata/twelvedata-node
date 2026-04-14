/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMom200ResponseMetaIndicator } from "./GetTimeSeriesMom200ResponseMetaIndicator";
import {
  GetTimeSeriesMom200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesMom200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesMom200ResponseMetaIndicatorToJSON,
  GetTimeSeriesMom200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesMom200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesMom200ResponseMeta
 */
export interface GetTimeSeriesMom200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesMom200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesMom200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesMom200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMom200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMom200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMom200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesMom200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesMom200ResponseMetaIndicator}
   * @memberof GetTimeSeriesMom200ResponseMeta
   */
  indicator?: GetTimeSeriesMom200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesMom200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesMom200ResponseMeta(
  value: object,
): value is GetTimeSeriesMom200ResponseMeta {
  return true;
}

export function GetTimeSeriesMom200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesMom200ResponseMeta {
  return GetTimeSeriesMom200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesMom200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMom200ResponseMeta {
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
        : GetTimeSeriesMom200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesMom200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesMom200ResponseMeta {
  return GetTimeSeriesMom200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesMom200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesMom200ResponseMeta | null,
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
    indicator: GetTimeSeriesMom200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

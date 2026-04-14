/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMa200ResponseMetaIndicator } from "./GetTimeSeriesMa200ResponseMetaIndicator";
import {
  GetTimeSeriesMa200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesMa200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesMa200ResponseMetaIndicatorToJSON,
  GetTimeSeriesMa200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesMa200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesMa200ResponseMeta
 */
export interface GetTimeSeriesMa200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesMa200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesMa200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesMa200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMa200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMa200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMa200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesMa200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesMa200ResponseMetaIndicator}
   * @memberof GetTimeSeriesMa200ResponseMeta
   */
  indicator?: GetTimeSeriesMa200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesMa200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesMa200ResponseMeta(
  value: object,
): value is GetTimeSeriesMa200ResponseMeta {
  return true;
}

export function GetTimeSeriesMa200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesMa200ResponseMeta {
  return GetTimeSeriesMa200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesMa200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMa200ResponseMeta {
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
        : GetTimeSeriesMa200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesMa200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesMa200ResponseMeta {
  return GetTimeSeriesMa200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesMa200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesMa200ResponseMeta | null,
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
    indicator: GetTimeSeriesMa200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

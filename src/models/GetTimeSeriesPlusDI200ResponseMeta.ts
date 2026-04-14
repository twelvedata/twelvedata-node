/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesPlusDI200ResponseMetaIndicator } from "./GetTimeSeriesPlusDI200ResponseMetaIndicator";
import {
  GetTimeSeriesPlusDI200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesPlusDI200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesPlusDI200ResponseMetaIndicatorToJSON,
  GetTimeSeriesPlusDI200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesPlusDI200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesPlusDI200ResponseMeta
 */
export interface GetTimeSeriesPlusDI200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesPlusDI200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesPlusDI200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesPlusDI200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesPlusDI200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesPlusDI200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesPlusDI200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesPlusDI200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesPlusDI200ResponseMetaIndicator}
   * @memberof GetTimeSeriesPlusDI200ResponseMeta
   */
  indicator?: GetTimeSeriesPlusDI200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesPlusDI200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesPlusDI200ResponseMeta(
  value: object,
): value is GetTimeSeriesPlusDI200ResponseMeta {
  return true;
}

export function GetTimeSeriesPlusDI200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesPlusDI200ResponseMeta {
  return GetTimeSeriesPlusDI200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesPlusDI200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesPlusDI200ResponseMeta {
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
        : GetTimeSeriesPlusDI200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesPlusDI200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesPlusDI200ResponseMeta {
  return GetTimeSeriesPlusDI200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesPlusDI200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesPlusDI200ResponseMeta | null,
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
    indicator: GetTimeSeriesPlusDI200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

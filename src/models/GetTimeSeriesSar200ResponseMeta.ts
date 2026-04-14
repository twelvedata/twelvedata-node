/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesSar200ResponseMetaIndicator } from "./GetTimeSeriesSar200ResponseMetaIndicator";
import {
  GetTimeSeriesSar200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesSar200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesSar200ResponseMetaIndicatorToJSON,
  GetTimeSeriesSar200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesSar200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesSar200ResponseMeta
 */
export interface GetTimeSeriesSar200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesSar200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesSar200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesSar200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSar200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSar200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSar200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesSar200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesSar200ResponseMetaIndicator}
   * @memberof GetTimeSeriesSar200ResponseMeta
   */
  indicator?: GetTimeSeriesSar200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesSar200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesSar200ResponseMeta(
  value: object,
): value is GetTimeSeriesSar200ResponseMeta {
  return true;
}

export function GetTimeSeriesSar200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesSar200ResponseMeta {
  return GetTimeSeriesSar200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesSar200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSar200ResponseMeta {
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
        : GetTimeSeriesSar200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesSar200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesSar200ResponseMeta {
  return GetTimeSeriesSar200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesSar200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesSar200ResponseMeta | null,
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
    indicator: GetTimeSeriesSar200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesSarExt200ResponseMetaIndicator } from "./GetTimeSeriesSarExt200ResponseMetaIndicator";
import {
  GetTimeSeriesSarExt200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesSarExt200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesSarExt200ResponseMetaIndicatorToJSON,
  GetTimeSeriesSarExt200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesSarExt200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesSarExt200ResponseMeta
 */
export interface GetTimeSeriesSarExt200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesSarExt200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesSarExt200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesSarExt200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSarExt200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSarExt200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesSarExt200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesSarExt200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesSarExt200ResponseMetaIndicator}
   * @memberof GetTimeSeriesSarExt200ResponseMeta
   */
  indicator?: GetTimeSeriesSarExt200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesSarExt200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesSarExt200ResponseMeta(
  value: object,
): value is GetTimeSeriesSarExt200ResponseMeta {
  return true;
}

export function GetTimeSeriesSarExt200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesSarExt200ResponseMeta {
  return GetTimeSeriesSarExt200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesSarExt200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSarExt200ResponseMeta {
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
        : GetTimeSeriesSarExt200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesSarExt200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesSarExt200ResponseMeta {
  return GetTimeSeriesSarExt200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesSarExt200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesSarExt200ResponseMeta | null,
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
    indicator: GetTimeSeriesSarExt200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

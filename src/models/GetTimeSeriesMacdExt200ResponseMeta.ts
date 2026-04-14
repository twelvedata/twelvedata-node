/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMacdExt200ResponseMetaIndicator } from "./GetTimeSeriesMacdExt200ResponseMetaIndicator";
import {
  GetTimeSeriesMacdExt200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesMacdExt200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesMacdExt200ResponseMetaIndicatorToJSON,
  GetTimeSeriesMacdExt200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesMacdExt200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesMacdExt200ResponseMeta
 */
export interface GetTimeSeriesMacdExt200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesMacdExt200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesMacdExt200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesMacdExt200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMacdExt200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMacdExt200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMacdExt200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesMacdExt200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesMacdExt200ResponseMetaIndicator}
   * @memberof GetTimeSeriesMacdExt200ResponseMeta
   */
  indicator?: GetTimeSeriesMacdExt200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesMacdExt200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesMacdExt200ResponseMeta(
  value: object,
): value is GetTimeSeriesMacdExt200ResponseMeta {
  return true;
}

export function GetTimeSeriesMacdExt200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesMacdExt200ResponseMeta {
  return GetTimeSeriesMacdExt200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesMacdExt200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMacdExt200ResponseMeta {
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
        : GetTimeSeriesMacdExt200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesMacdExt200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesMacdExt200ResponseMeta {
  return GetTimeSeriesMacdExt200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesMacdExt200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesMacdExt200ResponseMeta | null,
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
    indicator: GetTimeSeriesMacdExt200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesBBands200ResponseMetaIndicator } from "./GetTimeSeriesBBands200ResponseMetaIndicator";
import {
  GetTimeSeriesBBands200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesBBands200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesBBands200ResponseMetaIndicatorToJSON,
  GetTimeSeriesBBands200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesBBands200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesBBands200ResponseMeta
 */
export interface GetTimeSeriesBBands200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesBBands200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesBBands200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesBBands200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesBBands200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesBBands200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesBBands200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesBBands200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesBBands200ResponseMetaIndicator}
   * @memberof GetTimeSeriesBBands200ResponseMeta
   */
  indicator?: GetTimeSeriesBBands200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesBBands200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesBBands200ResponseMeta(
  value: object,
): value is GetTimeSeriesBBands200ResponseMeta {
  return true;
}

export function GetTimeSeriesBBands200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesBBands200ResponseMeta {
  return GetTimeSeriesBBands200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesBBands200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesBBands200ResponseMeta {
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
        : GetTimeSeriesBBands200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesBBands200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesBBands200ResponseMeta {
  return GetTimeSeriesBBands200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesBBands200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesBBands200ResponseMeta | null,
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
    indicator: GetTimeSeriesBBands200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

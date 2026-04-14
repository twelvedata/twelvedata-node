/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesStoch200ResponseMetaIndicator } from "./GetTimeSeriesStoch200ResponseMetaIndicator";
import {
  GetTimeSeriesStoch200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesStoch200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesStoch200ResponseMetaIndicatorToJSON,
  GetTimeSeriesStoch200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesStoch200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesStoch200ResponseMeta
 */
export interface GetTimeSeriesStoch200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesStoch200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesStoch200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesStoch200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesStoch200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesStoch200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesStoch200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesStoch200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesStoch200ResponseMetaIndicator}
   * @memberof GetTimeSeriesStoch200ResponseMeta
   */
  indicator?: GetTimeSeriesStoch200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesStoch200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesStoch200ResponseMeta(
  value: object,
): value is GetTimeSeriesStoch200ResponseMeta {
  return true;
}

export function GetTimeSeriesStoch200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesStoch200ResponseMeta {
  return GetTimeSeriesStoch200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesStoch200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesStoch200ResponseMeta {
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
        : GetTimeSeriesStoch200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesStoch200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesStoch200ResponseMeta {
  return GetTimeSeriesStoch200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesStoch200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesStoch200ResponseMeta | null,
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
    indicator: GetTimeSeriesStoch200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

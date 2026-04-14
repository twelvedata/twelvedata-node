/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesExp200ResponseMetaIndicator } from "./GetTimeSeriesExp200ResponseMetaIndicator";
import {
  GetTimeSeriesExp200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesExp200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesExp200ResponseMetaIndicatorToJSON,
  GetTimeSeriesExp200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesExp200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesExp200ResponseMeta
 */
export interface GetTimeSeriesExp200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesExp200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesExp200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesExp200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesExp200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesExp200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesExp200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesExp200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesExp200ResponseMetaIndicator}
   * @memberof GetTimeSeriesExp200ResponseMeta
   */
  indicator?: GetTimeSeriesExp200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesExp200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesExp200ResponseMeta(
  value: object,
): value is GetTimeSeriesExp200ResponseMeta {
  return true;
}

export function GetTimeSeriesExp200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesExp200ResponseMeta {
  return GetTimeSeriesExp200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesExp200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesExp200ResponseMeta {
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
        : GetTimeSeriesExp200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesExp200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesExp200ResponseMeta {
  return GetTimeSeriesExp200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesExp200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesExp200ResponseMeta | null,
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
    indicator: GetTimeSeriesExp200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

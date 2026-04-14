/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesAdOsc200ResponseMetaIndicator } from "./GetTimeSeriesAdOsc200ResponseMetaIndicator";
import {
  GetTimeSeriesAdOsc200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesAdOsc200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesAdOsc200ResponseMetaIndicatorToJSON,
  GetTimeSeriesAdOsc200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesAdOsc200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesAdOsc200ResponseMeta
 */
export interface GetTimeSeriesAdOsc200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesAdOsc200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesAdOsc200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesAdOsc200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAdOsc200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAdOsc200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAdOsc200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesAdOsc200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesAdOsc200ResponseMetaIndicator}
   * @memberof GetTimeSeriesAdOsc200ResponseMeta
   */
  indicator?: GetTimeSeriesAdOsc200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesAdOsc200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesAdOsc200ResponseMeta(
  value: object,
): value is GetTimeSeriesAdOsc200ResponseMeta {
  return true;
}

export function GetTimeSeriesAdOsc200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesAdOsc200ResponseMeta {
  return GetTimeSeriesAdOsc200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesAdOsc200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAdOsc200ResponseMeta {
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
        : GetTimeSeriesAdOsc200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesAdOsc200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesAdOsc200ResponseMeta {
  return GetTimeSeriesAdOsc200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesAdOsc200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesAdOsc200ResponseMeta | null,
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
    indicator: GetTimeSeriesAdOsc200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

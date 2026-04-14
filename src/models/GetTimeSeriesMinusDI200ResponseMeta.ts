/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMinusDI200ResponseMetaIndicator } from "./GetTimeSeriesMinusDI200ResponseMetaIndicator";
import {
  GetTimeSeriesMinusDI200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesMinusDI200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesMinusDI200ResponseMetaIndicatorToJSON,
  GetTimeSeriesMinusDI200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesMinusDI200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesMinusDI200ResponseMeta
 */
export interface GetTimeSeriesMinusDI200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesMinusDI200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesMinusDI200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesMinusDI200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMinusDI200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMinusDI200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMinusDI200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesMinusDI200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesMinusDI200ResponseMetaIndicator}
   * @memberof GetTimeSeriesMinusDI200ResponseMeta
   */
  indicator?: GetTimeSeriesMinusDI200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesMinusDI200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesMinusDI200ResponseMeta(
  value: object,
): value is GetTimeSeriesMinusDI200ResponseMeta {
  return true;
}

export function GetTimeSeriesMinusDI200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesMinusDI200ResponseMeta {
  return GetTimeSeriesMinusDI200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesMinusDI200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMinusDI200ResponseMeta {
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
        : GetTimeSeriesMinusDI200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesMinusDI200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesMinusDI200ResponseMeta {
  return GetTimeSeriesMinusDI200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesMinusDI200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesMinusDI200ResponseMeta | null,
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
    indicator: GetTimeSeriesMinusDI200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

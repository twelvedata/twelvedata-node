/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMinMaxIndex200ResponseMetaIndicator } from "./GetTimeSeriesMinMaxIndex200ResponseMetaIndicator";
import {
  GetTimeSeriesMinMaxIndex200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesMinMaxIndex200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesMinMaxIndex200ResponseMetaIndicatorToJSON,
  GetTimeSeriesMinMaxIndex200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesMinMaxIndex200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesMinMaxIndex200ResponseMeta
 */
export interface GetTimeSeriesMinMaxIndex200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesMinMaxIndex200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesMinMaxIndex200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesMinMaxIndex200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMinMaxIndex200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMinMaxIndex200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMinMaxIndex200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesMinMaxIndex200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesMinMaxIndex200ResponseMetaIndicator}
   * @memberof GetTimeSeriesMinMaxIndex200ResponseMeta
   */
  indicator?: GetTimeSeriesMinMaxIndex200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesMinMaxIndex200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesMinMaxIndex200ResponseMeta(
  value: object,
): value is GetTimeSeriesMinMaxIndex200ResponseMeta {
  return true;
}

export function GetTimeSeriesMinMaxIndex200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesMinMaxIndex200ResponseMeta {
  return GetTimeSeriesMinMaxIndex200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesMinMaxIndex200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMinMaxIndex200ResponseMeta {
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
        : GetTimeSeriesMinMaxIndex200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesMinMaxIndex200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesMinMaxIndex200ResponseMeta {
  return GetTimeSeriesMinMaxIndex200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesMinMaxIndex200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesMinMaxIndex200ResponseMeta | null,
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
    indicator: GetTimeSeriesMinMaxIndex200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

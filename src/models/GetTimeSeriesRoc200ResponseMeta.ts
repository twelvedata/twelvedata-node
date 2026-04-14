/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesRoc200ResponseMetaIndicator } from "./GetTimeSeriesRoc200ResponseMetaIndicator";
import {
  GetTimeSeriesRoc200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesRoc200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesRoc200ResponseMetaIndicatorToJSON,
  GetTimeSeriesRoc200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesRoc200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesRoc200ResponseMeta
 */
export interface GetTimeSeriesRoc200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesRoc200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesRoc200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesRoc200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesRoc200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesRoc200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesRoc200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesRoc200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesRoc200ResponseMetaIndicator}
   * @memberof GetTimeSeriesRoc200ResponseMeta
   */
  indicator?: GetTimeSeriesRoc200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesRoc200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesRoc200ResponseMeta(
  value: object,
): value is GetTimeSeriesRoc200ResponseMeta {
  return true;
}

export function GetTimeSeriesRoc200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesRoc200ResponseMeta {
  return GetTimeSeriesRoc200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesRoc200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesRoc200ResponseMeta {
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
        : GetTimeSeriesRoc200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesRoc200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesRoc200ResponseMeta {
  return GetTimeSeriesRoc200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesRoc200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesRoc200ResponseMeta | null,
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
    indicator: GetTimeSeriesRoc200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

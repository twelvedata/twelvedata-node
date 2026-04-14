/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesAdd200ResponseMetaIndicator } from "./GetTimeSeriesAdd200ResponseMetaIndicator";
import {
  GetTimeSeriesAdd200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesAdd200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesAdd200ResponseMetaIndicatorToJSON,
  GetTimeSeriesAdd200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesAdd200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesAdd200ResponseMeta
 */
export interface GetTimeSeriesAdd200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesAdd200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesAdd200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesAdd200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAdd200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAdd200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAdd200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesAdd200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesAdd200ResponseMetaIndicator}
   * @memberof GetTimeSeriesAdd200ResponseMeta
   */
  indicator?: GetTimeSeriesAdd200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesAdd200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesAdd200ResponseMeta(
  value: object,
): value is GetTimeSeriesAdd200ResponseMeta {
  return true;
}

export function GetTimeSeriesAdd200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesAdd200ResponseMeta {
  return GetTimeSeriesAdd200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesAdd200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAdd200ResponseMeta {
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
        : GetTimeSeriesAdd200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesAdd200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesAdd200ResponseMeta {
  return GetTimeSeriesAdd200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesAdd200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesAdd200ResponseMeta | null,
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
    indicator: GetTimeSeriesAdd200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

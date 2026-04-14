/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesDiv200ResponseMetaIndicator } from "./GetTimeSeriesDiv200ResponseMetaIndicator";
import {
  GetTimeSeriesDiv200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesDiv200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesDiv200ResponseMetaIndicatorToJSON,
  GetTimeSeriesDiv200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesDiv200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesDiv200ResponseMeta
 */
export interface GetTimeSeriesDiv200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesDiv200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesDiv200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesDiv200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesDiv200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesDiv200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesDiv200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesDiv200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesDiv200ResponseMetaIndicator}
   * @memberof GetTimeSeriesDiv200ResponseMeta
   */
  indicator?: GetTimeSeriesDiv200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesDiv200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesDiv200ResponseMeta(
  value: object,
): value is GetTimeSeriesDiv200ResponseMeta {
  return true;
}

export function GetTimeSeriesDiv200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesDiv200ResponseMeta {
  return GetTimeSeriesDiv200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesDiv200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesDiv200ResponseMeta {
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
        : GetTimeSeriesDiv200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesDiv200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesDiv200ResponseMeta {
  return GetTimeSeriesDiv200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesDiv200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesDiv200ResponseMeta | null,
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
    indicator: GetTimeSeriesDiv200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

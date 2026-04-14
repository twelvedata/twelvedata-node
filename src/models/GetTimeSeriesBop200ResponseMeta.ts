/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesBop200ResponseMetaIndicator } from "./GetTimeSeriesBop200ResponseMetaIndicator";
import {
  GetTimeSeriesBop200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesBop200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesBop200ResponseMetaIndicatorToJSON,
  GetTimeSeriesBop200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesBop200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesBop200ResponseMeta
 */
export interface GetTimeSeriesBop200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesBop200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesBop200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesBop200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesBop200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesBop200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesBop200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesBop200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesBop200ResponseMetaIndicator}
   * @memberof GetTimeSeriesBop200ResponseMeta
   */
  indicator?: GetTimeSeriesBop200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesBop200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesBop200ResponseMeta(
  value: object,
): value is GetTimeSeriesBop200ResponseMeta {
  return true;
}

export function GetTimeSeriesBop200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesBop200ResponseMeta {
  return GetTimeSeriesBop200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesBop200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesBop200ResponseMeta {
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
        : GetTimeSeriesBop200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesBop200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesBop200ResponseMeta {
  return GetTimeSeriesBop200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesBop200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesBop200ResponseMeta | null,
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
    indicator: GetTimeSeriesBop200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

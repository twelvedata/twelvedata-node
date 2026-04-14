/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesWclPrice200ResponseMetaIndicator } from "./GetTimeSeriesWclPrice200ResponseMetaIndicator";
import {
  GetTimeSeriesWclPrice200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesWclPrice200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesWclPrice200ResponseMetaIndicatorToJSON,
  GetTimeSeriesWclPrice200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesWclPrice200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesWclPrice200ResponseMeta
 */
export interface GetTimeSeriesWclPrice200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesWclPrice200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesWclPrice200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesWclPrice200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesWclPrice200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesWclPrice200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesWclPrice200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesWclPrice200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesWclPrice200ResponseMetaIndicator}
   * @memberof GetTimeSeriesWclPrice200ResponseMeta
   */
  indicator?: GetTimeSeriesWclPrice200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesWclPrice200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesWclPrice200ResponseMeta(
  value: object,
): value is GetTimeSeriesWclPrice200ResponseMeta {
  return true;
}

export function GetTimeSeriesWclPrice200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesWclPrice200ResponseMeta {
  return GetTimeSeriesWclPrice200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesWclPrice200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesWclPrice200ResponseMeta {
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
        : GetTimeSeriesWclPrice200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesWclPrice200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesWclPrice200ResponseMeta {
  return GetTimeSeriesWclPrice200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesWclPrice200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesWclPrice200ResponseMeta | null,
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
    indicator: GetTimeSeriesWclPrice200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

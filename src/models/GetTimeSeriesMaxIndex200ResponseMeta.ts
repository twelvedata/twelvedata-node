/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMaxIndex200ResponseMetaIndicator } from "./GetTimeSeriesMaxIndex200ResponseMetaIndicator";
import {
  GetTimeSeriesMaxIndex200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesMaxIndex200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesMaxIndex200ResponseMetaIndicatorToJSON,
  GetTimeSeriesMaxIndex200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesMaxIndex200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesMaxIndex200ResponseMeta
 */
export interface GetTimeSeriesMaxIndex200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesMaxIndex200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesMaxIndex200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesMaxIndex200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMaxIndex200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMaxIndex200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMaxIndex200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesMaxIndex200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesMaxIndex200ResponseMetaIndicator}
   * @memberof GetTimeSeriesMaxIndex200ResponseMeta
   */
  indicator?: GetTimeSeriesMaxIndex200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesMaxIndex200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesMaxIndex200ResponseMeta(
  value: object,
): value is GetTimeSeriesMaxIndex200ResponseMeta {
  return true;
}

export function GetTimeSeriesMaxIndex200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesMaxIndex200ResponseMeta {
  return GetTimeSeriesMaxIndex200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesMaxIndex200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMaxIndex200ResponseMeta {
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
        : GetTimeSeriesMaxIndex200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesMaxIndex200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesMaxIndex200ResponseMeta {
  return GetTimeSeriesMaxIndex200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesMaxIndex200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesMaxIndex200ResponseMeta | null,
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
    indicator: GetTimeSeriesMaxIndex200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

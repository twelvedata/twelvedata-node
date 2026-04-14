/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesKeltner200ResponseMetaIndicator } from "./GetTimeSeriesKeltner200ResponseMetaIndicator";
import {
  GetTimeSeriesKeltner200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesKeltner200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesKeltner200ResponseMetaIndicatorToJSON,
  GetTimeSeriesKeltner200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesKeltner200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesKeltner200ResponseMeta
 */
export interface GetTimeSeriesKeltner200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesKeltner200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesKeltner200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesKeltner200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesKeltner200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesKeltner200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesKeltner200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesKeltner200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesKeltner200ResponseMetaIndicator}
   * @memberof GetTimeSeriesKeltner200ResponseMeta
   */
  indicator?: GetTimeSeriesKeltner200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesKeltner200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesKeltner200ResponseMeta(
  value: object,
): value is GetTimeSeriesKeltner200ResponseMeta {
  return true;
}

export function GetTimeSeriesKeltner200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesKeltner200ResponseMeta {
  return GetTimeSeriesKeltner200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesKeltner200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesKeltner200ResponseMeta {
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
        : GetTimeSeriesKeltner200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesKeltner200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesKeltner200ResponseMeta {
  return GetTimeSeriesKeltner200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesKeltner200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesKeltner200ResponseMeta | null,
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
    indicator: GetTimeSeriesKeltner200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

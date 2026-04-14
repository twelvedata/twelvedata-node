/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesRocr100200ResponseMetaIndicator } from "./GetTimeSeriesRocr100200ResponseMetaIndicator";
import {
  GetTimeSeriesRocr100200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesRocr100200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesRocr100200ResponseMetaIndicatorToJSON,
  GetTimeSeriesRocr100200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesRocr100200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesRocr100200ResponseMeta
 */
export interface GetTimeSeriesRocr100200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesRocr100200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesRocr100200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesRocr100200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesRocr100200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesRocr100200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesRocr100200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesRocr100200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesRocr100200ResponseMetaIndicator}
   * @memberof GetTimeSeriesRocr100200ResponseMeta
   */
  indicator?: GetTimeSeriesRocr100200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesRocr100200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesRocr100200ResponseMeta(
  value: object,
): value is GetTimeSeriesRocr100200ResponseMeta {
  return true;
}

export function GetTimeSeriesRocr100200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesRocr100200ResponseMeta {
  return GetTimeSeriesRocr100200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesRocr100200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesRocr100200ResponseMeta {
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
        : GetTimeSeriesRocr100200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesRocr100200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesRocr100200ResponseMeta {
  return GetTimeSeriesRocr100200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesRocr100200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesRocr100200ResponseMeta | null,
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
    indicator: GetTimeSeriesRocr100200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

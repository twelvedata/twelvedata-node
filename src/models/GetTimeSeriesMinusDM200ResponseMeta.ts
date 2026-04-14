/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMinusDM200ResponseMetaIndicator } from "./GetTimeSeriesMinusDM200ResponseMetaIndicator";
import {
  GetTimeSeriesMinusDM200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesMinusDM200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesMinusDM200ResponseMetaIndicatorToJSON,
  GetTimeSeriesMinusDM200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesMinusDM200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesMinusDM200ResponseMeta
 */
export interface GetTimeSeriesMinusDM200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesMinusDM200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesMinusDM200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesMinusDM200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMinusDM200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMinusDM200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMinusDM200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesMinusDM200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesMinusDM200ResponseMetaIndicator}
   * @memberof GetTimeSeriesMinusDM200ResponseMeta
   */
  indicator?: GetTimeSeriesMinusDM200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesMinusDM200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesMinusDM200ResponseMeta(
  value: object,
): value is GetTimeSeriesMinusDM200ResponseMeta {
  return true;
}

export function GetTimeSeriesMinusDM200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesMinusDM200ResponseMeta {
  return GetTimeSeriesMinusDM200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesMinusDM200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMinusDM200ResponseMeta {
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
        : GetTimeSeriesMinusDM200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesMinusDM200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesMinusDM200ResponseMeta {
  return GetTimeSeriesMinusDM200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesMinusDM200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesMinusDM200ResponseMeta | null,
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
    indicator: GetTimeSeriesMinusDM200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

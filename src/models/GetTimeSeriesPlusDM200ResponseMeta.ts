/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesPlusDM200ResponseMetaIndicator } from "./GetTimeSeriesPlusDM200ResponseMetaIndicator";
import {
  GetTimeSeriesPlusDM200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesPlusDM200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesPlusDM200ResponseMetaIndicatorToJSON,
  GetTimeSeriesPlusDM200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesPlusDM200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesPlusDM200ResponseMeta
 */
export interface GetTimeSeriesPlusDM200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesPlusDM200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesPlusDM200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesPlusDM200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesPlusDM200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesPlusDM200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesPlusDM200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesPlusDM200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesPlusDM200ResponseMetaIndicator}
   * @memberof GetTimeSeriesPlusDM200ResponseMeta
   */
  indicator?: GetTimeSeriesPlusDM200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesPlusDM200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesPlusDM200ResponseMeta(
  value: object,
): value is GetTimeSeriesPlusDM200ResponseMeta {
  return true;
}

export function GetTimeSeriesPlusDM200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesPlusDM200ResponseMeta {
  return GetTimeSeriesPlusDM200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesPlusDM200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesPlusDM200ResponseMeta {
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
        : GetTimeSeriesPlusDM200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesPlusDM200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesPlusDM200ResponseMeta {
  return GetTimeSeriesPlusDM200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesPlusDM200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesPlusDM200ResponseMeta | null,
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
    indicator: GetTimeSeriesPlusDM200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

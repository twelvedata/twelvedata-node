/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesCeil200ResponseMetaIndicator } from "./GetTimeSeriesCeil200ResponseMetaIndicator";
import {
  GetTimeSeriesCeil200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesCeil200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesCeil200ResponseMetaIndicatorToJSON,
  GetTimeSeriesCeil200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesCeil200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesCeil200ResponseMeta
 */
export interface GetTimeSeriesCeil200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesCeil200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesCeil200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesCeil200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesCeil200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesCeil200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesCeil200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesCeil200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesCeil200ResponseMetaIndicator}
   * @memberof GetTimeSeriesCeil200ResponseMeta
   */
  indicator?: GetTimeSeriesCeil200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesCeil200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesCeil200ResponseMeta(
  value: object,
): value is GetTimeSeriesCeil200ResponseMeta {
  return true;
}

export function GetTimeSeriesCeil200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesCeil200ResponseMeta {
  return GetTimeSeriesCeil200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesCeil200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCeil200ResponseMeta {
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
        : GetTimeSeriesCeil200ResponseMetaIndicatorFromJSON(json["indicator"]),
  };
}

export function GetTimeSeriesCeil200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesCeil200ResponseMeta {
  return GetTimeSeriesCeil200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesCeil200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesCeil200ResponseMeta | null,
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
    indicator: GetTimeSeriesCeil200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesTRange200ResponseMetaIndicator } from "./GetTimeSeriesTRange200ResponseMetaIndicator";
import {
  GetTimeSeriesTRange200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesTRange200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesTRange200ResponseMetaIndicatorToJSON,
  GetTimeSeriesTRange200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesTRange200ResponseMetaIndicator";

/**
 * json object with request general information
 * @export
 * @interface GetTimeSeriesTRange200ResponseMeta
 */
export interface GetTimeSeriesTRange200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesTRange200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesTRange200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesTRange200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesTRange200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesTRange200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesTRange200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesTRange200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesTRange200ResponseMetaIndicator}
   * @memberof GetTimeSeriesTRange200ResponseMeta
   */
  indicator?: GetTimeSeriesTRange200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesTRange200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesTRange200ResponseMeta(
  value: object,
): value is GetTimeSeriesTRange200ResponseMeta {
  return true;
}

export function GetTimeSeriesTRange200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesTRange200ResponseMeta {
  return GetTimeSeriesTRange200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesTRange200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesTRange200ResponseMeta {
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
        : GetTimeSeriesTRange200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesTRange200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesTRange200ResponseMeta {
  return GetTimeSeriesTRange200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesTRange200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesTRange200ResponseMeta | null,
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
    indicator: GetTimeSeriesTRange200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

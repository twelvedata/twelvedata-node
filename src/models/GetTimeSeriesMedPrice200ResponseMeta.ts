/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMedPrice200ResponseMetaIndicator } from "./GetTimeSeriesMedPrice200ResponseMetaIndicator";
import {
  GetTimeSeriesMedPrice200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesMedPrice200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesMedPrice200ResponseMetaIndicatorToJSON,
  GetTimeSeriesMedPrice200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesMedPrice200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesMedPrice200ResponseMeta
 */
export interface GetTimeSeriesMedPrice200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesMedPrice200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesMedPrice200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesMedPrice200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMedPrice200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMedPrice200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMedPrice200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesMedPrice200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesMedPrice200ResponseMetaIndicator}
   * @memberof GetTimeSeriesMedPrice200ResponseMeta
   */
  indicator?: GetTimeSeriesMedPrice200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesMedPrice200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesMedPrice200ResponseMeta(
  value: object,
): value is GetTimeSeriesMedPrice200ResponseMeta {
  return true;
}

export function GetTimeSeriesMedPrice200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesMedPrice200ResponseMeta {
  return GetTimeSeriesMedPrice200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesMedPrice200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMedPrice200ResponseMeta {
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
        : GetTimeSeriesMedPrice200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesMedPrice200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesMedPrice200ResponseMeta {
  return GetTimeSeriesMedPrice200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesMedPrice200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesMedPrice200ResponseMeta | null,
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
    indicator: GetTimeSeriesMedPrice200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMacdSlope200ResponseMetaIndicator } from "./GetTimeSeriesMacdSlope200ResponseMetaIndicator";
import {
  GetTimeSeriesMacdSlope200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesMacdSlope200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesMacdSlope200ResponseMetaIndicatorToJSON,
  GetTimeSeriesMacdSlope200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesMacdSlope200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesMacdSlope200ResponseMeta
 */
export interface GetTimeSeriesMacdSlope200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesMacdSlope200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesMacdSlope200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesMacdSlope200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMacdSlope200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMacdSlope200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMacdSlope200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesMacdSlope200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesMacdSlope200ResponseMetaIndicator}
   * @memberof GetTimeSeriesMacdSlope200ResponseMeta
   */
  indicator?: GetTimeSeriesMacdSlope200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesMacdSlope200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesMacdSlope200ResponseMeta(
  value: object,
): value is GetTimeSeriesMacdSlope200ResponseMeta {
  return true;
}

export function GetTimeSeriesMacdSlope200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesMacdSlope200ResponseMeta {
  return GetTimeSeriesMacdSlope200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesMacdSlope200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMacdSlope200ResponseMeta {
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
        : GetTimeSeriesMacdSlope200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesMacdSlope200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesMacdSlope200ResponseMeta {
  return GetTimeSeriesMacdSlope200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesMacdSlope200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesMacdSlope200ResponseMeta | null,
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
    indicator: GetTimeSeriesMacdSlope200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}

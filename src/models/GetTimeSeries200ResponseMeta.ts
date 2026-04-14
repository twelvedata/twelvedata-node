/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeries200ResponseMeta
 */
export interface GetTimeSeries200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeries200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeries200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeries200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeries200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeries200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeries200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeries200ResponseMeta
   */
  type?: string;
}

/**
 * Check if a given object implements the GetTimeSeries200ResponseMeta interface.
 */
export function instanceOfGetTimeSeries200ResponseMeta(
  value: object,
): value is GetTimeSeries200ResponseMeta {
  return true;
}

export function GetTimeSeries200ResponseMetaFromJSON(
  json: any,
): GetTimeSeries200ResponseMeta {
  return GetTimeSeries200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeries200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeries200ResponseMeta {
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
  };
}

export function GetTimeSeries200ResponseMetaToJSON(
  json: any,
): GetTimeSeries200ResponseMeta {
  return GetTimeSeries200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeries200ResponseMetaToJSONTyped(
  value?: GetTimeSeries200ResponseMeta | null,
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
  };
}

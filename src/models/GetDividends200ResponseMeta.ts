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
 * @interface GetDividends200ResponseMeta
 */
export interface GetDividends200ResponseMeta {
  /**
   * Ticker symbol of instrument
   * @type {string}
   * @memberof GetDividends200ResponseMeta
   */
  symbol?: string;
  /**
   * Name of symbol
   * @type {string}
   * @memberof GetDividends200ResponseMeta
   */
  name?: string;
  /**
   * Currency in which instrument is traded
   * @type {string}
   * @memberof GetDividends200ResponseMeta
   */
  currency?: string;
  /**
   * Exchange where instrument is traded
   * @type {string}
   * @memberof GetDividends200ResponseMeta
   */
  exchange?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof GetDividends200ResponseMeta
   */
  micCode?: string;
  /**
   * Timezone of the exchange
   * @type {string}
   * @memberof GetDividends200ResponseMeta
   */
  exchangeTimezone?: string;
}

/**
 * Check if a given object implements the GetDividends200ResponseMeta interface.
 */
export function instanceOfGetDividends200ResponseMeta(
  value: object,
): value is GetDividends200ResponseMeta {
  return true;
}

export function GetDividends200ResponseMetaFromJSON(
  json: any,
): GetDividends200ResponseMeta {
  return GetDividends200ResponseMetaFromJSONTyped(json, false);
}

export function GetDividends200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetDividends200ResponseMeta {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"] == null ? undefined : json["symbol"],
    name: json["name"] == null ? undefined : json["name"],
    currency: json["currency"] == null ? undefined : json["currency"],
    exchange: json["exchange"] == null ? undefined : json["exchange"],
    micCode: json["mic_code"] == null ? undefined : json["mic_code"],
    exchangeTimezone:
      json["exchange_timezone"] == null ? undefined : json["exchange_timezone"],
  };
}

export function GetDividends200ResponseMetaToJSON(
  json: any,
): GetDividends200ResponseMeta {
  return GetDividends200ResponseMetaToJSONTyped(json, false);
}

export function GetDividends200ResponseMetaToJSONTyped(
  value?: GetDividends200ResponseMeta | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    name: value["name"],
    currency: value["currency"],
    exchange: value["exchange"],
    mic_code: value["micCode"],
    exchange_timezone: value["exchangeTimezone"],
  };
}

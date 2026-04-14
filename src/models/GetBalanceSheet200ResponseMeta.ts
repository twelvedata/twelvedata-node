/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Metadata about the balance sheet
 * @export
 * @interface GetBalanceSheet200ResponseMeta
 */
export interface GetBalanceSheet200ResponseMeta {
  /**
   * Ticker symbol of instrument
   * @type {string}
   * @memberof GetBalanceSheet200ResponseMeta
   */
  symbol?: string;
  /**
   * Name of the company
   * @type {string}
   * @memberof GetBalanceSheet200ResponseMeta
   */
  name?: string;
  /**
   * Currency of the balance sheet according to the ISO 4217 standard
   * @type {string}
   * @memberof GetBalanceSheet200ResponseMeta
   */
  currency?: string;
  /**
   * Exchange where instrument is traded
   * @type {string}
   * @memberof GetBalanceSheet200ResponseMeta
   */
  exchange?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof GetBalanceSheet200ResponseMeta
   */
  micCode?: string;
  /**
   * Exchange timezone
   * @type {string}
   * @memberof GetBalanceSheet200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * Values can be annual or quarterly
   * @type {string}
   * @memberof GetBalanceSheet200ResponseMeta
   */
  period?: string;
}

/**
 * Check if a given object implements the GetBalanceSheet200ResponseMeta interface.
 */
export function instanceOfGetBalanceSheet200ResponseMeta(
  value: object,
): value is GetBalanceSheet200ResponseMeta {
  return true;
}

export function GetBalanceSheet200ResponseMetaFromJSON(
  json: any,
): GetBalanceSheet200ResponseMeta {
  return GetBalanceSheet200ResponseMetaFromJSONTyped(json, false);
}

export function GetBalanceSheet200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetBalanceSheet200ResponseMeta {
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
    period: json["period"] == null ? undefined : json["period"],
  };
}

export function GetBalanceSheet200ResponseMetaToJSON(
  json: any,
): GetBalanceSheet200ResponseMeta {
  return GetBalanceSheet200ResponseMetaToJSONTyped(json, false);
}

export function GetBalanceSheet200ResponseMetaToJSONTyped(
  value?: GetBalanceSheet200ResponseMeta | null,
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
    period: value["period"],
  };
}

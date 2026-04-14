/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Meta information about the instrument
 * @export
 * @interface GetIncomeStatement200ResponseMeta
 */
export interface GetIncomeStatement200ResponseMeta {
  /**
   * Symbol ticker of the instrument
   * @type {string}
   * @memberof GetIncomeStatement200ResponseMeta
   */
  symbol?: string;
  /**
   * Name of the company
   * @type {string}
   * @memberof GetIncomeStatement200ResponseMeta
   */
  name?: string;
  /**
   * Currency of the instrument according to the ISO 4217 standard
   * @type {string}
   * @memberof GetIncomeStatement200ResponseMeta
   */
  currency?: string;
  /**
   * Exchange where the instrument is traded
   * @type {string}
   * @memberof GetIncomeStatement200ResponseMeta
   */
  exchange?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof GetIncomeStatement200ResponseMeta
   */
  micCode?: string;
  /**
   * Exchange timezone
   * @type {string}
   * @memberof GetIncomeStatement200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * Period of the income statement (Annual or Quarterly)
   * @type {string}
   * @memberof GetIncomeStatement200ResponseMeta
   */
  period?: string;
}

/**
 * Check if a given object implements the GetIncomeStatement200ResponseMeta interface.
 */
export function instanceOfGetIncomeStatement200ResponseMeta(
  value: object,
): value is GetIncomeStatement200ResponseMeta {
  return true;
}

export function GetIncomeStatement200ResponseMetaFromJSON(
  json: any,
): GetIncomeStatement200ResponseMeta {
  return GetIncomeStatement200ResponseMetaFromJSONTyped(json, false);
}

export function GetIncomeStatement200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetIncomeStatement200ResponseMeta {
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

export function GetIncomeStatement200ResponseMetaToJSON(
  json: any,
): GetIncomeStatement200ResponseMeta {
  return GetIncomeStatement200ResponseMetaToJSONTyped(json, false);
}

export function GetIncomeStatement200ResponseMetaToJSONTyped(
  value?: GetIncomeStatement200ResponseMeta | null,
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

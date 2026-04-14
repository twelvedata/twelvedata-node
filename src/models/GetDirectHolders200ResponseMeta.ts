/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Meta information about the financial instrument
 * @export
 * @interface GetDirectHolders200ResponseMeta
 */
export interface GetDirectHolders200ResponseMeta {
  /**
   * Ticker symbol of instrument
   * @type {string}
   * @memberof GetDirectHolders200ResponseMeta
   */
  symbol?: string;
  /**
   * Name of symbol
   * @type {string}
   * @memberof GetDirectHolders200ResponseMeta
   */
  name?: string;
  /**
   * Currency of the instrument according to the ISO 4217 standard
   * @type {string}
   * @memberof GetDirectHolders200ResponseMeta
   */
  currency?: string;
  /**
   * Exchange where instrument is traded
   * @type {string}
   * @memberof GetDirectHolders200ResponseMeta
   */
  exchange?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof GetDirectHolders200ResponseMeta
   */
  micCode?: string;
  /**
   * Timezone of the exchange
   * @type {string}
   * @memberof GetDirectHolders200ResponseMeta
   */
  exchangeTimezone?: string;
}

/**
 * Check if a given object implements the GetDirectHolders200ResponseMeta interface.
 */
export function instanceOfGetDirectHolders200ResponseMeta(
  value: object,
): value is GetDirectHolders200ResponseMeta {
  return true;
}

export function GetDirectHolders200ResponseMetaFromJSON(
  json: any,
): GetDirectHolders200ResponseMeta {
  return GetDirectHolders200ResponseMetaFromJSONTyped(json, false);
}

export function GetDirectHolders200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetDirectHolders200ResponseMeta {
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

export function GetDirectHolders200ResponseMetaToJSON(
  json: any,
): GetDirectHolders200ResponseMeta {
  return GetDirectHolders200ResponseMetaToJSONTyped(json, false);
}

export function GetDirectHolders200ResponseMetaToJSONTyped(
  value?: GetDirectHolders200ResponseMeta | null,
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

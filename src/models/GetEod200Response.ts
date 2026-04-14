/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface GetEod200Response
 */
export interface GetEod200Response {
  /**
   * Symbol passed
   * @type {string}
   * @memberof GetEod200Response
   */
  symbol?: string;
  /**
   * Exchange where instrument is traded
   * @type {string}
   * @memberof GetEod200Response
   */
  exchange?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof GetEod200Response
   */
  micCode?: string;
  /**
   * Currency in which instrument is denominated
   * @type {string}
   * @memberof GetEod200Response
   */
  currency?: string;
  /**
   * Datetime in defined timezone referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetEod200Response
   */
  datetime?: string;
  /**
   * The most recent end of day close price
   * @type {string}
   * @memberof GetEod200Response
   */
  close?: string;
}

/**
 * Check if a given object implements the GetEod200Response interface.
 */
export function instanceOfGetEod200Response(
  value: object,
): value is GetEod200Response {
  return true;
}

export function GetEod200ResponseFromJSON(json: any): GetEod200Response {
  return GetEod200ResponseFromJSONTyped(json, false);
}

export function GetEod200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetEod200Response {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"] == null ? undefined : json["symbol"],
    exchange: json["exchange"] == null ? undefined : json["exchange"],
    micCode: json["mic_code"] == null ? undefined : json["mic_code"],
    currency: json["currency"] == null ? undefined : json["currency"],
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    close: json["close"] == null ? undefined : json["close"],
  };
}

export function GetEod200ResponseToJSON(json: any): GetEod200Response {
  return GetEod200ResponseToJSONTyped(json, false);
}

export function GetEod200ResponseToJSONTyped(
  value?: GetEod200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    exchange: value["exchange"],
    mic_code: value["micCode"],
    currency: value["currency"],
    datetime: value["datetime"],
    close: value["close"],
  };
}

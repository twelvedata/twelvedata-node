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
 * @interface ETFsListResponseItem
 */
export interface ETFsListResponseItem {
  /**
   * Instrument symbol (ticker)
   * @type {string}
   * @memberof ETFsListResponseItem
   */
  symbol?: string;
  /**
   * Full name of the fund
   * @type {string}
   * @memberof ETFsListResponseItem
   */
  name?: string;
  /**
   * Country of fund incorporation
   * @type {string}
   * @memberof ETFsListResponseItem
   */
  country?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof ETFsListResponseItem
   */
  micCode?: string;
  /**
   * Investment company that manages the fund
   * @type {string}
   * @memberof ETFsListResponseItem
   */
  fundFamily?: string;
  /**
   * Type of fund
   * @type {string}
   * @memberof ETFsListResponseItem
   */
  fundType?: string;
}

/**
 * Check if a given object implements the ETFsListResponseItem interface.
 */
export function instanceOfETFsListResponseItem(
  value: object,
): value is ETFsListResponseItem {
  return true;
}

export function ETFsListResponseItemFromJSON(json: any): ETFsListResponseItem {
  return ETFsListResponseItemFromJSONTyped(json, false);
}

export function ETFsListResponseItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ETFsListResponseItem {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"] == null ? undefined : json["symbol"],
    name: json["name"] == null ? undefined : json["name"],
    country: json["country"] == null ? undefined : json["country"],
    micCode: json["mic_code"] == null ? undefined : json["mic_code"],
    fundFamily: json["fund_family"] == null ? undefined : json["fund_family"],
    fundType: json["fund_type"] == null ? undefined : json["fund_type"],
  };
}

export function ETFsListResponseItemToJSON(json: any): ETFsListResponseItem {
  return ETFsListResponseItemToJSONTyped(json, false);
}

export function ETFsListResponseItemToJSONTyped(
  value?: ETFsListResponseItem | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    name: value["name"],
    country: value["country"],
    mic_code: value["micCode"],
    fund_family: value["fundFamily"],
    fund_type: value["fundType"],
  };
}

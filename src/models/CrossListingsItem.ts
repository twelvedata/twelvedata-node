/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Represents details of a cross listing
 * @export
 * @interface CrossListingsItem
 */
export interface CrossListingsItem {
  /**
   * Ticker symbol of instrument
   * @type {string}
   * @memberof CrossListingsItem
   */
  symbol?: string;
  /**
   * Name of symbol
   * @type {string}
   * @memberof CrossListingsItem
   */
  name?: string;
  /**
   * Exchange where instrument is traded
   * @type {string}
   * @memberof CrossListingsItem
   */
  exchange?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof CrossListingsItem
   */
  micCode?: string;
}

/**
 * Check if a given object implements the CrossListingsItem interface.
 */
export function instanceOfCrossListingsItem(
  value: object,
): value is CrossListingsItem {
  return true;
}

export function CrossListingsItemFromJSON(json: any): CrossListingsItem {
  return CrossListingsItemFromJSONTyped(json, false);
}

export function CrossListingsItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CrossListingsItem {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"] == null ? undefined : json["symbol"],
    name: json["name"] == null ? undefined : json["name"],
    exchange: json["exchange"] == null ? undefined : json["exchange"],
    micCode: json["mic_code"] == null ? undefined : json["mic_code"],
  };
}

export function CrossListingsItemToJSON(json: any): CrossListingsItem {
  return CrossListingsItemToJSONTyped(json, false);
}

export function CrossListingsItemToJSONTyped(
  value?: CrossListingsItem | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    name: value["name"],
    exchange: value["exchange"],
    mic_code: value["micCode"],
  };
}

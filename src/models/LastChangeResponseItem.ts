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
 * @interface LastChangeResponseItem
 */
export interface LastChangeResponseItem {
  /**
   * Ticker of the company
   * @type {string}
   * @memberof LastChangeResponseItem
   */
  symbol: string;
  /**
   * Market Identifier Code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof LastChangeResponseItem
   */
  micCode: string;
  /**
   * The date and time of last changes, in `2006-01-02 15:04:05` format
   * @type {string}
   * @memberof LastChangeResponseItem
   */
  lastChange: string;
}

/**
 * Check if a given object implements the LastChangeResponseItem interface.
 */
export function instanceOfLastChangeResponseItem(
  value: object,
): value is LastChangeResponseItem {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("micCode" in value) || value["micCode"] === undefined) return false;
  if (!("lastChange" in value) || value["lastChange"] === undefined)
    return false;
  return true;
}

export function LastChangeResponseItemFromJSON(
  json: any,
): LastChangeResponseItem {
  return LastChangeResponseItemFromJSONTyped(json, false);
}

export function LastChangeResponseItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): LastChangeResponseItem {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"],
    micCode: json["mic_code"],
    lastChange: json["last_change"],
  };
}

export function LastChangeResponseItemToJSON(
  json: any,
): LastChangeResponseItem {
  return LastChangeResponseItemToJSONTyped(json, false);
}

export function LastChangeResponseItemToJSONTyped(
  value?: LastChangeResponseItem | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    mic_code: value["micCode"],
    last_change: value["lastChange"],
  };
}

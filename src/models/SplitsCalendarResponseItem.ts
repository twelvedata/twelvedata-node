/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * List of stock splits
 * @export
 * @interface SplitsCalendarResponseItem
 */
export interface SplitsCalendarResponseItem {
  /**
   * Stands for the split date
   * @type {string}
   * @memberof SplitsCalendarResponseItem
   */
  date: string;
  /**
   * Ticker of the company
   * @type {string}
   * @memberof SplitsCalendarResponseItem
   */
  symbol?: string;
  /**
   * Market Identifier Code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof SplitsCalendarResponseItem
   */
  micCode?: string;
  /**
   * Exchange name where the company is listed
   * @type {string}
   * @memberof SplitsCalendarResponseItem
   */
  exchange?: string;
  /**
   * Specification of the split event
   * @type {string}
   * @memberof SplitsCalendarResponseItem
   */
  description: string;
  /**
   * The ratio by which the number of a company's outstanding shares of stock are increased following a stock split. For example, a `4-for-1 split` results in four times as many outstanding shares, with each share selling at one forth of its pre-split price
   * @type {number}
   * @memberof SplitsCalendarResponseItem
   */
  ratio: number;
  /**
   * From factor of the split
   * @type {number}
   * @memberof SplitsCalendarResponseItem
   */
  fromFactor: number;
  /**
   * To factor of the split
   * @type {number}
   * @memberof SplitsCalendarResponseItem
   */
  toFactor: number;
}

/**
 * Check if a given object implements the SplitsCalendarResponseItem interface.
 */
export function instanceOfSplitsCalendarResponseItem(
  value: object,
): value is SplitsCalendarResponseItem {
  if (!("date" in value) || value["date"] === undefined) return false;
  if (!("description" in value) || value["description"] === undefined)
    return false;
  if (!("ratio" in value) || value["ratio"] === undefined) return false;
  if (!("fromFactor" in value) || value["fromFactor"] === undefined)
    return false;
  if (!("toFactor" in value) || value["toFactor"] === undefined) return false;
  return true;
}

export function SplitsCalendarResponseItemFromJSON(
  json: any,
): SplitsCalendarResponseItem {
  return SplitsCalendarResponseItemFromJSONTyped(json, false);
}

export function SplitsCalendarResponseItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SplitsCalendarResponseItem {
  if (json == null) {
    return json;
  }
  return {
    date: json["date"],
    symbol: json["symbol"] == null ? undefined : json["symbol"],
    micCode: json["mic_code"] == null ? undefined : json["mic_code"],
    exchange: json["exchange"] == null ? undefined : json["exchange"],
    description: json["description"],
    ratio: json["ratio"],
    fromFactor: json["from_factor"],
    toFactor: json["to_factor"],
  };
}

export function SplitsCalendarResponseItemToJSON(
  json: any,
): SplitsCalendarResponseItem {
  return SplitsCalendarResponseItemToJSONTyped(json, false);
}

export function SplitsCalendarResponseItemToJSONTyped(
  value?: SplitsCalendarResponseItem | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    date: value["date"],
    symbol: value["symbol"],
    mic_code: value["micCode"],
    exchange: value["exchange"],
    description: value["description"],
    ratio: value["ratio"],
    from_factor: value["fromFactor"],
    to_factor: value["toFactor"],
  };
}

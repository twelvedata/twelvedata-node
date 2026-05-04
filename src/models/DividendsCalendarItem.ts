/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * DividendsCalendarItem represents details of a dividend
 * @export
 * @interface DividendsCalendarItem
 */
export interface DividendsCalendarItem {
  /**
   * Ticker symbol of instrument
   * @type {string}
   * @memberof DividendsCalendarItem
   */
  symbol?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof DividendsCalendarItem
   */
  micCode?: string;
  /**
   * Exchange where instrument is traded
   * @type {string}
   * @memberof DividendsCalendarItem
   */
  exchange?: string;
  /**
   * Stands for the ex date
   * @type {string}
   * @memberof DividendsCalendarItem
   */
  exDate: string;
  /**
   * Dividend payment amount
   * @type {number}
   * @memberof DividendsCalendarItem
   */
  amount: number;
}

/**
 * Check if a given object implements the DividendsCalendarItem interface.
 */
export function instanceOfDividendsCalendarItem(
  value: object,
): value is DividendsCalendarItem {
  if (!("exDate" in value) || value["exDate"] === undefined) return false;
  if (!("amount" in value) || value["amount"] === undefined) return false;
  return true;
}

export function DividendsCalendarItemFromJSON(
  json: any,
): DividendsCalendarItem {
  return DividendsCalendarItemFromJSONTyped(json, false);
}

export function DividendsCalendarItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): DividendsCalendarItem {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"] == null ? undefined : json["symbol"],
    micCode: json["mic_code"] == null ? undefined : json["mic_code"],
    exchange: json["exchange"] == null ? undefined : json["exchange"],
    exDate: json["ex_date"],
    amount: json["amount"],
  };
}

export function DividendsCalendarItemToJSON(json: any): DividendsCalendarItem {
  return DividendsCalendarItemToJSONTyped(json, false);
}

export function DividendsCalendarItemToJSONTyped(
  value?: DividendsCalendarItem | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    mic_code: value["micCode"],
    exchange: value["exchange"],
    ex_date: value["exDate"],
    amount: value["amount"],
  };
}

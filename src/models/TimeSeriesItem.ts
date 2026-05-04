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
 * @interface TimeSeriesItem
 */
export interface TimeSeriesItem {
  /**
   * Datetime at local exchange time referring to when the bar with specified interval was opened.
   * @type {string}
   * @memberof TimeSeriesItem
   */
  datetime: string;
  /**
   * Price at the opening of current bar
   * @type {string}
   * @memberof TimeSeriesItem
   */
  open: string;
  /**
   * Highest price which occurred during the current bar.
   * @type {string}
   * @memberof TimeSeriesItem
   */
  high: string;
  /**
   * Lowest price which occurred during the current bar.
   * @type {string}
   * @memberof TimeSeriesItem
   */
  low: string;
  /**
   * Close price at the end of the bar.
   * @type {string}
   * @memberof TimeSeriesItem
   */
  close: string;
  /**
   * Trading volume which occurred during the current bar
   * @type {string}
   * @memberof TimeSeriesItem
   */
  volume?: string;
}

/**
 * Check if a given object implements the TimeSeriesItem interface.
 */
export function instanceOfTimeSeriesItem(
  value: object,
): value is TimeSeriesItem {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("open" in value) || value["open"] === undefined) return false;
  if (!("high" in value) || value["high"] === undefined) return false;
  if (!("low" in value) || value["low"] === undefined) return false;
  if (!("close" in value) || value["close"] === undefined) return false;
  return true;
}

export function TimeSeriesItemFromJSON(json: any): TimeSeriesItem {
  return TimeSeriesItemFromJSONTyped(json, false);
}

export function TimeSeriesItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TimeSeriesItem {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    open: json["open"],
    high: json["high"],
    low: json["low"],
    close: json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function TimeSeriesItemToJSON(json: any): TimeSeriesItem {
  return TimeSeriesItemToJSONTyped(json, false);
}

export function TimeSeriesItemToJSONTyped(
  value?: TimeSeriesItem | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * TimeSeriesCrossItem represents a single data point in the time series
 * @export
 * @interface TimeSeriesCrossItem
 */
export interface TimeSeriesCrossItem {
  /**
   * Datetime at local exchange time referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof TimeSeriesCrossItem
   */
  datetime: string;
  /**
   * Price at the opening of the current bar
   * @type {string}
   * @memberof TimeSeriesCrossItem
   */
  open: string;
  /**
   * Highest price which occurred during the current bar
   * @type {string}
   * @memberof TimeSeriesCrossItem
   */
  high: string;
  /**
   * Lowest price which occurred during the current bar
   * @type {string}
   * @memberof TimeSeriesCrossItem
   */
  low: string;
  /**
   * Close price at the end of the bar
   * @type {string}
   * @memberof TimeSeriesCrossItem
   */
  close: string;
}

/**
 * Check if a given object implements the TimeSeriesCrossItem interface.
 */
export function instanceOfTimeSeriesCrossItem(
  value: object,
): value is TimeSeriesCrossItem {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("open" in value) || value["open"] === undefined) return false;
  if (!("high" in value) || value["high"] === undefined) return false;
  if (!("low" in value) || value["low"] === undefined) return false;
  if (!("close" in value) || value["close"] === undefined) return false;
  return true;
}

export function TimeSeriesCrossItemFromJSON(json: any): TimeSeriesCrossItem {
  return TimeSeriesCrossItemFromJSONTyped(json, false);
}

export function TimeSeriesCrossItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TimeSeriesCrossItem {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    open: json["open"],
    high: json["high"],
    low: json["low"],
    close: json["close"],
  };
}

export function TimeSeriesCrossItemToJSON(json: any): TimeSeriesCrossItem {
  return TimeSeriesCrossItemToJSONTyped(json, false);
}

export function TimeSeriesCrossItemToJSONTyped(
  value?: TimeSeriesCrossItem | null,
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
  };
}

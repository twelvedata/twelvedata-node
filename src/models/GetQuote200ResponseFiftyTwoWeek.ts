/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Collection of 52-week metrics
 * @export
 * @interface GetQuote200ResponseFiftyTwoWeek
 */
export interface GetQuote200ResponseFiftyTwoWeek {
  /**
   * 52-week low price
   * @type {string}
   * @memberof GetQuote200ResponseFiftyTwoWeek
   */
  low?: string;
  /**
   * 52-week high price
   * @type {string}
   * @memberof GetQuote200ResponseFiftyTwoWeek
   */
  high?: string;
  /**
   * Current price - 52-week low
   * @type {string}
   * @memberof GetQuote200ResponseFiftyTwoWeek
   */
  lowChange?: string;
  /**
   * Current price - 52-week high
   * @type {string}
   * @memberof GetQuote200ResponseFiftyTwoWeek
   */
  highChange?: string;
  /**
   * Percentage change from 52-week low
   * @type {string}
   * @memberof GetQuote200ResponseFiftyTwoWeek
   */
  lowChangePercent?: string;
  /**
   * Percentage change from 52-week high
   * @type {string}
   * @memberof GetQuote200ResponseFiftyTwoWeek
   */
  highChangePercent?: string;
  /**
   * Range between 52-week low and high
   * @type {string}
   * @memberof GetQuote200ResponseFiftyTwoWeek
   */
  range?: string;
}

/**
 * Check if a given object implements the GetQuote200ResponseFiftyTwoWeek interface.
 */
export function instanceOfGetQuote200ResponseFiftyTwoWeek(
  value: object,
): value is GetQuote200ResponseFiftyTwoWeek {
  return true;
}

export function GetQuote200ResponseFiftyTwoWeekFromJSON(
  json: any,
): GetQuote200ResponseFiftyTwoWeek {
  return GetQuote200ResponseFiftyTwoWeekFromJSONTyped(json, false);
}

export function GetQuote200ResponseFiftyTwoWeekFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetQuote200ResponseFiftyTwoWeek {
  if (json == null) {
    return json;
  }
  return {
    low: json["low"] == null ? undefined : json["low"],
    high: json["high"] == null ? undefined : json["high"],
    lowChange: json["low_change"] == null ? undefined : json["low_change"],
    highChange: json["high_change"] == null ? undefined : json["high_change"],
    lowChangePercent:
      json["low_change_percent"] == null
        ? undefined
        : json["low_change_percent"],
    highChangePercent:
      json["high_change_percent"] == null
        ? undefined
        : json["high_change_percent"],
    range: json["range"] == null ? undefined : json["range"],
  };
}

export function GetQuote200ResponseFiftyTwoWeekToJSON(
  json: any,
): GetQuote200ResponseFiftyTwoWeek {
  return GetQuote200ResponseFiftyTwoWeekToJSONTyped(json, false);
}

export function GetQuote200ResponseFiftyTwoWeekToJSONTyped(
  value?: GetQuote200ResponseFiftyTwoWeek | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    low: value["low"],
    high: value["high"],
    low_change: value["lowChange"],
    high_change: value["highChange"],
    low_change_percent: value["lowChangePercent"],
    high_change_percent: value["highChangePercent"],
    range: value["range"],
  };
}

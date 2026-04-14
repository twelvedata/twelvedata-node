/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Price target information
 * @export
 * @interface GetPriceTarget200ResponsePriceTarget
 */
export interface GetPriceTarget200ResponsePriceTarget {
  /**
   * Highest price target given by an analyst
   * @type {number}
   * @memberof GetPriceTarget200ResponsePriceTarget
   */
  high?: number;
  /**
   * Median price target given across analysts
   * @type {number}
   * @memberof GetPriceTarget200ResponsePriceTarget
   */
  median?: number;
  /**
   * Lowest price target given by an analyst
   * @type {number}
   * @memberof GetPriceTarget200ResponsePriceTarget
   */
  low?: number;
  /**
   * Average price target given across analysts
   * @type {number}
   * @memberof GetPriceTarget200ResponsePriceTarget
   */
  average?: number;
  /**
   * Current price from of a security
   * @type {number}
   * @memberof GetPriceTarget200ResponsePriceTarget
   */
  current?: number;
  /**
   * Currency in which the price targets values are quoted
   * @type {string}
   * @memberof GetPriceTarget200ResponsePriceTarget
   */
  currency?: string;
}

/**
 * Check if a given object implements the GetPriceTarget200ResponsePriceTarget interface.
 */
export function instanceOfGetPriceTarget200ResponsePriceTarget(
  value: object,
): value is GetPriceTarget200ResponsePriceTarget {
  return true;
}

export function GetPriceTarget200ResponsePriceTargetFromJSON(
  json: any,
): GetPriceTarget200ResponsePriceTarget {
  return GetPriceTarget200ResponsePriceTargetFromJSONTyped(json, false);
}

export function GetPriceTarget200ResponsePriceTargetFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetPriceTarget200ResponsePriceTarget {
  if (json == null) {
    return json;
  }
  return {
    high: json["high"] == null ? undefined : json["high"],
    median: json["median"] == null ? undefined : json["median"],
    low: json["low"] == null ? undefined : json["low"],
    average: json["average"] == null ? undefined : json["average"],
    current: json["current"] == null ? undefined : json["current"],
    currency: json["currency"] == null ? undefined : json["currency"],
  };
}

export function GetPriceTarget200ResponsePriceTargetToJSON(
  json: any,
): GetPriceTarget200ResponsePriceTarget {
  return GetPriceTarget200ResponsePriceTargetToJSONTyped(json, false);
}

export function GetPriceTarget200ResponsePriceTargetToJSONTyped(
  value?: GetPriceTarget200ResponsePriceTarget | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    high: value["high"],
    median: value["median"],
    low: value["low"],
    average: value["average"],
    current: value["current"],
    currency: value["currency"],
  };
}

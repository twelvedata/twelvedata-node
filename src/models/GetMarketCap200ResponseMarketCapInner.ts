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
 * @interface GetMarketCap200ResponseMarketCapInner
 */
export interface GetMarketCap200ResponseMarketCapInner {
  /**
   * Market capitalization date
   * @type {string}
   * @memberof GetMarketCap200ResponseMarketCapInner
   */
  date: string;
  /**
   * Market capitalization value
   * @type {number}
   * @memberof GetMarketCap200ResponseMarketCapInner
   */
  value: number;
}

/**
 * Check if a given object implements the GetMarketCap200ResponseMarketCapInner interface.
 */
export function instanceOfGetMarketCap200ResponseMarketCapInner(
  value: object,
): value is GetMarketCap200ResponseMarketCapInner {
  if (!("date" in value) || value["date"] === undefined) return false;
  if (!("value" in value) || value["value"] === undefined) return false;
  return true;
}

export function GetMarketCap200ResponseMarketCapInnerFromJSON(
  json: any,
): GetMarketCap200ResponseMarketCapInner {
  return GetMarketCap200ResponseMarketCapInnerFromJSONTyped(json, false);
}

export function GetMarketCap200ResponseMarketCapInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMarketCap200ResponseMarketCapInner {
  if (json == null) {
    return json;
  }
  return {
    date: json["date"],
    value: json["value"],
  };
}

export function GetMarketCap200ResponseMarketCapInnerToJSON(
  json: any,
): GetMarketCap200ResponseMarketCapInner {
  return GetMarketCap200ResponseMarketCapInnerToJSONTyped(json, false);
}

export function GetMarketCap200ResponseMarketCapInnerToJSONTyped(
  value?: GetMarketCap200ResponseMarketCapInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    date: value["date"],
    value: value["value"],
  };
}

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
 * @interface InlineObject2Pricing
 */
export interface InlineObject2Pricing {
  /**
   *
   * @type {number}
   * @memberof InlineObject2Pricing
   */
  _12monthHigh?: number;
  /**
   *
   * @type {number}
   * @memberof InlineObject2Pricing
   */
  _12monthLow?: number;
  /**
   *
   * @type {number}
   * @memberof InlineObject2Pricing
   */
  lastMonth?: number;
  /**
   *
   * @type {number}
   * @memberof InlineObject2Pricing
   */
  nav?: number;
}

/**
 * Check if a given object implements the InlineObject2Pricing interface.
 */
export function instanceOfInlineObject2Pricing(
  value: object,
): value is InlineObject2Pricing {
  return true;
}

export function InlineObject2PricingFromJSON(json: any): InlineObject2Pricing {
  return InlineObject2PricingFromJSONTyped(json, false);
}

export function InlineObject2PricingFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject2Pricing {
  if (json == null) {
    return json;
  }
  return {
    _12monthHigh:
      json["12_month_high"] == null ? undefined : json["12_month_high"],
    _12monthLow:
      json["12_month_low"] == null ? undefined : json["12_month_low"],
    lastMonth: json["last_month"] == null ? undefined : json["last_month"],
    nav: json["nav"] == null ? undefined : json["nav"],
  };
}

export function InlineObject2PricingToJSON(json: any): InlineObject2Pricing {
  return InlineObject2PricingToJSONTyped(json, false);
}

export function InlineObject2PricingToJSONTyped(
  value?: InlineObject2Pricing | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    "12_month_high": value["_12monthHigh"],
    "12_month_low": value["_12monthLow"],
    last_month: value["lastMonth"],
    nav: value["nav"],
  };
}

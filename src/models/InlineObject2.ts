/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { InlineObject2Expenses } from "./InlineObject2Expenses";
import {
  InlineObject2ExpensesFromJSON,
  InlineObject2ExpensesFromJSONTyped,
  InlineObject2ExpensesToJSON,
  InlineObject2ExpensesToJSONTyped,
} from "./InlineObject2Expenses";
import type { InlineObject2Minimums } from "./InlineObject2Minimums";
import {
  InlineObject2MinimumsFromJSON,
  InlineObject2MinimumsFromJSONTyped,
  InlineObject2MinimumsToJSON,
  InlineObject2MinimumsToJSONTyped,
} from "./InlineObject2Minimums";
import type { InlineObject2Pricing } from "./InlineObject2Pricing";
import {
  InlineObject2PricingFromJSON,
  InlineObject2PricingFromJSONTyped,
  InlineObject2PricingToJSON,
  InlineObject2PricingToJSONTyped,
} from "./InlineObject2Pricing";

/**
 *
 * @export
 * @interface InlineObject2
 */
export interface InlineObject2 {
  /**
   *
   * @type {Array<string>}
   * @memberof InlineObject2
   */
  brokerages?: Array<string>;
  /**
   *
   * @type {InlineObject2Expenses}
   * @memberof InlineObject2
   */
  expenses?: InlineObject2Expenses;
  /**
   *
   * @type {InlineObject2Minimums}
   * @memberof InlineObject2
   */
  minimums?: InlineObject2Minimums;
  /**
   *
   * @type {InlineObject2Pricing}
   * @memberof InlineObject2
   */
  pricing?: InlineObject2Pricing;
}

/**
 * Check if a given object implements the InlineObject2 interface.
 */
export function instanceOfInlineObject2(value: object): value is InlineObject2 {
  return true;
}

export function InlineObject2FromJSON(json: any): InlineObject2 {
  return InlineObject2FromJSONTyped(json, false);
}

export function InlineObject2FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject2 {
  if (json == null) {
    return json;
  }
  return {
    brokerages: json["brokerages"] == null ? undefined : json["brokerages"],
    expenses:
      json["expenses"] == null
        ? undefined
        : InlineObject2ExpensesFromJSON(json["expenses"]),
    minimums:
      json["minimums"] == null
        ? undefined
        : InlineObject2MinimumsFromJSON(json["minimums"]),
    pricing:
      json["pricing"] == null
        ? undefined
        : InlineObject2PricingFromJSON(json["pricing"]),
  };
}

export function InlineObject2ToJSON(json: any): InlineObject2 {
  return InlineObject2ToJSONTyped(json, false);
}

export function InlineObject2ToJSONTyped(
  value?: InlineObject2 | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    brokerages: value["brokerages"],
    expenses: InlineObject2ExpensesToJSON(value["expenses"]),
    minimums: InlineObject2MinimumsToJSON(value["minimums"]),
    pricing: InlineObject2PricingToJSON(value["pricing"]),
  };
}

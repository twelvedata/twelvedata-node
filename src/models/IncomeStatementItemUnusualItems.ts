/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Unusual items information
 * @export
 * @interface IncomeStatementItemUnusualItems
 */
export interface IncomeStatementItemUnusualItems {
  /**
   * Total unusual items
   * @type {number}
   * @memberof IncomeStatementItemUnusualItems
   */
  totalUnusualItems?: number;
  /**
   * Total unusual items excluding goodwill
   * @type {number}
   * @memberof IncomeStatementItemUnusualItems
   */
  totalUnusualItemsExcludingGoodwill?: number;
}

/**
 * Check if a given object implements the IncomeStatementItemUnusualItems interface.
 */
export function instanceOfIncomeStatementItemUnusualItems(
  value: object,
): value is IncomeStatementItemUnusualItems {
  return true;
}

export function IncomeStatementItemUnusualItemsFromJSON(
  json: any,
): IncomeStatementItemUnusualItems {
  return IncomeStatementItemUnusualItemsFromJSONTyped(json, false);
}

export function IncomeStatementItemUnusualItemsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IncomeStatementItemUnusualItems {
  if (json == null) {
    return json;
  }
  return {
    totalUnusualItems:
      json["total_unusual_items"] == null
        ? undefined
        : json["total_unusual_items"],
    totalUnusualItemsExcludingGoodwill:
      json["total_unusual_items_excluding_goodwill"] == null
        ? undefined
        : json["total_unusual_items_excluding_goodwill"],
  };
}

export function IncomeStatementItemUnusualItemsToJSON(
  json: any,
): IncomeStatementItemUnusualItems {
  return IncomeStatementItemUnusualItemsToJSONTyped(json, false);
}

export function IncomeStatementItemUnusualItemsToJSONTyped(
  value?: IncomeStatementItemUnusualItems | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    total_unusual_items: value["totalUnusualItems"],
    total_unusual_items_excluding_goodwill:
      value["totalUnusualItemsExcludingGoodwill"],
  };
}

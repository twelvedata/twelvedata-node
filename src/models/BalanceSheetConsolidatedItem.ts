/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { AssetsInfo } from "./AssetsInfo";
import {
  AssetsInfoFromJSON,
  AssetsInfoFromJSONTyped,
  AssetsInfoToJSON,
  AssetsInfoToJSONTyped,
} from "./AssetsInfo";

/**
 * Balance sheet for a specific fiscal date
 * @export
 * @interface BalanceSheetConsolidatedItem
 */
export interface BalanceSheetConsolidatedItem {
  /**
   * Date of fiscal period ending
   * @type {string}
   * @memberof BalanceSheetConsolidatedItem
   */
  fiscalDate?: string;
  /**
   *
   * @type {AssetsInfo}
   * @memberof BalanceSheetConsolidatedItem
   */
  assets?: AssetsInfo;
}

/**
 * Check if a given object implements the BalanceSheetConsolidatedItem interface.
 */
export function instanceOfBalanceSheetConsolidatedItem(
  value: object,
): value is BalanceSheetConsolidatedItem {
  return true;
}

export function BalanceSheetConsolidatedItemFromJSON(
  json: any,
): BalanceSheetConsolidatedItem {
  return BalanceSheetConsolidatedItemFromJSONTyped(json, false);
}

export function BalanceSheetConsolidatedItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): BalanceSheetConsolidatedItem {
  if (json == null) {
    return json;
  }
  return {
    fiscalDate: json["fiscal_date"] == null ? undefined : json["fiscal_date"],
    assets:
      json["assets"] == null ? undefined : AssetsInfoFromJSON(json["assets"]),
  };
}

export function BalanceSheetConsolidatedItemToJSON(
  json: any,
): BalanceSheetConsolidatedItem {
  return BalanceSheetConsolidatedItemToJSONTyped(json, false);
}

export function BalanceSheetConsolidatedItemToJSONTyped(
  value?: BalanceSheetConsolidatedItem | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    fiscal_date: value["fiscalDate"],
    assets: AssetsInfoToJSON(value["assets"]),
  };
}

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { AssetsInfoCurrentAssetsReceivables } from "./AssetsInfoCurrentAssetsReceivables";
import {
  AssetsInfoCurrentAssetsReceivablesFromJSON,
  AssetsInfoCurrentAssetsReceivablesFromJSONTyped,
  AssetsInfoCurrentAssetsReceivablesToJSON,
  AssetsInfoCurrentAssetsReceivablesToJSONTyped,
} from "./AssetsInfoCurrentAssetsReceivables";
import type { AssetsInfoCurrentAssetsInventory } from "./AssetsInfoCurrentAssetsInventory";
import {
  AssetsInfoCurrentAssetsInventoryFromJSON,
  AssetsInfoCurrentAssetsInventoryFromJSONTyped,
  AssetsInfoCurrentAssetsInventoryToJSON,
  AssetsInfoCurrentAssetsInventoryToJSONTyped,
} from "./AssetsInfoCurrentAssetsInventory";

/**
 * Current assets information
 * @export
 * @interface AssetsInfoCurrentAssets
 */
export interface AssetsInfoCurrentAssets {
  /**
   * Total current assets
   * @type {number}
   * @memberof AssetsInfoCurrentAssets
   */
  totalCurrentAssets?: number;
  /**
   * Cash cash equivalents and short term investments
   * @type {number}
   * @memberof AssetsInfoCurrentAssets
   */
  cashCashEquivalentsAndShortTermInvestments?: number;
  /**
   * Cash and cash equivalents
   * @type {number}
   * @memberof AssetsInfoCurrentAssets
   */
  cashAndCashEquivalents?: number;
  /**
   * Cash equivalents
   * @type {number}
   * @memberof AssetsInfoCurrentAssets
   */
  cashEquivalents?: number;
  /**
   * Cash financial
   * @type {number}
   * @memberof AssetsInfoCurrentAssets
   */
  cashFinancial?: number;
  /**
   * Other short term investments
   * @type {number}
   * @memberof AssetsInfoCurrentAssets
   */
  otherShortTermInvestments?: number;
  /**
   * Restricted cash
   * @type {number}
   * @memberof AssetsInfoCurrentAssets
   */
  restrictedCash?: number;
  /**
   *
   * @type {AssetsInfoCurrentAssetsReceivables}
   * @memberof AssetsInfoCurrentAssets
   */
  receivables?: AssetsInfoCurrentAssetsReceivables;
  /**
   *
   * @type {AssetsInfoCurrentAssetsInventory}
   * @memberof AssetsInfoCurrentAssets
   */
  inventory?: AssetsInfoCurrentAssetsInventory;
  /**
   * Prepaid assets
   * @type {number}
   * @memberof AssetsInfoCurrentAssets
   */
  prepaidAssets?: number;
  /**
   * Current deferred assets
   * @type {number}
   * @memberof AssetsInfoCurrentAssets
   */
  currentDeferredAssets?: number;
  /**
   * Current deferred taxes assets
   * @type {number}
   * @memberof AssetsInfoCurrentAssets
   */
  currentDeferredTaxesAssets?: number;
  /**
   * Assets held for sale current
   * @type {number}
   * @memberof AssetsInfoCurrentAssets
   */
  assetsHeldForSaleCurrent?: number;
  /**
   * Hedging assets current
   * @type {number}
   * @memberof AssetsInfoCurrentAssets
   */
  hedgingAssetsCurrent?: number;
  /**
   * Other current assets
   * @type {number}
   * @memberof AssetsInfoCurrentAssets
   */
  otherCurrentAssets?: number;
}

/**
 * Check if a given object implements the AssetsInfoCurrentAssets interface.
 */
export function instanceOfAssetsInfoCurrentAssets(
  value: object,
): value is AssetsInfoCurrentAssets {
  return true;
}

export function AssetsInfoCurrentAssetsFromJSON(
  json: any,
): AssetsInfoCurrentAssets {
  return AssetsInfoCurrentAssetsFromJSONTyped(json, false);
}

export function AssetsInfoCurrentAssetsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AssetsInfoCurrentAssets {
  if (json == null) {
    return json;
  }
  return {
    totalCurrentAssets:
      json["total_current_assets"] == null
        ? undefined
        : json["total_current_assets"],
    cashCashEquivalentsAndShortTermInvestments:
      json["cash_cash_equivalents_and_short_term_investments"] == null
        ? undefined
        : json["cash_cash_equivalents_and_short_term_investments"],
    cashAndCashEquivalents:
      json["cash_and_cash_equivalents"] == null
        ? undefined
        : json["cash_and_cash_equivalents"],
    cashEquivalents:
      json["cash_equivalents"] == null ? undefined : json["cash_equivalents"],
    cashFinancial:
      json["cash_financial"] == null ? undefined : json["cash_financial"],
    otherShortTermInvestments:
      json["other_short_term_investments"] == null
        ? undefined
        : json["other_short_term_investments"],
    restrictedCash:
      json["restricted_cash"] == null ? undefined : json["restricted_cash"],
    receivables:
      json["receivables"] == null
        ? undefined
        : AssetsInfoCurrentAssetsReceivablesFromJSON(json["receivables"]),
    inventory:
      json["inventory"] == null
        ? undefined
        : AssetsInfoCurrentAssetsInventoryFromJSON(json["inventory"]),
    prepaidAssets:
      json["prepaid_assets"] == null ? undefined : json["prepaid_assets"],
    currentDeferredAssets:
      json["current_deferred_assets"] == null
        ? undefined
        : json["current_deferred_assets"],
    currentDeferredTaxesAssets:
      json["current_deferred_taxes_assets"] == null
        ? undefined
        : json["current_deferred_taxes_assets"],
    assetsHeldForSaleCurrent:
      json["assets_held_for_sale_current"] == null
        ? undefined
        : json["assets_held_for_sale_current"],
    hedgingAssetsCurrent:
      json["hedging_assets_current"] == null
        ? undefined
        : json["hedging_assets_current"],
    otherCurrentAssets:
      json["other_current_assets"] == null
        ? undefined
        : json["other_current_assets"],
  };
}

export function AssetsInfoCurrentAssetsToJSON(
  json: any,
): AssetsInfoCurrentAssets {
  return AssetsInfoCurrentAssetsToJSONTyped(json, false);
}

export function AssetsInfoCurrentAssetsToJSONTyped(
  value?: AssetsInfoCurrentAssets | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    total_current_assets: value["totalCurrentAssets"],
    cash_cash_equivalents_and_short_term_investments:
      value["cashCashEquivalentsAndShortTermInvestments"],
    cash_and_cash_equivalents: value["cashAndCashEquivalents"],
    cash_equivalents: value["cashEquivalents"],
    cash_financial: value["cashFinancial"],
    other_short_term_investments: value["otherShortTermInvestments"],
    restricted_cash: value["restrictedCash"],
    receivables: AssetsInfoCurrentAssetsReceivablesToJSON(value["receivables"]),
    inventory: AssetsInfoCurrentAssetsInventoryToJSON(value["inventory"]),
    prepaid_assets: value["prepaidAssets"],
    current_deferred_assets: value["currentDeferredAssets"],
    current_deferred_taxes_assets: value["currentDeferredTaxesAssets"],
    assets_held_for_sale_current: value["assetsHeldForSaleCurrent"],
    hedging_assets_current: value["hedgingAssetsCurrent"],
    other_current_assets: value["otherCurrentAssets"],
  };
}

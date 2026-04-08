/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { AssetsInfoCurrentAssetsInventory } from "./assets-info-current-assets-inventory";
// May contain unused imports in some cases
// @ts-ignore
import type { AssetsInfoCurrentAssetsReceivables } from "./assets-info-current-assets-receivables";

/**
 * Current assets information
 */
export interface AssetsInfoCurrentAssets {
  /**
   * Total current assets
   */
  total_current_assets?: number;
  /**
   * Cash cash equivalents and short term investments
   */
  cash_cash_equivalents_and_short_term_investments?: number;
  /**
   * Cash and cash equivalents
   */
  cash_and_cash_equivalents?: number;
  /**
   * Cash equivalents
   */
  cash_equivalents?: number;
  /**
   * Cash financial
   */
  cash_financial?: number;
  /**
   * Other short term investments
   */
  other_short_term_investments?: number;
  /**
   * Restricted cash
   */
  restricted_cash?: number;
  receivables?: AssetsInfoCurrentAssetsReceivables;
  inventory?: AssetsInfoCurrentAssetsInventory;
  /**
   * Prepaid assets
   */
  prepaid_assets?: number;
  /**
   * Current deferred assets
   */
  current_deferred_assets?: number;
  /**
   * Current deferred taxes assets
   */
  current_deferred_taxes_assets?: number;
  /**
   * Assets held for sale current
   */
  assets_held_for_sale_current?: number;
  /**
   * Hedging assets current
   */
  hedging_assets_current?: number;
  /**
   * Other current assets
   */
  other_current_assets?: number;
}

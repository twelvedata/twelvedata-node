/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { AssetsInfoCurrentAssets } from "./assets-info-current-assets";
// May contain unused imports in some cases
// @ts-ignore
import type { AssetsInfoLiabilities } from "./assets-info-liabilities";
// May contain unused imports in some cases
// @ts-ignore
import type { AssetsInfoNonCurrentAssets } from "./assets-info-non-current-assets";

/**
 * AssetsInfo represents assets information in the balance sheet
 */
export interface AssetsInfo {
  /**
   * Total assets
   */
  total_assets?: number;
  current_assets?: AssetsInfoCurrentAssets;
  non_current_assets?: AssetsInfoNonCurrentAssets;
  liabilities?: AssetsInfoLiabilities;
}

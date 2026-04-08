/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { AssetsInfoLiabilitiesCurrentLiabilities } from "./assets-info-liabilities-current-liabilities";
// May contain unused imports in some cases
// @ts-ignore
import type { AssetsInfoLiabilitiesNonCurrentLiabilities } from "./assets-info-liabilities-non-current-liabilities";
// May contain unused imports in some cases
// @ts-ignore
import type { EquityInfo } from "./equity-info";

/**
 * Liabilities information
 */
export interface AssetsInfoLiabilities {
  /**
   * Total liabilities net minority interest
   */
  total_liabilities_net_minority_interest?: number;
  current_liabilities?: AssetsInfoLiabilitiesCurrentLiabilities;
  non_current_liabilities?: AssetsInfoLiabilitiesNonCurrentLiabilities;
  equity?: EquityInfo;
}

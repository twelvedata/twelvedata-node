/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Non-current assets section
 */
export interface GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets {
  /**
   * Represents property owned
   */
  properties?: number;
  /**
   * Represents land and improvements owned
   */
  land_and_improvements?: number;
  /**
   * Represents office equipment, furniture, and vehicles owned
   */
  machinery_furniture_equipment?: number;
  /**
   * Represents the cost of construction work, which is not yet completed
   */
  construction_in_progress?: number;
  /**
   * Represents operating and financial leases
   */
  leases?: number;
  /**
   * Represents the cumulative depreciation of an asset that has been recorded
   */
  accumulated_depreciation?: number;
  /**
   * Represents the value of a brand name, solid customer base, good customer relations, good employee relations, and proprietary technology
   */
  goodwill?: number;
  /**
   * Represents real estate property purchased with the intention of earning a return on the investment
   */
  investment_properties?: number;
  /**
   * Represents liquid asset that gets its value from a contractual right or ownership claim
   */
  financial_assets?: number;
  /**
   * Represents the patents, trademarks, and other intellectual properties
   */
  intangible_assets?: number;
  /**
   * Represents available for sale financial securities
   */
  investments_and_advances?: number;
  /**
   * Represents other long-term assets
   */
  other_non_current_assets?: number;
  /**
   * All long-term assets values in total
   */
  total_non_current_assets?: number;
}

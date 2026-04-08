/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { EquityInfoCapitalStock } from "./equity-info-capital-stock";
// May contain unused imports in some cases
// @ts-ignore
import type { EquityInfoEquityAdjustments } from "./equity-info-equity-adjustments";

/**
 * EquityInfo represents equity information
 */
export interface EquityInfo {
  /**
   * Total equity gross minority interest
   */
  total_equity_gross_minority_interest?: number;
  /**
   * Stockholders equity
   */
  stockholders_equity?: number;
  /**
   * Common stock equity
   */
  common_stock_equity?: number;
  /**
   * Preferred stock equity
   */
  preferred_stock_equity?: number;
  /**
   * Other equity interest
   */
  other_equity_interest?: number;
  /**
   * Minority interest
   */
  minority_interest?: number;
  /**
   * Total capitalization
   */
  total_capitalization?: number;
  /**
   * Net tangible assets
   */
  net_tangible_assets?: number;
  /**
   * Tangible book value
   */
  tangible_book_value?: number;
  /**
   * Invested capital
   */
  invested_capital?: number;
  /**
   * Working capital
   */
  working_capital?: number;
  capital_stock?: EquityInfoCapitalStock;
  equity_adjustments?: EquityInfoEquityAdjustments;
  /**
   * Net debt
   */
  net_debt?: number;
  /**
   * Total debt
   */
  total_debt?: number;
}

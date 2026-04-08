/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Cash position
 */
export interface CashFlowDataCashPosition {
  /**
   * Beginning cash position
   */
  beginning_cash_position?: number;
  /**
   * End cash position
   */
  end_cash_position?: number;
  /**
   * Changes in cash
   */
  changes_in_cash?: number;
  /**
   * Other cash adjustment outside change in cash
   */
  other_cash_adjustment_outside_change_in_cash?: number;
  /**
   * Other cash adjustment inside change in cash
   */
  other_cash_adjustment_inside_change_in_cash?: number;
  /**
   * Effect of exchange rate changes
   */
  effect_of_exchange_rate_changes?: number;
}

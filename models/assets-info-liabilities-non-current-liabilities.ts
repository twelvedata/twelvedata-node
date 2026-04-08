/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligation } from "./assets-info-liabilities-non-current-liabilities-long-term-debt-and-capital-lease-obligation";

/**
 * Non-current liabilities information
 */
export interface AssetsInfoLiabilitiesNonCurrentLiabilities {
  /**
   * Total non current liabilities net minority interest
   */
  total_non_current_liabilities_net_minority_interest?: number;
  long_term_debt_and_capital_lease_obligation?: AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligation;
  /**
   * Long term provisions
   */
  long_term_provisions?: number;
  /**
   * Non current pension and other postretirement benefit plans
   */
  non_current_pension_and_other_postretirement_benefit_plans?: number;
  /**
   * Non current accrued expenses
   */
  non_current_accrued_expenses?: number;
  /**
   * Due to related parties non current
   */
  due_to_related_parties_non_current?: number;
  /**
   * Trade and other payables non current
   */
  trade_and_other_payables_non_current?: number;
  /**
   * Non current deferred liabilities
   */
  non_current_deferred_liabilities?: number;
  /**
   * Non current deferred revenue
   */
  non_current_deferred_revenue?: number;
  /**
   * Non current deferred taxes liabilities
   */
  non_current_deferred_taxes_liabilities?: number;
  /**
   * Other non current liabilities
   */
  other_non_current_liabilities?: number;
  /**
   * Preferred securities outside stock equity
   */
  preferred_securities_outside_stock_equity?: number;
  /**
   * Derivative product liabilities
   */
  derivative_product_liabilities?: number;
  /**
   * Capital lease obligations
   */
  capital_lease_obligations?: number;
  /**
   * Restricted common stock
   */
  restricted_common_stock?: number;
}

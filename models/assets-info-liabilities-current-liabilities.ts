/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses } from "./assets-info-liabilities-current-liabilities-payables-and-accrued-expenses";

/**
 * Current liabilities information
 */
export interface AssetsInfoLiabilitiesCurrentLiabilities {
  /**
   * Total current liabilities
   */
  total_current_liabilities?: number;
  /**
   * Current debt and capital lease obligation
   */
  current_debt_and_capital_lease_obligation?: number;
  /**
   * Current debt
   */
  current_debt?: number;
  /**
   * Current capital lease obligation
   */
  current_capital_lease_obligation?: number;
  /**
   * Other current borrowings
   */
  other_current_borrowings?: number;
  /**
   * Line of credit
   */
  line_of_credit?: number;
  /**
   * Commercial paper
   */
  commercial_paper?: number;
  /**
   * Current notes payable
   */
  current_notes_payable?: number;
  /**
   * Current provisions
   */
  current_provisions?: number;
  payables_and_accrued_expenses?: AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses;
  /**
   * Pension and other post retirement benefit plans current
   */
  pension_and_other_post_retirement_benefit_plans_current?: number;
  /**
   * Employee benefits
   */
  employee_benefits?: number;
  /**
   * Current deferred liabilities
   */
  current_deferred_liabilities?: number;
  /**
   * Current deferred revenue
   */
  current_deferred_revenue?: number;
  /**
   * Current deferred taxes liabilities
   */
  current_deferred_taxes_liabilities?: number;
  /**
   * Other current liabilities
   */
  other_current_liabilities?: number;
  /**
   * Liabilities held for sale non current
   */
  liabilities_held_for_sale_non_current?: number;
}

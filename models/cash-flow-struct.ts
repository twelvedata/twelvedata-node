/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { CashFlowStructFinancingActivities } from "./cash-flow-struct-financing-activities";
// May contain unused imports in some cases
// @ts-ignore
import type { CashFlowStructInvestingActivities } from "./cash-flow-struct-investing-activities";
// May contain unused imports in some cases
// @ts-ignore
import type { CashFlowStructOperatingActivities } from "./cash-flow-struct-operating-activities";

export interface CashFlowStruct {
  /**
   * Date of the cash flow release
   */
  fiscal_date?: string;
  /**
   * Fiscal quarter. Visible when `&period=quarterly`
   */
  quarter?: string;
  /**
   * Fiscal year
   */
  year?: number;
  operating_activities?: CashFlowStructOperatingActivities;
  investing_activities?: CashFlowStructInvestingActivities;
  financing_activities?: CashFlowStructFinancingActivities;
  /**
   * Returns the amount of cash a company has when adding the change in cash and beginning cash balance for the current fiscal period
   */
  end_cash_position?: number;
  /**
   * Refers to supplemental data about income tax paid
   */
  income_tax_paid?: number;
  /**
   * Refers to supplemental data about interest paid
   */
  interest_paid?: number;
  /**
   * Represents the cash a company generates after accounting for cash outflows to support operations and maintain its capital assets
   */
  free_cash_flow?: number;
}

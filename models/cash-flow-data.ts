/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { CashFlowDataCashFlowFromFinancingActivities } from "./cash-flow-data-cash-flow-from-financing-activities";
// May contain unused imports in some cases
// @ts-ignore
import type { CashFlowDataCashFlowFromInvestingActivities } from "./cash-flow-data-cash-flow-from-investing-activities";
// May contain unused imports in some cases
// @ts-ignore
import type { CashFlowDataCashFlowFromOperatingActivities } from "./cash-flow-data-cash-flow-from-operating-activities";
// May contain unused imports in some cases
// @ts-ignore
import type { CashFlowDataCashPosition } from "./cash-flow-data-cash-position";
// May contain unused imports in some cases
// @ts-ignore
import type { CashFlowDataDirectMethodCashFlow } from "./cash-flow-data-direct-method-cash-flow";
// May contain unused imports in some cases
// @ts-ignore
import type { CashFlowDataForeignAndDomesticSales } from "./cash-flow-data-foreign-and-domestic-sales";
// May contain unused imports in some cases
// @ts-ignore
import type { CashFlowDataSupplementalData } from "./cash-flow-data-supplemental-data";

/**
 * CashFlowData represents cash flow data for a specific fiscal date
 */
export interface CashFlowData {
  /**
   * Fiscal date
   */
  fiscal_date?: string;
  /**
   * Year of the cash flow statement
   */
  year?: number;
  cash_flow_from_operating_activities?: CashFlowDataCashFlowFromOperatingActivities;
  cash_flow_from_investing_activities?: CashFlowDataCashFlowFromInvestingActivities;
  cash_flow_from_financing_activities?: CashFlowDataCashFlowFromFinancingActivities;
  supplemental_data?: CashFlowDataSupplementalData;
  foreign_and_domestic_sales?: CashFlowDataForeignAndDomesticSales;
  cash_position?: CashFlowDataCashPosition;
  direct_method_cash_flow?: CashFlowDataDirectMethodCashFlow;
}

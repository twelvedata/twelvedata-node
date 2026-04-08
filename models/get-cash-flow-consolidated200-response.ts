/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { CashFlowData } from "./cash-flow-data";

export interface GetCashFlowConsolidated200Response {
  /**
   * Cash flow data
   */
  cash_flow?: Array<CashFlowData>;
  /**
   * Response status
   */
  status?: string;
}

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { IncomeStatementItem } from "./income-statement-item";

export interface GetIncomeStatementConsolidated200Response {
  /**
   * Income statement data
   */
  income_statement?: Array<IncomeStatementItem>;
  /**
   * Response status
   */
  status?: string;
}

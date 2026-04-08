/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetIncomeStatement200ResponseMeta } from "./get-income-statement200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { IncomeStatementBlock } from "./income-statement-block";

export interface GetIncomeStatement200Response {
  meta?: GetIncomeStatement200ResponseMeta;
  /**
   * Income statement data
   */
  income_statement?: Array<IncomeStatementBlock>;
}

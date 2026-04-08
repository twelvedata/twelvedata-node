/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetInsiderTransactions200ResponseInsiderTransactionsInner } from "./get-insider-transactions200-response-insider-transactions-inner";
// May contain unused imports in some cases
// @ts-ignore
import type { GetInsiderTransactions200ResponseMeta } from "./get-insider-transactions200-response-meta";

export interface GetInsiderTransactions200Response {
  meta?: GetInsiderTransactions200ResponseMeta;
  /**
   * List of insider transactions
   */
  insider_transactions?: Array<GetInsiderTransactions200ResponseInsiderTransactionsInner>;
}

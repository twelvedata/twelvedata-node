/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { CashFlowStruct } from "./cash-flow-struct";
// May contain unused imports in some cases
// @ts-ignore
import type { GetCashFlow200ResponseMeta } from "./get-cash-flow200-response-meta";

export interface GetCashFlow200Response {
  meta?: GetCashFlow200ResponseMeta;
  /**
   * Cash flow data
   */
  cash_flow?: Array<CashFlowStruct>;
}

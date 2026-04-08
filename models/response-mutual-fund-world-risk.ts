/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics } from "./get-mutual-funds-world200-response-mutual-fund-risk-valuation-metrics";
// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner } from "./get-mutual-funds-world200-response-mutual-fund-risk-volatility-measures-inner";

/**
 * Risk and volatility statistics of the fund and its category over different periods
 */
export interface ResponseMutualFundWorldRisk {
  /**
   * Volatility statistics of the fund
   */
  volatility_measures?: Array<GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner>;
  valuation_metrics?: GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics;
}

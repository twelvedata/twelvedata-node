/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetETFsWorld200ResponseEtfRiskValuationMetrics } from "./get-etfs-world200-response-etf-risk-valuation-metrics";
// May contain unused imports in some cases
// @ts-ignore
import type { GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner } from "./get-etfs-world200-response-etf-risk-volatility-measures-inner";

/**
 * Risk metrics of a etf
 */
export interface GetETFsWorld200ResponseEtfRisk {
  /**
   * Risk and volatility statistics of the fund and its category over different periods
   */
  volatility_measures?: Array<GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner>;
  valuation_metrics?: GetETFsWorld200ResponseEtfRiskValuationMetrics;
}

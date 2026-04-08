/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetStatistics200ResponseStatisticsDividendsAndSplits } from "./get-statistics200-response-statistics-dividends-and-splits";
// May contain unused imports in some cases
// @ts-ignore
import type { GetStatistics200ResponseStatisticsFinancials } from "./get-statistics200-response-statistics-financials";
// May contain unused imports in some cases
// @ts-ignore
import type { GetStatistics200ResponseStatisticsStockPriceSummary } from "./get-statistics200-response-statistics-stock-price-summary";
// May contain unused imports in some cases
// @ts-ignore
import type { GetStatistics200ResponseStatisticsStockStatistics } from "./get-statistics200-response-statistics-stock-statistics";
// May contain unused imports in some cases
// @ts-ignore
import type { GetStatistics200ResponseStatisticsValuationsMetrics } from "./get-statistics200-response-statistics-valuations-metrics";

/**
 * Statistics of the company
 */
export interface GetStatistics200ResponseStatistics {
  valuations_metrics?: GetStatistics200ResponseStatisticsValuationsMetrics;
  financials?: GetStatistics200ResponseStatisticsFinancials;
  stock_statistics?: GetStatistics200ResponseStatisticsStockStatistics;
  stock_price_summary?: GetStatistics200ResponseStatisticsStockPriceSummary;
  dividends_and_splits?: GetStatistics200ResponseStatisticsDividendsAndSplits;
}

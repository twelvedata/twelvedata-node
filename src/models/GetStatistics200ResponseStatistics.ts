/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetStatistics200ResponseStatisticsFinancials } from "./GetStatistics200ResponseStatisticsFinancials";
import {
  GetStatistics200ResponseStatisticsFinancialsFromJSON,
  GetStatistics200ResponseStatisticsFinancialsFromJSONTyped,
  GetStatistics200ResponseStatisticsFinancialsToJSON,
  GetStatistics200ResponseStatisticsFinancialsToJSONTyped,
} from "./GetStatistics200ResponseStatisticsFinancials";
import type { GetStatistics200ResponseStatisticsValuationsMetrics } from "./GetStatistics200ResponseStatisticsValuationsMetrics";
import {
  GetStatistics200ResponseStatisticsValuationsMetricsFromJSON,
  GetStatistics200ResponseStatisticsValuationsMetricsFromJSONTyped,
  GetStatistics200ResponseStatisticsValuationsMetricsToJSON,
  GetStatistics200ResponseStatisticsValuationsMetricsToJSONTyped,
} from "./GetStatistics200ResponseStatisticsValuationsMetrics";
import type { GetStatistics200ResponseStatisticsStockStatistics } from "./GetStatistics200ResponseStatisticsStockStatistics";
import {
  GetStatistics200ResponseStatisticsStockStatisticsFromJSON,
  GetStatistics200ResponseStatisticsStockStatisticsFromJSONTyped,
  GetStatistics200ResponseStatisticsStockStatisticsToJSON,
  GetStatistics200ResponseStatisticsStockStatisticsToJSONTyped,
} from "./GetStatistics200ResponseStatisticsStockStatistics";
import type { GetStatistics200ResponseStatisticsStockPriceSummary } from "./GetStatistics200ResponseStatisticsStockPriceSummary";
import {
  GetStatistics200ResponseStatisticsStockPriceSummaryFromJSON,
  GetStatistics200ResponseStatisticsStockPriceSummaryFromJSONTyped,
  GetStatistics200ResponseStatisticsStockPriceSummaryToJSON,
  GetStatistics200ResponseStatisticsStockPriceSummaryToJSONTyped,
} from "./GetStatistics200ResponseStatisticsStockPriceSummary";
import type { GetStatistics200ResponseStatisticsDividendsAndSplits } from "./GetStatistics200ResponseStatisticsDividendsAndSplits";
import {
  GetStatistics200ResponseStatisticsDividendsAndSplitsFromJSON,
  GetStatistics200ResponseStatisticsDividendsAndSplitsFromJSONTyped,
  GetStatistics200ResponseStatisticsDividendsAndSplitsToJSON,
  GetStatistics200ResponseStatisticsDividendsAndSplitsToJSONTyped,
} from "./GetStatistics200ResponseStatisticsDividendsAndSplits";

/**
 * Statistics of the company
 * @export
 * @interface GetStatistics200ResponseStatistics
 */
export interface GetStatistics200ResponseStatistics {
  /**
   *
   * @type {GetStatistics200ResponseStatisticsValuationsMetrics}
   * @memberof GetStatistics200ResponseStatistics
   */
  valuationsMetrics?: GetStatistics200ResponseStatisticsValuationsMetrics;
  /**
   *
   * @type {GetStatistics200ResponseStatisticsFinancials}
   * @memberof GetStatistics200ResponseStatistics
   */
  financials?: GetStatistics200ResponseStatisticsFinancials;
  /**
   *
   * @type {GetStatistics200ResponseStatisticsStockStatistics}
   * @memberof GetStatistics200ResponseStatistics
   */
  stockStatistics?: GetStatistics200ResponseStatisticsStockStatistics;
  /**
   *
   * @type {GetStatistics200ResponseStatisticsStockPriceSummary}
   * @memberof GetStatistics200ResponseStatistics
   */
  stockPriceSummary?: GetStatistics200ResponseStatisticsStockPriceSummary;
  /**
   *
   * @type {GetStatistics200ResponseStatisticsDividendsAndSplits}
   * @memberof GetStatistics200ResponseStatistics
   */
  dividendsAndSplits?: GetStatistics200ResponseStatisticsDividendsAndSplits;
}

/**
 * Check if a given object implements the GetStatistics200ResponseStatistics interface.
 */
export function instanceOfGetStatistics200ResponseStatistics(
  value: object,
): value is GetStatistics200ResponseStatistics {
  return true;
}

export function GetStatistics200ResponseStatisticsFromJSON(
  json: any,
): GetStatistics200ResponseStatistics {
  return GetStatistics200ResponseStatisticsFromJSONTyped(json, false);
}

export function GetStatistics200ResponseStatisticsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetStatistics200ResponseStatistics {
  if (json == null) {
    return json;
  }
  return {
    valuationsMetrics:
      json["valuations_metrics"] == null
        ? undefined
        : GetStatistics200ResponseStatisticsValuationsMetricsFromJSON(
            json["valuations_metrics"],
          ),
    financials:
      json["financials"] == null
        ? undefined
        : GetStatistics200ResponseStatisticsFinancialsFromJSON(
            json["financials"],
          ),
    stockStatistics:
      json["stock_statistics"] == null
        ? undefined
        : GetStatistics200ResponseStatisticsStockStatisticsFromJSON(
            json["stock_statistics"],
          ),
    stockPriceSummary:
      json["stock_price_summary"] == null
        ? undefined
        : GetStatistics200ResponseStatisticsStockPriceSummaryFromJSON(
            json["stock_price_summary"],
          ),
    dividendsAndSplits:
      json["dividends_and_splits"] == null
        ? undefined
        : GetStatistics200ResponseStatisticsDividendsAndSplitsFromJSON(
            json["dividends_and_splits"],
          ),
  };
}

export function GetStatistics200ResponseStatisticsToJSON(
  json: any,
): GetStatistics200ResponseStatistics {
  return GetStatistics200ResponseStatisticsToJSONTyped(json, false);
}

export function GetStatistics200ResponseStatisticsToJSONTyped(
  value?: GetStatistics200ResponseStatistics | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    valuations_metrics:
      GetStatistics200ResponseStatisticsValuationsMetricsToJSON(
        value["valuationsMetrics"],
      ),
    financials: GetStatistics200ResponseStatisticsFinancialsToJSON(
      value["financials"],
    ),
    stock_statistics: GetStatistics200ResponseStatisticsStockStatisticsToJSON(
      value["stockStatistics"],
    ),
    stock_price_summary:
      GetStatistics200ResponseStatisticsStockPriceSummaryToJSON(
        value["stockPriceSummary"],
      ),
    dividends_and_splits:
      GetStatistics200ResponseStatisticsDividendsAndSplitsToJSON(
        value["dividendsAndSplits"],
      ),
  };
}

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Valuation metrics of the company
 * @export
 * @interface GetStatistics200ResponseStatisticsValuationsMetrics
 */
export interface GetStatistics200ResponseStatisticsValuationsMetrics {
  /**
   * Refers to the market value of the company's outstanding shares
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsValuationsMetrics
   */
  marketCapitalization?: number;
  /**
   * Refers to enterprise value (EV) of the company, often used as a more comprehensive alternative to market capitalization
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsValuationsMetrics
   */
  enterpriseValue?: number;
  /**
   * Refers to the trailing price-to-earnings (P/E). It is calculated by taking the current stock price and dividing it by the trailing earnings per share (EPS) for the past 12 months
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsValuationsMetrics
   */
  trailingPe?: number;
  /**
   * Refers to the forward price-to-earnings ratio. It is calculated by dividing the current share price by the estimated future earnings per share
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsValuationsMetrics
   */
  forwardPe?: number;
  /**
   * The price/earnings to growth (PEG) ratio is a price-to-earnings ratio divided by the growth rate of the earnings
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsValuationsMetrics
   */
  pegRatio?: number;
  /**
   * The price-to-sales (P/S) ratio is a valuation ratio that compares the market capitalization to its revenues over the last 12 months
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsValuationsMetrics
   */
  priceToSalesTtm?: number;
  /**
   * The price-to-book (P/B) ratio is equal to the current share price divided by the book value of all shares (BVPS) over the last quarter
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsValuationsMetrics
   */
  priceToBookMrq?: number;
  /**
   * The enterprise value-to-revenue multiple (EV/R) is a measure that compares enterprise value to revenue
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsValuationsMetrics
   */
  enterpriseToRevenue?: number;
  /**
   * The enterprise value-to-ebitda multiple (EV/EBITDA) is a measure that compares enterprise value to EBITDA
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsValuationsMetrics
   */
  enterpriseToEbitda?: number;
}

/**
 * Check if a given object implements the GetStatistics200ResponseStatisticsValuationsMetrics interface.
 */
export function instanceOfGetStatistics200ResponseStatisticsValuationsMetrics(
  value: object,
): value is GetStatistics200ResponseStatisticsValuationsMetrics {
  return true;
}

export function GetStatistics200ResponseStatisticsValuationsMetricsFromJSON(
  json: any,
): GetStatistics200ResponseStatisticsValuationsMetrics {
  return GetStatistics200ResponseStatisticsValuationsMetricsFromJSONTyped(
    json,
    false,
  );
}

export function GetStatistics200ResponseStatisticsValuationsMetricsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetStatistics200ResponseStatisticsValuationsMetrics {
  if (json == null) {
    return json;
  }
  return {
    marketCapitalization:
      json["market_capitalization"] == null
        ? undefined
        : json["market_capitalization"],
    enterpriseValue:
      json["enterprise_value"] == null ? undefined : json["enterprise_value"],
    trailingPe: json["trailing_pe"] == null ? undefined : json["trailing_pe"],
    forwardPe: json["forward_pe"] == null ? undefined : json["forward_pe"],
    pegRatio: json["peg_ratio"] == null ? undefined : json["peg_ratio"],
    priceToSalesTtm:
      json["price_to_sales_ttm"] == null
        ? undefined
        : json["price_to_sales_ttm"],
    priceToBookMrq:
      json["price_to_book_mrq"] == null ? undefined : json["price_to_book_mrq"],
    enterpriseToRevenue:
      json["enterprise_to_revenue"] == null
        ? undefined
        : json["enterprise_to_revenue"],
    enterpriseToEbitda:
      json["enterprise_to_ebitda"] == null
        ? undefined
        : json["enterprise_to_ebitda"],
  };
}

export function GetStatistics200ResponseStatisticsValuationsMetricsToJSON(
  json: any,
): GetStatistics200ResponseStatisticsValuationsMetrics {
  return GetStatistics200ResponseStatisticsValuationsMetricsToJSONTyped(
    json,
    false,
  );
}

export function GetStatistics200ResponseStatisticsValuationsMetricsToJSONTyped(
  value?: GetStatistics200ResponseStatisticsValuationsMetrics | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    market_capitalization: value["marketCapitalization"],
    enterprise_value: value["enterpriseValue"],
    trailing_pe: value["trailingPe"],
    forward_pe: value["forwardPe"],
    peg_ratio: value["pegRatio"],
    price_to_sales_ttm: value["priceToSalesTtm"],
    price_to_book_mrq: value["priceToBookMrq"],
    enterprise_to_revenue: value["enterpriseToRevenue"],
    enterprise_to_ebitda: value["enterpriseToEbitda"],
  };
}

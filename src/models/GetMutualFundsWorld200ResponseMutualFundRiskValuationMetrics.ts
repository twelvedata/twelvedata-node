/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Valuation ratios and metrics of the fund and its category
 * @export
 * @interface GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics
 */
export interface GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics {
  /**
   * Fund price to earnings metric
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics
   */
  priceToEarnings?: number;
  /**
   * Average price to earnings metric of funds in the same category
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics
   */
  priceToEarningsCategory?: number;
  /**
   * Fund price to book metric
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics
   */
  priceToBook?: number;
  /**
   * Average price to book metric of funds in the same category
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics
   */
  priceToBookCategory?: number;
  /**
   * Fund price to sales metric
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics
   */
  priceToSales?: number;
  /**
   * Average price to sales metric of funds in the same category
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics
   */
  priceToSalesCategory?: number;
  /**
   * Fund price to cashflow metric
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics
   */
  priceToCashflow?: number;
  /**
   * Average price to cashflow metric of funds in the same category
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics
   */
  priceToCashflowCategory?: number;
  /**
   * Median market capitalization of a fund
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics
   */
  medianMarketCapitalization?: number;
  /**
   * Median market capitalization of funds in the same category
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics
   */
  medianMarketCapitalizationCategory?: number;
  /**
   * Earnings growth over the last three years
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics
   */
  _3yearEarningsGrowth?: number;
  /**
   * Earnings growth over the last three years of funds in the same category
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics
   */
  _3yearEarningsGrowthsCategory?: number;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics interface.
 */
export function instanceOfGetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics(
  value: object,
): value is GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics {
  return true;
}

export function GetMutualFundsWorld200ResponseMutualFundRiskValuationMetricsFromJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics {
  return GetMutualFundsWorld200ResponseMutualFundRiskValuationMetricsFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundRiskValuationMetricsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics {
  if (json == null) {
    return json;
  }
  return {
    priceToEarnings:
      json["price_to_earnings"] == null ? undefined : json["price_to_earnings"],
    priceToEarningsCategory:
      json["price_to_earnings_category"] == null
        ? undefined
        : json["price_to_earnings_category"],
    priceToBook:
      json["price_to_book"] == null ? undefined : json["price_to_book"],
    priceToBookCategory:
      json["price_to_book_category"] == null
        ? undefined
        : json["price_to_book_category"],
    priceToSales:
      json["price_to_sales"] == null ? undefined : json["price_to_sales"],
    priceToSalesCategory:
      json["price_to_sales_category"] == null
        ? undefined
        : json["price_to_sales_category"],
    priceToCashflow:
      json["price_to_cashflow"] == null ? undefined : json["price_to_cashflow"],
    priceToCashflowCategory:
      json["price_to_cashflow_category"] == null
        ? undefined
        : json["price_to_cashflow_category"],
    medianMarketCapitalization:
      json["median_market_capitalization"] == null
        ? undefined
        : json["median_market_capitalization"],
    medianMarketCapitalizationCategory:
      json["median_market_capitalization_category"] == null
        ? undefined
        : json["median_market_capitalization_category"],
    _3yearEarningsGrowth:
      json["3_year_earnings_growth"] == null
        ? undefined
        : json["3_year_earnings_growth"],
    _3yearEarningsGrowthsCategory:
      json["3_year_earnings_growths_category"] == null
        ? undefined
        : json["3_year_earnings_growths_category"],
  };
}

export function GetMutualFundsWorld200ResponseMutualFundRiskValuationMetricsToJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics {
  return GetMutualFundsWorld200ResponseMutualFundRiskValuationMetricsToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundRiskValuationMetricsToJSONTyped(
  value?: GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    price_to_earnings: value["priceToEarnings"],
    price_to_earnings_category: value["priceToEarningsCategory"],
    price_to_book: value["priceToBook"],
    price_to_book_category: value["priceToBookCategory"],
    price_to_sales: value["priceToSales"],
    price_to_sales_category: value["priceToSalesCategory"],
    price_to_cashflow: value["priceToCashflow"],
    price_to_cashflow_category: value["priceToCashflowCategory"],
    median_market_capitalization: value["medianMarketCapitalization"],
    median_market_capitalization_category:
      value["medianMarketCapitalizationCategory"],
    "3_year_earnings_growth": value["_3yearEarningsGrowth"],
    "3_year_earnings_growths_category": value["_3yearEarningsGrowthsCategory"],
  };
}

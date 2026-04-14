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
 * @interface GetETFsWorld200ResponseEtfRiskValuationMetrics
 */
export interface GetETFsWorld200ResponseEtfRiskValuationMetrics {
  /**
   * Fund price to earnings metric
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfRiskValuationMetrics
   */
  priceToEarnings?: number;
  /**
   * Fund price to book metric
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfRiskValuationMetrics
   */
  priceToBook?: number;
  /**
   * Fund price to sales metric
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfRiskValuationMetrics
   */
  priceToSales?: number;
  /**
   * Fund price to cashflow metric
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfRiskValuationMetrics
   */
  priceToCashflow?: number;
}

/**
 * Check if a given object implements the GetETFsWorld200ResponseEtfRiskValuationMetrics interface.
 */
export function instanceOfGetETFsWorld200ResponseEtfRiskValuationMetrics(
  value: object,
): value is GetETFsWorld200ResponseEtfRiskValuationMetrics {
  return true;
}

export function GetETFsWorld200ResponseEtfRiskValuationMetricsFromJSON(
  json: any,
): GetETFsWorld200ResponseEtfRiskValuationMetrics {
  return GetETFsWorld200ResponseEtfRiskValuationMetricsFromJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorld200ResponseEtfRiskValuationMetricsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorld200ResponseEtfRiskValuationMetrics {
  if (json == null) {
    return json;
  }
  return {
    priceToEarnings:
      json["price_to_earnings"] == null ? undefined : json["price_to_earnings"],
    priceToBook:
      json["price_to_book"] == null ? undefined : json["price_to_book"],
    priceToSales:
      json["price_to_sales"] == null ? undefined : json["price_to_sales"],
    priceToCashflow:
      json["price_to_cashflow"] == null ? undefined : json["price_to_cashflow"],
  };
}

export function GetETFsWorld200ResponseEtfRiskValuationMetricsToJSON(
  json: any,
): GetETFsWorld200ResponseEtfRiskValuationMetrics {
  return GetETFsWorld200ResponseEtfRiskValuationMetricsToJSONTyped(json, false);
}

export function GetETFsWorld200ResponseEtfRiskValuationMetricsToJSONTyped(
  value?: GetETFsWorld200ResponseEtfRiskValuationMetrics | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    price_to_earnings: value["priceToEarnings"],
    price_to_book: value["priceToBook"],
    price_to_sales: value["priceToSales"],
    price_to_cashflow: value["priceToCashflow"],
  };
}

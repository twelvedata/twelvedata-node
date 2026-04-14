/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface GetRevenueEstimate200ResponseRevenueEstimateInner
 */
export interface GetRevenueEstimate200ResponseRevenueEstimateInner {
  /**
   * Date of the estimate
   * @type {string}
   * @memberof GetRevenueEstimate200ResponseRevenueEstimateInner
   */
  date?: string;
  /**
   * Period of estimation, can be `current_quarter`, `next_quarter`, `current_year`, or `next_year`
   * @type {string}
   * @memberof GetRevenueEstimate200ResponseRevenueEstimateInner
   */
  period?: string;
  /**
   * Number of analysts that made the estimation
   * @type {number}
   * @memberof GetRevenueEstimate200ResponseRevenueEstimateInner
   */
  numberOfAnalysts?: number;
  /**
   * Average estimation across analysts
   * @type {number}
   * @memberof GetRevenueEstimate200ResponseRevenueEstimateInner
   */
  avgEstimate?: number;
  /**
   * Lowest estimation given by an analyst
   * @type {number}
   * @memberof GetRevenueEstimate200ResponseRevenueEstimateInner
   */
  lowEstimate?: number;
  /**
   * Highest estimation given by an analyst
   * @type {number}
   * @memberof GetRevenueEstimate200ResponseRevenueEstimateInner
   */
  highEstimate?: number;
  /**
   * Total revenue received a year ago relative to period
   * @type {number}
   * @memberof GetRevenueEstimate200ResponseRevenueEstimateInner
   */
  yearAgoSales?: number;
  /**
   * Estimated sales growth of the period in relation to year-ago sales in prc (%)
   * @type {number}
   * @memberof GetRevenueEstimate200ResponseRevenueEstimateInner
   */
  salesGrowth?: number;
}

/**
 * Check if a given object implements the GetRevenueEstimate200ResponseRevenueEstimateInner interface.
 */
export function instanceOfGetRevenueEstimate200ResponseRevenueEstimateInner(
  value: object,
): value is GetRevenueEstimate200ResponseRevenueEstimateInner {
  return true;
}

export function GetRevenueEstimate200ResponseRevenueEstimateInnerFromJSON(
  json: any,
): GetRevenueEstimate200ResponseRevenueEstimateInner {
  return GetRevenueEstimate200ResponseRevenueEstimateInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetRevenueEstimate200ResponseRevenueEstimateInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetRevenueEstimate200ResponseRevenueEstimateInner {
  if (json == null) {
    return json;
  }
  return {
    date: json["date"] == null ? undefined : json["date"],
    period: json["period"] == null ? undefined : json["period"],
    numberOfAnalysts:
      json["number_of_analysts"] == null
        ? undefined
        : json["number_of_analysts"],
    avgEstimate:
      json["avg_estimate"] == null ? undefined : json["avg_estimate"],
    lowEstimate:
      json["low_estimate"] == null ? undefined : json["low_estimate"],
    highEstimate:
      json["high_estimate"] == null ? undefined : json["high_estimate"],
    yearAgoSales:
      json["year_ago_sales"] == null ? undefined : json["year_ago_sales"],
    salesGrowth:
      json["sales_growth"] == null ? undefined : json["sales_growth"],
  };
}

export function GetRevenueEstimate200ResponseRevenueEstimateInnerToJSON(
  json: any,
): GetRevenueEstimate200ResponseRevenueEstimateInner {
  return GetRevenueEstimate200ResponseRevenueEstimateInnerToJSONTyped(
    json,
    false,
  );
}

export function GetRevenueEstimate200ResponseRevenueEstimateInnerToJSONTyped(
  value?: GetRevenueEstimate200ResponseRevenueEstimateInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    date: value["date"],
    period: value["period"],
    number_of_analysts: value["numberOfAnalysts"],
    avg_estimate: value["avgEstimate"],
    low_estimate: value["lowEstimate"],
    high_estimate: value["highEstimate"],
    year_ago_sales: value["yearAgoSales"],
    sales_growth: value["salesGrowth"],
  };
}

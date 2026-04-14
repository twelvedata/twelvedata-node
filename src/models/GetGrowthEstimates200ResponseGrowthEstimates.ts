/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Growth estimates data
 * @export
 * @interface GetGrowthEstimates200ResponseGrowthEstimates
 */
export interface GetGrowthEstimates200ResponseGrowthEstimates {
  /**
   * Projected growth of the current quarter in percentage (%)
   * @type {number}
   * @memberof GetGrowthEstimates200ResponseGrowthEstimates
   */
  currentQuarter?: number;
  /**
   * Projected growth of the next quarter in percentage (%)
   * @type {number}
   * @memberof GetGrowthEstimates200ResponseGrowthEstimates
   */
  nextQuarter?: number;
  /**
   * Projected growth of the current year in percentage (%)
   * @type {number}
   * @memberof GetGrowthEstimates200ResponseGrowthEstimates
   */
  currentYear?: number;
  /**
   * Projected growth of the next year in percentage (%)
   * @type {number}
   * @memberof GetGrowthEstimates200ResponseGrowthEstimates
   */
  nextYear?: number;
  /**
   * Projected growth during the next 5 years in percentage (%) per annum
   * @type {number}
   * @memberof GetGrowthEstimates200ResponseGrowthEstimates
   */
  next5YearsPa?: number;
  /**
   * Actual growth over the last 5 years in percentage (%) per annum
   * @type {number}
   * @memberof GetGrowthEstimates200ResponseGrowthEstimates
   */
  past5YearsPa?: number;
}

/**
 * Check if a given object implements the GetGrowthEstimates200ResponseGrowthEstimates interface.
 */
export function instanceOfGetGrowthEstimates200ResponseGrowthEstimates(
  value: object,
): value is GetGrowthEstimates200ResponseGrowthEstimates {
  return true;
}

export function GetGrowthEstimates200ResponseGrowthEstimatesFromJSON(
  json: any,
): GetGrowthEstimates200ResponseGrowthEstimates {
  return GetGrowthEstimates200ResponseGrowthEstimatesFromJSONTyped(json, false);
}

export function GetGrowthEstimates200ResponseGrowthEstimatesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetGrowthEstimates200ResponseGrowthEstimates {
  if (json == null) {
    return json;
  }
  return {
    currentQuarter:
      json["current_quarter"] == null ? undefined : json["current_quarter"],
    nextQuarter:
      json["next_quarter"] == null ? undefined : json["next_quarter"],
    currentYear:
      json["current_year"] == null ? undefined : json["current_year"],
    nextYear: json["next_year"] == null ? undefined : json["next_year"],
    next5YearsPa:
      json["next_5_years_pa"] == null ? undefined : json["next_5_years_pa"],
    past5YearsPa:
      json["past_5_years_pa"] == null ? undefined : json["past_5_years_pa"],
  };
}

export function GetGrowthEstimates200ResponseGrowthEstimatesToJSON(
  json: any,
): GetGrowthEstimates200ResponseGrowthEstimates {
  return GetGrowthEstimates200ResponseGrowthEstimatesToJSONTyped(json, false);
}

export function GetGrowthEstimates200ResponseGrowthEstimatesToJSONTyped(
  value?: GetGrowthEstimates200ResponseGrowthEstimates | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    current_quarter: value["currentQuarter"],
    next_quarter: value["nextQuarter"],
    current_year: value["currentYear"],
    next_year: value["nextYear"],
    next_5_years_pa: value["next5YearsPa"],
    past_5_years_pa: value["past5YearsPa"],
  };
}

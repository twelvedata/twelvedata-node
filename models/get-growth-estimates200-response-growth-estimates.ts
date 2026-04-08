/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Growth estimates data
 */
export interface GetGrowthEstimates200ResponseGrowthEstimates {
  /**
   * Projected growth of the current quarter in percentage (%)
   */
  current_quarter?: number;
  /**
   * Projected growth of the next quarter in percentage (%)
   */
  next_quarter?: number;
  /**
   * Projected growth of the current year in percentage (%)
   */
  current_year?: number;
  /**
   * Projected growth of the next year in percentage (%)
   */
  next_year?: number;
  /**
   * Projected growth during the next 5 years in percentage (%) per annum
   */
  next_5_years_pa?: number;
  /**
   * Actual growth over the last 5 years in percentage (%) per annum
   */
  past_5_years_pa?: number;
}

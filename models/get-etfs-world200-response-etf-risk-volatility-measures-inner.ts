/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner {
  /**
   * Period of a measure
   */
  period?: string;
  /**
   * Alpha score of a fund
   */
  alpha?: number;
  /**
   * Average alpha score of a fund\'s category
   */
  alpha_category?: number;
  /**
   * Beta score of a fund
   */
  beta?: number;
  /**
   * Average beta score of a fund\'s category
   */
  beta_category?: number;
  /**
   * Mean annual return of a fund
   */
  mean_annual_return?: number;
  /**
   * Average mean annual return of a fund\'s category
   */
  mean_annual_return_category?: number;
  /**
   * R-squared metric of a fund
   */
  r_squared?: number;
  /**
   * Average r-squared metric of a fund\'s category
   */
  r_squared_category?: number;
  /**
   * Standard deviation of a fund
   */
  std?: number;
  /**
   * Average standard deviation of a fund\'s category
   */
  std_category?: number;
  /**
   * Sharpe ratio of a fund
   */
  sharpe_ratio?: number;
  /**
   * Average sharpe ratio of a fund\'s category
   */
  sharpe_ratio_category?: number;
  /**
   * Treynor ratio of a fund
   */
  treynor_ratio?: number;
  /**
   * Average treynor ratio of a fund\'s category
   */
  treynor_ratio_category?: number;
}

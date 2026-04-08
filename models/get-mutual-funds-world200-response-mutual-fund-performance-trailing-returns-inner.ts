/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInner {
  /**
   * Period of trailing returns
   */
  period?: string;
  /**
   * Fund returns (%) generated over a given period
   */
  share_class_return?: number;
  /**
   * Same category average returns (%) generated over a given period
   */
  category_return?: number;
  /**
   * Rank of a fund in category by total returns
   */
  rank_in_category?: number;
}

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Current month recommendations
 */
export interface GetRecommendations200ResponseTrendsCurrentMonth {
  /**
   * Number of analysts that give a strong buy recommendation
   */
  strong_buy?: number;
  /**
   * Number of analysts that give a buy recommendation
   */
  buy?: number;
  /**
   * Number of analysts that give a hold recommendation
   */
  hold?: number;
  /**
   * Number of analysts that give a sell recommendation
   */
  sell?: number;
  /**
   * Number of analysts that give a strong sell recommendation
   */
  strong_sell?: number;
}

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetTimeSeriesMinMaxIndex200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   */
  datetime?: string;
  /**
   * Index of the lowest value over the specified period
   */
  minidx?: string;
  /**
   * Index of the highest value over the specified period
   */
  maxidx?: string;
}

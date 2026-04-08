/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetTimeSeriesVwap200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   */
  datetime?: string;
  /**
   * VWAP lower value
   */
  vwap_lower?: number;
  /**
   * VWAP value
   */
  vwap?: number;
  /**
   * VWAP upper value
   */
  vwap_upper?: number;
}

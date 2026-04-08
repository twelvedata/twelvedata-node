/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetTimeSeriesMacdSlope200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   */
  datetime?: string;
  /**
   * MACD slope value
   */
  macd_slope?: string;
  /**
   * MACD signal slope value
   */
  macd_signal_slope?: string;
  /**
   * MACD histogram slope value
   */
  macd_hist_slope?: string;
}

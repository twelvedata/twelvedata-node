/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetTimeSeriesMacdExt200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   */
  datetime?: string;
  /**
   * MACD value
   */
  macd?: string;
  /**
   * MACD signal line value
   */
  macd_signal?: string;
  /**
   * MACD histogram value
   */
  macd_hist?: string;
}

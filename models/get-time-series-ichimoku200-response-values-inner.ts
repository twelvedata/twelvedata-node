/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetTimeSeriesIchimoku200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   */
  datetime?: string;
  /**
   * Tenkan-sen value
   */
  tenkan_sen?: string;
  /**
   * Kijun-sen value
   */
  kijun_sen?: string;
  /**
   * Senkou span A value
   */
  senkou_span_a?: string;
  /**
   * Senkou span B value
   */
  senkou_span_b?: string;
  /**
   * Chikou span value
   */
  chikou_span?: string;
}

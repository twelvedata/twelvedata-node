/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Technical indicator information
 */
export interface GetTimeSeriesIchimoku200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   */
  name?: string;
  /**
   * The time period used for generating the conversation line
   */
  conversion_line_period?: number;
  /**
   * The time period used for generating the base line
   */
  base_line_period?: number;
  /**
   * The time period used for generating the leading span B line
   */
  leading_span_b_period?: number;
  /**
   * The time period used for generating the lagging span line
   */
  lagging_span_period?: number;
  /**
   * Indicates whether to include ahead span period
   */
  include_ahead_span_period?: boolean;
}

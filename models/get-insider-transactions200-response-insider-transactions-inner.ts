/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetInsiderTransactions200ResponseInsiderTransactionsInner {
  /**
   * Full name of an individual, including first name, middle name, last name, and suffix
   */
  full_name?: string;
  /**
   * Job position of insider
   */
  position?: string;
  /**
   * Date the transaction was reported
   */
  date_reported?: string;
  /**
   * `true` if direct, `false` if indirect
   */
  is_direct?: boolean;
  /**
   * As per report the number of shares acquired or disposed of the transaction
   */
  shares?: number;
  /**
   * Represents the value of transaction, calculated as price multiplied by the volume
   */
  value?: number;
  /**
   * Exact price or price range of the transaction if available
   */
  description?: string;
}

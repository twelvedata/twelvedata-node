/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { EdgarFilingFile } from "./edgar-filing-file";

/**
 * Filing value object
 */
export interface EdgarFilingValue {
  /**
   * CIK code
   */
  cik?: number;
  /**
   * Filing date in UNIX timestamp
   */
  filed_at?: number;
  /**
   * Filing files
   */
  files?: Array<EdgarFilingFile>;
  /**
   * Full URL of the filing
   */
  filing_url?: string;
  /**
   * Filing form type
   */
  form_type?: string;
  /**
   * Ticker symbols associated with the filing
   */
  ticker?: Array<string>;
}

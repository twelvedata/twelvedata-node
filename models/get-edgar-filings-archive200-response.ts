/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { EdgarFilingValue } from "./edgar-filing-value";
// May contain unused imports in some cases
// @ts-ignore
import type { GetEdgarFilingsArchive200ResponseMeta } from "./get-edgar-filings-archive200-response-meta";

export interface GetEdgarFilingsArchive200Response {
  meta?: GetEdgarFilingsArchive200ResponseMeta;
  /**
   * List of filings
   */
  values?: Array<EdgarFilingValue>;
}

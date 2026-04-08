/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { InlineObject9Meta } from "./inline-object9-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { InlineObject9ValuesInner } from "./inline-object9-values-inner";

export interface InlineObject9 {
  meta?: InlineObject9Meta;
  /**
   * Array of time series data points
   */
  values?: Array<InlineObject9ValuesInner>;
  /**
   * Response status
   */
  status?: string;
}

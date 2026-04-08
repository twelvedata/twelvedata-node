/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { InlineObject10Meta } from "./inline-object10-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { InlineObject10ValuesInner } from "./inline-object10-values-inner";

export interface InlineObject10 {
  meta?: InlineObject10Meta;
  /**
   * Array of time series data points
   */
  values?: Array<InlineObject10ValuesInner>;
  /**
   * Response status
   */
  status?: string;
}

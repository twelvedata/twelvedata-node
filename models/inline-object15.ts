/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { InlineObject15Meta } from "./inline-object15-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { InlineObject15ValuesInner } from "./inline-object15-values-inner";

export interface InlineObject15 {
  meta?: InlineObject15Meta;
  /**
   * Array of time series data points
   */
  values?: Array<InlineObject15ValuesInner>;
  /**
   * Response status
   */
  status?: string;
}

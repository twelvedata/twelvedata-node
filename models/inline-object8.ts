/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { InlineObject8Meta } from "./inline-object8-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { InlineObject8ValuesInner } from "./inline-object8-values-inner";

export interface InlineObject8 {
  meta?: InlineObject8Meta;
  /**
   * Array of time series data points
   */
  values?: Array<InlineObject8ValuesInner>;
  /**
   * Response status
   */
  status?: string;
}

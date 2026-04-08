/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetLogo200ResponseMeta } from "./get-logo200-response-meta";

export interface GetLogo200Response {
  meta?: GetLogo200ResponseMeta;
  /**
   * Link to download the logo (for stocks only)
   */
  url?: string;
  /**
   * Link to download the base currency logo (for `forex` and `crypto` only)
   */
  logo_base?: string;
  /**
   * Link to download the quote currency logo (for `forex` and `crypto` only)
   */
  logo_quote?: string;
}

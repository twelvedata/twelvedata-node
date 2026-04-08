/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetETFsWorld200ResponseEtfComposition } from "./get-etfs-world200-response-etf-composition";
// May contain unused imports in some cases
// @ts-ignore
import type { GetETFsWorld200ResponseEtfPerformance } from "./get-etfs-world200-response-etf-performance";
// May contain unused imports in some cases
// @ts-ignore
import type { GetETFsWorld200ResponseEtfRisk } from "./get-etfs-world200-response-etf-risk";
// May contain unused imports in some cases
// @ts-ignore
import type { GetETFsWorld200ResponseEtfSummary } from "./get-etfs-world200-response-etf-summary";

/**
 * Etf information
 */
export interface GetETFsWorld200ResponseEtf {
  summary?: GetETFsWorld200ResponseEtfSummary;
  performance?: GetETFsWorld200ResponseEtfPerformance;
  risk?: GetETFsWorld200ResponseEtfRisk;
  composition?: GetETFsWorld200ResponseEtfComposition;
}

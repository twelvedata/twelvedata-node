/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars } from "./get-mutual-funds-world200-response-mutual-fund-sustainability-corporate-esg-pillars";

/**
 * Sustainability information of a mutual fund
 */
export interface GetMutualFundsWorld200ResponseMutualFundSustainability {
  /**
   * Sustainability score: asset-weighted average of normalized company-level ESG Scores for the covered holdings in the portfolio from `0` to `100`
   */
  score?: number;
  corporate_esg_pillars?: GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars;
  /**
   * Indication that the fund discloses in their prospectus that they employ socially responsible or ESG principles in their investment selection processes
   */
  sustainable_investment?: boolean;
  /**
   * Percentage of AUM used to calculate sustainability score
   */
  corporate_aum?: number;
}

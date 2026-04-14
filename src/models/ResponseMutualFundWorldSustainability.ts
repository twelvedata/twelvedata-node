/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars } from "./GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars";
import {
  GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillarsFromJSON,
  GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillarsFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillarsToJSON,
  GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillarsToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars";

/**
 * Sustainability score and ESG (Environmental, Social, Governance) metrics for the fund
 * @export
 * @interface ResponseMutualFundWorldSustainability
 */
export interface ResponseMutualFundWorldSustainability {
  /**
   * Sustainability score: asset-weighted average of normalized company-level ESG Scores for the covered holdings in the portfolio from `0` to `100`
   * @type {number}
   * @memberof ResponseMutualFundWorldSustainability
   */
  score?: number;
  /**
   *
   * @type {GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars}
   * @memberof ResponseMutualFundWorldSustainability
   */
  corporateEsgPillars?: GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars;
  /**
   * Indication that the fund discloses in their prospectus that they employ socially responsible or ESG principles in their investment selection processes
   * @type {boolean}
   * @memberof ResponseMutualFundWorldSustainability
   */
  sustainableInvestment?: boolean;
  /**
   * Percentage of AUM used to calculate sustainability score
   * @type {number}
   * @memberof ResponseMutualFundWorldSustainability
   */
  corporateAum?: number;
}

/**
 * Check if a given object implements the ResponseMutualFundWorldSustainability interface.
 */
export function instanceOfResponseMutualFundWorldSustainability(
  value: object,
): value is ResponseMutualFundWorldSustainability {
  return true;
}

export function ResponseMutualFundWorldSustainabilityFromJSON(
  json: any,
): ResponseMutualFundWorldSustainability {
  return ResponseMutualFundWorldSustainabilityFromJSONTyped(json, false);
}

export function ResponseMutualFundWorldSustainabilityFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ResponseMutualFundWorldSustainability {
  if (json == null) {
    return json;
  }
  return {
    score: json["score"] == null ? undefined : json["score"],
    corporateEsgPillars:
      json["corporate_esg_pillars"] == null
        ? undefined
        : GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillarsFromJSON(
            json["corporate_esg_pillars"],
          ),
    sustainableInvestment:
      json["sustainable_investment"] == null
        ? undefined
        : json["sustainable_investment"],
    corporateAum:
      json["corporate_aum"] == null ? undefined : json["corporate_aum"],
  };
}

export function ResponseMutualFundWorldSustainabilityToJSON(
  json: any,
): ResponseMutualFundWorldSustainability {
  return ResponseMutualFundWorldSustainabilityToJSONTyped(json, false);
}

export function ResponseMutualFundWorldSustainabilityToJSONTyped(
  value?: ResponseMutualFundWorldSustainability | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    score: value["score"],
    corporate_esg_pillars:
      GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillarsToJSON(
        value["corporateEsgPillars"],
      ),
    sustainable_investment: value["sustainableInvestment"],
    corporate_aum: value["corporateAum"],
  };
}

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
 * Sustainability information of a mutual fund
 * @export
 * @interface GetMutualFundsWorld200ResponseMutualFundSustainability
 */
export interface GetMutualFundsWorld200ResponseMutualFundSustainability {
  /**
   * Sustainability score: asset-weighted average of normalized company-level ESG Scores for the covered holdings in the portfolio from `0` to `100`
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundSustainability
   */
  score?: number;
  /**
   *
   * @type {GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars}
   * @memberof GetMutualFundsWorld200ResponseMutualFundSustainability
   */
  corporateEsgPillars?: GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars;
  /**
   * Indication that the fund discloses in their prospectus that they employ socially responsible or ESG principles in their investment selection processes
   * @type {boolean}
   * @memberof GetMutualFundsWorld200ResponseMutualFundSustainability
   */
  sustainableInvestment?: boolean;
  /**
   * Percentage of AUM used to calculate sustainability score
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundSustainability
   */
  corporateAum?: number;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200ResponseMutualFundSustainability interface.
 */
export function instanceOfGetMutualFundsWorld200ResponseMutualFundSustainability(
  value: object,
): value is GetMutualFundsWorld200ResponseMutualFundSustainability {
  return true;
}

export function GetMutualFundsWorld200ResponseMutualFundSustainabilityFromJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundSustainability {
  return GetMutualFundsWorld200ResponseMutualFundSustainabilityFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundSustainabilityFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200ResponseMutualFundSustainability {
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

export function GetMutualFundsWorld200ResponseMutualFundSustainabilityToJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundSustainability {
  return GetMutualFundsWorld200ResponseMutualFundSustainabilityToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundSustainabilityToJSONTyped(
  value?: GetMutualFundsWorld200ResponseMutualFundSustainability | null,
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

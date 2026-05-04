/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Average maturity of bond holdings for the fund and its category
 * @export
 * @interface GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturity
 */
export interface GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturity {
  /**
   * Average maturity of bond holding of a fund
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturity
   */
  fund?: number;
  /**
   * Average maturity of bond holding of funds in the same category
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturity
   */
  category?: number;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturity interface.
 */
export function instanceOfGetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturity(
  value: object,
): value is GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturity {
  return true;
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturityFromJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturity {
  return GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturityFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturityFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturity {
  if (json == null) {
    return json;
  }
  return {
    fund: json["fund"] == null ? undefined : json["fund"],
    category: json["category"] == null ? undefined : json["category"],
  };
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturityToJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturity {
  return GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturityToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturityToJSONTyped(
  value?: GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturity | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    fund: value["fund"],
    category: value["category"],
  };
}

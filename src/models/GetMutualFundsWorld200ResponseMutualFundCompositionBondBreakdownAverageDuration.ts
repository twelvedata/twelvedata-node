/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Average duration of bond holdings for the fund and its category
 * @export
 * @interface GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDuration
 */
export interface GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDuration {
  /**
   * Average duration of bond holding of a fund
   * @type {object}
   * @memberof GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDuration
   */
  fund?: object;
  /**
   * Average duration of bond holding of funds in the same category
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDuration
   */
  category?: number;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDuration interface.
 */
export function instanceOfGetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDuration(
  value: object,
): value is GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDuration {
  return true;
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDurationFromJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDuration {
  return GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDurationFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDurationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDuration {
  if (json == null) {
    return json;
  }
  return {
    fund: json["fund"] == null ? undefined : json["fund"],
    category: json["category"] == null ? undefined : json["category"],
  };
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDurationToJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDuration {
  return GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDurationToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDurationToJSONTyped(
  value?: GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDuration | null,
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

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInner
 */
export interface GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInner {
  /**
   * Rating of bond holding of a fund from AAA to below B
   * @type {string}
   * @memberof GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInner
   */
  grade?: string;
  /**
   * Weight of bond holding in fund portfolio
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInner
   */
  weight?: number;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInner interface.
 */
export function instanceOfGetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInner(
  value: object,
): value is GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInner {
  return true;
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInnerFromJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInner {
  return GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInner {
  if (json == null) {
    return json;
  }
  return {
    grade: json["grade"] == null ? undefined : json["grade"],
    weight: json["weight"] == null ? undefined : json["weight"],
  };
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInnerToJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInner {
  return GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInnerToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInnerToJSONTyped(
  value?: GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    grade: value["grade"],
    weight: value["weight"],
  };
}

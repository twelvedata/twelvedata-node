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
 * @interface GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInner
 */
export interface GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInner {
  /**
   * Period of a load adjusted return
   * @type {string}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInner
   */
  period?: string;
  /**
   * Actual return (%) an investor sees after accounting for fees and sales charges are deducted from a mutual fund's performance
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInner
   */
  _return?: number;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInner interface.
 */
export function instanceOfGetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInner(
  value: object,
): value is GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInner {
  return true;
}

export function GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInnerFromJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInner {
  return GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInner {
  if (json == null) {
    return json;
  }
  return {
    period: json["period"] == null ? undefined : json["period"],
    _return: json["return"] == null ? undefined : json["return"],
  };
}

export function GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInnerToJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInner {
  return GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInnerToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInnerToJSONTyped(
  value?: GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    period: value["period"],
    return: value["_return"],
  };
}

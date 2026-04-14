/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInner } from "./GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInner";
import {
  GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInnerFromJSON,
  GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInnerFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInnerToJSON,
  GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInnerToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInner";
import type { GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInner } from "./GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInner";
import {
  GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInnerFromJSON,
  GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInnerFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInnerToJSON,
  GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInnerToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInner";
import type { GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInner } from "./GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInner";
import {
  GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInnerFromJSON,
  GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInnerFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInnerToJSON,
  GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInnerToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInner";
import type { GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInner } from "./GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInner";
import {
  GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInnerFromJSON,
  GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInnerFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInnerToJSON,
  GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInnerToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInner";

/**
 * Detailed performance of a mutual fund
 * @export
 * @interface ResponseMutualFundWorldPerformance
 */
export interface ResponseMutualFundWorldPerformance {
  /**
   * Trailing returns of the fund
   * @type {Array<GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInner>}
   * @memberof ResponseMutualFundWorldPerformance
   */
  trailingReturns?: Array<GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInner>;
  /**
   * Annual total returns of the fund
   * @type {Array<GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInner>}
   * @memberof ResponseMutualFundWorldPerformance
   */
  annualTotalReturns?: Array<GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInner>;
  /**
   * Quarterly total returns of the fund
   * @type {Array<GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInner>}
   * @memberof ResponseMutualFundWorldPerformance
   */
  quarterlyTotalReturns?: Array<GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInner>;
  /**
   * Load adjusted return of the fund
   * @type {Array<GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInner>}
   * @memberof ResponseMutualFundWorldPerformance
   */
  loadAdjustedReturn?: Array<GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInner>;
}

/**
 * Check if a given object implements the ResponseMutualFundWorldPerformance interface.
 */
export function instanceOfResponseMutualFundWorldPerformance(
  value: object,
): value is ResponseMutualFundWorldPerformance {
  return true;
}

export function ResponseMutualFundWorldPerformanceFromJSON(
  json: any,
): ResponseMutualFundWorldPerformance {
  return ResponseMutualFundWorldPerformanceFromJSONTyped(json, false);
}

export function ResponseMutualFundWorldPerformanceFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ResponseMutualFundWorldPerformance {
  if (json == null) {
    return json;
  }
  return {
    trailingReturns:
      json["trailing_returns"] == null
        ? undefined
        : (json["trailing_returns"] as Array<any>).map(
            GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInnerFromJSON,
          ),
    annualTotalReturns:
      json["annual_total_returns"] == null
        ? undefined
        : (json["annual_total_returns"] as Array<any>).map(
            GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInnerFromJSON,
          ),
    quarterlyTotalReturns:
      json["quarterly_total_returns"] == null
        ? undefined
        : (json["quarterly_total_returns"] as Array<any>).map(
            GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInnerFromJSON,
          ),
    loadAdjustedReturn:
      json["load_adjusted_return"] == null
        ? undefined
        : (json["load_adjusted_return"] as Array<any>).map(
            GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInnerFromJSON,
          ),
  };
}

export function ResponseMutualFundWorldPerformanceToJSON(
  json: any,
): ResponseMutualFundWorldPerformance {
  return ResponseMutualFundWorldPerformanceToJSONTyped(json, false);
}

export function ResponseMutualFundWorldPerformanceToJSONTyped(
  value?: ResponseMutualFundWorldPerformance | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    trailing_returns:
      value["trailingReturns"] == null
        ? undefined
        : (value["trailingReturns"] as Array<any>).map(
            GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInnerToJSON,
          ),
    annual_total_returns:
      value["annualTotalReturns"] == null
        ? undefined
        : (value["annualTotalReturns"] as Array<any>).map(
            GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInnerToJSON,
          ),
    quarterly_total_returns:
      value["quarterlyTotalReturns"] == null
        ? undefined
        : (value["quarterlyTotalReturns"] as Array<any>).map(
            GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInnerToJSON,
          ),
    load_adjusted_return:
      value["loadAdjustedReturn"] == null
        ? undefined
        : (value["loadAdjustedReturn"] as Array<any>).map(
            GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInnerToJSON,
          ),
  };
}

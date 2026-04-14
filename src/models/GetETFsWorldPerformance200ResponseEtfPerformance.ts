/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInner } from "./GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInner";
import {
  GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInnerFromJSON,
  GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInnerFromJSONTyped,
  GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInnerToJSON,
  GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInnerToJSONTyped,
} from "./GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInner";
import type { GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInner } from "./GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInner";
import {
  GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInnerFromJSON,
  GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInnerFromJSONTyped,
  GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInnerToJSON,
  GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInnerToJSONTyped,
} from "./GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInner";

/**
 * Detailed performance of a etf
 * @export
 * @interface GetETFsWorldPerformance200ResponseEtfPerformance
 */
export interface GetETFsWorldPerformance200ResponseEtfPerformance {
  /**
   * Performance returns of the fund and its category over various trailing time periods
   * @type {Array<GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInner>}
   * @memberof GetETFsWorldPerformance200ResponseEtfPerformance
   */
  trailingReturns?: Array<GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInner>;
  /**
   * Fund and category total returns (%) for each calendar year
   * @type {Array<GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInner>}
   * @memberof GetETFsWorldPerformance200ResponseEtfPerformance
   */
  annualTotalReturns?: Array<GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInner>;
}

/**
 * Check if a given object implements the GetETFsWorldPerformance200ResponseEtfPerformance interface.
 */
export function instanceOfGetETFsWorldPerformance200ResponseEtfPerformance(
  value: object,
): value is GetETFsWorldPerformance200ResponseEtfPerformance {
  return true;
}

export function GetETFsWorldPerformance200ResponseEtfPerformanceFromJSON(
  json: any,
): GetETFsWorldPerformance200ResponseEtfPerformance {
  return GetETFsWorldPerformance200ResponseEtfPerformanceFromJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorldPerformance200ResponseEtfPerformanceFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorldPerformance200ResponseEtfPerformance {
  if (json == null) {
    return json;
  }
  return {
    trailingReturns:
      json["trailing_returns"] == null
        ? undefined
        : (json["trailing_returns"] as Array<any>).map(
            GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInnerFromJSON,
          ),
    annualTotalReturns:
      json["annual_total_returns"] == null
        ? undefined
        : (json["annual_total_returns"] as Array<any>).map(
            GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInnerFromJSON,
          ),
  };
}

export function GetETFsWorldPerformance200ResponseEtfPerformanceToJSON(
  json: any,
): GetETFsWorldPerformance200ResponseEtfPerformance {
  return GetETFsWorldPerformance200ResponseEtfPerformanceToJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorldPerformance200ResponseEtfPerformanceToJSONTyped(
  value?: GetETFsWorldPerformance200ResponseEtfPerformance | null,
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
            GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInnerToJSON,
          ),
    annual_total_returns:
      value["annualTotalReturns"] == null
        ? undefined
        : (value["annualTotalReturns"] as Array<any>).map(
            GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInnerToJSON,
          ),
  };
}

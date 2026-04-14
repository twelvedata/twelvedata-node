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
 * @interface GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInner
 */
export interface GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInner {
  /**
   * Year of total returns
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInner
   */
  year?: number;
  /**
   * Fund total returns (%) generated over a given year
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInner
   */
  shareClassReturn?: number;
  /**
   * Same category average total returns (%) generated over a given year
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInner
   */
  categoryReturn?: number;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInner interface.
 */
export function instanceOfGetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInner(
  value: object,
): value is GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInner {
  return true;
}

export function GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInnerFromJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInner {
  return GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInner {
  if (json == null) {
    return json;
  }
  return {
    year: json["year"] == null ? undefined : json["year"],
    shareClassReturn:
      json["share_class_return"] == null
        ? undefined
        : json["share_class_return"],
    categoryReturn:
      json["category_return"] == null ? undefined : json["category_return"],
  };
}

export function GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInnerToJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInner {
  return GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInnerToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInnerToJSONTyped(
  value?: GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    year: value["year"],
    share_class_return: value["shareClassReturn"],
    category_return: value["categoryReturn"],
  };
}

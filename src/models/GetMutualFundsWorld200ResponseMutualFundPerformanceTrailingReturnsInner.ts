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
 * @interface GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInner
 */
export interface GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInner {
  /**
   * Period of trailing returns
   * @type {string}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInner
   */
  period?: string;
  /**
   * Fund returns (%) generated over a given period
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInner
   */
  shareClassReturn?: number;
  /**
   * Same category average returns (%) generated over a given period
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInner
   */
  categoryReturn?: number;
  /**
   * Rank of a fund in category by total returns
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInner
   */
  rankInCategory?: number;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInner interface.
 */
export function instanceOfGetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInner(
  value: object,
): value is GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInner {
  return true;
}

export function GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInnerFromJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInner {
  return GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInner {
  if (json == null) {
    return json;
  }
  return {
    period: json["period"] == null ? undefined : json["period"],
    shareClassReturn:
      json["share_class_return"] == null
        ? undefined
        : json["share_class_return"],
    categoryReturn:
      json["category_return"] == null ? undefined : json["category_return"],
    rankInCategory:
      json["rank_in_category"] == null ? undefined : json["rank_in_category"],
  };
}

export function GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInnerToJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInner {
  return GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInnerToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInnerToJSONTyped(
  value?: GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    period: value["period"],
    share_class_return: value["shareClassReturn"],
    category_return: value["categoryReturn"],
    rank_in_category: value["rankInCategory"],
  };
}

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
 * @interface GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInner
 */
export interface GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInner {
  /**
   * Period of trailing returns
   * @type {string}
   * @memberof GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInner
   */
  period?: string;
  /**
   * Fund returns (%) generated over a given period
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInner
   */
  shareClassReturn?: number;
  /**
   * Same category average returns (%) generated over a given period
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInner
   */
  categoryReturn?: number;
}

/**
 * Check if a given object implements the GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInner interface.
 */
export function instanceOfGetETFsWorld200ResponseEtfPerformanceTrailingReturnsInner(
  value: object,
): value is GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInner {
  return true;
}

export function GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInnerFromJSON(
  json: any,
): GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInner {
  return GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInner {
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
  };
}

export function GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInnerToJSON(
  json: any,
): GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInner {
  return GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInnerToJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInnerToJSONTyped(
  value?: GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    period: value["period"],
    share_class_return: value["shareClassReturn"],
    category_return: value["categoryReturn"],
  };
}

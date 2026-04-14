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
 * @interface GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInner
 */
export interface GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInner {
  /**
   * Year of total returns
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInner
   */
  year?: number;
  /**
   * Fund total returns (%) generated over a given year
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInner
   */
  shareClassReturn?: number;
  /**
   * Same category average total returns (%) generated over a given year
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInner
   */
  categoryReturn?: number;
}

/**
 * Check if a given object implements the GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInner interface.
 */
export function instanceOfGetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInner(
  value: object,
): value is GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInner {
  return true;
}

export function GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInnerFromJSON(
  json: any,
): GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInner {
  return GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInner {
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

export function GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInnerToJSON(
  json: any,
): GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInner {
  return GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInnerToJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInnerToJSONTyped(
  value?: GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInner | null,
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

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
 * @interface GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInner
 */
export interface GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInner {
  /**
   * Year of a fund quarter return
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInner
   */
  year?: number;
  /**
   * Total return (%) of a fund in the first quarter
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInner
   */
  q1?: number;
  /**
   * Total return (%) of a fund in the second quarter
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInner
   */
  q2?: number;
  /**
   * Total return (%) of a fund in the third quarter
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInner
   */
  q3?: number;
  /**
   * Total return (%) of a fund in the fourth quarter
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInner
   */
  q4?: number;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInner interface.
 */
export function instanceOfGetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInner(
  value: object,
): value is GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInner {
  return true;
}

export function GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInnerFromJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInner {
  return GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInner {
  if (json == null) {
    return json;
  }
  return {
    year: json["year"] == null ? undefined : json["year"],
    q1: json["q1"] == null ? undefined : json["q1"],
    q2: json["q2"] == null ? undefined : json["q2"],
    q3: json["q3"] == null ? undefined : json["q3"],
    q4: json["q4"] == null ? undefined : json["q4"],
  };
}

export function GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInnerToJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInner {
  return GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInnerToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInnerToJSONTyped(
  value?: GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    year: value["year"],
    q1: value["q1"],
    q2: value["q2"],
    q3: value["q3"],
    q4: value["q4"],
  };
}

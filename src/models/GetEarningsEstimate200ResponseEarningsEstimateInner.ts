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
 * @interface GetEarningsEstimate200ResponseEarningsEstimateInner
 */
export interface GetEarningsEstimate200ResponseEarningsEstimateInner {
  /**
   * Date of the earnings estimate
   * @type {string}
   * @memberof GetEarningsEstimate200ResponseEarningsEstimateInner
   */
  date: string;
  /**
   * Period of estimation, can be `current_quarter`, `next_quarter`, `current_year`, or `next_year`
   * @type {string}
   * @memberof GetEarningsEstimate200ResponseEarningsEstimateInner
   */
  period: string;
  /**
   * Number of analysts that made the estimation
   * @type {number}
   * @memberof GetEarningsEstimate200ResponseEarningsEstimateInner
   */
  numberOfAnalysts?: number;
  /**
   * Average estimation across analysts
   * @type {number}
   * @memberof GetEarningsEstimate200ResponseEarningsEstimateInner
   */
  avgEstimate?: number;
  /**
   * Lowest estimation given by an analyst
   * @type {number}
   * @memberof GetEarningsEstimate200ResponseEarningsEstimateInner
   */
  lowEstimate?: number;
  /**
   * Highest estimation given by an analyst
   * @type {number}
   * @memberof GetEarningsEstimate200ResponseEarningsEstimateInner
   */
  highEstimate?: number;
  /**
   * Average estimation of this period's earnings given a year ago
   * @type {number}
   * @memberof GetEarningsEstimate200ResponseEarningsEstimateInner
   */
  yearAgoEps?: number;
}

/**
 * Check if a given object implements the GetEarningsEstimate200ResponseEarningsEstimateInner interface.
 */
export function instanceOfGetEarningsEstimate200ResponseEarningsEstimateInner(
  value: object,
): value is GetEarningsEstimate200ResponseEarningsEstimateInner {
  if (!("date" in value) || value["date"] === undefined) return false;
  if (!("period" in value) || value["period"] === undefined) return false;
  return true;
}

export function GetEarningsEstimate200ResponseEarningsEstimateInnerFromJSON(
  json: any,
): GetEarningsEstimate200ResponseEarningsEstimateInner {
  return GetEarningsEstimate200ResponseEarningsEstimateInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetEarningsEstimate200ResponseEarningsEstimateInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetEarningsEstimate200ResponseEarningsEstimateInner {
  if (json == null) {
    return json;
  }
  return {
    date: json["date"],
    period: json["period"],
    numberOfAnalysts:
      json["number_of_analysts"] == null
        ? undefined
        : json["number_of_analysts"],
    avgEstimate:
      json["avg_estimate"] == null ? undefined : json["avg_estimate"],
    lowEstimate:
      json["low_estimate"] == null ? undefined : json["low_estimate"],
    highEstimate:
      json["high_estimate"] == null ? undefined : json["high_estimate"],
    yearAgoEps: json["year_ago_eps"] == null ? undefined : json["year_ago_eps"],
  };
}

export function GetEarningsEstimate200ResponseEarningsEstimateInnerToJSON(
  json: any,
): GetEarningsEstimate200ResponseEarningsEstimateInner {
  return GetEarningsEstimate200ResponseEarningsEstimateInnerToJSONTyped(
    json,
    false,
  );
}

export function GetEarningsEstimate200ResponseEarningsEstimateInnerToJSONTyped(
  value?: GetEarningsEstimate200ResponseEarningsEstimateInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    date: value["date"],
    period: value["period"],
    number_of_analysts: value["numberOfAnalysts"],
    avg_estimate: value["avgEstimate"],
    low_estimate: value["lowEstimate"],
    high_estimate: value["highEstimate"],
    year_ago_eps: value["yearAgoEps"],
  };
}

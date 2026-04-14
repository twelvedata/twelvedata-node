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
 * @interface GetEpsTrend200ResponseEpsTrendInner
 */
export interface GetEpsTrend200ResponseEpsTrendInner {
  /**
   * Date of the estimation
   * @type {string}
   * @memberof GetEpsTrend200ResponseEpsTrendInner
   */
  date?: string;
  /**
   * Period of estimation, can be `current_quarter`, `next_quarter`, `current_year`, or `next_year`
   * @type {string}
   * @memberof GetEpsTrend200ResponseEpsTrendInner
   */
  period?: string;
  /**
   * Actual EPS estimation for the period
   * @type {number}
   * @memberof GetEpsTrend200ResponseEpsTrendInner
   */
  currentEstimate?: number;
  /**
   * EPS estimation value 7 days ago
   * @type {number}
   * @memberof GetEpsTrend200ResponseEpsTrendInner
   */
  _7daysAgo?: number;
  /**
   * EPS estimation value 30 days ago
   * @type {number}
   * @memberof GetEpsTrend200ResponseEpsTrendInner
   */
  _30daysAgo?: number;
  /**
   * EPS estimation value 60 days ago
   * @type {number}
   * @memberof GetEpsTrend200ResponseEpsTrendInner
   */
  _60daysAgo?: number;
  /**
   * EPS estimation value 90 days ago
   * @type {number}
   * @memberof GetEpsTrend200ResponseEpsTrendInner
   */
  _90daysAgo?: number;
}

/**
 * Check if a given object implements the GetEpsTrend200ResponseEpsTrendInner interface.
 */
export function instanceOfGetEpsTrend200ResponseEpsTrendInner(
  value: object,
): value is GetEpsTrend200ResponseEpsTrendInner {
  return true;
}

export function GetEpsTrend200ResponseEpsTrendInnerFromJSON(
  json: any,
): GetEpsTrend200ResponseEpsTrendInner {
  return GetEpsTrend200ResponseEpsTrendInnerFromJSONTyped(json, false);
}

export function GetEpsTrend200ResponseEpsTrendInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetEpsTrend200ResponseEpsTrendInner {
  if (json == null) {
    return json;
  }
  return {
    date: json["date"] == null ? undefined : json["date"],
    period: json["period"] == null ? undefined : json["period"],
    currentEstimate:
      json["current_estimate"] == null ? undefined : json["current_estimate"],
    _7daysAgo: json["7_days_ago"] == null ? undefined : json["7_days_ago"],
    _30daysAgo: json["30_days_ago"] == null ? undefined : json["30_days_ago"],
    _60daysAgo: json["60_days_ago"] == null ? undefined : json["60_days_ago"],
    _90daysAgo: json["90_days_ago"] == null ? undefined : json["90_days_ago"],
  };
}

export function GetEpsTrend200ResponseEpsTrendInnerToJSON(
  json: any,
): GetEpsTrend200ResponseEpsTrendInner {
  return GetEpsTrend200ResponseEpsTrendInnerToJSONTyped(json, false);
}

export function GetEpsTrend200ResponseEpsTrendInnerToJSONTyped(
  value?: GetEpsTrend200ResponseEpsTrendInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    date: value["date"],
    period: value["period"],
    current_estimate: value["currentEstimate"],
    "7_days_ago": value["_7daysAgo"],
    "30_days_ago": value["_30daysAgo"],
    "60_days_ago": value["_60daysAgo"],
    "90_days_ago": value["_90daysAgo"],
  };
}

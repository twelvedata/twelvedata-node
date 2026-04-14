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
 * @interface GetEpsRevisions200ResponseEpsRevisionInner
 */
export interface GetEpsRevisions200ResponseEpsRevisionInner {
  /**
   * Date of the EPS estimate
   * @type {string}
   * @memberof GetEpsRevisions200ResponseEpsRevisionInner
   */
  date?: string;
  /**
   * Period of estimation, can be `current_quarter`, `next_quarter`, `current_year`, or `next_year`
   * @type {string}
   * @memberof GetEpsRevisions200ResponseEpsRevisionInner
   */
  period?: string;
  /**
   * Number of up revisions over the last 7 days
   * @type {number}
   * @memberof GetEpsRevisions200ResponseEpsRevisionInner
   */
  upLastWeek?: number;
  /**
   * Number of up revisions over the last 30 days
   * @type {number}
   * @memberof GetEpsRevisions200ResponseEpsRevisionInner
   */
  upLastMonth?: number;
  /**
   * Number of down revisions over the last 7 days
   * @type {number}
   * @memberof GetEpsRevisions200ResponseEpsRevisionInner
   */
  downLastWeek?: number;
  /**
   * Number of down revisions over the last 30 days
   * @type {number}
   * @memberof GetEpsRevisions200ResponseEpsRevisionInner
   */
  downLastMonth?: number;
}

/**
 * Check if a given object implements the GetEpsRevisions200ResponseEpsRevisionInner interface.
 */
export function instanceOfGetEpsRevisions200ResponseEpsRevisionInner(
  value: object,
): value is GetEpsRevisions200ResponseEpsRevisionInner {
  return true;
}

export function GetEpsRevisions200ResponseEpsRevisionInnerFromJSON(
  json: any,
): GetEpsRevisions200ResponseEpsRevisionInner {
  return GetEpsRevisions200ResponseEpsRevisionInnerFromJSONTyped(json, false);
}

export function GetEpsRevisions200ResponseEpsRevisionInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetEpsRevisions200ResponseEpsRevisionInner {
  if (json == null) {
    return json;
  }
  return {
    date: json["date"] == null ? undefined : json["date"],
    period: json["period"] == null ? undefined : json["period"],
    upLastWeek: json["up_last_week"] == null ? undefined : json["up_last_week"],
    upLastMonth:
      json["up_last_month"] == null ? undefined : json["up_last_month"],
    downLastWeek:
      json["down_last_week"] == null ? undefined : json["down_last_week"],
    downLastMonth:
      json["down_last_month"] == null ? undefined : json["down_last_month"],
  };
}

export function GetEpsRevisions200ResponseEpsRevisionInnerToJSON(
  json: any,
): GetEpsRevisions200ResponseEpsRevisionInner {
  return GetEpsRevisions200ResponseEpsRevisionInnerToJSONTyped(json, false);
}

export function GetEpsRevisions200ResponseEpsRevisionInnerToJSONTyped(
  value?: GetEpsRevisions200ResponseEpsRevisionInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    date: value["date"],
    period: value["period"],
    up_last_week: value["upLastWeek"],
    up_last_month: value["upLastMonth"],
    down_last_week: value["downLastWeek"],
    down_last_month: value["downLastMonth"],
  };
}

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
 * @interface GetApiUsage200Response
 */
export interface GetApiUsage200Response {
  /**
   * Current timestamp in UTC timezone
   * @type {string}
   * @memberof GetApiUsage200Response
   */
  timestamp?: string;
  /**
   * Number of requests made in last minute
   * @type {number}
   * @memberof GetApiUsage200Response
   */
  currentUsage?: number;
  /**
   * Your personal API limit (requests/minute) depending on the plan
   * @type {number}
   * @memberof GetApiUsage200Response
   */
  planLimit?: number;
  /**
   * Plan category name
   * @type {string}
   * @memberof GetApiUsage200Response
   */
  planCategory?: string;
}

/**
 * Check if a given object implements the GetApiUsage200Response interface.
 */
export function instanceOfGetApiUsage200Response(
  value: object,
): value is GetApiUsage200Response {
  return true;
}

export function GetApiUsage200ResponseFromJSON(
  json: any,
): GetApiUsage200Response {
  return GetApiUsage200ResponseFromJSONTyped(json, false);
}

export function GetApiUsage200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetApiUsage200Response {
  if (json == null) {
    return json;
  }
  return {
    timestamp: json["timestamp"] == null ? undefined : json["timestamp"],
    currentUsage:
      json["current_usage"] == null ? undefined : json["current_usage"],
    planLimit: json["plan_limit"] == null ? undefined : json["plan_limit"],
    planCategory:
      json["plan_category"] == null ? undefined : json["plan_category"],
  };
}

export function GetApiUsage200ResponseToJSON(
  json: any,
): GetApiUsage200Response {
  return GetApiUsage200ResponseToJSONTyped(json, false);
}

export function GetApiUsage200ResponseToJSONTyped(
  value?: GetApiUsage200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    timestamp: value["timestamp"],
    current_usage: value["currentUsage"],
    plan_limit: value["planLimit"],
    plan_category: value["planCategory"],
  };
}

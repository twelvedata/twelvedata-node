/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetETFsWorldPerformance200ResponseEtfPerformance } from "./GetETFsWorldPerformance200ResponseEtfPerformance";
import {
  GetETFsWorldPerformance200ResponseEtfPerformanceFromJSON,
  GetETFsWorldPerformance200ResponseEtfPerformanceFromJSONTyped,
  GetETFsWorldPerformance200ResponseEtfPerformanceToJSON,
  GetETFsWorldPerformance200ResponseEtfPerformanceToJSONTyped,
} from "./GetETFsWorldPerformance200ResponseEtfPerformance";

/**
 * Etf information
 * @export
 * @interface GetETFsWorldPerformance200ResponseEtf
 */
export interface GetETFsWorldPerformance200ResponseEtf {
  /**
   *
   * @type {GetETFsWorldPerformance200ResponseEtfPerformance}
   * @memberof GetETFsWorldPerformance200ResponseEtf
   */
  performance?: GetETFsWorldPerformance200ResponseEtfPerformance;
}

/**
 * Check if a given object implements the GetETFsWorldPerformance200ResponseEtf interface.
 */
export function instanceOfGetETFsWorldPerformance200ResponseEtf(
  value: object,
): value is GetETFsWorldPerformance200ResponseEtf {
  return true;
}

export function GetETFsWorldPerformance200ResponseEtfFromJSON(
  json: any,
): GetETFsWorldPerformance200ResponseEtf {
  return GetETFsWorldPerformance200ResponseEtfFromJSONTyped(json, false);
}

export function GetETFsWorldPerformance200ResponseEtfFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorldPerformance200ResponseEtf {
  if (json == null) {
    return json;
  }
  return {
    performance:
      json["performance"] == null
        ? undefined
        : GetETFsWorldPerformance200ResponseEtfPerformanceFromJSON(
            json["performance"],
          ),
  };
}

export function GetETFsWorldPerformance200ResponseEtfToJSON(
  json: any,
): GetETFsWorldPerformance200ResponseEtf {
  return GetETFsWorldPerformance200ResponseEtfToJSONTyped(json, false);
}

export function GetETFsWorldPerformance200ResponseEtfToJSONTyped(
  value?: GetETFsWorldPerformance200ResponseEtf | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    performance: GetETFsWorldPerformance200ResponseEtfPerformanceToJSON(
      value["performance"],
    ),
  };
}

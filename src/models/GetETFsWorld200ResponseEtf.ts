/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetETFsWorld200ResponseEtfSummary } from "./GetETFsWorld200ResponseEtfSummary";
import {
  GetETFsWorld200ResponseEtfSummaryFromJSON,
  GetETFsWorld200ResponseEtfSummaryFromJSONTyped,
  GetETFsWorld200ResponseEtfSummaryToJSON,
  GetETFsWorld200ResponseEtfSummaryToJSONTyped,
} from "./GetETFsWorld200ResponseEtfSummary";
import type { GetETFsWorld200ResponseEtfComposition } from "./GetETFsWorld200ResponseEtfComposition";
import {
  GetETFsWorld200ResponseEtfCompositionFromJSON,
  GetETFsWorld200ResponseEtfCompositionFromJSONTyped,
  GetETFsWorld200ResponseEtfCompositionToJSON,
  GetETFsWorld200ResponseEtfCompositionToJSONTyped,
} from "./GetETFsWorld200ResponseEtfComposition";
import type { GetETFsWorld200ResponseEtfPerformance } from "./GetETFsWorld200ResponseEtfPerformance";
import {
  GetETFsWorld200ResponseEtfPerformanceFromJSON,
  GetETFsWorld200ResponseEtfPerformanceFromJSONTyped,
  GetETFsWorld200ResponseEtfPerformanceToJSON,
  GetETFsWorld200ResponseEtfPerformanceToJSONTyped,
} from "./GetETFsWorld200ResponseEtfPerformance";
import type { GetETFsWorld200ResponseEtfRisk } from "./GetETFsWorld200ResponseEtfRisk";
import {
  GetETFsWorld200ResponseEtfRiskFromJSON,
  GetETFsWorld200ResponseEtfRiskFromJSONTyped,
  GetETFsWorld200ResponseEtfRiskToJSON,
  GetETFsWorld200ResponseEtfRiskToJSONTyped,
} from "./GetETFsWorld200ResponseEtfRisk";

/**
 * Etf information
 * @export
 * @interface GetETFsWorld200ResponseEtf
 */
export interface GetETFsWorld200ResponseEtf {
  /**
   *
   * @type {GetETFsWorld200ResponseEtfSummary}
   * @memberof GetETFsWorld200ResponseEtf
   */
  summary?: GetETFsWorld200ResponseEtfSummary;
  /**
   *
   * @type {GetETFsWorld200ResponseEtfPerformance}
   * @memberof GetETFsWorld200ResponseEtf
   */
  performance?: GetETFsWorld200ResponseEtfPerformance;
  /**
   *
   * @type {GetETFsWorld200ResponseEtfRisk}
   * @memberof GetETFsWorld200ResponseEtf
   */
  risk?: GetETFsWorld200ResponseEtfRisk;
  /**
   *
   * @type {GetETFsWorld200ResponseEtfComposition}
   * @memberof GetETFsWorld200ResponseEtf
   */
  composition?: GetETFsWorld200ResponseEtfComposition;
}

/**
 * Check if a given object implements the GetETFsWorld200ResponseEtf interface.
 */
export function instanceOfGetETFsWorld200ResponseEtf(
  value: object,
): value is GetETFsWorld200ResponseEtf {
  return true;
}

export function GetETFsWorld200ResponseEtfFromJSON(
  json: any,
): GetETFsWorld200ResponseEtf {
  return GetETFsWorld200ResponseEtfFromJSONTyped(json, false);
}

export function GetETFsWorld200ResponseEtfFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorld200ResponseEtf {
  if (json == null) {
    return json;
  }
  return {
    summary:
      json["summary"] == null
        ? undefined
        : GetETFsWorld200ResponseEtfSummaryFromJSON(json["summary"]),
    performance:
      json["performance"] == null
        ? undefined
        : GetETFsWorld200ResponseEtfPerformanceFromJSON(json["performance"]),
    risk:
      json["risk"] == null
        ? undefined
        : GetETFsWorld200ResponseEtfRiskFromJSON(json["risk"]),
    composition:
      json["composition"] == null
        ? undefined
        : GetETFsWorld200ResponseEtfCompositionFromJSON(json["composition"]),
  };
}

export function GetETFsWorld200ResponseEtfToJSON(
  json: any,
): GetETFsWorld200ResponseEtf {
  return GetETFsWorld200ResponseEtfToJSONTyped(json, false);
}

export function GetETFsWorld200ResponseEtfToJSONTyped(
  value?: GetETFsWorld200ResponseEtf | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    summary: GetETFsWorld200ResponseEtfSummaryToJSON(value["summary"]),
    performance: GetETFsWorld200ResponseEtfPerformanceToJSON(
      value["performance"],
    ),
    risk: GetETFsWorld200ResponseEtfRiskToJSON(value["risk"]),
    composition: GetETFsWorld200ResponseEtfCompositionToJSON(
      value["composition"],
    ),
  };
}

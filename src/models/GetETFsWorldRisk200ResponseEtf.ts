/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetETFsWorldRisk200ResponseEtfRisk } from "./GetETFsWorldRisk200ResponseEtfRisk";
import {
  GetETFsWorldRisk200ResponseEtfRiskFromJSON,
  GetETFsWorldRisk200ResponseEtfRiskFromJSONTyped,
  GetETFsWorldRisk200ResponseEtfRiskToJSON,
  GetETFsWorldRisk200ResponseEtfRiskToJSONTyped,
} from "./GetETFsWorldRisk200ResponseEtfRisk";

/**
 * Etf information
 * @export
 * @interface GetETFsWorldRisk200ResponseEtf
 */
export interface GetETFsWorldRisk200ResponseEtf {
  /**
   *
   * @type {GetETFsWorldRisk200ResponseEtfRisk}
   * @memberof GetETFsWorldRisk200ResponseEtf
   */
  risk?: GetETFsWorldRisk200ResponseEtfRisk;
}

/**
 * Check if a given object implements the GetETFsWorldRisk200ResponseEtf interface.
 */
export function instanceOfGetETFsWorldRisk200ResponseEtf(
  value: object,
): value is GetETFsWorldRisk200ResponseEtf {
  return true;
}

export function GetETFsWorldRisk200ResponseEtfFromJSON(
  json: any,
): GetETFsWorldRisk200ResponseEtf {
  return GetETFsWorldRisk200ResponseEtfFromJSONTyped(json, false);
}

export function GetETFsWorldRisk200ResponseEtfFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorldRisk200ResponseEtf {
  if (json == null) {
    return json;
  }
  return {
    risk:
      json["risk"] == null
        ? undefined
        : GetETFsWorldRisk200ResponseEtfRiskFromJSON(json["risk"]),
  };
}

export function GetETFsWorldRisk200ResponseEtfToJSON(
  json: any,
): GetETFsWorldRisk200ResponseEtf {
  return GetETFsWorldRisk200ResponseEtfToJSONTyped(json, false);
}

export function GetETFsWorldRisk200ResponseEtfToJSONTyped(
  value?: GetETFsWorldRisk200ResponseEtf | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    risk: GetETFsWorldRisk200ResponseEtfRiskToJSON(value["risk"]),
  };
}

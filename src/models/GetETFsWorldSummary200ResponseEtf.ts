/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetETFsWorldSummary200ResponseEtfSummary } from "./GetETFsWorldSummary200ResponseEtfSummary";
import {
  GetETFsWorldSummary200ResponseEtfSummaryFromJSON,
  GetETFsWorldSummary200ResponseEtfSummaryFromJSONTyped,
  GetETFsWorldSummary200ResponseEtfSummaryToJSON,
  GetETFsWorldSummary200ResponseEtfSummaryToJSONTyped,
} from "./GetETFsWorldSummary200ResponseEtfSummary";

/**
 * Etf information
 * @export
 * @interface GetETFsWorldSummary200ResponseEtf
 */
export interface GetETFsWorldSummary200ResponseEtf {
  /**
   *
   * @type {GetETFsWorldSummary200ResponseEtfSummary}
   * @memberof GetETFsWorldSummary200ResponseEtf
   */
  summary?: GetETFsWorldSummary200ResponseEtfSummary;
}

/**
 * Check if a given object implements the GetETFsWorldSummary200ResponseEtf interface.
 */
export function instanceOfGetETFsWorldSummary200ResponseEtf(
  value: object,
): value is GetETFsWorldSummary200ResponseEtf {
  return true;
}

export function GetETFsWorldSummary200ResponseEtfFromJSON(
  json: any,
): GetETFsWorldSummary200ResponseEtf {
  return GetETFsWorldSummary200ResponseEtfFromJSONTyped(json, false);
}

export function GetETFsWorldSummary200ResponseEtfFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorldSummary200ResponseEtf {
  if (json == null) {
    return json;
  }
  return {
    summary:
      json["summary"] == null
        ? undefined
        : GetETFsWorldSummary200ResponseEtfSummaryFromJSON(json["summary"]),
  };
}

export function GetETFsWorldSummary200ResponseEtfToJSON(
  json: any,
): GetETFsWorldSummary200ResponseEtf {
  return GetETFsWorldSummary200ResponseEtfToJSONTyped(json, false);
}

export function GetETFsWorldSummary200ResponseEtfToJSONTyped(
  value?: GetETFsWorldSummary200ResponseEtf | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    summary: GetETFsWorldSummary200ResponseEtfSummaryToJSON(value["summary"]),
  };
}

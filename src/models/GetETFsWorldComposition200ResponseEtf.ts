/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetETFsWorldComposition200ResponseEtfComposition } from "./GetETFsWorldComposition200ResponseEtfComposition";
import {
  GetETFsWorldComposition200ResponseEtfCompositionFromJSON,
  GetETFsWorldComposition200ResponseEtfCompositionFromJSONTyped,
  GetETFsWorldComposition200ResponseEtfCompositionToJSON,
  GetETFsWorldComposition200ResponseEtfCompositionToJSONTyped,
} from "./GetETFsWorldComposition200ResponseEtfComposition";

/**
 * Etf information
 * @export
 * @interface GetETFsWorldComposition200ResponseEtf
 */
export interface GetETFsWorldComposition200ResponseEtf {
  /**
   *
   * @type {GetETFsWorldComposition200ResponseEtfComposition}
   * @memberof GetETFsWorldComposition200ResponseEtf
   */
  composition?: GetETFsWorldComposition200ResponseEtfComposition;
}

/**
 * Check if a given object implements the GetETFsWorldComposition200ResponseEtf interface.
 */
export function instanceOfGetETFsWorldComposition200ResponseEtf(
  value: object,
): value is GetETFsWorldComposition200ResponseEtf {
  return true;
}

export function GetETFsWorldComposition200ResponseEtfFromJSON(
  json: any,
): GetETFsWorldComposition200ResponseEtf {
  return GetETFsWorldComposition200ResponseEtfFromJSONTyped(json, false);
}

export function GetETFsWorldComposition200ResponseEtfFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorldComposition200ResponseEtf {
  if (json == null) {
    return json;
  }
  return {
    composition:
      json["composition"] == null
        ? undefined
        : GetETFsWorldComposition200ResponseEtfCompositionFromJSON(
            json["composition"],
          ),
  };
}

export function GetETFsWorldComposition200ResponseEtfToJSON(
  json: any,
): GetETFsWorldComposition200ResponseEtf {
  return GetETFsWorldComposition200ResponseEtfToJSONTyped(json, false);
}

export function GetETFsWorldComposition200ResponseEtfToJSONTyped(
  value?: GetETFsWorldComposition200ResponseEtf | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    composition: GetETFsWorldComposition200ResponseEtfCompositionToJSON(
      value["composition"],
    ),
  };
}

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { PressRelease } from "./PressRelease";
import {
  PressReleaseFromJSON,
  PressReleaseFromJSONTyped,
  PressReleaseToJSON,
  PressReleaseToJSONTyped,
} from "./PressRelease";

/**
 *
 * @export
 * @interface PressReleasesListParameters200Response
 */
export interface PressReleasesListParameters200Response {
  /**
   * List of press releases
   * @type {Array<PressRelease>}
   * @memberof PressReleasesListParameters200Response
   */
  pressReleases?: Array<PressRelease>;
  /**
   * Response status
   * @type {string}
   * @memberof PressReleasesListParameters200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the PressReleasesListParameters200Response interface.
 */
export function instanceOfPressReleasesListParameters200Response(
  value: object,
): value is PressReleasesListParameters200Response {
  return true;
}

export function PressReleasesListParameters200ResponseFromJSON(
  json: any,
): PressReleasesListParameters200Response {
  return PressReleasesListParameters200ResponseFromJSONTyped(json, false);
}

export function PressReleasesListParameters200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PressReleasesListParameters200Response {
  if (json == null) {
    return json;
  }
  return {
    pressReleases:
      json["press_releases"] == null
        ? undefined
        : (json["press_releases"] as Array<any>).map(PressReleaseFromJSON),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function PressReleasesListParameters200ResponseToJSON(
  json: any,
): PressReleasesListParameters200Response {
  return PressReleasesListParameters200ResponseToJSONTyped(json, false);
}

export function PressReleasesListParameters200ResponseToJSONTyped(
  value?: PressReleasesListParameters200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    press_releases:
      value["pressReleases"] == null
        ? undefined
        : (value["pressReleases"] as Array<any>).map(PressReleaseToJSON),
    status: value["status"],
  };
}

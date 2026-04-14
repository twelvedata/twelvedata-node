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
 * @interface PressRelease
 */
export interface PressRelease {
  /**
   * Press release unique identifier
   * @type {string}
   * @memberof PressRelease
   */
  id?: string;
  /**
   * Press release date in ISO 8601 format
   * @type {string}
   * @memberof PressRelease
   */
  datetime?: string;
  /**
   * Press release title
   * @type {string}
   * @memberof PressRelease
   */
  title?: string;
  /**
   * Press release body in html format
   * @type {string}
   * @memberof PressRelease
   */
  body?: string;
  /**
   * Custom style applied to the release
   * @type {string}
   * @memberof PressRelease
   */
  style?: string;
  /**
   * Press release language codes
   * @type {Array<string>}
   * @memberof PressRelease
   */
  language?: Array<string>;
}

/**
 * Check if a given object implements the PressRelease interface.
 */
export function instanceOfPressRelease(value: object): value is PressRelease {
  return true;
}

export function PressReleaseFromJSON(json: any): PressRelease {
  return PressReleaseFromJSONTyped(json, false);
}

export function PressReleaseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PressRelease {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"] == null ? undefined : json["id"],
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    title: json["title"] == null ? undefined : json["title"],
    body: json["body"] == null ? undefined : json["body"],
    style: json["style"] == null ? undefined : json["style"],
    language: json["language"] == null ? undefined : json["language"],
  };
}

export function PressReleaseToJSON(json: any): PressRelease {
  return PressReleaseToJSONTyped(json, false);
}

export function PressReleaseToJSONTyped(
  value?: PressRelease | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    id: value["id"],
    datetime: value["datetime"],
    title: value["title"],
    body: value["body"],
    style: value["style"],
    language: value["language"],
  };
}

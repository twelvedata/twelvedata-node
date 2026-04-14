/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Filing file object
 * @export
 * @interface EdgarFilingFile
 */
export interface EdgarFilingFile {
  /**
   * File name
   * @type {string}
   * @memberof EdgarFilingFile
   */
  name?: string;
  /**
   * File size
   * @type {number}
   * @memberof EdgarFilingFile
   */
  size?: number;
  /**
   * File type
   * @type {string}
   * @memberof EdgarFilingFile
   */
  type?: string;
  /**
   * File full url
   * @type {string}
   * @memberof EdgarFilingFile
   */
  url?: string;
}

/**
 * Check if a given object implements the EdgarFilingFile interface.
 */
export function instanceOfEdgarFilingFile(
  value: object,
): value is EdgarFilingFile {
  return true;
}

export function EdgarFilingFileFromJSON(json: any): EdgarFilingFile {
  return EdgarFilingFileFromJSONTyped(json, false);
}

export function EdgarFilingFileFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): EdgarFilingFile {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    size: json["size"] == null ? undefined : json["size"],
    type: json["type"] == null ? undefined : json["type"],
    url: json["url"] == null ? undefined : json["url"],
  };
}

export function EdgarFilingFileToJSON(json: any): EdgarFilingFile {
  return EdgarFilingFileToJSONTyped(json, false);
}

export function EdgarFilingFileToJSONTyped(
  value?: EdgarFilingFile | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    size: value["size"],
    type: value["type"],
    url: value["url"],
  };
}

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { EdgarFilingFile } from "./EdgarFilingFile";
import {
  EdgarFilingFileFromJSON,
  EdgarFilingFileFromJSONTyped,
  EdgarFilingFileToJSON,
  EdgarFilingFileToJSONTyped,
} from "./EdgarFilingFile";

/**
 * Filing value object
 * @export
 * @interface EdgarFilingValue
 */
export interface EdgarFilingValue {
  /**
   * CIK code
   * @type {number}
   * @memberof EdgarFilingValue
   */
  cik?: number;
  /**
   * Filing date in UNIX timestamp
   * @type {number}
   * @memberof EdgarFilingValue
   */
  filedAt?: number;
  /**
   * Filing files
   * @type {Array<EdgarFilingFile>}
   * @memberof EdgarFilingValue
   */
  files?: Array<EdgarFilingFile>;
  /**
   * Full URL of the filing
   * @type {string}
   * @memberof EdgarFilingValue
   */
  filingUrl?: string;
  /**
   * Filing form type
   * @type {string}
   * @memberof EdgarFilingValue
   */
  formType?: string;
  /**
   * Ticker symbols associated with the filing
   * @type {Array<string>}
   * @memberof EdgarFilingValue
   */
  ticker?: Array<string>;
}

/**
 * Check if a given object implements the EdgarFilingValue interface.
 */
export function instanceOfEdgarFilingValue(
  value: object,
): value is EdgarFilingValue {
  return true;
}

export function EdgarFilingValueFromJSON(json: any): EdgarFilingValue {
  return EdgarFilingValueFromJSONTyped(json, false);
}

export function EdgarFilingValueFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): EdgarFilingValue {
  if (json == null) {
    return json;
  }
  return {
    cik: json["cik"] == null ? undefined : json["cik"],
    filedAt: json["filed_at"] == null ? undefined : json["filed_at"],
    files:
      json["files"] == null
        ? undefined
        : (json["files"] as Array<any>).map(EdgarFilingFileFromJSON),
    filingUrl: json["filing_url"] == null ? undefined : json["filing_url"],
    formType: json["form_type"] == null ? undefined : json["form_type"],
    ticker: json["ticker"] == null ? undefined : json["ticker"],
  };
}

export function EdgarFilingValueToJSON(json: any): EdgarFilingValue {
  return EdgarFilingValueToJSONTyped(json, false);
}

export function EdgarFilingValueToJSONTyped(
  value?: EdgarFilingValue | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    cik: value["cik"],
    filed_at: value["filedAt"],
    files:
      value["files"] == null
        ? undefined
        : (value["files"] as Array<any>).map(EdgarFilingFileToJSON),
    filing_url: value["filingUrl"],
    form_type: value["formType"],
    ticker: value["ticker"],
  };
}

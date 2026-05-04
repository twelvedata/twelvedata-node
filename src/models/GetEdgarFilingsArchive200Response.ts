/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetEdgarFilingsArchive200ResponseMeta } from "./GetEdgarFilingsArchive200ResponseMeta";
import {
  GetEdgarFilingsArchive200ResponseMetaFromJSON,
  GetEdgarFilingsArchive200ResponseMetaFromJSONTyped,
  GetEdgarFilingsArchive200ResponseMetaToJSON,
  GetEdgarFilingsArchive200ResponseMetaToJSONTyped,
} from "./GetEdgarFilingsArchive200ResponseMeta";
import type { EdgarFilingValue } from "./EdgarFilingValue";
import {
  EdgarFilingValueFromJSON,
  EdgarFilingValueFromJSONTyped,
  EdgarFilingValueToJSON,
  EdgarFilingValueToJSONTyped,
} from "./EdgarFilingValue";

/**
 *
 * @export
 * @interface GetEdgarFilingsArchive200Response
 */
export interface GetEdgarFilingsArchive200Response {
  /**
   *
   * @type {GetEdgarFilingsArchive200ResponseMeta}
   * @memberof GetEdgarFilingsArchive200Response
   */
  meta: GetEdgarFilingsArchive200ResponseMeta;
  /**
   * List of filings
   * @type {Array<EdgarFilingValue>}
   * @memberof GetEdgarFilingsArchive200Response
   */
  values: Array<EdgarFilingValue>;
}

/**
 * Check if a given object implements the GetEdgarFilingsArchive200Response interface.
 */
export function instanceOfGetEdgarFilingsArchive200Response(
  value: object,
): value is GetEdgarFilingsArchive200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  return true;
}

export function GetEdgarFilingsArchive200ResponseFromJSON(
  json: any,
): GetEdgarFilingsArchive200Response {
  return GetEdgarFilingsArchive200ResponseFromJSONTyped(json, false);
}

export function GetEdgarFilingsArchive200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetEdgarFilingsArchive200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetEdgarFilingsArchive200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(EdgarFilingValueFromJSON),
  };
}

export function GetEdgarFilingsArchive200ResponseToJSON(
  json: any,
): GetEdgarFilingsArchive200Response {
  return GetEdgarFilingsArchive200ResponseToJSONTyped(json, false);
}

export function GetEdgarFilingsArchive200ResponseToJSONTyped(
  value?: GetEdgarFilingsArchive200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetEdgarFilingsArchive200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(EdgarFilingValueToJSON),
  };
}

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTaxInfo200ResponseMeta } from "./GetTaxInfo200ResponseMeta";
import {
  GetTaxInfo200ResponseMetaFromJSON,
  GetTaxInfo200ResponseMetaFromJSONTyped,
  GetTaxInfo200ResponseMetaToJSON,
  GetTaxInfo200ResponseMetaToJSONTyped,
} from "./GetTaxInfo200ResponseMeta";
import type { GetTaxInfo200ResponseData } from "./GetTaxInfo200ResponseData";
import {
  GetTaxInfo200ResponseDataFromJSON,
  GetTaxInfo200ResponseDataFromJSONTyped,
  GetTaxInfo200ResponseDataToJSON,
  GetTaxInfo200ResponseDataToJSONTyped,
} from "./GetTaxInfo200ResponseData";

/**
 *
 * @export
 * @interface GetTaxInfo200Response
 */
export interface GetTaxInfo200Response {
  /**
   *
   * @type {GetTaxInfo200ResponseMeta}
   * @memberof GetTaxInfo200Response
   */
  meta: GetTaxInfo200ResponseMeta;
  /**
   *
   * @type {GetTaxInfo200ResponseData}
   * @memberof GetTaxInfo200Response
   */
  data: GetTaxInfo200ResponseData;
  /**
   * The status of the request, e.g., `ok`, `error`
   * @type {string}
   * @memberof GetTaxInfo200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTaxInfo200Response interface.
 */
export function instanceOfGetTaxInfo200Response(
  value: object,
): value is GetTaxInfo200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTaxInfo200ResponseFromJSON(
  json: any,
): GetTaxInfo200Response {
  return GetTaxInfo200ResponseFromJSONTyped(json, false);
}

export function GetTaxInfo200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTaxInfo200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTaxInfo200ResponseMetaFromJSON(json["meta"]),
    data: GetTaxInfo200ResponseDataFromJSON(json["data"]),
    status: json["status"],
  };
}

export function GetTaxInfo200ResponseToJSON(json: any): GetTaxInfo200Response {
  return GetTaxInfo200ResponseToJSONTyped(json, false);
}

export function GetTaxInfo200ResponseToJSONTyped(
  value?: GetTaxInfo200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTaxInfo200ResponseMetaToJSON(value["meta"]),
    data: GetTaxInfo200ResponseDataToJSON(value["data"]),
    status: value["status"],
  };
}

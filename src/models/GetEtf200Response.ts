/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { EtfResponseItem } from "./EtfResponseItem";
import {
  EtfResponseItemFromJSON,
  EtfResponseItemFromJSONTyped,
  EtfResponseItemToJSON,
  EtfResponseItemToJSONTyped,
} from "./EtfResponseItem";

/**
 *
 * @export
 * @interface GetEtf200Response
 */
export interface GetEtf200Response {
  /**
   * Count
   * @type {number}
   * @memberof GetEtf200Response
   */
  count: number;
  /**
   * List of ETFs
   * @type {Array<EtfResponseItem>}
   * @memberof GetEtf200Response
   */
  data: Array<EtfResponseItem>;
  /**
   * Response status
   * @type {string}
   * @memberof GetEtf200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetEtf200Response interface.
 */
export function instanceOfGetEtf200Response(
  value: object,
): value is GetEtf200Response {
  if (!("count" in value) || value["count"] === undefined) return false;
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetEtf200ResponseFromJSON(json: any): GetEtf200Response {
  return GetEtf200ResponseFromJSONTyped(json, false);
}

export function GetEtf200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetEtf200Response {
  if (json == null) {
    return json;
  }
  return {
    count: json["count"],
    data: (json["data"] as Array<any>).map(EtfResponseItemFromJSON),
    status: json["status"],
  };
}

export function GetEtf200ResponseToJSON(json: any): GetEtf200Response {
  return GetEtf200ResponseToJSONTyped(json, false);
}

export function GetEtf200ResponseToJSONTyped(
  value?: GetEtf200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    count: value["count"],
    data: (value["data"] as Array<any>).map(EtfResponseItemToJSON),
    status: value["status"],
  };
}

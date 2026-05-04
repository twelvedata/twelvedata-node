/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { CommoditiesResponseItem } from "./CommoditiesResponseItem";
import {
  CommoditiesResponseItemFromJSON,
  CommoditiesResponseItemFromJSONTyped,
  CommoditiesResponseItemToJSON,
  CommoditiesResponseItemToJSONTyped,
} from "./CommoditiesResponseItem";

/**
 *
 * @export
 * @interface GetCommodities200Response
 */
export interface GetCommodities200Response {
  /**
   * Count
   * @type {number}
   * @memberof GetCommodities200Response
   */
  count: number;
  /**
   * List of commodities
   * @type {Array<CommoditiesResponseItem>}
   * @memberof GetCommodities200Response
   */
  data: Array<CommoditiesResponseItem>;
  /**
   * Response status
   * @type {string}
   * @memberof GetCommodities200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetCommodities200Response interface.
 */
export function instanceOfGetCommodities200Response(
  value: object,
): value is GetCommodities200Response {
  if (!("count" in value) || value["count"] === undefined) return false;
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetCommodities200ResponseFromJSON(
  json: any,
): GetCommodities200Response {
  return GetCommodities200ResponseFromJSONTyped(json, false);
}

export function GetCommodities200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetCommodities200Response {
  if (json == null) {
    return json;
  }
  return {
    count: json["count"],
    data: (json["data"] as Array<any>).map(CommoditiesResponseItemFromJSON),
    status: json["status"],
  };
}

export function GetCommodities200ResponseToJSON(
  json: any,
): GetCommodities200Response {
  return GetCommodities200ResponseToJSONTyped(json, false);
}

export function GetCommodities200ResponseToJSONTyped(
  value?: GetCommodities200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    count: value["count"],
    data: (value["data"] as Array<any>).map(CommoditiesResponseItemToJSON),
    status: value["status"],
  };
}

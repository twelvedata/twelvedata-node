/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { SymbolSearchResponseItem } from "./SymbolSearchResponseItem";
import {
  SymbolSearchResponseItemFromJSON,
  SymbolSearchResponseItemFromJSONTyped,
  SymbolSearchResponseItemToJSON,
  SymbolSearchResponseItemToJSONTyped,
} from "./SymbolSearchResponseItem";

/**
 *
 * @export
 * @interface GetSymbolSearch200Response
 */
export interface GetSymbolSearch200Response {
  /**
   * List of symbols matching the search criteria
   * @type {Array<SymbolSearchResponseItem>}
   * @memberof GetSymbolSearch200Response
   */
  data?: Array<SymbolSearchResponseItem>;
  /**
   * Status of the response
   * @type {string}
   * @memberof GetSymbolSearch200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetSymbolSearch200Response interface.
 */
export function instanceOfGetSymbolSearch200Response(
  value: object,
): value is GetSymbolSearch200Response {
  return true;
}

export function GetSymbolSearch200ResponseFromJSON(
  json: any,
): GetSymbolSearch200Response {
  return GetSymbolSearch200ResponseFromJSONTyped(json, false);
}

export function GetSymbolSearch200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetSymbolSearch200Response {
  if (json == null) {
    return json;
  }
  return {
    data:
      json["data"] == null
        ? undefined
        : (json["data"] as Array<any>).map(SymbolSearchResponseItemFromJSON),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetSymbolSearch200ResponseToJSON(
  json: any,
): GetSymbolSearch200Response {
  return GetSymbolSearch200ResponseToJSONTyped(json, false);
}

export function GetSymbolSearch200ResponseToJSONTyped(
  value?: GetSymbolSearch200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    data:
      value["data"] == null
        ? undefined
        : (value["data"] as Array<any>).map(SymbolSearchResponseItemToJSON),
    status: value["status"],
  };
}

/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { LastChangeResponseItem } from "./LastChangeResponseItem";
import {
  LastChangeResponseItemFromJSON,
  LastChangeResponseItemFromJSONTyped,
  LastChangeResponseItemToJSON,
  LastChangeResponseItemToJSONTyped,
} from "./LastChangeResponseItem";
import type { GetLastChanges200ResponsePagination } from "./GetLastChanges200ResponsePagination";
import {
  GetLastChanges200ResponsePaginationFromJSON,
  GetLastChanges200ResponsePaginationFromJSONTyped,
  GetLastChanges200ResponsePaginationToJSON,
  GetLastChanges200ResponsePaginationToJSONTyped,
} from "./GetLastChanges200ResponsePagination";

/**
 *
 * @export
 * @interface GetLastChanges200Response
 */
export interface GetLastChanges200Response {
  /**
   *
   * @type {GetLastChanges200ResponsePagination}
   * @memberof GetLastChanges200Response
   */
  pagination?: GetLastChanges200ResponsePagination;
  /**
   * Data contains the list of last changes
   * @type {Array<LastChangeResponseItem>}
   * @memberof GetLastChanges200Response
   */
  data?: Array<LastChangeResponseItem>;
}

/**
 * Check if a given object implements the GetLastChanges200Response interface.
 */
export function instanceOfGetLastChanges200Response(
  value: object,
): value is GetLastChanges200Response {
  return true;
}

export function GetLastChanges200ResponseFromJSON(
  json: any,
): GetLastChanges200Response {
  return GetLastChanges200ResponseFromJSONTyped(json, false);
}

export function GetLastChanges200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetLastChanges200Response {
  if (json == null) {
    return json;
  }
  return {
    pagination:
      json["pagination"] == null
        ? undefined
        : GetLastChanges200ResponsePaginationFromJSON(json["pagination"]),
    data:
      json["data"] == null
        ? undefined
        : (json["data"] as Array<any>).map(LastChangeResponseItemFromJSON),
  };
}

export function GetLastChanges200ResponseToJSON(
  json: any,
): GetLastChanges200Response {
  return GetLastChanges200ResponseToJSONTyped(json, false);
}

export function GetLastChanges200ResponseToJSONTyped(
  value?: GetLastChanges200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    pagination: GetLastChanges200ResponsePaginationToJSON(value["pagination"]),
    data:
      value["data"] == null
        ? undefined
        : (value["data"] as Array<any>).map(LastChangeResponseItemToJSON),
  };
}

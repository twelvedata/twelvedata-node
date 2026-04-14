/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Pagination information
 * @export
 * @interface GetLastChanges200ResponsePagination
 */
export interface GetLastChanges200ResponsePagination {
  /**
   * Current page number
   * @type {number}
   * @memberof GetLastChanges200ResponsePagination
   */
  currentPage?: number;
  /**
   * Records per page
   * @type {number}
   * @memberof GetLastChanges200ResponsePagination
   */
  perPage?: number;
}

/**
 * Check if a given object implements the GetLastChanges200ResponsePagination interface.
 */
export function instanceOfGetLastChanges200ResponsePagination(
  value: object,
): value is GetLastChanges200ResponsePagination {
  return true;
}

export function GetLastChanges200ResponsePaginationFromJSON(
  json: any,
): GetLastChanges200ResponsePagination {
  return GetLastChanges200ResponsePaginationFromJSONTyped(json, false);
}

export function GetLastChanges200ResponsePaginationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetLastChanges200ResponsePagination {
  if (json == null) {
    return json;
  }
  return {
    currentPage:
      json["current_page"] == null ? undefined : json["current_page"],
    perPage: json["per_page"] == null ? undefined : json["per_page"],
  };
}

export function GetLastChanges200ResponsePaginationToJSON(
  json: any,
): GetLastChanges200ResponsePagination {
  return GetLastChanges200ResponsePaginationToJSONTyped(json, false);
}

export function GetLastChanges200ResponsePaginationToJSONTyped(
  value?: GetLastChanges200ResponsePagination | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    current_page: value["currentPage"],
    per_page: value["perPage"],
  };
}

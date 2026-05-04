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
 * @interface ResponseSanctionItemList
 */
export interface ResponseSanctionItemList {
  /**
   * The sanction list name
   * @type {string}
   * @memberof ResponseSanctionItemList
   */
  name: string;
  /**
   * The sanction published date in the current sanctions list
   * @type {string}
   * @memberof ResponseSanctionItemList
   */
  publishedAt?: string;
}

/**
 * Check if a given object implements the ResponseSanctionItemList interface.
 */
export function instanceOfResponseSanctionItemList(
  value: object,
): value is ResponseSanctionItemList {
  if (!("name" in value) || value["name"] === undefined) return false;
  return true;
}

export function ResponseSanctionItemListFromJSON(
  json: any,
): ResponseSanctionItemList {
  return ResponseSanctionItemListFromJSONTyped(json, false);
}

export function ResponseSanctionItemListFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ResponseSanctionItemList {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    publishedAt:
      json["published_at"] == null ? undefined : json["published_at"],
  };
}

export function ResponseSanctionItemListToJSON(
  json: any,
): ResponseSanctionItemList {
  return ResponseSanctionItemListToJSONTyped(json, false);
}

export function ResponseSanctionItemListToJSONTyped(
  value?: ResponseSanctionItemList | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    published_at: value["publishedAt"],
  };
}

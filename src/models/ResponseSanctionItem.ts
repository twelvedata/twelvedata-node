/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { ResponseSanctionItemList } from "./ResponseSanctionItemList";
import {
  ResponseSanctionItemListFromJSON,
  ResponseSanctionItemListFromJSONTyped,
  ResponseSanctionItemListToJSON,
  ResponseSanctionItemListToJSONTyped,
} from "./ResponseSanctionItemList";

/**
 *
 * @export
 * @interface ResponseSanctionItem
 */
export interface ResponseSanctionItem {
  /**
   * The sanction source
   * @type {string}
   * @memberof ResponseSanctionItem
   */
  source: string;
  /**
   * The sanction program
   * @type {string}
   * @memberof ResponseSanctionItem
   */
  program: string;
  /**
   * Notes for the sanction
   * @type {string}
   * @memberof ResponseSanctionItem
   */
  notes: string;
  /**
   * Sanction lists
   * @type {Array<ResponseSanctionItemList>}
   * @memberof ResponseSanctionItem
   */
  lists: Array<ResponseSanctionItemList>;
}

/**
 * Check if a given object implements the ResponseSanctionItem interface.
 */
export function instanceOfResponseSanctionItem(
  value: object,
): value is ResponseSanctionItem {
  if (!("source" in value) || value["source"] === undefined) return false;
  if (!("program" in value) || value["program"] === undefined) return false;
  if (!("notes" in value) || value["notes"] === undefined) return false;
  if (!("lists" in value) || value["lists"] === undefined) return false;
  return true;
}

export function ResponseSanctionItemFromJSON(json: any): ResponseSanctionItem {
  return ResponseSanctionItemFromJSONTyped(json, false);
}

export function ResponseSanctionItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ResponseSanctionItem {
  if (json == null) {
    return json;
  }
  return {
    source: json["source"],
    program: json["program"],
    notes: json["notes"],
    lists: (json["lists"] as Array<any>).map(ResponseSanctionItemListFromJSON),
  };
}

export function ResponseSanctionItemToJSON(json: any): ResponseSanctionItem {
  return ResponseSanctionItemToJSONTyped(json, false);
}

export function ResponseSanctionItemToJSONTyped(
  value?: ResponseSanctionItem | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    source: value["source"],
    program: value["program"],
    notes: value["notes"],
    lists: (value["lists"] as Array<any>).map(ResponseSanctionItemListToJSON),
  };
}

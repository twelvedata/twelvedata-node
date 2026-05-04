/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { ResponseSanctionItem } from "./ResponseSanctionItem";
import {
  ResponseSanctionItemFromJSON,
  ResponseSanctionItemFromJSONTyped,
  ResponseSanctionItemToJSON,
  ResponseSanctionItemToJSONTyped,
} from "./ResponseSanctionItem";

/**
 *
 * @export
 * @interface ResponseSanctionedEntitiy
 */
export interface ResponseSanctionedEntitiy {
  /**
   * The instrument symbol ticker
   * @type {string}
   * @memberof ResponseSanctionedEntitiy
   */
  symbol: string;
  /**
   * The instrument name
   * @type {string}
   * @memberof ResponseSanctionedEntitiy
   */
  name: string;
  /**
   * Market Identifier Code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof ResponseSanctionedEntitiy
   */
  micCode: string;
  /**
   * Country name
   * @type {string}
   * @memberof ResponseSanctionedEntitiy
   */
  country: string;
  /**
   *
   * @type {ResponseSanctionItem}
   * @memberof ResponseSanctionedEntitiy
   */
  sanction: ResponseSanctionItem;
}

/**
 * Check if a given object implements the ResponseSanctionedEntitiy interface.
 */
export function instanceOfResponseSanctionedEntitiy(
  value: object,
): value is ResponseSanctionedEntitiy {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("micCode" in value) || value["micCode"] === undefined) return false;
  if (!("country" in value) || value["country"] === undefined) return false;
  if (!("sanction" in value) || value["sanction"] === undefined) return false;
  return true;
}

export function ResponseSanctionedEntitiyFromJSON(
  json: any,
): ResponseSanctionedEntitiy {
  return ResponseSanctionedEntitiyFromJSONTyped(json, false);
}

export function ResponseSanctionedEntitiyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ResponseSanctionedEntitiy {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"],
    name: json["name"],
    micCode: json["mic_code"],
    country: json["country"],
    sanction: ResponseSanctionItemFromJSON(json["sanction"]),
  };
}

export function ResponseSanctionedEntitiyToJSON(
  json: any,
): ResponseSanctionedEntitiy {
  return ResponseSanctionedEntitiyToJSONTyped(json, false);
}

export function ResponseSanctionedEntitiyToJSONTyped(
  value?: ResponseSanctionedEntitiy | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    name: value["name"],
    mic_code: value["micCode"],
    country: value["country"],
    sanction: ResponseSanctionItemToJSON(value["sanction"]),
  };
}

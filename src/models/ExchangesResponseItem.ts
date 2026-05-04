/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { ExchangesResponseItemAccess } from "./ExchangesResponseItemAccess";
import {
  ExchangesResponseItemAccessFromJSON,
  ExchangesResponseItemAccessFromJSONTyped,
  ExchangesResponseItemAccessToJSON,
  ExchangesResponseItemAccessToJSONTyped,
} from "./ExchangesResponseItemAccess";

/**
 * ExchangesResponseItem represents details of an exchange
 * @export
 * @interface ExchangesResponseItem
 */
export interface ExchangesResponseItem {
  /**
   * Title of exchange
   * @type {string}
   * @memberof ExchangesResponseItem
   */
  title: string;
  /**
   * Name of exchange
   * @type {string}
   * @memberof ExchangesResponseItem
   */
  name: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof ExchangesResponseItem
   */
  code: string;
  /**
   * Country to which stock exchange belongs to
   * @type {string}
   * @memberof ExchangesResponseItem
   */
  country: string;
  /**
   * Time zone where exchange is located
   * @type {string}
   * @memberof ExchangesResponseItem
   */
  timezone: string;
  /**
   *
   * @type {ExchangesResponseItemAccess}
   * @memberof ExchangesResponseItem
   */
  access?: ExchangesResponseItemAccess;
}

/**
 * Check if a given object implements the ExchangesResponseItem interface.
 */
export function instanceOfExchangesResponseItem(
  value: object,
): value is ExchangesResponseItem {
  if (!("title" in value) || value["title"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("code" in value) || value["code"] === undefined) return false;
  if (!("country" in value) || value["country"] === undefined) return false;
  if (!("timezone" in value) || value["timezone"] === undefined) return false;
  return true;
}

export function ExchangesResponseItemFromJSON(
  json: any,
): ExchangesResponseItem {
  return ExchangesResponseItemFromJSONTyped(json, false);
}

export function ExchangesResponseItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ExchangesResponseItem {
  if (json == null) {
    return json;
  }
  return {
    title: json["title"],
    name: json["name"],
    code: json["code"],
    country: json["country"],
    timezone: json["timezone"],
    access:
      json["access"] == null
        ? undefined
        : ExchangesResponseItemAccessFromJSON(json["access"]),
  };
}

export function ExchangesResponseItemToJSON(json: any): ExchangesResponseItem {
  return ExchangesResponseItemToJSONTyped(json, false);
}

export function ExchangesResponseItemToJSONTyped(
  value?: ExchangesResponseItem | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    title: value["title"],
    name: value["name"],
    code: value["code"],
    country: value["country"],
    timezone: value["timezone"],
    access: ExchangesResponseItemAccessToJSON(value["access"]),
  };
}
